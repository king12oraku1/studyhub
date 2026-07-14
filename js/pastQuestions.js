/* ======================================
   STUDYHUB PAST QUESTIONS DATABASE
   ======================================

   HOW TO ADD PAST QUESTIONS
   =========================
   1. Copy your PDF file into: assets/past-questions/
   2. Name your file like this: COURSECODE_YEAR.pdf
      Example: COS102_2024.pdf
   3. Open this file (js/pastQuestions.js)
   4. Find the course code or add a new one
   5. Add the year and file path inside the curly braces:

      COURSE_CODE: {
          2024: "assets/past-questions/COURSE_CODE_2024.pdf"
      }

   6. Save the file and refresh your browser.

   HOW TO EDIT PAST QUESTIONS
   ==========================
   - Change the file path inside the quotes
   - Make sure the PDF file exists in assets/past-questions/

   HOW TO DELETE PAST QUESTIONS
   ============================
   - Remove the year line you want to delete
   - Or remove the entire course block if removing all years

   IMPORTANT
   =========
   - ONLY store PDF file paths here
   - NEVER paste question content inside this file
   - The website will automatically display the PDF
   ====================================== */

const PastQuestionsDatabase = {
    // COS102: {
    //     2022: "assets/past-questions/COS102_2022.pdf",
    //     2023: "assets/past-questions/COS102_2023.pdf",
    //     2024: "assets/past-questions/COS102_2024.pdf"
    // },
    MTH101: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    PHY101: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    STA111: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    COS101: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    BUT_ICT131: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    BUT_BIO101: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    BUT_GST107: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    GST111: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    MTH102: {
        2022: "assets/notes/BUT-CSC 104 NTE.pdf",
        2023: "assets/notes/BUT-CSC 104 NTE.pdf",
        2024: "assets/notes/BUT-CSC 104 NOE.pdf"
    },
    PHY102: {
        2023: "assets/past-questions/PHY102_2023.pdf",
        2024: "assets/past-questions/PHY102_2024.pdf"
    },
    GST102: {
        2023: "assets/past-questions/GST102_2023.pdf",
        2024: "assets/past-questions/GST102_2024.pdf"
    },
    COS102: {
        2022: "assets/past-questions/COS102_2022.pdf",
        2023: "assets/past-questions/COS102_2023.pdf",
        2024: "assets/past-questions/COS102_2024.pdf"
    },
    BUT_CSC104: {
        2022: "assets/past-questions/BUT_CSC104_2022.pdf",
        2023: "assets/past-questions/BUT_CSC104_2023.pdf",
        2024: "assets/past-questions/BUT_CSC104_2024.pdf"
    },
    BUT_BIO102: {
        2022: "assets/past-questions/BUT_BIO102_2022.pdf",
        2023: "assets/past-questions/BUT_BIO102_2023.pdf",
        2024: "assets/past-questions/BUT_BIO102_2024.pdf"
    },
    BUT_ICT118: {
        2022: "assets/past-questions/BUT_ICT118_2022.pdf",
        2023: "assets/past-questions/BUT_ICT118_2023.pdf",
        2024: "assets/past-questions/BUT_ICT118_2024.pdf"
    },

};

// Optional mapping of courses to metadata like level and semester
const CourseMeta = {
    // Example: 'COS102': { level: '100', semester: '1' }
    MTH101: { level: '100', semester: 'First' },
    PHY101: { level: '100', semester: 'First' },
    STA111: { level: '100', semester: 'First' },
    COS101: { level: '100', semester: 'First' },
    BUT_ICT131: { level: '100', semester: 'First' },
    BUT_BIO101: { level: '100', semester: 'First' },
    BUT_GST107: { level: '100', semester: 'First' },
    GST111: { level: '100', semester: 'First' },
    MTH102: { level: '100', semester: 'Second' },
    PHY102: { level: '100', semester: 'Second' },
    GST102: { level: '100', semester: 'Second' },
    COS102: { level: '100', semester: 'Second' },
    BUT_CSC104: { level: '100', semester: 'Second' },
    BUT_BIO102: { level: '100', semester: 'Second' },
    BUT_ICT118: { level: '100', semester: 'Second' }
};

// DOM elements
const pqLevel = document.getElementById('pqLevel');
const pqSemester = document.getElementById('pqSemester');
const pqCourse = document.getElementById('pqCourse');
const pqYear = document.getElementById('pqYear');
const pqViewer = document.getElementById('pqViewer');

function initPastQuestionsUI() {
    populateLevelOptions();
    populateSemesterOptions();
    populateCourseOptions();
    pqLevel.addEventListener('change', handleFilterChange);
    pqSemester.addEventListener('change', handleFilterChange);
    pqCourse.addEventListener('change', handleCourseChange);
    pqYear.addEventListener('change', handleYearChange);
}

function populateLevelOptions() {
    const levels = Array.from(new Set(Object.values(CourseMeta).map(m => m.level))).sort();
    levels.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l;
        opt.textContent = l;
        pqLevel.appendChild(opt);
    });
}

function populateSemesterOptions() {
    const semesters = Array.from(new Set(Object.values(CourseMeta).map(m => m.semester))).sort();
    semesters.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        pqSemester.appendChild(opt);
    });
}

function populateCourseOptions(filteredCourses) {
    // preserve selected value
    const prev = pqCourse.value || '';
    pqCourse.innerHTML = '<option value="">Select Course</option>';
    const courses = filteredCourses || Object.keys(PastQuestionsDatabase).sort();
    courses.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        pqCourse.appendChild(opt);
    });
    // restore if still available
    if (prev) pqCourse.value = prev;
}

function handleFilterChange() {
    const level = pqLevel.value;
    const semester = pqSemester.value;
    let filtered = Object.keys(PastQuestionsDatabase);
    if (level) filtered = filtered.filter(c => CourseMeta[c] && CourseMeta[c].level === level);
    if (semester) filtered = filtered.filter(c => CourseMeta[c] && CourseMeta[c].semester === semester);
    populateCourseOptions(filtered);
    // clear year and viewer
    pqYear.innerHTML = '<option value="">Select Year</option>';
    pqViewer.innerHTML = '<p class="placeholder-text">Select a course and year to view past questions</p>';
}

function handleCourseChange() {
    const course = pqCourse.value;
    pqYear.innerHTML = '<option value="">Select Year</option>';
    if (!course) return;
    const years = Object.keys(PastQuestionsDatabase[course] || {}).sort();
    years.forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        pqYear.appendChild(opt);
    });
    pqViewer.innerHTML = '<p class="placeholder-text">Select a year to view the PDF</p>';
}

function handleYearChange() {
    const course = pqCourse.value;
    const year = pqYear.value;
    if (!course || !year) return;
    const path = PastQuestionsDatabase[course] && PastQuestionsDatabase[course][year];
    if (!path) {
        pqViewer.innerHTML = '<p class="placeholder-text">PDF not found for selected course/year</p>';
        return;
    }
    // Show PDF using an iframe for simplicity
    pqViewer.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = path;
    iframe.style.width = '100%';
    iframe.style.height = '800px';
    iframe.onload = () => console.log('PDF loaded', path);
    pqViewer.appendChild(iframe);
}

// initialize UI when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPastQuestionsUI);
} else {
    initPastQuestionsUI();
}