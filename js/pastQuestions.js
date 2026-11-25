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

   IMPORTANT
   =========
   - ONLY store PDF file paths here
   - NEVER paste question content inside this file
   - The website will automatically display the PDF
   ====================================== */

const PastQuestionsDatabase = {

    /* ── Courses with real past-question PDFs ───────── */

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
    MTH102: {
        2022: "assets/past-questions/MTH102_2022.pdf",
        2023: "assets/past-questions/MTH102_2023.pdf",
        2024: "assets/past-questions/MTH102_2024.pdf"
    },
};

/*
   CourseMeta — derived from NotesDatabase so level/semester
   are always consistent with the notes catalog.
   app.js reads NotesDatabase directly for this metadata;
   CourseMeta is kept here as a lightweight fallback reference.
*/
const CourseMeta = (() => {
    const meta = {};
    if (typeof NotesDatabase !== 'undefined') {
        Object.keys(NotesDatabase).forEach(code => {
            meta[code] = {
                level:    NotesDatabase[code].level,
                semester: NotesDatabase[code].semester
            };
        });
    }
    return meta;
})();

// Note: Past Questions page UI is handled by app.js setupPastQuestionsPage()
