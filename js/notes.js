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

   IMPORTANT — DUPLICATES
   ======================
   JavaScript objects cannot have two keys with the same name.
   Only the LAST definition wins in the browser. Keep each
   course code ONCE. A course offered in both semesters would
   need two different codes (e.g. ENG101A / ENG101B) or be
   represented by its actual distinct semester code from the
   course catalog.

   IMPORTANT
   =========
   - ONLY store PDF file paths here
   - NEVER paste note content inside this file
   - The website will automatically display the PDF
   ====================================== */

const NotesDatabase = {

    /* ── LEVEL 100 — FIRST SEMESTER ─────────────────── */

    GST111: {
        level: "100",
        semester: "First",
        title: "Communication in English",
        pdf: "assets/notes/GST111.pdf"
    },
    MTH101: {
        level: "100",
        semester: "First",
        title: "Elementary Mathematics I",
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
        title: "Introduction to Computer Science",
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
    PHY107: {
        level: "100",
        semester: "First",
        title: "General Practical Physics I",
        pdf: "assets/notes/PHY107.pdf"
    },
    BUT_CPE103: {
        level: "100",
        semester: "First",
        title: "Introduction to Computer Programming",
        pdf: "assets/notes/BUT_CPE103.pdf"
    },
    BUT_MTH103: {
        level: "100",
        semester: "First",
        title: "Elementary Mathematics III",
        pdf: "assets/notes/BUT_MTH103.pdf"
    },
    BUT_STA112: {
        level: "100",
        semester: "First",
        title: "Probability I",
        pdf: "assets/notes/BUT_STA112.pdf"
    },
    BUT_CHM101: {
        level: "100",
        semester: "First",
        title: "General Chemistry I",
        pdf: "assets/notes/BUT_CHM101.pdf"
    },
    BUT_CHM107: {
        level: "100",
        semester: "First",
        title: "General Practical Chemistry I",
        pdf: "assets/notes/BUT_CHM107.pdf"
    },
    CHM107: {
        level: "100",
        semester: "First",
        title: "General Practical Chemistry I",
        pdf: "assets/notes/CHM107.pdf"
    },
    CHM101: {
        level: "100",
        semester: "First",
        title: "General Chemistry I",
        pdf: "assets/notes/CHM101.pdf"
    },
    BUT_ICT115: {
        level: "100",
        semester: "First",
        title: "AutoCAD 2D",
        pdf: "assets/notes/BUT_ICT115.pdf"
    },
    BUT_ICT113: {
        level: "100",
        semester: "First",
        title: "Word Level 2, PowerPoint 2 & Excel 1",
        pdf: "assets/notes/BUT_ICT113.pdf"
    },
    BUT_LIS107: {
        level: "100",
        semester: "First",
        title: "Use of Library and Study Skills",
        pdf: "assets/notes/BUT_LIS107.pdf"
    },
    BUT_FST101: {
        level: "100",
        semester: "First",
        title: "Technical Drawing for Food Technologist",
        pdf: "assets/notes/BUT_FST101.pdf"
    },

    /* ── LEVEL 100 — SECOND SEMESTER ────────────────── */

    GST112: {
        level: "100",
        semester: "Second",
        title: "Nigerian People and Culture",
        pdf: "assets/notes/GST112.pdf"
    },
    MTH102: {
        level: "100",
        semester: "Second",
        title: "Elementary Mathematics II",
        pdf: "assets/notes/MTH102.pdf"
    },
    PHY102: {
        level: "100",
        semester: "Second",
        title: "General Physics II: Behaviour of Matter",
        pdf: "assets/notes/PHY102.pdf"
    },
    COS102: {
        level: "100",
        semester: "Second",
        title: "Problem Solving",
        pdf: "assets/notes/BUT-CSC 104 NOTE.pdf"
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
    BUT_ICT132: {
        level: "100",
        semester: "Second",
        title: "CompTIA A+ 2",
        pdf: "assets/notes/BUT_ICT132.pdf"
    },
    PHY108: {
        level: "100",
        semester: "Second",
        title: "General Practical Physics II",
        pdf: "assets/notes/PHY108.pdf"
    },
    GET102: {
        level: "100",
        semester: "Second",
        title: "Engineering Graphics and Solid Modelling",
        pdf: "assets/notes/GET102.pdf"
    },
    CPE112: {
        level: "100",
        semester: "Second",
        title: "Introduction to Computer Engineering",
        pdf: "assets/notes/CPE112.pdf"
    },
    BUT_CHM102: {
        level: "100",
        semester: "Second",
        title: "General Chemistry II",
        pdf: "assets/notes/BUT_CHM102.pdf"
    },
    BUT_CHM108: {
        level: "100",
        semester: "Second",
        title: "General Practical Chemistry II",
        pdf: "assets/notes/BUT_CHM108.pdf"
    },
    GET101: {
        level: "100",
        semester: "Second",
        title: "Engineer in Society",
        pdf: "assets/notes/GET101.pdf"
    },
    BUT_PHY104: {
        level: "100",
        semester: "Second",
        title: "General Physics IV",
        pdf: "assets/notes/BUT_PHY104.pdf"
    },
    BIO101: {
        level: "100",
        semester: "Second",
        title: "General Biology I",
        pdf: "assets/notes/BIO101.pdf"
    },
    BIO107: {
        level: "100",
        semester: "Second",
        title: "General Biology Practical I",
        pdf: "assets/notes/BIO107.pdf"
    },
    BME102: {
        level: "100",
        semester: "Second",
        title: "Introduction to Biomedical Engineering",
        pdf: "assets/notes/BME102.pdf"
    },
    BUT_ICT116: {
        level: "100",
        semester: "Second",
        title: "AutoCAD 3D",
        pdf: "assets/notes/BUT_ICT116.pdf"
    },
    CHM102: {
        level: "100",
        semester: "Second",
        title: "General Chemistry II",
        pdf: "assets/notes/CHM102.pdf"
    },
    CHM108: {
        level: "100",
        semester: "Second",
        title: "General Chemistry Practical II",
        pdf: "assets/notes/CHM108.pdf"
    },
    MEE101: {
        level: "100",
        semester: "Second",
        title: "Introduction to Mechanical Engineering",
        pdf: "assets/notes/MEE101.pdf"
    },
    MCE101: {
        level: "100",
        semester: "Second",
        title: "Introduction to Mechatronics Engineering",
        pdf: "assets/notes/MCE101.pdf"
    },

    /* ── LEVEL 200 — FIRST SEMESTER ─────────────────── */

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

    /* ── LEVEL 200 — SECOND SEMESTER ────────────────── */

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

    /* ── LEVEL 300 — FIRST SEMESTER ─────────────────── */

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

    /* ── LEVEL 300 — SECOND SEMESTER ────────────────── */

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

    /* ── LEVEL 400 — FIRST SEMESTER ─────────────────── */

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

    /* ── LEVEL 500 — FIRST SEMESTER ─────────────────── */

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

    /* ── LEVEL 500 — SECOND SEMESTER ────────────────── */

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
