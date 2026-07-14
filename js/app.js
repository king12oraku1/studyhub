


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
const FILTER_STORAGE_KEY = 'studyhubFilters';

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

function buildCourseCard(c) {
    return `
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
}

function getStoredFilterState() {
    try {
        return JSON.parse(localStorage.getItem(FILTER_STORAGE_KEY) || '{}');
    } catch (error) {
        return {};
    }
}

function saveStoredFilterState(patch) {
    const state = getStoredFilterState();
    Object.assign(state, patch);
    localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(state));
}

function clearStoredFilterState() {
    localStorage.removeItem(FILTER_STORAGE_KEY);
}

function setSelectValue(selectEl, value) {
    if (!selectEl) return false;
    const hasValue = Array.from(selectEl.options).some(option => option.value === value);
    if (!value || !hasValue) {
        selectEl.value = '';
        return false;
    }
    selectEl.value = value;
    return true;
}

function persistSelectionState(patch) {
    if (Object.keys(patch).length) {
        saveStoredFilterState(patch);
    }
}

function resetPageFilters(pageName) {
    clearStoredFilterState();

    if (pageName === 'home') {
        const collegeFilterEl = document.getElementById('collegeFilter');
        const programmeFilterEl = document.getElementById('programmeFilter');
        const levelFilterEl = document.getElementById('levelFilter');
        const semesterFilterEl = document.getElementById('semesterFilter');
        const courseSearchEl = document.getElementById('courseSearch');

        if (collegeFilterEl) {
            populateSelect(collegeFilterEl, StudyHubCatalog.getCollegeOptions(), 'Select College');
        }
        resetSelect(programmeFilterEl, 'Select Programme');
        resetSelect(levelFilterEl, 'Select Level');
        resetSelect(semesterFilterEl, 'Select Semester');
        if (courseSearchEl) {
            courseSearchEl.value = '';
        }
        if (typeof renderCourses === 'function') {
            renderCourses();
        }
        return;
    }

    if (pageName === 'notes') {
        const notesCollege = document.getElementById('notesCollege');
        const notesProgramme = document.getElementById('notesProgramme');
        const notesLevel = document.getElementById('notesLevel');
        const notesSemester = document.getElementById('notesSemester');
        const notesCourse = document.getElementById('notesCourse');
        const notesViewer = document.getElementById('notesViewer');
        if (notesCollege) {
            populateSelect(notesCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
        }
        resetSelect(notesProgramme, 'Select Programme');
        resetSelect(notesLevel, 'Select Level');
        resetSelect(notesSemester, 'Select Semester');
        resetSelect(notesCourse, 'Select Course');
        if (notesViewer) {
            notesViewer.innerHTML = '<p class="placeholder-text">Select a course above to view notes</p>';
        }
        return;
    }

    if (pageName === 'past-questions') {
        const pqCollege = document.getElementById('pqCollege');
        const pqProgramme = document.getElementById('pqProgramme');
        const pqLevel = document.getElementById('pqLevel');
        const pqSemester = document.getElementById('pqSemester');
        const pqCourse = document.getElementById('pqCourse');
        const pqYear = document.getElementById('pqYear');
        const pqViewer = document.getElementById('pqViewer');
        if (pqCollege) {
            populateSelect(pqCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
        }
        resetSelect(pqProgramme, 'Select Programme');
        resetSelect(pqLevel, 'Select Level');
        resetSelect(pqSemester, 'Select Semester');
        resetSelect(pqCourse, 'Select Course');
        resetSelect(pqYear, 'Select Year');
        if (pqViewer) {
            pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
        }
        return;
    }

    if (pageName === 'quiz') {
        const quizCollege = document.getElementById('quizCollege');
        const quizProgramme = document.getElementById('quizProgramme');
        const quizLevel = document.getElementById('quizLevel');
        const quizSemester = document.getElementById('quizSemester');
        const quizCourse = document.getElementById('quizCourse');
        if (quizCollege) {
            populateSelect(quizCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
        }
        resetSelect(quizProgramme, 'Select Programme');
        resetSelect(quizLevel, 'Select Level');
        resetSelect(quizSemester, 'Select Semester');
        resetSelect(quizCourse, 'Select Course');
    }
}

function getCatalogCourseEntry(code) {
    return StudyHubCatalog.getCourseEntry(code) || null;
}

function populateSelect(selectEl, options, placeholder, selectedValue) {
    if (!selectEl) return;
    const placeholderText = placeholder || 'Select an option';
    selectEl.innerHTML = `<option value="">${placeholderText}</option>`;
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.label;
        selectEl.appendChild(opt);
    });
    if (selectedValue) {
        selectEl.value = selectedValue;
    }
}

function resetSelect(selectEl, placeholder) {
    if (!selectEl) return;
    selectEl.innerHTML = `<option value="">${placeholder}</option>`;
    selectEl.disabled = true;
}

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

function initializePdfJs() {
    if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.122/build/pdf.worker.min.js';
    }
}

async function loadPdfViewer(container, url, title) {
    
    initializePdfJs();
    const viewerHtml = `
        <div class="pdf-viewer-shell">
            <div class="pdf-toolbar">
                <div class="pdf-info">
                    <strong>${title}</strong>
                    <span class="pdf-page-count" id="pdfPageCountLabel"></span>
                </div>
                <div class="pdf-control-group">
                    <button type="button" class="btn btn-icon" id="pdfPrevPage" aria-label="Previous page">◀</button>
                    <div class="pdf-page-input-wrapper">
                        <label class="visually-hidden" for="pdfPageNumber">Page</label>
                        <input id="pdfPageNumber" class="pdf-page-number" type="number" min="1" value="1">
                        <span>/ <span id="pdfPageCount">0</span></span>
                    </div>
                    <button type="button" class="btn btn-icon" id="pdfNextPage" aria-label="Next page">▶</button>
                    <button type="button" class="btn btn-icon" id="pdfZoomOut" aria-label="Zoom out">−</button>
                    <button type="button" class="btn btn-icon" id="pdfZoomIn" aria-label="Zoom in">+</button>
                    <span class="pdf-scale-label" id="pdfScaleLabel">100%</span>
                </div>
            </div>
            <div class="pdf-canvas-wrapper">
                <canvas id="pdfCanvas"></canvas>
            </div>
            <div class="pdf-status" id="pdfStatus">Loading PDF…</div>
        </div>
    `;

    container.innerHTML = viewerHtml;

    const pdfStatus = container.querySelector('#pdfStatus');
    const pdfPageNumber = container.querySelector('#pdfPageNumber');
    const pdfPageCount = container.querySelector('#pdfPageCount');
    const pdfPageCountLabel = container.querySelector('#pdfPageCountLabel');
    const pdfScaleLabel = container.querySelector('#pdfScaleLabel');
    const pdfCanvas = container.querySelector('#pdfCanvas');
    const ctx = pdfCanvas.getContext('2d');

    let pdfDoc = null;
    let currentPage = 1;
    let scale = 1.0;

    const clampScale = (value) => Math.min(2.5, Math.max(0.6, value));

    function updateToolbar() {
        pdfPageNumber.value = currentPage;
        pdfPageCount.textContent = pdfDoc ? pdfDoc.numPages : '0';
        pdfPageCountLabel.textContent = pdfDoc ? `Page ${currentPage} of ${pdfDoc.numPages}` : '';
        pdfScaleLabel.textContent = `${Math.round(scale * 100)}%`;
        document.getElementById('pdfPrevPage').disabled = currentPage <= 1;
        document.getElementById('pdfNextPage').disabled = pdfDoc ? currentPage >= pdfDoc.numPages : true;
    }

    async function renderPage(pageNumber) {
        if (!pdfDoc) return;
        const page = await pdfDoc.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;
        const outputViewport = page.getViewport({ scale: scale * outputScale });

        pdfCanvas.width = Math.floor(outputViewport.width);
        pdfCanvas.height = Math.floor(outputViewport.height);
        pdfCanvas.style.width = `${Math.floor(viewport.width)}px`;
        pdfCanvas.style.height = `${Math.floor(viewport.height)}px`;

        await page.render({ canvasContext: ctx, viewport: outputViewport }).promise;
        pdfStatus.textContent = '';
        updateToolbar();
    }

    function queueRender(pageNum) {
        currentPage = Math.min(Math.max(pageNum, 1), pdfDoc.numPages);
        renderPage(currentPage).catch(err => {
            pdfStatus.textContent = 'Unable to render PDF. Please refresh or try another file.';
            console.error(err);
        });
    }

    document.getElementById('pdfPrevPage').addEventListener('click', () => {
        if (currentPage <= 1) return;
        queueRender(currentPage - 1);
    });

    document.getElementById('pdfNextPage').addEventListener('click', () => {
        if (!pdfDoc || currentPage >= pdfDoc.numPages) return;
        queueRender(currentPage + 1);
    });

    document.getElementById('pdfZoomOut').addEventListener('click', () => {
        scale = clampScale(scale - 0.1);
        queueRender(currentPage);
    });

    document.getElementById('pdfZoomIn').addEventListener('click', () => {
        scale = clampScale(scale + 0.1);
        queueRender(currentPage);
    });
    

    pdfPageNumber.addEventListener('change', () => {
        const requestedPage = parseInt(pdfPageNumber.value, 10);
        if (!isNaN(requestedPage)) {
            queueRender(requestedPage);
        }
    });
// Automatically load the library dynamically if it isn't ready
    if (!window.pdfjsLib) {
        await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.122/pdf.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }

    // Set the complete worker URL path
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.122/pdf.worker.min.js';
    try {
        pdfStatus.textContent = 'Loading PDF…';
        const pdfUrl = encodeURI(url);
        pdfDoc = await window.pdfjsLib.getDocument({ url: pdfUrl }).promise;
        updateToolbar();
        await renderPage(currentPage);
    } catch (error) {
        pdfStatus.textContent = `Failed to load PDF. Please check the file path: ${url}`;
        console.error('PDF load error:', error);
    }
    
}

window.openNotes = (code) => navigateTo('notes.html', code);
window.openPastQuestions = (code) => navigateTo('past-questions.html', code);
window.openQuiz = (code) => navigateTo('quiz.html', code);
window.openCourseDashboard = (code) => navigateTo('course.html', code);

function renderCourses() {
    const collegeFilter = document.getElementById('collegeFilter');
    const programmeFilter = document.getElementById('programmeFilter');
    const levelFilter = document.getElementById('levelFilter');
    const semesterFilter = document.getElementById('semesterFilter');
    const courseSearch = document.getElementById('courseSearch');
    const courseGrid = document.getElementById('courseGrid');

    if (!collegeFilter || !programmeFilter || !levelFilter || !semesterFilter || !courseSearch || !courseGrid) return;

    const college = collegeFilter.value;
    const programme = programmeFilter.value;
    const level = levelFilter.value;
    const semester = semesterFilter.value;
    const search = courseSearch.value.toLowerCase();

    courseGrid.innerHTML = '';
    const filtered = allCourses.filter(c => {
        const catalogEntry = getCatalogCourseEntry(c.code);
        const matchesCatalog = !catalogEntry || StudyHubCatalog.matchesCourseAffiliation(catalogEntry, college, programme);
        const matchLevel = !level || c.level === level;
        const matchSemester = !semester || c.semester === semester;
        const matchSearch = c.code.toLowerCase().includes(search) || c.title.toLowerCase().includes(search);
        return matchesCatalog && matchLevel && matchSemester && matchSearch;
    });

    if (filtered.length === 0) {
        courseGrid.innerHTML = '<p class="no-results">No courses found matching your criteria.</p>';
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = buildCourseCard(c);
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

async function renderNotesViewer(code) {
    const course = NotesDatabase[code];
    if (!course || !document.getElementById('notesViewer')) return;
    const viewer = document.getElementById('notesViewer');

    if (course.html) {
        viewer.innerHTML = `<div class="notes-content">${course.html}</div>`;
    } else if (course.markdown) {
        viewer.innerHTML = `<div class="notes-content">${markdownToHtml(course.markdown)}</div>`;
    } else if (course.pdf) {
        await loadPdfViewer(viewer, course.pdf, `${code} Notes`);
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
    pqYear.disabled = false;

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
        <button type="button" class="pq-year-item" data-year="${y}">
            ${y} PDF
        </button>
    `).join('');

    pqViewer.innerHTML = `
        <div class="pq-year-list">${yearButtons}</div>
        <div class="pq-frame-container">
            <p class="placeholder-text">Select a year to view past questions</p>
        </div>
    `;

    pqViewer.querySelectorAll('.pq-year-item').forEach(btn => {
        btn.addEventListener('click', async () => {
            await openPastQuestionYear(code, btn.dataset.year);
        });
    });
}

