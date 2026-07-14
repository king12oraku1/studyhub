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
    MTH101: {
        level: "100",
        semester: "First",
        title: "Elementry Mathematics I",
        pdf: "assets/notes/MTH101.pdf"
    },
    PHY101: {
        level: "100",
        semester: "First",
        title: "General Physics I: Mechanics",
        pdf: "assets/notes/PHY101.pdf"
    },
    STA111: {
        level: "100",
        semester: "First",
        title: "Descriptive Statistics",
        pdf: "assets/notes/STA11.pdf"
    },
    COS101: {
        level: "100",
        semester: "First",
        title: "Intoduction to Computing Sciences",
        pdf: "assets/notes/COS101.pdf"
    },
    BUT_ICT131: {
        level: "100",
        semester: "First",
        title: "CompTIA A+",
        pdf: "assets/notes/BUT_ICT131.pdf"
    },
    BUT_BIO101: {
        level: "100",
        semester: "First",
        title: "General Biology I",
        pdf: "assets/notes/BUT_BIO101.pdf"
    },
    BUT_GST107: {
        level: "100",
        semester: "First",
        title: "Use of Library and Study Skills",
        pdf: "assets/notes/BUT_GST107.pdf"
    },
    GST111: {
        level: "100",
        semester: "First",
        title: "Communication in English",
        pdf: "assets/notes/GST111.pdf"
    },
    MTH102: {
        level: "100",
        semester: "Second",
        title: "Elementry Mathematics II",
        pdf: "assets/notes/MTH102.pdf"
    },
    PHY102: {
        level: "100",
        semester: "Second",
        title: "General Physics II: Behaviour of Matter",
        pdf: "assets/notes/PHY102.pdf"
    },
    GST112: {
        level: "100",
        semester: "Second",
        title: "Nigerian People and Culture",
        pdf: "assets/notes/GST112.pdf"
    },
    COS102: {
        level: "100",
        semester: "Second",
        title: "Problem Solving",
        pdf: "assets/notes/BUT-CSC 104 NOT.pdf"
    },
    BUT_CSC104: {
        level: "100",
        semester: "Second",
        title: "Computer Hardware & Assembly Language Programming",
        pdf: "assets/notes/BUT-CSC 104 NOTE.pdf"
    },
    BUT_BIO102: {
        level: "100",
        semester: "Second",
        title: "General Biology II",
        pdf: "assets/notes/BUT_BIO102.pdf"
    },
    BUT_ICT118: {
        level: "100",
        semester: "Second",
        title: "Web Design and Development",
        pdf: "assets/notes/BUT_ICT118.pdf"
    },
    BUT_ICT118: {
        level: "100",
        semester: "Second",
        title: "Web Design and Development",
        pdf: "assets/notes/BUT_ICT118.pdf"
    },
    ENT211: {
        level: "200",
        semester: "First",
        title: "Entrepreneurship and Innovation",
        pdf: "assets/notes/ENT211.pdf"
    },

    MTH201: {
        level: "200",
        semester: "First",
        title: "Mathematical Methods I",
        pdf: "assets/notes/MTH201.pdf"
    },

    COS201: {
        level: "200",
        semester: "First",
        title: "Computer Programming I",
        pdf: "assets/notes/COS201.pdf"
    },

    COS203: {
        level: "200",
        semester: "First",
        title: "Discrete Structures",
        pdf: "assets/notes/COS203.pdf"
    },

    IFT211: {
        level: "200",
        semester: "First",
        title: "Digital Logic Design",
        pdf: "assets/notes/IFT211.pdf"
    },

    SEN201: {
        level: "200",
        semester: "First",
        title: "Introduction to Software Engineering",
        pdf: "assets/notes/SEN201.pdf"
    },

    IFT203: {
        level: "200",
        semester: "First",
        title: "Introduction to Web Technologies",
        pdf: "assets/notes/IFT203.pdf"
    },

    BUT_CSC206: {
        level: "200",
        semester: "First",
        title: "Introduction to Operating System",
        pdf: "assets/notes/BUT_CSC206.pdf"
    },

    BUT_ICT235: {
        level: "200",
        semester: "First",
        title: "Reactjs & Angularjs",
        pdf: "assets/notes/BUT_ICT235.pdf"
    },
    IFT205: {
        level: "200",
        semester: "First",
        title: "Introduction to Information Technology",
        pdf: "assets/notes/IFT205.pdf"
    },
    BUT_GST207: {
        level: "200",
        semester: "First",
        title: "Life and Works of Olusegun Obasanjo I",
        pdf: "assets/notes/BUT_GST207.pdf"
    },

    GST212: {
        level: "200",
        semester: "Second",
        title: "Philosophy, Logic and Human Existence",
        pdf: "assets/notes/GST212.pdf"
    },

    MTH202: {
        level: "200",
        semester: "Second",
        title: "Elementary Differential Equations",
        pdf: "assets/notes/MTH202.pdf"
    },

    COS202: {
        level: "200",
        semester: "Second",
        title: "Computer Programming II",
        pdf: "assets/notes/COS202.pdf"
    },

    IFT212: {
        level: "200",
        semester: "Second",
        title: "Computer Architecture and Organization",
        pdf: "assets/notes/IFT212.pdf"
    },

    NS202: {
        level: "200",
        semester: "Second",
        title: "Human-Computer Interface",
        pdf: "assets/notes/NS202.pdf"
    },

    BUT_CSC204: {
        level: "200",
        semester: "Second",
        title: "Compiler Design and Construction",
        pdf: "assets/notes/BUT_CSC204.pdf"
    },

    BUT_CSC208: {
        level: "200",
        semester: "Second",
        title: "Introduction to Computer Networks",
        pdf: "assets/notes/BUT_CSC208.pdf"
    },

    BUT_CSC210: {
        level: "200",
        semester: "Second",
        title: "IT and Society",
        pdf: "assets/notes/BUT_CSC210.pdf"
    },

    BUT_GST208: {
        level: "200",
        semester: "Second",
        title: "Life and Works of Olusegun Obasanjo II",
        pdf: "assets/notes/BUT_GST208.pdf"
    },

    BUT_ICT236: {
        level: "200",
        semester: "Second",
        title: "NodeJS & NoSQL Database",
        pdf: "assets/notes/BUT_ICT236.pdf"
    },
    NS204: {
        level: "200",
        semester: "Second",
        title: "System Analysis and Design",
        pdf: "assets/notes/NS204.pdf"
    },
    CSC301: {
        level: "300",
        semester: "First",
        title: "Data Structures",
        pdf: "assets/notes/CSC301.pdf"
    },

    CSC309: {
        level: "300",
        semester: "First",
        title: "Artificial Intelligence",
        pdf: "assets/notes/CSC309.pdf"
    },

    CYB201: {
        level: "300",
        semester: "First",
        title: "Introduction to Cybersecurity and Strategy",
        pdf: "assets/notes/CYB201.pdf"
    },

    ICT305: {
        level: "300",
        semester: "First",
        title: "Data Communication System & Network",
        pdf: "assets/notes/ICT305.pdf"
    },

    SEN301: {
        level: "300",
        semester: "First",
        title: "Object-Oriented Analysis and Design",
        pdf: "assets/notes/SEN301.pdf"
    },

    BUT_CSC303: {
        level: "300",
        semester: "First",
        title: "Numerical Computations",
        pdf: "assets/notes/BUT_CSC303.pdf"
    },

    BUT_CSC311: {
        level: "300",
        semester: "First",
        title: "Object-Oriented Programming",
        pdf: "assets/notes/BUT_CSC311.pdf"
    },

    BUT_ICT323: {
        level: "300",
        semester: "First",
        title: "Python Programming",
        pdf: "assets/notes/BUT_ICT323.pdf"
    },
    BUT_BIO209: {
        level: "300",
        semester: "First",
        title: "Introductory Genetics",
        pdf: "assets/notes/BUT_BIO209.pdf"
    },

    BUT_IFT301: {
        level: "300",
        semester: "First",
        title: "Introduction to Internet Technology",
        pdf: "assets/notes/BUT_IFT301.pdf"
    },

    IFT304: {
        level: "300",
        semester: "Second",
        title: "Web Development Using Content Management System",
        pdf: "assets/notes/IFT304.pdf"
    },

    IFT342: {
        level: "300",
        semester: "Second",
        title: "Network Servers and Infrastructure",
        pdf: "assets/notes/IFT342.pdf"
    },

    IFT308: {
        level: "300",
        semester: "Second",
        title: "Ethics and Legal Issues in IT",
        pdf: "assets/notes/IFT308.pdf"
    },
    GST312: {
        level: "300",
        semester: "Second",
        title: "Peace and Conflict Resolution",
        pdf: "assets/notes/GST312.pdf"
    },

    ENT312: {
        level: "300",
        semester: "Second",
        title: "Venture Creation",
        pdf: "assets/notes/ENT312.pdf"
    },

    CSC308: {
        level: "300",
        semester: "Second",
        title: "Operating Systems",
        pdf: "assets/notes/CSC308.pdf"
    },

    CSC322: {
        level: "300",
        semester: "Second",
        title: "Computer Science Innovation and New Technologies",
        pdf: "assets/notes/CSC322.pdf"
    },

    DTS304: {
        level: "300",
        semester: "Second",
        title: "Data Management I",
        pdf: "assets/notes/DTS304.pdf"
    },

    IFT302: {
        level: "300",
        semester: "Second",
        title: "Web Application Development",
        pdf: "assets/notes/IFT302.pdf"
    },

    BUT_CSC304: {
        level: "300",
        semester: "Second",
        title: "Operations Research",
        pdf: "assets/notes/BUT_CSC304.pdf"
    },

    BUT_ICT324: {
        level: "300",
        semester: "Second",
        title: "Python Programming for Machine Learning I",
        pdf: "assets/notes/BUT_ICT324.pdf"
    },
    COS409: {
        level: "400",
        semester: "First",
        title: "Research Methodology and Technical Report Writing",
        pdf: "assets/notes/COS409.pdf"
    },

    CSC401: {
        level: "400",
        semester: "First",
        title: "Algorithms and Complexity Analysis",
        pdf: "assets/notes/CSC401.pdf"
    },

    INS401: {
        level: "400",
        semester: "First",
        title: "Project Management",
        pdf: "assets/notes/INS401.pdf"
    },

    CSC402: {
        level: "400",
        semester: "First",
        title: "Ethics and Legal Issues in Computer Science",
        pdf: "assets/notes/CSC402.pdf"
    },

    BUT_CSC407: {
        level: "400",
        semester: "First",
        title: "Computer Graphics and Publishing",
        pdf: "assets/notes/BUT_CSC407.pdf"
    },

    BUT_CSC403: {
        level: "400",
        semester: "First",
        title: "Automata Theory and Computability",
        pdf: "assets/notes/BUT_CSC403.pdf"
    },

    BUT_CSC405: {
        level: "400",
        semester: "First",
        title: "Fault-Tolerant Computing",
        pdf: "assets/notes/BUT_CSC405.pdf"
    },

    BUT_CSC409: {
        level: "400",
        semester: "First",
        title: "Digital Design and Microprocessors",
        pdf: "assets/notes/BUT_CSC409.pdf"
    },

    BUT_ICT423: {
        level: "400",
        semester: "First",
        title: "Python Programming for Machine Learning II (Deep Learning)",
        pdf: "assets/notes/BUT_ICT423.pdf"
    },
    IFT403: {
        level: "400",
        semester: "First",
        title: "Mobile and Pervasive Computing",
        pdf: "assets/notes/IFT403.pdf"
    },

    CSC432: {
        level: "400",
        semester: "First",
        title: "Distributed Computing Systems",
        pdf: "assets/notes/CSC432.pdf"
    },

    BUT_IFT405: {
        level: "400",
        semester: "First",
        title: "Management Information System",
        pdf: "assets/notes/BUT_IFT405.pdf"
    },

    BUT_CSC411: {
        level: "400",
        semester: "First",
        title: "Database Management System",
        pdf: "assets/notes/BUT_CSC411.pdf"
    },

    BUT_IFT503: {
        level: "500",
        semester: "First",
        title: "Global IT Management and Professional Issues",
        pdf: "assets/notes/BUT_IFT503.pdf"
    },

    BUT_IFT507: {
        level: "500",
        semester: "First",
        title: "Data Warehousing Systems",
        pdf: "assets/notes/BUT_IFT507.pdf"
    },

    BUT_IFT513: {
        level: "500",
        semester: "First",
        title: "Introduction to Bio-informatics",
        pdf: "assets/notes/BUT_IFT513.pdf"
    },

    BUT_IFT515: {
        level: "500",
        semester: "First",
        title: "Special Topics in Information Technology",
        pdf: "assets/notes/BUT_IFT515.pdf"
    },
    BUT_CSC501: {
        level: "500",
        semester: "First",
        title: "Computer Networking II",
        pdf: "assets/notes/BUT_CSC501.pdf"
    },

    BUT_CSC515: {
        level: "500",
        semester: "First",
        title: "Special Topics in Computing Technology",
        pdf: "assets/notes/BUT_CSC515.pdf"
    },

    BUT_IFT509: {
        level: "500",
        semester: "First",
        title: "Fuzzy Logic and Artificial Neural Network",
        pdf: "assets/notes/BUT_IFT509.pdf"
    },

    BUT_CSC505: {
        level: "500",
        semester: "First",
        title: "Computer System Performance Evaluation",
        pdf: "assets/notes/BUT_CSC505.pdf"
    },

    BUT_CSC503: {
        level: "500",
        semester: "First",
        title: "Microprocessor Systems",
        pdf: "assets/notes/BUT_CSC503.pdf"
    },

    BUT_CSC507: {
        level: "500",
        semester: "First",
        title: "Embedded System",
        pdf: "assets/notes/BUT_CSC507.pdf"
    },

    BUT_CSC509: {
        level: "500",
        semester: "First",
        title: "Queuing System",
        pdf: "assets/notes/BUT_CSC509.pdf"
    },

    BUT_CSC513: {
        level: "500",
        semester: "First",
        title: "Computer and Economics",
        pdf: "assets/notes/BUT_CSC513.pdf"
    },

    BUT_ICT521: {
        level: "500",
        semester: "First",
        title: "CCNA",
        pdf: "assets/notes/BUT_ICT521.pdf"
    },

    BUT_IFT502: {
        level: "500",
        semester: "Second",
        title: "Electronic Commerce Technologies",
        pdf: "assets/notes/BUT_IFT502.pdf"
    },

    BUT_SEN510: {
        level: "500",
        semester: "Second",
        title: "Open Source Software",
        pdf: "assets/notes/BUT_SEN510.pdf"
    },

    BUT_CSC504: {
        level: "500",
        semester: "Second",
        title: "Expert Systems",
        pdf: "assets/notes/BUT_CSC504.pdf"
    },

    CYB404: {
        level: "500",
        semester: "Second",
        title: "Cloud Computing Security",
        pdf: "assets/notes/CYB404.pdf"
    },

    DTS316: {
        level: "500",
        semester: "Second",
        title: "Probability for Data Science",
        pdf: "assets/notes/DTS316.pdf"
    },

    BUT_ICT522: {
        level: "500",
        semester: "Second",
        title: "Android Mobile Application Development",
        pdf: "assets/notes/BUT_ICT522.pdf"
    },
    IFT310: {
        level: "500",
        semester: "Second",
        title: "Mobile Application Development",
        pdf: "assets/notes/IFT310.pdf"
    },

    IFT322: {
        level: "500",
        semester: "Second",
        title: "IT Innovation and Entrepreneurship",
        pdf: "assets/notes/IFT322.pdf"
    },

    IFT410: {
        level: "500",
        semester: "Second",
        title: "System Integration and Architecture",
        pdf: "assets/notes/IFT410.pdf"
    },

    IFT442: {
        level: "500",
        semester: "Second",
        title: "Wireless Communications and Networking",
        pdf: "assets/notes/IFT442.pdf"
    },

    BUT_IFT506: {
        level: "500",
        semester: "Second",
        title: "Information System Security",
        pdf: "assets/notes/BUT_IFT506.pdf"
    },
};

