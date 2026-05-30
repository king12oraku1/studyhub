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
    MTH102: {
        2022: "assets/past-questions/MTH102_2022.pdf",
        2023: "assets/past-questions/MTH102_2023.pdf",
        2024: "assets/past-questions/MTH102_2024.pdf"
    },
    PHY102: {
        2023: "assets/past-questions/PHY102_2023.pdf",
        2024: "assets/past-questions/PHY102_2024.pdf"
    },
    GST102: {
        2023: "assets/past-questions/GST102_2023.pdf",
        2024: "assets/past-questions/GST102_2024.pdf"
    }
};