async function openPastQuestionYear(code, year) {
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
    await loadPdfViewer(frameContainer, url, `${code} Past Questions ${year}`);
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
    const notesCollege = document.getElementById('notesCollege');
    const notesProgramme = document.getElementById('notesProgramme');
    const notesLevel = document.getElementById('notesLevel');
    const notesSemester = document.getElementById('notesSemester');
    const notesCourse = document.getElementById('notesCourse');
    const notesViewer = document.getElementById('notesViewer');
    if (!notesCollege || !notesProgramme || !notesLevel || !notesSemester || !notesCourse || !notesViewer) return;

    populateSelect(notesCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
    const resetNotesBtn = document.getElementById('resetFiltersBtn');

    notesCollege.addEventListener('change', () => {
        const college = notesCollege.value;
        resetSelect(notesProgramme, 'Select Programme');
        resetSelect(notesLevel, 'Select Level');
        resetSelect(notesSemester, 'Select Semester');
        resetSelect(notesCourse, 'Select Course');
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        persistSelectionState({ notesCollege: college, notesProgramme: '', notesLevel: '', notesSemester: '', notesCourse: '' });
        if (!college) return;
        populateSelect(notesProgramme, StudyHubCatalog.getProgrammeOptions(college), 'Select Programme');
        notesProgramme.disabled = false;
    });

    notesProgramme.addEventListener('change', () => {
        const college = notesCollege.value;
        const programme = notesProgramme.value;
        resetSelect(notesLevel, 'Select Level');
        resetSelect(notesSemester, 'Select Semester');
        resetSelect(notesCourse, 'Select Course');
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        persistSelectionState({ notesCollege: college, notesProgramme: programme, notesLevel: '', notesSemester: '', notesCourse: '' });
        if (!college || !programme) return;
        populateSelect(notesLevel, StudyHubCatalog.getLevelOptions(college, programme), 'Select Level');
        notesLevel.disabled = false;
    });

    notesLevel.addEventListener('change', () => {
        const college = notesCollege.value;
        const programme = notesProgramme.value;
        const level = notesLevel.value;
        resetSelect(notesSemester, 'Select Semester');
        resetSelect(notesCourse, 'Select Course');
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        persistSelectionState({ notesCollege: college, notesProgramme: programme, notesLevel: level, notesSemester: '', notesCourse: '' });
        if (!college || !programme || !level) return;
        populateSelect(notesSemester, StudyHubCatalog.getSemesterOptions(college, programme, level), 'Select Semester');
        notesSemester.disabled = false;
    });

    notesSemester.addEventListener('change', () => {
        const college = notesCollege.value;
        const programme = notesProgramme.value;
        const level = notesLevel.value;
        const semester = notesSemester.value;
        resetSelect(notesCourse, 'Select Course');
        notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        persistSelectionState({ notesCollege: college, notesProgramme: programme, notesLevel: level, notesSemester: semester, notesCourse: '' });
        if (!college || !programme || !level || !semester) return;
        const courses = StudyHubCatalog.getCourseOptions({ college, programme, level, semester, sourceCodes: Object.keys(NotesDatabase) });
        if (!courses.length) {
            notesCourse.innerHTML = '<option value="">No courses available</option>';
            notesCourse.disabled = true;
            return;
        }
        populateSelect(notesCourse, courses.map(course => ({ value: course.code, label: `${course.code} — ${NotesDatabase[course.code]?.title || course.code}` })), 'Select Course');
        notesCourse.disabled = false;
    });

    notesCourse.addEventListener('change', async () => {
        const code = notesCourse.value;
        persistSelectionState({ notesCollege: notesCollege.value, notesProgramme: notesProgramme.value, notesLevel: notesLevel.value, notesSemester: notesSemester.value, notesCourse: code || '' });
        if (code) {
            await renderNotesViewer(code);
        } else {
            notesViewer.innerHTML = '<p class="placeholder-text">Select a course to view notes</p>';
        }
    });

    if (resetNotesBtn) {
        resetNotesBtn.addEventListener('click', () => {
            resetPageFilters('notes');
            const savedState = getStoredFilterState();
            persistSelectionState({ notesCollege: '', notesProgramme: '', notesLevel: '', notesSemester: '', notesCourse: '' });
            if (savedState.notesCollege) {
                notesCollege.value = '';
            }
        });
    }

    const savedState = getStoredFilterState();
    const collegeValue = savedState.notesCollege || '';
    const programmeValue = savedState.notesProgramme || '';
    const levelValue = savedState.notesLevel || '';
    const semesterValue = savedState.notesSemester || '';
    const courseValue = savedState.notesCourse || '';

    if (collegeValue) {
        setSelectValue(notesCollege, collegeValue);
        notesCollege.dispatchEvent(new Event('change'));
        setTimeout(() => {
            if (programmeValue) {
                setSelectValue(notesProgramme, programmeValue);
                notesProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    if (levelValue) {
                        setSelectValue(notesLevel, levelValue);
                        notesLevel.dispatchEvent(new Event('change'));
                        setTimeout(() => {
                            if (semesterValue) {
                                setSelectValue(notesSemester, semesterValue);
                                notesSemester.dispatchEvent(new Event('change'));
                                setTimeout(() => {
                                    if (courseValue) {
                                        setSelectValue(notesCourse, courseValue);
                                        notesCourse.dispatchEvent(new Event('change'));
                                    }
                                }, 60);
                            }
                        }, 60);
                    }
                }, 60);
            }
        }, 60);
    }

    if (courseParam && NotesDatabase[courseParam]) {
        const course = StudyHubCatalog.getCourseEntry(courseParam);
        if (course) {
            notesCollege.value = course.college;
            notesCollege.dispatchEvent(new Event('change'));
            setTimeout(() => {
                notesProgramme.value = course.programme;
                notesProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
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
                }, 50);
            }, 50);
        }
    }
}

