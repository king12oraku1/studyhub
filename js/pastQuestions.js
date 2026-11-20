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

// Note: Past Questions page UI is handled by app.js setupPastQuestionsPage()

