/* ======================================
   STUDYHUB - MAIN APPLICATION
   Handles: Theme, Navigation, Courses,
   Notes, Past Questions, PDF Viewer
   ====================================== */

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
});

// Mobile Menu
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Build course list from NotesDatabase
const allCourses = Object.keys(NotesDatabase).map(code => ({
    code,
    ...NotesDatabase[code]
}));

// Populate Filters
const levelFilter = document.getElementById('levelFilter');
const semesterFilter = document.getElementById('semesterFilter');
const courseSearch = document.getElementById('courseSearch');

const levels = [...new Set(allCourses.map(c => c.level))].sort();
const semesters = [...new Set(allCourses.map(c => c.semester))].sort();

levels.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = l + ' Level';
    levelFilter.appendChild(opt);
});

semesters.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s + ' Semester';
    semesterFilter.appendChild(opt);
});

// Render Course Cards
const courseGrid = document.getElementById('courseGrid');

function renderCourses() {
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
                <button class="btn btn-sm" onclick="openNotes('${c.code}')">Notes</button>
                <button class="btn btn-sm" onclick="openPastQuestions('${c.code}')">Past Questions</button>
                <button class="btn btn-sm" onclick="openQuiz('${c.code}')">Quiz</button>
            </div>
        `;
        courseGrid.appendChild(card);
    });
}

[levelFilter, semesterFilter].forEach(el => el.addEventListener('change', renderCourses));
courseSearch.addEventListener('input', renderCourses);
renderCourses();

// Notes Section
const notesLevel = document.getElementById('notesLevel');
const notesSemester = document.getElementById('notesSemester');
const notesCourse = document.getElementById('notesCourse');
const notesViewer = document.getElementById('notesViewer');

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
    if (NotesDatabase[code]) {
        notesViewer.innerHTML = `<iframe src="${NotesDatabase[code].pdf}" class="pdf-frame" title="${code} Notes"></iframe>`;
    }
});

// Past Questions Section
const pqCourse = document.getElementById('pqCourse');
const pqYear = document.getElementById('pqYear');
const pqViewer = document.getElementById('pqViewer');

Object.keys(PastQuestionsDatabase).sort().forEach(code => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = code;
    pqCourse.appendChild(opt);
});

pqCourse.addEventListener('change', () => {
    pqYear.innerHTML = '<option value="">Select Year</option>';
    pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';

    const years = Object.keys(PastQuestionsDatabase[pqCourse.value] || {}).sort((a,b) => b - a);
    years.forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        pqYear.appendChild(opt);
    });
});

pqYear.addEventListener('change', () => {
    const code = pqCourse.value;
    const year = pqYear.value;
    if (PastQuestionsDatabase[code] && PastQuestionsDatabase[code][year]) {
        pqViewer.innerHTML = `<iframe src="${PastQuestionsDatabase[code][year]}" class="pdf-frame" title="${code} Past Questions ${year}"></iframe>`;
    }
});

// Global Navigation Helpers
window.openNotes = (code) => {
    document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
    const course = NotesDatabase[code];
    if (!course) return;

    notesLevel.value = course.level;
    notesLevel.dispatchEvent(new Event('change'));
    setTimeout(() => {
        notesSemester.value = course.semester;
        notesSemester.dispatchEvent(new Event('change'));
        setTimeout(() => {
            notesCourse.value = code;
            notesCourse.dispatchEvent(new Event('change'));
        }, 50);
    }, 50);
};

window.openPastQuestions = (code) => {
    document.getElementById('past-questions').scrollIntoView({ behavior: 'smooth' });
    pqCourse.value = code;
    pqCourse.dispatchEvent(new Event('change'));
};

window.openQuiz = (code) => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('quizCourse').value = code;
};

// Populate Quiz Course Selector
const quizCourse = document.getElementById('quizCourse');
Object.keys(QuestionBanks).sort().forEach(code => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = code;
    quizCourse.appendChild(opt);
});