function setupPastQuestionsPage() {
    const pqCollege = document.getElementById('pqCollege');
    const pqProgramme = document.getElementById('pqProgramme');
    const pqLevel = document.getElementById('pqLevel');
    const pqSemester = document.getElementById('pqSemester');
    const pqCourse = document.getElementById('pqCourse');
    const pqYear = document.getElementById('pqYear');
    const pqViewer = document.getElementById('pqViewer');
    if (!pqCollege || !pqProgramme || !pqLevel || !pqSemester || !pqCourse || !pqYear || !pqViewer) return;

    populateSelect(pqCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
    const resetPastQuestionsBtn = document.getElementById('resetFiltersBtn');

    pqCollege.addEventListener('change', () => {
        const college = pqCollege.value;
        resetSelect(pqProgramme, 'Select Programme');
        resetSelect(pqLevel, 'Select Level');
        resetSelect(pqSemester, 'Select Semester');
        resetSelect(pqCourse, 'Select Course');
        resetSelect(pqYear, 'Select Year');
        pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
        persistSelectionState({ pqCollege: college, pqProgramme: '', pqLevel: '', pqSemester: '', pqCourse: '', pqYear: '' });
        if (!college) return;
        populateSelect(pqProgramme, StudyHubCatalog.getProgrammeOptions(college), 'Select Programme');
        pqProgramme.disabled = false;
    });

    pqProgramme.addEventListener('change', () => {
        const college = pqCollege.value;
        const programme = pqProgramme.value;
        resetSelect(pqLevel, 'Select Level');
        resetSelect(pqSemester, 'Select Semester');
        resetSelect(pqCourse, 'Select Course');
        resetSelect(pqYear, 'Select Year');
        pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
        persistSelectionState({ pqCollege: college, pqProgramme: programme, pqLevel: '', pqSemester: '', pqCourse: '', pqYear: '' });
        if (!college || !programme) return;
        populateSelect(pqLevel, StudyHubCatalog.getLevelOptions(college, programme), 'Select Level');
        pqLevel.disabled = false;
    });

    pqLevel.addEventListener('change', () => {
        const college = pqCollege.value;
        const programme = pqProgramme.value;
        const level = pqLevel.value;
        resetSelect(pqSemester, 'Select Semester');
        resetSelect(pqCourse, 'Select Course');
        resetSelect(pqYear, 'Select Year');
        pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
        persistSelectionState({ pqCollege: college, pqProgramme: programme, pqLevel: level, pqSemester: '', pqCourse: '', pqYear: '' });
        if (!college || !programme || !level) return;
        populateSelect(pqSemester, StudyHubCatalog.getSemesterOptions(college, programme, level), 'Select Semester');
        pqSemester.disabled = false;
    });

    pqSemester.addEventListener('change', () => {
        const college = pqCollege.value;
        const programme = pqProgramme.value;
        const level = pqLevel.value;
        const semester = pqSemester.value;
        resetSelect(pqCourse, 'Select Course');
        resetSelect(pqYear, 'Select Year');
        pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
        persistSelectionState({ pqCollege: college, pqProgramme: programme, pqLevel: level, pqSemester: semester, pqCourse: '', pqYear: '' });
        if (!college || !programme || !level || !semester) return;
        const courses = StudyHubCatalog.getCourseOptions({ college, programme, level, semester, sourceCodes: Object.keys(PastQuestionsDatabase) });
        if (!courses.length) {
            pqCourse.innerHTML = '<option value="">No courses available</option>';
            pqCourse.disabled = true;
            return;
        }
        populateSelect(pqCourse, courses.map(course => ({ value: course.code, label: course.code })), 'Select Course');
        pqCourse.disabled = false;
    });

    pqCourse.addEventListener('change', () => {
        const code = pqCourse.value;
        resetSelect(pqYear, 'Select Year');
        persistSelectionState({ pqCollege: pqCollege.value, pqProgramme: pqProgramme.value, pqLevel: pqLevel.value, pqSemester: pqSemester.value, pqCourse: code || '', pqYear: '' });
        if (!code) {
            pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
            return;
        }
        renderPastQuestionViewer(code);
    });

    pqYear.addEventListener('change', async () => {
        const code = pqCourse.value;
        const year = pqYear.value;
        persistSelectionState({ pqCollege: pqCollege.value, pqProgramme: pqProgramme.value, pqLevel: pqLevel.value, pqSemester: pqSemester.value, pqCourse: code || '', pqYear: year || '' });
        if (code && year) {
            await openPastQuestionYear(code, year);
        }
    });

    if (resetPastQuestionsBtn) {
        resetPastQuestionsBtn.addEventListener('click', () => {
            resetPageFilters('past-questions');
        });
    }

    const savedState = getStoredFilterState();
    const collegeValue = savedState.pqCollege || '';
    const programmeValue = savedState.pqProgramme || '';
    const levelValue = savedState.pqLevel || '';
    const semesterValue = savedState.pqSemester || '';
    const courseValue = savedState.pqCourse || '';
    const yearValue = savedState.pqYear || '';

    if (collegeValue) {
        setSelectValue(pqCollege, collegeValue);
        pqCollege.dispatchEvent(new Event('change'));
        setTimeout(() => {
            if (programmeValue) {
                setSelectValue(pqProgramme, programmeValue);
                pqProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    if (levelValue) {
                        setSelectValue(pqLevel, levelValue);
                        pqLevel.dispatchEvent(new Event('change'));
                        setTimeout(() => {
                            if (semesterValue) {
                                setSelectValue(pqSemester, semesterValue);
                                pqSemester.dispatchEvent(new Event('change'));
                                setTimeout(() => {
                                    if (courseValue) {
                                        setSelectValue(pqCourse, courseValue);
                                        pqCourse.dispatchEvent(new Event('change'));
                                        setTimeout(() => {
                                            if (yearValue) {
                                                setSelectValue(pqYear, yearValue);
                                                pqYear.dispatchEvent(new Event('change'));
                                            }
                                        }, 60);
                                    }
                                }, 60);
                            }
                        }, 60);
                    }
                }, 60);
            }
        }, 60);
    }

    if (courseParam && PastQuestionsDatabase[courseParam]) {
        const course = StudyHubCatalog.getCourseEntry(courseParam);
        if (course) {
            pqCollege.value = course.college;
            pqCollege.dispatchEvent(new Event('change'));
            setTimeout(() => {
                pqProgramme.value = course.programme;
                pqProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    pqLevel.value = course.level;
                    pqLevel.dispatchEvent(new Event('change'));
                    setTimeout(() => {
                        pqSemester.value = course.semester;
                        pqSemester.dispatchEvent(new Event('change'));
                        setTimeout(() => {
                            pqCourse.value = courseParam;
                            pqCourse.dispatchEvent(new Event('change'));
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }
    }
}

function setupQuizPage() {
    const quizCollege = document.getElementById('quizCollege');
    const quizProgramme = document.getElementById('quizProgramme');
    const quizLevel = document.getElementById('quizLevel');
    const quizSemester = document.getElementById('quizSemester');
    const quizCourse = document.getElementById('quizCourse');
    if (!quizCollege || !quizProgramme || !quizLevel || !quizSemester || !quizCourse) return;

    populateSelect(quizCollege, StudyHubCatalog.getCollegeOptions(), 'Select College');
    const resetQuizBtn = document.getElementById('resetFiltersBtn');

    quizCollege.addEventListener('change', () => {
        const college = quizCollege.value;
        resetSelect(quizProgramme, 'Select Programme');
        resetSelect(quizLevel, 'Select Level');
        resetSelect(quizSemester, 'Select Semester');
        resetSelect(quizCourse, 'Select Course');
        persistSelectionState({ quizCollege: college, quizProgramme: '', quizLevel: '', quizSemester: '', quizCourse: '' });
        if (!college) return;
        populateSelect(quizProgramme, StudyHubCatalog.getProgrammeOptions(college), 'Select Programme');
        quizProgramme.disabled = false;
    });

    quizProgramme.addEventListener('change', () => {
        const college = quizCollege.value;
        const programme = quizProgramme.value;
        resetSelect(quizLevel, 'Select Level');
        resetSelect(quizSemester, 'Select Semester');
        resetSelect(quizCourse, 'Select Course');
        persistSelectionState({ quizCollege: college, quizProgramme: programme, quizLevel: '', quizSemester: '', quizCourse: '' });
        if (!college || !programme) return;
        populateSelect(quizLevel, StudyHubCatalog.getLevelOptions(college, programme), 'Select Level');
        quizLevel.disabled = false;
    });

    quizLevel.addEventListener('change', () => {
        const college = quizCollege.value;
        const programme = quizProgramme.value;
        const level = quizLevel.value;
        resetSelect(quizSemester, 'Select Semester');
        resetSelect(quizCourse, 'Select Course');
        persistSelectionState({ quizCollege: college, quizProgramme: programme, quizLevel: level, quizSemester: '', quizCourse: '' });
        if (!college || !programme || !level) return;
        populateSelect(quizSemester, StudyHubCatalog.getSemesterOptions(college, programme, level), 'Select Semester');
        quizSemester.disabled = false;
    });

    quizSemester.addEventListener('change', () => {
        const college = quizCollege.value;
        const programme = quizProgramme.value;
        const level = quizLevel.value;
        const semester = quizSemester.value;
        resetSelect(quizCourse, 'Select Course');
        persistSelectionState({ quizCollege: college, quizProgramme: programme, quizLevel: level, quizSemester: semester, quizCourse: '' });
        if (!college || !programme || !level || !semester) return;
        const courses = StudyHubCatalog.getCourseOptions({ college, programme, level, semester, sourceCodes: Object.keys(QuestionBanks) });
        if (!courses.length) {
            quizCourse.innerHTML = '<option value="">No courses available</option>';
            quizCourse.disabled = true;
            return;
        }
        populateSelect(quizCourse, courses.map(course => ({ value: course.code, label: course.code })), 'Select Course');
        quizCourse.disabled = false;
    });

    quizCourse.addEventListener('change', () => {
        persistSelectionState({ quizCollege: quizCollege.value, quizProgramme: quizProgramme.value, quizLevel: quizLevel.value, quizSemester: quizSemester.value, quizCourse: quizCourse.value || '' });
    });

    if (resetQuizBtn) {
        resetQuizBtn.addEventListener('click', () => {
            resetPageFilters('quiz');
        });
    }

    const savedState = getStoredFilterState();
    const collegeValue = savedState.quizCollege || '';
    const programmeValue = savedState.quizProgramme || '';
    const levelValue = savedState.quizLevel || '';
    const semesterValue = savedState.quizSemester || '';
    const courseValue = savedState.quizCourse || '';

    if (collegeValue) {
        setSelectValue(quizCollege, collegeValue);
        quizCollege.dispatchEvent(new Event('change'));
        setTimeout(() => {
            if (programmeValue) {
                setSelectValue(quizProgramme, programmeValue);
                quizProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    if (levelValue) {
                        setSelectValue(quizLevel, levelValue);
                        quizLevel.dispatchEvent(new Event('change'));
                        setTimeout(() => {
                            if (semesterValue) {
                                setSelectValue(quizSemester, semesterValue);
                                quizSemester.dispatchEvent(new Event('change'));
                                setTimeout(() => {
                                    if (courseValue) {
                                        setSelectValue(quizCourse, courseValue);
                                        quizCourse.dispatchEvent(new Event('change'));
                                    }
                                }, 60);
                            }
                        }, 60);
                    }
                }, 60);
            }
        }, 60);
    }

    if (courseParam && QuestionBanks[courseParam]) {
        const course = StudyHubCatalog.getCourseEntry(courseParam);
        if (course) {
            quizCollege.value = course.college;
            quizCollege.dispatchEvent(new Event('change'));
            setTimeout(() => {
                quizProgramme.value = course.programme;
                quizProgramme.dispatchEvent(new Event('change'));
                setTimeout(() => {
                    quizLevel.value = course.level;
                    quizLevel.dispatchEvent(new Event('change'));
                    setTimeout(() => {
                        quizSemester.value = course.semester;
                        quizSemester.dispatchEvent(new Event('change'));
                        setTimeout(() => {
                            quizCourse.value = courseParam;
                            quizCourse.dispatchEvent(new Event('change'));
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }
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
    const collegeFilterEl = document.getElementById('collegeFilter');
    const programmeFilterEl = document.getElementById('programmeFilter');
    const levelFilterEl = document.getElementById('levelFilter');
    const semesterFilterEl = document.getElementById('semesterFilter');
    const courseSearchEl = document.getElementById('courseSearch');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    if (collegeFilterEl && programmeFilterEl && levelFilterEl && semesterFilterEl && courseSearchEl) {
        [collegeFilterEl, programmeFilterEl, levelFilterEl, semesterFilterEl].forEach(el => el.addEventListener('change', renderCourses));
        courseSearchEl.addEventListener('input', renderCourses);

        populateSelect(collegeFilterEl, StudyHubCatalog.getCollegeOptions(), 'Select College');
        collegeFilterEl.addEventListener('change', () => {
            const college = collegeFilterEl.value;
            resetSelect(programmeFilterEl, 'Select Programme');
            resetSelect(levelFilterEl, 'Select Level');
            resetSelect(semesterFilterEl, 'Select Semester');
            persistSelectionState({ college, programme: '', level: '', semester: '' });
            if (!college) {
                renderCourses();
                return;
            }
            populateSelect(programmeFilterEl, StudyHubCatalog.getProgrammeOptions(college), 'Select Programme');
            programmeFilterEl.disabled = false;
            renderCourses();
        });

        programmeFilterEl.addEventListener('change', () => {
            const college = collegeFilterEl.value;
            const programme = programmeFilterEl.value;
            resetSelect(levelFilterEl, 'Select Level');
            resetSelect(semesterFilterEl, 'Select Semester');
            persistSelectionState({ college, programme, level: '', semester: '' });
            if (!college || !programme) {
                renderCourses();
                return;
            }
            populateSelect(levelFilterEl, StudyHubCatalog.getLevelOptions(college, programme), 'Select Level');
            levelFilterEl.disabled = false;
            renderCourses();
        });

        levelFilterEl.addEventListener('change', () => {
            const college = collegeFilterEl.value;
            const programme = programmeFilterEl.value;
            const level = levelFilterEl.value;
            resetSelect(semesterFilterEl, 'Select Semester');
            persistSelectionState({ college, programme, level, semester: '' });
            if (!college || !programme || !level) {
                renderCourses();
                return;
            }
            populateSelect(semesterFilterEl, StudyHubCatalog.getSemesterOptions(college, programme, level), 'Select Semester');
            semesterFilterEl.disabled = false;
            renderCourses();
        });

        semesterFilterEl.addEventListener('change', () => {
            const college = collegeFilterEl.value;
            const programme = programmeFilterEl.value;
            const level = levelFilterEl.value;
            const semester = semesterFilterEl.value;
            persistSelectionState({ college, programme, level, semester });
            renderCourses();
        });

        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', () => {
                resetPageFilters('home');
            });
        }

        const savedState = getStoredFilterState();
        const collegeValue = savedState.college || '';
        const programmeValue = savedState.programme || '';
        const levelValue = savedState.level || '';
        const semesterValue = savedState.semester || '';

        if (collegeValue) {
            setSelectValue(collegeFilterEl, collegeValue);
            collegeFilterEl.dispatchEvent(new Event('change'));
            setTimeout(() => {
                if (programmeValue) {
                    setSelectValue(programmeFilterEl, programmeValue);
                    programmeFilterEl.dispatchEvent(new Event('change'));
                    setTimeout(() => {
                        if (levelValue) {
                            setSelectValue(levelFilterEl, levelValue);
                            levelFilterEl.dispatchEvent(new Event('change'));
                            setTimeout(() => {
                                if (semesterValue) {
                                    setSelectValue(semesterFilterEl, semesterValue);
                                    semesterFilterEl.dispatchEvent(new Event('change'));
                                }
                            }, 60);
                        }
                    }, 60);
                }
            }, 60);
        } else {
            renderCourses();
        }
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





