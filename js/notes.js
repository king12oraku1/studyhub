/* ======================================
   STUDYHUB NOTES DATABASE
   ======================================

   HOW TO ADD NOTES
   ================
   1. Copy your PDF file into: assets/notes/
   2. Open this file (js/notes.js)
   3. Add a new entry inside NotesDatabase following this format:

      COURSE_CODE: {
          level: "100",
          semester: "First",
          title: "Course Title Here",
          pdf: "assets/notes/COURSE_CODE.pdf"
      }

   4. Save the file and refresh your browser.

   HOW TO EDIT NOTES
   =================
   - Change the text inside the quotes
   - Update the pdf path if your filename changes

   HOW TO DELETE NOTES
   ===================
   - Remove the entire course block including the code and curly braces
   - Make sure to remove the comma after the closing brace if it was the last item

   IMPORTANT
   =========
   - ONLY store PDF file paths here
   - NEVER paste note content inside this file
   - The website will automatically display the PDF
   ====================================== */

const NotesDatabase = {
    // COS102: {
    //     level: "100",
    //     semester: "First",
    //     title: "Introduction to Computing",
    //     pdf: "assets/notes/COS102.pdf"
    // },
    MTH102: {
        level: "100",
        semester: "First",
        title: "Elementry Mathematics II",
        pdf: "assets/notes/MTH102.pdf"
    },
    PHY102: {
        level: "100",
        semester: "First",
        title: "General Physics II: Behaviour of Matter",
        pdf: "assets/notes/PHY102.pdf"
    },
    GST112: {
        level: "100",
        semester: "First",
        title: "Nigerian People and Culture",
        pdf: "assets/notes/GST102.pdf"
    },
    // COS101: {
    //     level: "100",
    //     semester: "Second",
    //     title: "Programming Fundamentals",
    //     pdf: "assets/notes/COS101.pdf"
    // },
    // MTH103: {
    //     level: "100",
    //     semester: "Second",
    //     title: "Calculus II",
    //     pdf: "assets/notes/MTH103.pdf"
    // }
};