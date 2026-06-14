/* ======================================
   STUDYHUB - QUIZ ENGINE
   Handles: Randomization, Timer, Scoring,
   Results, Review, Explanations
   ====================================== */

// Helper: safe HTML escape while preserving LaTeX delimiters, then run KaTeX auto-render
function _escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function safeRenderMathInto(element, raw) {
    element.innerHTML = '';
    const container = document.createElement('span');
    // escape HTML but keep $ and backslashes for LaTeX
    container.innerHTML = _escapeHtml(raw);
    element.appendChild(container);
    if (typeof renderMathInElement === 'function') {
        try {
            renderMathInElement(container, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        } catch (e) {
            // ignore render errors and leave escaped content
        }
    }
}

class QuizEngine {
    constructor() {
        this.questions = [];
        this.currentIndex = 0;
        this.answers = {};
        this.timer = null;
        this.timeRemaining = 0;
        this.totalTime = 0;

        this.setupEl = document.getElementById('quizSetup');
        this.interfaceEl = document.getElementById('quizInterface');
        this.resultsEl = document.getElementById('quizResults');

        this.startBtn = document.getElementById('startQuizBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.newQuizBtn = document.getElementById('newQuizBtn');

        this.questionText = document.getElementById('questionText');
        this.optionsGrid = document.getElementById('optionsGrid');
        this.progressFill = document.getElementById('progressFill');
        this.questionCounter = document.getElementById('questionCounter');
        this.timerDisplay = document.getElementById('quizTimer');

        this.bindEvents();
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.retakeBtn.addEventListener('click', () => this.retakeQuiz());
        this.newQuizBtn.addEventListener('click', () => this.resetQuiz());
    }

    startQuiz() {
        const course = document.getElementById('quizCourse').value;
        const count = parseInt(document.getElementById('quizCount').value);
        const duration = parseInt(document.getElementById('quizDuration').value);

        const bank = QuestionBanks[course];
        if (!bank || bank.length === 0) {
            alert('No questions available for the selected course. Please add questions in js/questions.js');
            return;
        }

        if (bank.length < count) {
            alert(`Only ${bank.length} questions available. Please select a lower number.`);
            return;
        }

        // Randomly select and shuffle questions
        const shuffled = [...bank].sort(() => Math.random() - 0.5);
        this.questions = shuffled.slice(0, count).map(q => {
            const options = [...q.options].sort(() => Math.random() - 0.5);
            return {
                ...q,
                options,
                correctIndex: options.indexOf(q.correctAnswer)
            };
        });

        this.currentIndex = 0;
        this.answers = {};
        this.totalTime = duration * 60;
        this.timeRemaining = this.totalTime;

        this.setupEl.classList.add('hidden');
        this.resultsEl.classList.add('hidden');
        this.interfaceEl.classList.remove('hidden');

        this.startTimer();
        this.renderQuestion();
        this.buildNavigator();        // <-- ADD THIS
        this.updateProgress();
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const m = Math.floor(this.timeRemaining / 60);
        const s = this.timeRemaining % 60;
        this.timerDisplay.textContent = `${m}:${s.toString().padStart(2, '0')}`;

        if (this.timeRemaining <= 60) {
            this.timerDisplay.classList.add('warning');
        } else {
            this.timerDisplay.classList.remove('warning');
        }
    }

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        // Render question number and text (safe, then KaTeX render)
        this.questionText.innerHTML = '';
        const qnum = document.createElement('strong');
        qnum.textContent = `${this.currentIndex + 1}. `;
        this.questionText.appendChild(qnum);
        const qspan = document.createElement('span');
        safeRenderMathInto(qspan, q.question);
        this.questionText.appendChild(qspan);

        // Render options and support math inside options
        this.optionsGrid.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            safeRenderMathInto(btn, opt);
            if (this.answers[this.currentIndex] === idx) {
                btn.classList.add('selected');
            }
            btn.addEventListener('click', () => this.selectAnswer(idx));
            this.optionsGrid.appendChild(btn);
        });

        this.questionCounter.textContent = `${this.currentIndex + 1} / ${this.questions.length}`;
        this.updateNavButtons();
        this.updateNavigator();       // <-- ADD THIS
    }

    selectAnswer(index) {
        this.answers[this.currentIndex] = index;
        this.renderQuestion();
        this.updateNavigator();       // <-- ADD THIS
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.updateProgress();
        }
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    }

    updateNavButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;

        if (this.currentIndex === this.questions.length - 1) {
            this.nextBtn.classList.add('hidden');
            this.submitBtn.classList.remove('hidden');
        } else {
            this.nextBtn.classList.remove('hidden');
            this.submitBtn.classList.add('hidden');
        }
    }

    updateProgress() {
        const pct = ((this.currentIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = pct + '%';
    }

    submitQuiz() {
        clearInterval(this.timer);

        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        this.questions.forEach((q, idx) => {
            if (this.answers[idx] === undefined) {
                unanswered++;
            } else if (this.answers[idx] === q.correctIndex) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const total = this.questions.length;
        const score = correct;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        let rating = '';
        let ratingClass = '';
        if (percentage >= 90) { rating = 'Excellent'; ratingClass = 'excellent'; }
        else if (percentage >= 75) { rating = 'Very Good'; ratingClass = 'very-good'; }
        else if (percentage >= 60) { rating = 'Good'; ratingClass = 'good'; }
        else { rating = 'Needs Improvement'; ratingClass = 'needs-improvement'; }

        this.interfaceEl.classList.add('hidden');
        this.resultsEl.classList.remove('hidden');

        const summary = document.getElementById('resultsSummary');
        summary.innerHTML = `
            <div class="results-grid">
                <div class="result-item"><span>${total}</span><label>Total Questions</label></div>
                <div class="result-item correct"><span>${correct}</span><label>Correct</label></div>
                <div class="result-item incorrect"><span>${incorrect}</span><label>Incorrect</label></div>
                <div class="result-item unanswered"><span>${unanswered}</span><label>Unanswered</label></div>
                <div class="result-item score"><span>${score}</span><label>Score</label></div>
                <div class="result-item percentage ${ratingClass}"><span>${percentage}%</span><label>${rating}</label></div>
            </div>
        `;

        const details = document.getElementById('resultsDetails');
        details.innerHTML = '<h4>Review Answers</h4>';

        this.questions.forEach((q, idx) => {
            const userIdx = this.answers[idx];
            const userAnswer = userIdx !== undefined ? q.options[userIdx] : 'Not answered';
            const isCorrect = userIdx === q.correctIndex;

            const div = document.createElement('div');
            div.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

            // Question
            const pQ = document.createElement('p');
            pQ.className = 'review-question';
            const strong = document.createElement('strong');
            strong.textContent = `Q${idx + 1}.`;
            pQ.appendChild(strong);
            pQ.appendChild(document.createTextNode(' '));
            const qspan = document.createElement('span');
            safeRenderMathInto(qspan, q.question);
            pQ.appendChild(qspan);
            div.appendChild(pQ);

            // Your Answer
            const pA = document.createElement('p');
            pA.className = 'review-answer';
            pA.innerHTML = '<span>Your Answer:</span> ';
            const asp = document.createElement('span');
            safeRenderMathInto(asp, userAnswer);
            pA.appendChild(asp);
            div.appendChild(pA);

            // Correct Answer
            const pC = document.createElement('p');
            pC.className = 'review-correct';
            pC.innerHTML = '<span>Correct Answer:</span> ';
            const csp = document.createElement('span');
            safeRenderMathInto(csp, q.correctAnswer);
            pC.appendChild(csp);
            div.appendChild(pC);

            // Explanation
            const pE = document.createElement('p');
            pE.className = 'review-explanation';
            const esp = document.createElement('span');
            safeRenderMathInto(esp, q.explanation);
            pE.appendChild(esp);
            div.appendChild(pE);

            details.appendChild(div);
        });

        // Scroll to results top
        this.resultsEl.scrollIntoView({ behavior: 'smooth' });
    }

    buildNavigator() {
    const nav = document.getElementById('questionNavigator');
    nav.innerHTML = '';
    this.questions.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.className = 'nav-pill';
        btn.textContent = idx + 1;
        btn.addEventListener('click', () => this.jumpToQuestion(idx));
        nav.appendChild(btn);
    });
    this.updateNavigator();
}

updateNavigator() {
    const pills = document.querySelectorAll('.nav-pill');
    pills.forEach((pill, idx) => {
        pill.classList.toggle('current', idx === this.currentIndex);
        pill.classList.toggle('answered', this.answers[idx] !== undefined);
    });
}

jumpToQuestion(index) {
    this.currentIndex = index;
    this.renderQuestion();
    this.updateProgress();
    this.updateNavButtons();
}

    retakeQuiz() {
        this.currentIndex = 0;
        this.answers = {};
        this.timeRemaining = this.totalTime;

        this.resultsEl.classList.add('hidden');
        this.interfaceEl.classList.remove('hidden');

        this.startTimer();
        this.renderQuestion();
        this.updateProgress();
    }

    resetQuiz() {
        this.resultsEl.classList.add('hidden');
        this.setupEl.classList.remove('hidden');
        this.questions = [];
        this.answers = {};
    }
}

if (document.getElementById('quizCourse')) {
    const engine = new QuizEngine();
}