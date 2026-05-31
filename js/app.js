/* ======================================
   STUDYHUB - MAIN APPLICATION
   Handles: Theme, Navigation, Courses,
   Notes, Past Questions, Course Pages
   ====================================== */

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

const pageType = document.body.dataset.page || 'home';
const courseParam = getQueryParam('course');

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
if (themeToggle) {
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
}

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (mobileToggle) mobileToggle.classList.remove('active');
    });
});

const allCourses = Object.keys(NotesDatabase).map(code => ({
    code,
    ...NotesDatabase[code]
}));

function getCourseInfo(code) {
    return {
        code,
        notes: NotesDatabase[code] || null,
        past: PastQuestionsDatabase[code] || null,
        quiz: QuestionBanks[code] || null,
        title: (NotesDatabase[code] && NotesDatabase[code].title) || code,
        level: (NotesDatabase[code] && NotesDatabase[code].level) || '',
        semester: (NotesDatabase[code] && NotesDatabase[code].semester) || ''
    };
}

function navigateTo(page, code) {
    if (!code) {
        window.location.href = page;
        return;
    }
    window.location.href = `${page}?course=${encodeURIComponent(code)}`;
}

function getPdfEmbedUrl(url) {
    if (!url) return url;
    const cleanUrl = url.split('#')[0];
    return `${cleanUrl}#toolbar=0&navpanes=0&scrollbar=0`;
}

window.openNotes = (code) => navigateTo('notes.html', code);
window.openPastQuestions = (code) => navigateTo('past-questions.html', code);
window.openQuiz = (code) => navigateTo('quiz.html', code);
window.openCourseDashboard = (code) => navigateTo('course.html', code);

function renderCourses() {
    const levelFilter = document.getElementById('levelFilter');
    const semesterFilter = document.getElementById('semesterFilter');
    const courseSearch = document.getElementById('courseSearch');
    const courseGrid = document.getElementById('courseGrid');

    if (!levelFilter || !semesterFilter || !courseSearch || !courseGrid) return;

    const level = levelFilter.value;
    const semester = semesterFilter.value;
    const search = courseSearch.value.toLowerCase();

    courseGrid.innerHTML = '';
    const filtered = allCourses.filter(c => {
        const matchLevel = level === 'all' || c.level === level;
        const matchSemester = semester === 'all' || c.semester === semester;
        const matchSearch = c.code.toLowerCase().includes(search) || c.title.toLowerCase().includes(search);
        return matchLevel && matchSemester && matchSearch;
    });

    if (filtered.length === 0) {
        courseGrid.innerHTML = '<p class="no-results">No courses found matching your criteria.</p>';
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-header">
                <span class="course-code">${c.code}</span>
                <span class="course-level">${c.level} Level</span>
            </div>
            <h3>${c.title}</h3>
            <p>${c.semester} Semester</p>
            <div class="course-actions">
                <button class="btn btn-sm" onclick="event.stopPropagation(); openNotes('${c.code}')">Notes</button>
                <button class="btn btn-sm" onclick="event.stopPropagation(); openPastQuestions('${c.code}')">Past Questions</button>
                <button class="btn btn-sm" onclick="event.stopPropagation(); openQuiz('${c.code}')">Quiz</button>
            </div>
        `;
        card.addEventListener('click', () => openCourseDashboard(c.code));
        courseGrid.appendChild(card);
    });
}

function setupCarousel() {
    const courseGrid = document.getElementById('courseGrid');
    const coursePrev = document.getElementById('coursePrev');
    const courseNext = document.getElementById('courseNext');
    if (!courseGrid || !coursePrev || !courseNext) return;

    function scrollCourses(direction) {
        const card = courseGrid.querySelector('.course-card');
        if (!card) return;
        const gap = parseFloat(getComputedStyle(courseGrid).gap) || 24;
        const step = card.offsetWidth + gap;
        const maxScroll = courseGrid.scrollWidth - courseGrid.clientWidth;

        if (direction > 0 && courseGrid.scrollLeft >= maxScroll - 2) {
            courseGrid.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }
        if (direction < 0 && courseGrid.scrollLeft <= 2) {
            courseGrid.scrollTo({ left: maxScroll, behavior: 'smooth' });
            return;
        }
        courseGrid.scrollBy({ left: direction * step, behavior: 'smooth' });
    }

    coursePrev.addEventListener('click', () => scrollCourses(-1));
    courseNext.addEventListener('click', () => scrollCourses(1));

    let courseDrag = { active: false, startX: 0, scrollLeft: 0 };
    courseGrid.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button')) return;
        courseDrag.active = true;
        courseGrid.setPointerCapture(e.pointerId);
        courseDrag.startX = e.pageX - courseGrid.offsetLeft;
        courseDrag.scrollLeft = courseGrid.scrollLeft;
        courseGrid.classList.add('dragging');
    });
    courseGrid.addEventListener('pointermove', (e) => {
        if (!courseDrag.active) return;
        e.preventDefault();
        const x = e.pageX - courseGrid.offsetLeft;
        const walk = x - courseDrag.startX;
        courseGrid.scrollLeft = courseDrag.scrollLeft - walk;
    });
    ['pointerup', 'pointerleave', 'lostpointercapture'].forEach(evt => {
        courseGrid.addEventListener(evt, () => {
            courseDrag.active = false;
            courseGrid.classList.remove('dragging');
        });
    });
}

function renderNotesViewer(code) {
    const course = NotesDatabase[code];
    if (!course || !document.getElementById('notesViewer')) return;
    const viewer = document.getElementById('notesViewer');

    if (course.html) {
        viewer.innerHTML = `<div class="notes-content">${course.html}</div>`;
    } else if (course.markdown) {
        viewer.innerHTML = `<div class="notes-content">${markdownToHtml(course.markdown)}</div>`;
    } else if (course.pdf) {
        viewer.innerHTML = `<iframe src="${getPdfEmbedUrl(course.pdf)}" class="pdf-frame" title="${code} Notes" sandbox="allow-scripts" oncontextmenu="return false"></iframe>`;
    }

    if (typeof renderMathInElement === 'function') {
        renderMathInElement(viewer, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

function renderPastQuestionViewer(code) {
    const pqYear = document.getElementById('pqYear');
    const pqViewer = document.getElementById('pqViewer');
    if (!pqYear || !pqViewer) return;

    const years = Object.keys(PastQuestionsDatabase[code] || {}).sort((a, b) => b - a);
    pqYear.innerHTML = '<option value="">Select Year</option>';

    if (years.length === 0) {
        pqViewer.innerHTML = '<p class="placeholder-text">No past questions available for this course.</p>';
        return;
    }

    years.forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        pqYear.appendChild(opt);
    });

    const yearButtons = years.map(y => `
        <button type="button" class="pq-year-item" data-year="${y}" onclick="openPastQuestionYear('${code}', '${y}')">
            ${y} PDF
        </button>
    `).join('');

    pqViewer.innerHTML = `
        <div class="pq-year-list">${yearButtons}</div>
        <div class="pq-frame-container">
            <p class="placeholder-text">Select a year to view past questions</p>
        </div>
    `;
}

function openPastQuestionYear(code, year) {
    const pqViewer = document.getElementById('pqViewer');
    if (!pqViewer) return;
    const url = PastQuestionsDatabase[code] && PastQuestionsDatabase[code][year];
    if (!url) return;
    const yearButtons = pqViewer.querySelectorAll('.pq-year-item');
    yearButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.year === year);
    });

    const frameContainer = pqViewer.querySelector('.pq-frame-container');
    if (!frameContainer) return;
    frameContainer.innerHTML = `
        <div class="pq-frame-toolbar">
            <p>${code} ${year}</p>
        </div>
        <iframe src="${getPdfEmbedUrl(url)}" class="pdf-frame" title="${code} Past Questions ${year}" sandbox="allow-scripts" oncontextmenu="return false"></iframe>
    `;
}

function markdownToHtml(markdown) {
    return markdown
        .replace(/\r\n/g, '\n')
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
        .replace(/\|(.+)\|/gim, (match) => {
            const rows = match.trim().split('\n').filter(Boolean);
            if (rows.length < 2) return match;
            const [header, separator, ...body] = rows;
            const headers = header.split('|').map(cell => cell.trim()).filter(Boolean);
            const bodyRows = body.map(row => row.split('|').map(cell => `<td>${cell.trim()}</td>`).filter(Boolean).join(''));
            return `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${bodyRows.map(r => `<tr>${r}</tr>`).join('')}</tbody></table>`;
        })
        .replace(/\n{2,}/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

function setupNotesPage() {
    const notesLevel = document.getElementById('notesLevel');
    const notesSemester = document.getElementById('notesSemester');
    const notesCourse = document.getElementById('notesCourse');
    const notesViewer = document.getElementById('notesViewer');
    if (!notesLevel || !notesSemester || !notesCourse || !notesViewer) return;

    const notesLevels = [...new Set(allCourses.map(c => c.level))].sort();
    notesLevels.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l;
        opt.textContent = l + ' Level';
        notesLevel.appendChild(opt);
    });

    notesLevel.addEventListener('change', () => {
        notesSemester.innerHTML = '<option value="">Select Semester</option>';
        notesCourse.innerHTML = '<option value="">Select Course</option>';
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';

        const sems = [...new Set(allCourses.filter(c => c.level === notesLevel.value).map(c => c.semester))];
        sems.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = s + ' Semester';
            notesSemester.appendChild(opt);
        });
    });

    notesSemester.addEventListener('change', () => {
        notesCourse.innerHTML = '<option value="">Select Course</option>';
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';

        const courses = allCourses.filter(c => c.level === notesLevel.value && c.semester === notesSemester.value);
        courses.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.code;
            opt.textContent = `${c.code} — ${c.title}`;
            notesCourse.appendChild(opt);
        });
    });

    notesCourse.addEventListener('change', () => {
        const code = notesCourse.value;
        if (code) {
            renderNotesViewer(code);
        } else {
            notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        }
    });

    if (courseParam && NotesDatabase[courseParam]) {
        const course = NotesDatabase[courseParam];
        notesLevel.value = course.level;
        notesLevel.dispatchEvent(new Event('change'));
        setTimeout(() => {
            notesSemester.value = course.semester;
            notesSemester.dispatchEvent(new Event('change'));
            setTimeout(() => {
                notesCourse.value = courseParam;
                notesCourse.dispatchEvent(new Event('change'));
            }, 50);
        }, 50);
    }
}

function setupPastQuestionsPage() {
    const pqCourse = document.getElementById('pqCourse');
    const pqYear = document.getElementById('pqYear');
    const pqViewer = document.getElementById('pqViewer');
    if (!pqCourse || !pqYear || !pqViewer) return;

    Object.keys(PastQuestionsDatabase).sort().forEach(code => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = code;
        pqCourse.appendChild(opt);
    });

    pqCourse.addEventListener('change', () => {
        const code = pqCourse.value;
        renderPastQuestionViewer(code);
    });

    pqYear.addEventListener('change', () => {
        const code = pqCourse.value;
        const year = pqYear.value;
        if (code && year) {
            openPastQuestionYear(code, year);
        }
    });

    if (courseParam && PastQuestionsDatabase[courseParam]) {
        pqCourse.value = courseParam;
        pqCourse.dispatchEvent(new Event('change'));
    }
}

function setupQuizPage() {
    const quizCourse = document.getElementById('quizCourse');
    if (!quizCourse) return;

    Object.keys(QuestionBanks).sort().forEach(code => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = code;
        quizCourse.appendChild(opt);
    });

    if (courseParam && QuestionBanks[courseParam]) {
        quizCourse.value = courseParam;
    }
}

function setupCoursePage() {
    const courseDashboard = document.getElementById('courseDashboard');
    if (!courseDashboard) return;
    if (!courseParam) {
        courseDashboard.innerHTML = '<p class="placeholder-text">Select a course from the home page to view details.</p>';
        return;
    }
    const course = getCourseInfo(courseParam);
    courseDashboard.innerHTML = `
        <div class="course-dashboard-header">
            <div>
                <span class="course-code">${course.code}</span>
                <h3>${course.title}</h3>
                ${course.level && course.semester ? `<p>${course.level} Level · ${course.semester} Semester</p>` : ''}
            </div>
            <div class="course-dashboard-actions">
                <button class="btn btn-primary" type="button" onclick="openNotes('${course.code}')">Notes</button>
                <button class="btn btn-outline" type="button" onclick="openPastQuestions('${course.code}')">Past Questions</button>
                <button class="btn btn-secondary" type="button" onclick="openQuiz('${course.code}')">Quiz</button>
            </div>
        </div>
    `;
}

if (pageType === 'home') {
    renderCourses();
    setupCarousel();
    const levelFilterEl = document.getElementById('levelFilter');
    const semesterFilterEl = document.getElementById('semesterFilter');
    const courseSearchEl = document.getElementById('courseSearch');
    if (levelFilterEl && semesterFilterEl && courseSearchEl) {
        [levelFilterEl, semesterFilterEl].forEach(el => el.addEventListener('change', renderCourses));
        courseSearchEl.addEventListener('input', renderCourses);
    }
}
if (pageType === 'course') {
    setupCoursePage();
}
if (pageType === 'notes') {
    setupNotesPage();
}
if (pageType === 'past-questions') {
    setupPastQuestionsPage();
}
if (pageType === 'quiz') {
    setupQuizPage();
}
