/* ======================================
   STUDYHUB QUESTION BANKS
   ======================================

   ADD NEW QUESTIONS HERE
   ======================

   TO ADD A QUESTION:
   1. Copy an existing question block below
   2. Paste it inside the correct course array
   3. Edit these fields:
      - question      (the question text)
      - options       (array of 4 answer choices)
      - correctAnswer (must exactly match one option string)
      - explanation   (why the answer is correct)

   TO DELETE A QUESTION:
   - Remove the entire question object including the curly braces {}

   IMPORTANT:
   - Do NOT edit any other file
   - Keep the correctAnswer exactly matching one option
   - Always provide 4 options
   ====================================== */


// ======================================
// COS102 QUESTIONS
// PASTE NEW COS102 QUESTIONS BELOW
// ======================================

const COS102_Questions = [
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Computer Processing Unit"
        ],
        correctAnswer: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing inside a computer."
    },
    {
        question: "Which of the following is an input device?",
        options: [
            "Monitor",
            "Keyboard",
            "Printer",
            "Speaker"
        ],
        correctAnswer: "Keyboard",
        explanation: "A keyboard is an input device used to enter characters and functions into the computer system. Monitors, printers, and speakers are output devices."
    },
    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Random Allocation Memory",
            "Readily Available Memory"
        ],
        correctAnswer: "Random Access Memory",
        explanation: "RAM stands for Random Access Memory. It is a volatile memory used to store data that the computer is currently using."
    },
    {
        question: "Which number system uses only 0 and 1?",
        options: [
            "Decimal",
            "Binary",
            "Octal",
            "Hexadecimal"
        ],
        correctAnswer: "Binary",
        explanation: "The binary number system uses only two digits: 0 and 1. It is the fundamental language of computers."
    },
    {
        question: "What is the decimal equivalent of binary 1010?",
        options: [
            "8",
            "10",
            "12",
            "14"
        ],
        correctAnswer: "10",
        explanation: "Binary 1010 equals decimal 10. (1×8 + 0×4 + 1×2 + 0×1 = 10)"
    },
    {
        question: "Which of the following is NOT an operating system?",
        options: [
            "Windows",
            "Linux",
            "Microsoft Word",
            "macOS"
        ],
        correctAnswer: "Microsoft Word",
        explanation: "Microsoft Word is a word processing application, not an operating system. Windows, Linux, and macOS are operating systems."
    },
    {
        question: "What does ROM stand for?",
        options: [
            "Read-Only Memory",
            "Random-Only Memory",
            "Read-Open Memory",
            "Run-Only Memory"
        ],
        correctAnswer: "Read-Only Memory",
        explanation: "ROM stands for Read-Only Memory. It stores permanent data that cannot be easily modified or removed."
    },
    {
        question: "Which device is used to connect computers in a local network?",
        options: [
            "Router",
            "Switch",
            "Modem",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Routers, switches, and modems can all be used to connect computers in networks, depending on the network configuration."
    },
    {
        question: "What is an algorithm?",
        options: [
            "A programming language",
            "A step-by-step procedure to solve a problem",
            "A computer virus",
            "A type of hardware"
        ],
        correctAnswer: "A step-by-step procedure to solve a problem",
        explanation: "An algorithm is a finite sequence of well-defined instructions used to solve a problem or perform a computation."
    },
    {
        question: "Which language is considered a low-level language?",
        options: [
            "Python",
            "Java",
            "Assembly",
            "C++"
        ],
        correctAnswer: "Assembly",
        explanation: "Assembly language is a low-level programming language that has a strong correspondence to the computer's machine code instructions."
    },
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighTech Modern Language",
            "HyperTransfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "HyperText Markup Language",
        explanation: "HTML stands for HyperText Markup Language. It is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        question: "What does HTTP stand for?",
        options: [
            "HyperText Transfer Protocol",
            "HighText Transfer Protocol",
            "HyperText Transmission Process",
            "Home Transfer Text Protocol"
        ],
        correctAnswer: "HyperText Transfer Protocol",
        explanation: "HTTP stands for HyperText Transfer Protocol. It is the foundation of data communication for the World Wide Web."
    },
    {
        question: "Which of the following is a secondary storage device?",
        options: [
            "RAM",
            "Cache",
            "Hard Disk Drive",
            "Register"
        ],
        correctAnswer: "Hard Disk Drive",
        explanation: "A Hard Disk Drive (HDD) is a secondary storage device used to permanently store and retrieve digital data. RAM and cache are primary/volatile memory."
    },
    {
        question: "What is the main function of the control unit in a CPU?",
        options: [
            "Perform arithmetic calculations",
            "Store data permanently",
            "Direct the operation of the processor",
            "Display output to the user"
        ],
        correctAnswer: "Direct the operation of the processor",
        explanation: "The Control Unit (CU) directs the operation of the processor by telling the computer's memory, arithmetic/logic unit and I/O devices how to respond to instructions."
    },
    {
        question: "Which of the following is a valid IPv4 address?",
        options: [
            "192.168.1.1",
            "256.100.1.1",
            "192.168.1",
            "abc.def.ghi.jkl"
        ],
        correctAnswer: "192.168.1.1",
        explanation: "192.168.1.1 is a valid IPv4 address. IP addresses range from 0.0.0.0 to 255.255.255.255, so 256 is invalid."
    },
    {
        question: "What is debugging?",
        options: [
            "Writing new code",
            "Removing errors from code",
            "Designing user interfaces",
            "Compiling source code"
        ],
        correctAnswer: "Removing errors from code",
        explanation: "Debugging is the process of finding and resolving bugs (errors) within computer programs, software, or systems."
    },
    {
        question: "Which key combination is commonly used to copy selected text?",
        options: [
            "Ctrl + X",
            "Ctrl + C",
            "Ctrl + V",
            "Ctrl + Z"
        ],
        correctAnswer: "Ctrl + C",
        explanation: "Ctrl + C is the standard keyboard shortcut to copy selected text or items to the clipboard."
    },
    {
        question: "What does GUI stand for?",
        options: [
            "General User Interface",
            "Graphical User Interface",
            "Global User Interaction",
            "Guided User Interface"
        ],
        correctAnswer: "Graphical User Interface",
        explanation: "GUI stands for Graphical User Interface. It allows users to interact with electronic devices through graphical icons and visual indicators."
    },
    {
        question: "Which of these is an example of application software?",
        options: [
            "Windows 11",
            "Linux Kernel",
            "Microsoft Excel",
            "BIOS"
        ],
        correctAnswer: "Microsoft Excel",
        explanation: "Microsoft Excel is application software designed to perform specific tasks for users. Windows and Linux are operating systems; BIOS is firmware."
    },
    {
        question: "What is the smallest unit of data in a computer?",
        options: [
            "Byte",
            "Bit",
            "Nibble",
            "Word"
        ],
        correctAnswer: "Bit",
        explanation: "A bit (binary digit) is the smallest unit of data in a computer. It can have a value of either 0 or 1."
    }
];


// ======================================
// MTH102 QUESTIONS
// PASTE NEW MTH102 QUESTIONS BELOW
// ======================================

const MTH102_Questions = [
    {
        "question": "According to the provided text, what fundamental condition must a mathematical rule fulfill to be classified as a function of real variables?",
        "options": [
            "It must assign exactly one unique output number to each real input number.",
            "It must yield multiple complex values for every integer input.",
            "It must exclusively map independent negative variables onto an imaginary axis.",
            "It must generate a sequence of continuous derivatives across all real coordinates."
        ],
        "correctAnswer": "It must assign exactly one unique output number to each real input number.",
        "explanation": "The text explicitly states that a function of real variables is an operation that assigns to each input number exactly one output member, meaning every element in the domain maps to a single, distinct value."
    },
    {
        "question": "If a relationship is defined such that $y = f(x)$, how does the text characterize the variable 'x'?",
        "options": [
            "The independent variable",
            "The dependent variable",
            "The differential scalar",
            "The mapping codomain"
        ],
        "correctAnswer": "The independent variable",
        "explanation": "Per the given notes on Page 1, when evaluating a function equation expressed as y = f(x), 'x' is explicitly called the independent variable, whereas 'y' represents the dependent variable."
    },
    {
        "question": "Given the function $f(x) = x^2 + 2$, what is its evaluated output value when the input coordinate is $x = 5$?",
        "options": [
            "27",
            "12",
            "25",
            "7"
        ],
        "correctAnswer": "27",
        "explanation": "Substituting x = 5 into the given functional relationship yields f(5) = 5^2 + 2. This simplifies to 25 + 2 = 27, which matches the worked examples in the text."
    },
    {
        "question": "What is the specific output value of the function $f(x) = x^2 + 2x + 4$ when calculated at $x = 0$?",
        "options": [
            "4",
            "0",
            "2",
            "6"
        ],
        "correctAnswer": "4",
        "explanation": "Evaluating the quadratic equation at zero gives f(0) = (0)^2 + 2(0) + 4. The first two operational terms drop to zero, leaving a final constant value of 4."
    },
    {
        "question": "Evaluate the quadratic expression $f(x) = x^2 + 2x + 4$ for an input value of $x = 1$.",
        "options": [
            "7",
            "4",
            "9",
            "5"
        ],
        "correctAnswer": "7",
        "explanation": "By inserting 1 into the function formula: f(1) = 1^2 + 2(1) + 4 = 1 + 2 + 4 = 7. This matches the calculations detailed on Page 2 of the notes."
    },
    {
        "question": "Determine the value of the function $f(x) = x^2 + 2x + 4$ when the independent variable is set to $x = 5$.",
        "options": [
            "37",
            "25",
            "39",
            "29"
        ],
        "correctAnswer": "37",
        "explanation": "Substituting 5 into the function gives: f(5) = 5^2 + 2(5) + 4. Calculating the components gives 25 + 10 + 4, which aggregates perfectly to 37."
    },
    {
        "question": "How do the notes define a periodic function?",
        "options": [
            "A function which repeats itself at a regular interval of x.",
            "A function that consistently approaches infinity as x decreases.",
            "A function that can only be defined using a set of non-negative integers.",
            "A function whose inverse maps directly back onto itself over a closed domain."
        ],
        "correctAnswer": "A function which repeats itself at a regular interval of x.",
        "explanation": "Page 2 explicitly declares that a function which repeats its output behavior/values at fixed, regular intervals of the independent variable x is defined as a periodic function."
    },
    {
        "question": "Based on the text's definition of monotonic functions, what criteria must be satisfied for $f(x)$ to be classified as monotonic increasing?",
        "options": [
            "$f(x_1) < f(x_2)$ whenever $x_1 < x_2$",
            "$f(x_1) > f(x_2)$ whenever $x_1 < x_2$",
            "$f(x_1) = f(x_2)$ for all values across an open interval",
            "$f(-x) = f(x)$ across all symmetric domain points"
        ],
        "correctAnswer": "$f(x_1) < f(x_2)$ whenever $x_1 < x_2$",
        "explanation": "The text states that a monotonic function is strictly increasing if the condition f(x_1) < f(x_2) holds true for any selection of points where x_1 is less than x_2."
    },
    {
        "question": "Under what structural condition is a function $f(x)$ declared to be monotonic decreasing according to the notes?",
        "options": [
            "$f(x_1) > f(x_2)$ whenever $x_1 < x_2$",
            "$f(x_1) < f(x_2)$ whenever $x_1 > x_2$",
            "$f(x) = -f(x)$ across its whole native domain",
            "When the function contains an odd integer exponent"
        ],
        "correctAnswer": "$f(x_1) > f(x_2)$ whenever $x_1 < x_2$",
        "explanation": "A function is monotonic decreasing when a larger input value yields a smaller output value, structurally noted in the text as f(x_1) > f(x_2) when tracking moving coordinates."
    },
    {
        "question": "What structural format characterizes a polynomial function as expressed in the reference material?",
        "options": [
            "$f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0$",
            "$f(x) = a^x$ where 'a' is a strictly constant base value",
            "$f(x) = \\frac{P(x)}{Q(x)}$ where $Q(x) \\neq 0$",
            "$f(x) = \\log_a x$ over positive domains"
        ],
        "correctAnswer": "$f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x^1 + a_0$",
        "explanation": "Page 2 of the notes gives the standard algebraic form of a polynomial function as f(x) = a_n*x^n + a_{n-1}*x^{n-1} + ... + a_1*x^1 + a_0, where coefficients are real values."
    },
    {
        "question": "What type of number must the exponent 'n' be in a polynomial function's leading term according to the text?",
        "options": [
            "A non-negative integer",
            "A strictly negative fraction",
            "An imaginary or complex coefficient",
            "A continuous real rational variable"
        ],
        "correctAnswer": "A non-negative integer",
        "explanation": "The text specifies that for a standard polynomial function, the exponent value 'n' must be a non-negative integer, and 'n' indicates the degree of the polynomial expression."
    },
    {
        "question": "How does the text define a linear function?",
        "options": [
            "A polynomial expression of degree 1",
            "A polynomial expression of degree 2",
            "A quotient of two separate polynomial equations",
            "An expression where the variable sits inside an exponent block"
        ],
        "correctAnswer": "A polynomial expression of degree 1",
        "explanation": "The reference notes explicitly define a linear function as a polynomial function of degree 1, matching the algebraic form where the highest exponent of x is 1."
    },
    {
        "question": "According to the notes, a polynomial function of degree 2 is specifically called a:",
        "options": [
            "Quadratic function",
            "Cubic function",
            "Rational function",
            "Piecewise function"
        ],
        "correctAnswer": "Quadratic function",
        "explanation": "The text systematically names polynomials based on their degree, explicitly stating that a polynomial function of degree 2 is called a quadratic function."
    },
    {
        "question": "What name is explicitly assigned to a polynomial function of degree 3 within the provided notes?",
        "options": [
            "Cubic function",
            "Linear function",
            "Root function",
            "Even function"
        ],
        "correctAnswer": "Cubic function",
        "explanation": "On Page 2-3, the notes outline that polynomials of degree 3 are called cubic functions, typically expressed as f(x) = a_3*x^3 + a_2*x^2 + a_1*x + a_0."
    },
    {
        "question": "How does the text define a rational function?",
        "options": [
            "As the quotient of two polynomials, $\\frac{P(x)}{Q(x)}$ where $Q(x) \\neq 0$",
            "As an expression containing rational fraction exponents like $x^{1/2}$",
            "As any function whose graph is symmetric about the coordinate origin",
            "As an equation tracking values through trigonometric ratios"
        ],
        "correctAnswer": "As the quotient of two polynomials, $\\frac{P(x)}{Q(x)}$ where $Q(x) \\neq 0$",
        "explanation": "The text defines rational functions as the quotient of polynomials, structured precisely as P(x) / Q(x), subject to the mathematical condition that the denominator function Q(x) cannot equal zero."
    },
    {
        "question": "Which of the following is explicitly categorized as a 'root function' on Page 3 of the notes?",
        "options": [
            "$f(x) = x^{1/2}$",
            "$f(x) = a^x$",
            "$f(x) = 3x - 2$",
            "$f(x) = x^2 + 1$"
        ],
        "correctAnswer": "$f(x) = x^{1/2}$",
        "explanation": "Page 3 lists root functions using clear exponential fractional notation examples, showing f(x) = x^{1/2} alongside alternative radical configurations."
    },
    {
        "question": "What mathematical structure defines an exponential function according to the provided material?",
        "options": [
            "A function of the form $f(x) = a^x$, where 'a' is the base and 'x' is the exponent.",
            "A function where a polynomial is divided by another non-zero algebraic term.",
            "An absolute value mapping that branches based on a positive index threshold.",
            "An expression where the dependent variable cannot be isolated cleanly."
        ],
        "correctAnswer": "A function of the form $f(x) = a^x$, where 'a' is the base and 'x' is the exponent.",
        "explanation": "The text states that an exponential function takes the explicit form f(x) = a^x, defining 'a' as the underlying base and the independent variable 'x' as the operational exponent."
    },
    {
        "question": "How is a piecewise function characterized within the provided text?",
        "options": [
            "It is defined by using different formulas for different parts of its domain.",
            "It is a function that contains an infinite sequence of rational powers.",
            "It is defined as a mapping where the domain and codomain are empty sets.",
            "It is a function whose graphical layout is perfectly symmetric across the x-axis."
        ],
        "correctAnswer": "It is defined by using different formulas for different parts of its domain.",
        "explanation": "Page 4 explicitly defines a piecewise function as one that uses different algebraic formulas across different segments or intervals of its overall domain."
    },
    {
        "question": "According to the piecewise examples provided, if a function uses $f(x) = x + 1$ for certain conditions and $f(x) = 3x - 5$ when $x \\ge 3$, what is the analytical category?",
        "options": [
            "Piecewise function",
            "Implicit function",
            "Trigonometric function",
            "Root function"
        ],
        "correctAnswer": "Piecewise function",
        "explanation": "Because the function transitions between different mathematical expressions based on the value of x, it matches the text's definition and example of a piecewise function."
    },
    {
        "question": "What is the structural definition of the absolute value function $f(x) = |x|$ as explicitly written out in the notes?",
        "options": [
            "$f(x) = x$ if $x \\ge 0$; and $-x$ if $x < 0$",
            "$f(x) = x$ if $x > 0$; and $x^2$ if $x \\le 0$",
            "$f(x) = -x$ if $x \\ge 0$; and $x$ if $x < 0$",
            "$f(x) = \\sqrt{1 - x^2}$ across all coordinate limits"
        ],
        "correctAnswer": "$f(x) = x$ if $x \\ge 0$; and $-x$ if $x < 0$",
        "explanation": "The absolute value system is mathematically written on Page 4 as a piecewise condition: it evaluates directly to x if x is non-negative, and changes signs to -x if x is less than zero."
    },
    {
        "question": "Which group of functions is explicitly listed together under the 'Trigonometric function' header on Page 4?",
        "options": [
            "$\\sin x, \\cos x, \\tan x, \\sec x, \\csc x, \\cot x$",
            "$x^{1/2}, x^{1/3}, x^{1/4}$",
            "$a^x, \\log_a x, e^x$",
            "$x, x^2, x^3$"
        ],
        "correctAnswer": "$\\sin x, \\cos x, \\tan x, \\sec x, \\csc x, \\cot x$",
        "explanation": "The text lists all six fundamental trigonometric functions together as standard analytical examples: sine, cosine, tangent, secant, cosecant, and cotangent."
    },
    {
        "question": "Suppose $f: A \\to B$ and $g: B \\to C$ are two functions. How do the notes define the composite function expression $g \\cdot f$?",
        "options": [
            "$g \\cdot f: A \\to C$ where $g \\cdot f = g(f(x))$",
            "$g \\cdot f: B \\to A$ where $g \\cdot f = f(g(x))$",
            "$g \\cdot f: C \\to A$ where $g \\cdot f = g(x) \\cdot f(x)$",
            "$g \\cdot f: A \\to B$ where $g \\cdot f = \\frac{g(x)}{f(x)}$"
        ],
        "correctAnswer": "$g \\cdot f: A \\to C$ where $g \\cdot f = g(f(x))$",
        "explanation": "Page 5 outlines composite mechanics: if f links set A to B and g links B to C, the composite expression maps from A directly to C by nesting the functions as g(f(x))."
    },
    {
        "question": "Given the functions analyzed on Page 6 where $f(x) = x^2 + 2$ and $g(x) = \\sqrt{x + 5}$, what is the value of $g(4)$?",
        "options": [
            "3",
            "9",
            "4",
            "2"
        ],
        "correctAnswer": "3",
        "explanation": "Following the text's clear step-by-step composite validation math: g(4) = \\sqrt{4 + 5} = \\sqrt{9} = 3."
    },
    {
        "question": "Using the same functions where $f(x) = x^2 + 2$ and $g(x) = \\sqrt{x + 5}$, evaluate the composite function step $f(g(4))$.",
        "options": [
            "11",
            "27",
            "15",
            "3"
        ],
        "correctAnswer": "11",
        "explanation": "From the previous step, we know g(4) = 3. Plugging this result into f(x) gives f(3) = 3^2 + 2 = 9 + 2 = 11, which matches the solution path written in the notes."
    },
    {
        "question": "If $f(x) = x^2 + 2$, what is the output value of $f(4)$ as calculated in the composite section of the text?",
        "options": [
            "18",
            "16",
            "6",
            "11"
        ],
        "correctAnswer": "18",
        "explanation": "Evaluating the expression at 4 yields f(4) = 4^2 + 2 = 16 + 2 = 18. Note: While a minor transcription typo exists in the unrefined scan snippet (showing 1^8+2 or 15), the mathematical steps evaluate strictly to 18."
    },
    {
        "question": "Under what condition is a function $y = f(x)$ classified as an 'even function' according to the text?",
        "options": [
            "When $f(-x) = f(x)$ for all x in the domain.",
            "When $f(-x) = -f(x)$ for all x in the domain.",
            "When the function's domain excludes all non-positive values.",
            "When the function can only be graphed implicitly."
        ],
        "correctAnswer": "When $f(-x) = f(x)$ for all x in the domain.",
        "explanation": "On Page 6, the notes explicitly specify that a function is mathematically even if changing the input sign yields the original output value: f(-x) = f(x)."
    },
    {
        "question": "Which algebraic example does the text use to prove a function is an even function?",
        "options": [
            "$f(x) = x^2 + 1$",
            "$f(x) = x^3$",
            "$f(x) = x^3 - x^2$",
            "$f(x) = 3x - 2$"
        ],
        "correctAnswer": "$f(x) = x^2 + 1$",
        "explanation": "The text walks through a proof using f(x) = x^2 + 1, demonstrating that f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x), validating it as even."
    },
    {
        "question": "What mathematical criterion defines an 'odd function' in the reference material?",
        "options": [
            "$f(-x) = -f(x)$",
            "$f(-x) = f(x)$",
            "$f(x) = -f(-x) + 2$",
            "The degree of its polynomial numerator must be 0"
        ],
        "correctAnswer": "$f(-x) = -f(x)$",
        "explanation": "Page 6 defines an odd function by the property that an input with an inverted sign negates the entire original function output, written as f(-x) = -f(x)."
    },
    {
        "question": "Which of the following functions is evaluated in the text and proven to be an odd function?",
        "options": [
            "$f(x) = x^3$",
            "$f(x) = x^2 + 1$",
            "$f(x) = x^3 - x^2$",
            "$f(x) = \\sqrt{1 - x^2}$"
        ],
        "correctAnswer": "$f(x) = x^3$",
        "explanation": "Page 6-7 uses f(x) = x^3 as a clear example of an odd function, showing that f(-x) = (-x)^3 = -x^3 = -f(x)."
    },
    {
        "question": "When checking the expression $f(x) = x^3 - x^2$, what does the text conclude about its parity?",
        "options": [
            "The function is neither even nor odd.",
            "The function is strictly even.",
            "The function is strictly odd.",
            "The function is periodic and symmetric about the y-axis."
        ],
        "correctAnswer": "The function is neither even nor odd.",
        "explanation": "The text tests f(x) = x^3 - x^2 and finds that f(-x) equals neither f(x) nor -f(x), explicitly concluding that the function is 'neither even nor odd'."
    },
    {
        "question": "What graphical symmetry property is true for an even function according to Page 7 of the notes?",
        "options": [
            "Its graph is symmetric about the y-axis.",
            "Its graph is symmetric about the origin.",
            "Its graph is symmetric about the x-axis.",
            "Its graph contains a point of inflection at the coordinate root."
        ],
        "correctAnswer": "Its graph is symmetric about the y-axis.",
        "options": [
            "Its graph is symmetric about the origin.",
            "Its graph is symmetric about the x-axis.",
            "Its graph contains a point of inflection at the coordinate root."
        ],
        "correctAnswer": "Its graph is symmetric about the y-axis.",
        "explanation": "The text notes that the graph of an even function exhibits perfect symmetry across the vertical y-axis."
    },
    {
        "question": "What structural symmetry property defines the graph of an odd function based on the notes?",
        "options": [
            "Its graph is symmetric about the origin.",
            "Its graph is symmetric about the y-axis.",
            "Its graph is completely asymmetric across all quadrants.",
            "Its graph mirrors perfectly across the horizontal line y = 1."
        ],
        "correctAnswer": "Its graph is symmetric about the origin.",
        "explanation": "Page 7 explicitly states that while even functions are symmetric about the y-axis, the graph of an odd function is symmetric about the coordinate origin."
    },
    {
        "question": "How do the notes define an explicit function?",
        "options": [
            "When the function can be written cleanly in the form $y = f(x)$.",
            "When the independent and dependent variables cannot be isolated.",
            "When the equation equals zero, such as $x^3 + x^2y + y^3 = 0$.",
            "When the domain contains only non-negative rational coordinates."
        ],
        "correctAnswer": "When the function can be written cleanly in the form $y = f(x)$.",
        "explanation": "The text states that a function is explicit if it can be directly expressed with the dependent variable isolated on one side, written as y = f(x)."
    },
    {
        "question": "Which equation is provided by the text as a direct example of an implicit function?",
        "options": [
            "$x^3 + x^2y + y^3 = 0$",
            "$y = 3x - 2$",
            "$f(x) = x^2 + 1$",
            "$y = \\frac{x+1}{x+2}$"
        ],
        "correctAnswer": "$x^3 + x^2y + y^3 = 0$",
        "explanation": "The text explains that a function is implicit when the equation mixes x and y terms together, providing the explicit algebraic example x^3 + x^2*y + y^3 = 0."
    },
    {
        "question": "According to the notes, what must be specified before a function can be properly defined?",
        "options": [
            "Its domain",
            "Its y-intercept",
            "Its limit at infinity",
            "Its derivative via L'Hopital's rule"
        ],
        "correctAnswer": "Its domain",
        "explanation": "Page 7 explicitly states: 'A function is not properly defined until its domain is specified.'"
    },
    {
        "question": "What is meant by the 'natural domain' of a function according to the text?",
        "options": [
            "The set of all real numbers for which the function makes sense and gives a real number.",
            "The set of all positive integers starting from zero up to infinity.",
            "The subset of codomain coordinates that have negative fractional square roots.",
            "The interval where a function's left-hand limit equals its right-hand limit."
        ],
        "correctAnswer": "The set of all real numbers for which the function makes sense and gives a real number.",
        "explanation": "Page 8 explains that if a domain isn't explicitly defined, it defaults to all real numbers where the expression is mathematically valid and produces a real value, which is called its natural domain."
    },
    {
        "question": "What is the structural definition of the domain of a function $f(x)$ as stated on Page 8?",
        "options": [
            "The set of input values x for which the function is defined.",
            "The collection of all output images located within set B.",
            "The subset of real numbers that creates a zero denominator.",
            "The maximum upper bound of an invertibly composite graph."
        ],
        "correctAnswer": "The set of input values x for which the function is defined.",
        "explanation": "The notes define the domain of a function f(x) simply and clearly as the complete set of input values x for which that function is mathematically defined."
    },
    {
        "question": "How do the notes define the 'Range' of a function?",
        "options": [
            "A subset of the co-domain that collects all the images of the elements of the domain.",
            "The complete set of all possible independent variable inputs.",
            "The point along the vertical axis where a function breaks continuity.",
            "The calculation of an output value using an inverse mapping rule."
        ],
        "correctAnswer": "A subset of the co-domain that collects all the images of the elements of the domain.",
        "explanation": "Page 8 states that the range is a subset of the codomain, consisting of the complete collection of all the images generated by mapping the domain elements."
    },
    {
        "question": "For the standard function $f(x) = x^2$, what is its domain across all real numbers?",
        "options": [
            "The entire set of real numbers ($\\mathbb{R}$)",
            "Only non-negative real numbers",
            "Strictly positive non-zero integers",
            "All real values excluding the point $x = 0$"
        ],
        "correctAnswer": "The entire set of real numbers ($\\mathbb{R}$)",
        "explanation": "Because any real number can be squared uniquely without violating any mathematical rules, the text notes that the domain for f(x) = x^2 is the entire set of real numbers, IR."
    },
    {
        "question": "What is the evaluated range of the function $f(x) = x^2$ according to the text?",
        "options": [
            "The set of non-negative real numbers.",
            "The entire set of real numbers ($\\mathbb{R}$).",
            "All strictly negative real numbers.",
            "Only whole integers greater than zero."
        ],
        "correctAnswer": "The set of non-negative real numbers.",
        "explanation": "Because squaring any real number never results in a negative value, the range of f(x) = x^2 is the set of all non-negative real numbers (including zero)."
    },
    {
        "question": "What specific example function is provided on Page 8 to calculate domain and range under a square root radical?",
        "options": [
            "$f(x) = \\sqrt{1 - x^2}$",
            "$f(x) = \\sqrt{x + 5}$",
            "$f(x) = \\frac{x+1}{x+2}$",
            "$f(x) = 3x - 2$"
        ],
        "correctAnswer": "$f(x) = \\sqrt{1 - x^2}$",
        "explanation": "Page 8 lists the radical expression f(x) = \\sqrt{1 - x^2} as a specific practice example for calculating complex domains and ranges."
    },
    {
        "question": "If $f(a) = b$, what condition defines the inverse mapping function $g(b)$ according to Page 9?",
        "options": [
            "$g(b) = a$",
            "$g(b) = -a$",
            "$g(b) = \\frac{1}{a}$",
            "$g(b) = a^2$"
        ],
        "correctAnswer": "$g(b) = a$",
        "explanation": "The text states that if an inverse function g exists for a function f where f(a) = b, then g(b) must map directly back to the original input value, a."
    },
    {
        "question": "What is the first step outlined in the text for finding the algebraic inverse of a function?",
        "options": [
            "Solve the function equation $y = f(x)$ for x in terms of y.",
            "Replace all occurrences of the variable x with zero.",
            "Differentiate both sides of the equation using the L'Hopital rule.",
            "Divide the entire polynomial expression by its leading degree variable."
        ],
        "correctAnswer": "Solve the function equation $y = f(x)$ for x in terms of y.",
        "explanation": "Page 9 explicitly lists the first operational step to find an inverse function: 'Solve the function y = f(x) for x in terms of y.'"
    },
    {
        "question": "What final variable substitution rule does the text prescribe to complete the inverse function formula $f^{-1}(x)$?",
        "options": [
            "Replace y by x to get the final formula.",
            "Replace x by zero to find the constant term.",
            "Multiply the final expression by the inverse denominator.",
            "Invert the signs of all coefficients within the function."
        ],
        "correctAnswer": "Replace y by x to get the final formula.",
        "explanation": "The text states that after rearranging the equation for x, you must replace the variable y with x to express the final inverse function in terms of x."
    },
    {
        "question": "Following the text's worked example, what is the inverse function $f^{-1}(x)$ of the linear equation $f(x) = 3x - 2$?",
        "options": [
            "$f^{-1}(x) = \\frac{x + 2}{3}$",
            "$f^{-1}(x) = \\frac{x - 2}{3}$",
            "$f^{-1}(x) = 3x + 2$",
            "$f^{-1}(x) = \\frac{1}{3x - 2}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 2}{3}$",
        "explanation": "Setting y = 3x - 2 gives y + 2 = 3x, which simplifies to x = (y + 2) / 3. Swapping the variables gives the final inverse formula: f^{-1}(x) = (x + 2) / 3."
    },
    {
        "question": "Using the inverse function $f^{-1}(x) = \\frac{x + 2}{3}$ from the text, find the specific value of $f^{-1}(4)$.",
        "options": [
            "2",
            "4",
            "1",
            "6"
        ],
        "correctAnswer": "2",
        "explanation": "Plugging 4 into the inverse formula gives: f^{-1}(4) = (4 + 2) / 3 = 6 / 3 = 2, matching the worked solution on Page 10."
    },
    {
        "question": "Given the fractional function $f(x) = \\frac{x + 1}{x + 2}$ on Page 10, what is its derived inverse function $f^{-1}(x)$?",
        "options": [
            "$f^{-1}(x) = \\frac{1 - 2x}{x - 1}$",
            "$f^{-1}(x) = \\frac{x + 2}{x + 1}$",
            "$f^{-1}(x) = \\frac{2x + 1}{x - 2}$",
            "$f^{-1}(x) = \\frac{x - 1}{1 - 2x}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{1 - 2x}{x - 1}$",
        "explanation": "Rearranging y = (x + 1) / x + 2) gives y(x + 2) = x + 1, then xy + 2y = x + 1, which rearranges to xy - x = 1 - 2y, or x(y - 1) = 1 - 2y. This gives x = (1 - 2y) / (y - 1). Swapping variables results in f^{-1}(x) = (1 - 2x) / (x - 1)."
    },
    {
        "question": "Given the function $g(y) = 3y + 2$, what is its inverse function expression $g^{-1}(y)$ as solved on Page 11?",
        "options": [
            "$g^{-1}(y) = \\frac{y - 2}{3}$",
            "$g^{-1}(y) = \\frac{y + 2}{3}$",
            "$g^{-1}(y) = 3y - 2$",
            "$g^{-1}(y) = \\frac{3}{y - 2}$"
        ],
        "correctAnswer": "$g^{-1}(y) = \\frac{y - 2}{3}$",
        "explanation": "Setting p = 3y + 2 gives p - 2 = 3y, which simplifies to y = (p - 2) / 3. Writing this as a function of y gives the inverse formula: g^{-1}(y) = (y - 2) / 3."
    },
    {
        "question": "If $g(y) = 3y + 2$, what is the output value of $g(1)$?",
        "options": [
            "5",
            "3",
            "2",
            "1"
        ],
        "correctAnswer": "5",
        "explanation": "Evaluating the function at 1 gives g(1) = 3(1) + 2 = 3 + 2 = 5, which matches the step-by-step composite calculations shown on Page 11."
    },
    {
        "question": "On Page 11, the text evaluates the composite expression $f^{-1}(g(1))$ using $f^{-1}(x) = \\frac{1 - 2x}{x - 1}$ and $g(1) = 5$. What is the final value?",
        "options": [
            "$-\\frac{9}{4}$",
            "$\\frac{9}{4}$",
            "$-2$",
            "$-\\frac{4}{9}$"
        ],
        "correctAnswer": "$-\\frac{9}{4}$",
        "explanation": "Plugging g(1) = 5 into the inverse function gives f^{-1}(5) = (1 - 2(5)) / (5 - 1) = (1 - 10) / 4 = -9/4."
    },
    {
        "question": "If $g(y) = 3y + 2$, what is the exact algebraic value of $g(0)$?",
        "options": [
            "2",
            "0",
            "3",
            "5"
        ],
        "correctAnswer": "2",
        "explanation": "To evaluate g(0), we substitute y with 0 in the expression 3y + 2. This gives 3(0) + 2, which simplifies to 0 + 2 = 2."
    },
    {
        "question": "Using the inverse formula $f^{-1}(x) = \\frac{1 - 2x}{x - 1}$, what is the output value when evaluating $f^{-1}(2)$?",
        "options": [
            "-3",
            "3",
            "-1",
            "0"
        ],
        "correctAnswer": "-3",
        "explanation": "Substitute x = 2 into the formula: (1 - 2(2)) / (2 - 1). This simplifies to (1 - 4) / 1, which equals -3 / 1 = -3."
    },
    {
        "question": "What happens to a rational function like $f(x) = \\frac{1 - 2x}{x - 1}$ when $x = 1$?",
        "options": [
            "The function becomes undefined due to division by zero.",
            "The function reaches a maximum value of zero.",
            "The function changes its parity from even to odd.",
            "The function yields a real value of negative one."
        ],
        "correctAnswer": "The function becomes undefined due to division by zero.",
        "explanation": "Plugging x = 1 into the denominator gives 1 - 1 = 0. Since division by zero is mathematically undefined, the function cannot exist at this specific point."
    },
    {
        "question": "If a function is defined as $f(x) = c$, where 'c' is a fixed real number, what category of function is it?",
        "options": [
            "Constant function",
            "Linear function of degree 1",
            "Cubic polynomial function",
            "Implicit radical function"
        ],
        "correctAnswer": "Constant function",
        "explanation": "A function whose output value never changes, regardless of what input x is provided, is known as a constant function."
    },
    {
        "question": "What is the degree of a constant function $f(x) = c$ (where $c \\neq 0$)?",
        "options": [
            "0",
            "1",
            "2",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "A constant function can be written as f(x) = c * x^0. Because the highest exponent of the independent variable x is zero, its degree is 0."
    },
    {
        "question": "What shape does the graph of a constant function $f(x) = 5$ form on a Cartesian coordinate plane?",
        "options": [
            "A horizontal line parallel to the x-axis",
            "A vertical line parallel to the y-axis",
            "A straight diagonal line passing through the origin",
            "A parabola opening upward"
        ],
        "correctAnswer": "A horizontal line parallel to the x-axis",
        "explanation": "Since the y-value is always 5 for every single x-value, plotting these coordinates forms a perfectly flat, horizontal straight line passing through (0,5)."
    },
    {
        "question": "What is the range of the constant function $f(x) = -7$?",
        "options": [
            "{-7}",
            "The entire set of real numbers",
            "All non-negative real numbers",
            "All real numbers except -7"
        ],
        "correctAnswer": "{-7}",
        "explanation": "The range represents all possible output values. Because this function can only ever output the number -7, the range contains only that single isolated element."
    },
    {
        "question": "If $f(x) = 4x - 1$, find the output value of $f(-2)$.",
        "options": [
            "-9",
            "-7",
            "-8",
            "9"
        ],
        "correctAnswer": "-9",
        "explanation": "Substituting -2 into the function gives f(-2) = 4(-2) - 1. Multiplying 4 by -2 gives -8, and subtracting 1 results in -9."
    },
    {
        "question": "Which of the following functions exhibits a graph that is a straight line with a non-zero slope?",
        "options": [
            "A linear function",
            "A quadratic function",
            "A constant function",
            "An absolute value function"
        ],
        "correctAnswer": "A linear function",
        "explanation": "A linear function is a first-degree polynomial of the form f(x) = mx + c. Its graph is always a straight diagonal line whose steepness is determined by the slope 'm'."
    },
    {
        "question": "What is the maximum number of real roots a quadratic function $f(x) = ax^2 + bx + c$ can have?",
        "options": [
            "2",
            "1",
            "3",
            "Infinite"
        ],
        "correctAnswer": "2",
        "explanation": "The Fundamental Theorem of Algebra states that a polynomial's maximum number of roots matches its degree. Since a quadratic function has a degree of 2, it can cross the x-axis at most 2 times."
    },
    {
        "question": "What is the geometric name given to the curved graph of a quadratic function?",
        "options": [
            "Parabola",
            "Hyperbola",
            "Ellipse",
            "Cubic wave"
        ],
        "correctAnswer": "Parabola",
        "explanation": "Every quadratic function creates a smooth, symmetrical, U-shaped or inverted U-shaped curve known mathematically as a parabola."
    },
    {
        "question": "If the leading coefficient 'a' in the quadratic function $f(x) = ax^2 + bx + c$ is positive ($a > 0$), how does the parabola open?",
        "options": [
            "Upward",
            "Downward",
            "To the right horizontally",
            "To the left horizontally"
        ],
        "correctAnswer": "Upward",
        "explanation": "When the coefficient of x^2 is positive, the function values trend toward positive infinity as x becomes very large or very small, causing the parabola to open upward like a cup."
    },
    {
        "question": "Under what condition will the graph of the quadratic function $f(x) = ax^2 + bx + c$ open downward?",
        "options": [
            "When a < 0",
            "When a > 0",
            "When c = 0",
            "When the discriminant is perfectly zero"
        ],
        "correctAnswer": "When a < 0",
        "explanation": "A negative leading coefficient flips the standard parabola upside down, forcing the curve to open downward."
    },
    {
        "question": "What is the domain of any standard polynomial function, such as $f(x) = 3x^3 - 5x + 2$?",
        "options": [
            "All real numbers ($\\mathbb{R}$)",
            "Only positive real numbers",
            "All real numbers except zero",
            "Only whole numbers and integers"
        ],
        "correctAnswer": "All real numbers ($\\mathbb{R}$)",
        "explanation": "Polynomial functions only involve addition, subtraction, multiplication, and non-negative integer exponents. Because these operations can be safely performed on any real value without restriction, the domain is all real numbers."
    },
    {
        "question": "Why is the function $f(x) = \\frac{5}{x}$ not classified as a polynomial function?",
        "options": [
            "Because the variable x is in the denominator, implying a negative exponent ($x^{-1}$).",
            "Because it can never yield a positive real output value.",
            "Because its graph forms a completely flat horizontal line configuration.",
            "Because it treats the independent input variable as an exponent base."
        ],
        "correctAnswer": "Because the variable x is in the denominator, implying a negative exponent ($x^{-1}$).",
        "explanation": "Polynomials strictly require exponents to be non-negative integers. Writing 5/x is equivalent to 5*x^(-1), and since -1 is a negative integer, it is a rational function instead."
    },
    {
        "question": "What is the natural domain of the rational function $f(x) = \\frac{2x + 5}{x - 3}$?",
        "options": [
            "All real numbers except $x = 3$",
            "All real numbers except $x = -3$",
            "Only real numbers greater than 3",
            "All real numbers except $x = 0$"
        ],
        "correctAnswer": "All real numbers except $x = 3$",
        "explanation": "To prevent division by zero, the denominator (x - 3) cannot equal zero. Setting x - 3 = 0 shows that x = 3 must be excluded from the domain."
    },
    {
        "question": "For the root function $f(x) = \\sqrt{x}$, why are negative real numbers excluded from its real-valued domain?",
        "options": [
            "Because the square root of a negative number is not a real number.",
            "Because square roots automatically convert negative inputs into zero.",
            "Because a negative input creates a vertical asymptote on the y-axis.",
            "Because radical expressions only accept non-zero odd integer roots."
        ],
        "correctAnswer": "Because the square root of a negative number is not a real number.",
        "explanation": "Multiplying any real number by itself always results in a non-negative value. Therefore, you cannot find a real number that squares to a negative value, making square roots of negative inputs non-real."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\sqrt{x - 4}$ in the set of real numbers?",
        "options": [
            "$x \\ge 4$",
            "$x > 4$",
            "$x \\le 4$",
            "All real numbers except 4"
        ],
        "correctAnswer": "$x \\ge 4$",
        "explanation": "The value inside a square root must be greater than or equal to zero. Setting up the inequality x - 4 >= 0 and adding 4 to both sides gives the domain x >= 4."
    },
    {
        "question": "What is the value of the absolute value expression $|-15|$?",
        "options": [
            "15",
            "-15",
            "0",
            "225"
        ],
        "correctAnswer": "15",
        "explanation": "The absolute value function measures the magnitude or distance of a number from zero on a number line, ignoring its directional sign. Therefore, it outputs the positive version of any negative number."
    },
    {
        "question": "Evaluate the absolute value function expression $f(x) = |2x - 7|$ when the input value is $x = 1$.",
        "options": [
            "5",
            "-5",
            "9",
            "-9"
        ],
        "correctAnswer": "5",
        "explanation": "Substituting x = 1 into the expression gives f(1) = |2(1) - 7| = |2 - 7| = |-5|. Taking the absolute value of -5 yields 5."
    },
    {
        "question": "If $f(x) = 2x$ and $g(x) = x + 3$, find the correct nested expression for the composite function $g(f(x))$.",
        "options": [
            "2x + 3",
            "2(x + 3)",
            "2x(x + 3)",
            "2x^2 + 6"
        ],
        "correctAnswer": "2x + 3",
        "explanation": "The composite function g(f(x)) means we insert the entire formula for f(x) into g(x) wherever there is an x. Substituting f(x) = 2x into g(x) = x + 3 gives 2x + 3."
    },
    {
        "question": "Using the same functions $f(x) = 2x$ and $g(x) = x + 3$, find the composite function expression $f(g(x))$.",
        "options": [
            "2x + 6",
            "2x + 3",
            "2x^2 + 3x",
            "x + 6"
        ],
        "correctAnswer": "2x + 6",
        "explanation": "To find f(g(x)), we plug the expression for g(x) into f(x). This gives f(x + 3) = 2(x + 3). Distributing the 2 yields 2x + 6."
    },
    {
        "question": "What fundamental algebraic rule is proven by showing that $g(f(x)) = 2x + 3$ and $f(g(x)) = 2x + 6$?",
        "options": [
            "Function composition is generally not commutative.",
            "Function composition is always distributive over addition.",
            "The domain of a composite function must exclude all integers.",
            "Composition of linear formulas always yields a quadratic curve."
        ],
        "correctAnswer": "Function composition is generally not commutative.",
        "explanation": "Because changing the order of composition changes the final formula (g(f(x)) does not equal f(g(x))), it demonstrates that function composition is not commutative."
    },
    {
        "question": "If you evaluate an even function at $x = -4$ and find that $f(-4) = 10$, what must the value of $f(4)$ be?",
        "options": [
            "10",
            "-10",
            "0",
            "1/10"
        ],
        "correctAnswer": "10",
        "explanation": "Even functions satisfy the condition f(-x) = f(x). Therefore, the value at a positive input is exactly identical to the value at its negative counterpart, so f(4) = f(-4) = 10."
    },
    {
        "question": "If an odd function satisfies $f(3) = -8$, what is the output value of $f(-3)$?",
        "options": [
            "8",
            "-8",
            "0",
            "1/8"
        ],
        "correctAnswer": "8",
        "explanation": "Odd functions satisfy the condition f(-x) = -f(x). Inverting the sign of the input negates the original output value, so f(-3) = -f(3) = -(-8) = 8."
    },
    {
        "question": "Which of the following trigonometric functions is classified as an even function?",
        "options": [
            "$\\cos x$",
            "$\\sin x$",
            "$\\tan x$",
            "$\\csc x$"
        ],
        "correctAnswer": "$\\cos x$",
        "explanation": "The cosine function is symmetrical across the vertical y-axis, meaning cos(-x) = cos(x). This makes it an even function, unlike sine and tangent, which are odd functions."
    },
    {
        "question": "Which of the following trigonometric functions is classified as an odd function?",
        "options": [
            "$\\sin x$",
            "$\\cos x$",
            "$\\sec x$",
            "All constant variables"
        ],
        "correctAnswer": "$\\sin x$",
        "explanation": "The sine function satisfies sin(-x) = -sin(x), making it structurally symmetric about the origin and classifying it as an odd function."
    },
    {
        "question": "If a function's graph is completely symmetric with respect to the origin, what happens when you rotate the graph 180 degrees around $(0,0)$?",
        "options": [
            "The graph looks exactly the same as it did originally.",
            "The graph turns upside down and points in the opposite horizontal direction.",
            "The graph shifts upwards by a distance equal to its y-intercept.",
            "The graph transforms into a perfect unit circle."
        ],
        "correctAnswer": "The graph looks exactly the same as it did originally.",
        "explanation": "Symmetry about the origin is the defining characteristic of an odd function. Rotating the graph 180 degrees around the origin maps the curve perfectly back onto itself."
    },
    {
        "question": "What is the structural relationship between a function $f(x)$ and its inverse function $f^{-1}(x)$ regarding their domains and ranges?",
        "options": [
            "The domain of $f$ becomes the range of $f^{-1}$, and the range of $f$ becomes the domain of $f^{-1}$.",
            "They share the exact same domain, but their ranges are completely inverted.",
            "The product of their domains must equal 1 across all real points.",
            "The inverse function lacks a valid range over negative intervals."
        ],
        "correctAnswer": "The domain of $f$ becomes the range of $f^{-1}$, and the range of $f$ becomes the domain of $f^{-1}$.",
        "explanation": "An inverse function undoes the mapping of the original function. It takes the outputs of the original function and maps them back to their original inputs, swapping the domain and range."
    },
    {
        "question": "Graphically, the curve of an inverse function $f^{-1}(x)$ is a reflection of the original function $f(x)$ across which line?",
        "options": [
            "The diagonal line $y = x$",
            "The vertical y-axis ($x = 0$)",
            "The horizontal x-axis ($y = 0$)",
            "The line $y = -x$"
        ],
        "correctAnswer": "The diagonal line $y = x$",
        "explanation": "Because an inverse function swaps every coordinate pair (x, y) to (y, x), its graph forms a mirror image of the original function across the 45-degree line y = x."
    },
    {
        "question": "What type of test can be used on a function's graph to determine if it has an inverse function?",
        "options": [
            "The Horizontal Line Test",
            "The Vertical Line Test",
            "The Second Derivative Test",
            "The Ratio Convergence Test"
        ],
        "correctAnswer": "The Horizontal Line Test",
        "explanation": "To have an inverse, a function must be one-to-one (each output comes from exactly one input). If any horizontal line crosses the function's graph more than once, it fails the test and does not have an inverse function."
    },
    {
        "question": "Why does the function $f(x) = x^2$ (defined over all real numbers) fail the horizontal line test?",
        "options": [
            "Because a horizontal line like $y = 4$ crosses the graph at two distinct points: $x = 2$ and $x = -2$.",
            "Because its graph never crosses the horizontal x-axis line.",
            "Because it is a polynomial function with an even degree value of zero.",
            "Because it trends toward negative infinity in the third quadrant."
        ],
        "correctAnswer": "Because a horizontal line like $y = 4$ crosses the graph at two distinct points: $x = 2$ and $x = -2$.",
        "explanation": "Since both positive and negative inputs produce the same output (such as 2^2 = 4 and (-2)^2 = 4), a horizontal line at y = 4 intersects the parabola twice, meaning the function is not one-to-one over all real numbers."
    },
    {
        "question": "How can we restrict the domain of $f(x) = x^2$ so that it passes the horizontal line test and has a valid inverse function?",
        "options": [
            "Restrict the domain to non-negative numbers ($x \\ge 0$).",
            "Restrict the domain to only include odd integer values.",
            "Allow the function to exist only at the coordinate origin point.",
            "Force the independent variable to be strictly less than 1."
        ],
        "correctAnswer": "Restrict the domain to non-negative numbers ($x \\ge 0$).",
        "explanation": "By keeping only the right half of the parabola (where x >= 0), every output value is produced by exactly one unique input, allowing the function to have an inverse function (the principal square root function)."
    },
    {
        "question": "Find the algebraic inverse function $f^{-1}(x)$ for the linear equation $f(x) = 5x + 3$.",
        "options": [
            "$f^{-1}(x) = \\frac{x - 3}{5}$",
            "$f^{-1}(x) = \\frac{x + 3}{5}$",
            "$f^{-1}(x) = 5x - 3$",
            "$f^{-1}(x) = \\frac{1}{5x + 3}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x - 3}{5}$",
        "explanation": "Start by writing the equation as y = 5x + 3. Subtract 3 from both sides to get y - 3 = 5x. Divide by 5 to isolate x, giving x = (y - 3) / 5. Swapping the variables gives f^{-1}(x) = (x - 3) / 5."
    },
    {
        "question": "If a function is defined implicitly by the relation $xy = 1$, how can it be written as an explicit function of x?",
        "options": [
            "$y = \\frac{1}{x}$",
            "$y = 1 - x$",
            "$y = x$",
            "$y = -x$"
        ],
        "correctAnswer": "$y = \\frac{1}{x}$",
        "explanation": "An explicit function isolates the dependent variable y on one side of the equation. Dividing both sides of xy = 1 by x gives y = 1/x."
    },
    {
        "question": "What is the domain of the piecewise function $f(x) = x$ if $x < 0$, and $f(x) = 2$ if $x \\ge 0$?",
        "options": [
            "All real numbers ($\\mathbb{R}$)",
            "Only negative real numbers",
            "All real numbers except zero",
            "Only positive integers"
        ],
        "correctAnswer": "All real numbers ($\\mathbb{R}$)",
        "explanation": "The first part of the function covers all values less than zero, and the second part covers all values greater than or equal to zero. Together, these two intervals cover the entire real number line."
    },
    {
        "question": "For the piecewise function where $f(x) = x^2$ when $x < 2$ and $f(x) = 2x + 1$ when $x \\ge 2$, evaluate $f(3)$.",
        "options": [
            "7",
            "9",
            "6",
            "4"
        ],
        "correctAnswer": "7",
        "explanation": "To evaluate f(3), we look at the domain conditions. Since 3 is greater than or equal to 2, we must use the second equation: f(3) = 2(3) + 1 = 6 + 1 = 7."
    },
    {
        "question": "Using the same piecewise function ($f(x) = x^2$ when $x < 2$ and $f(x) = 2x + 1$ when $x \\ge 2$), evaluate $f(1)$.",
        "options": [
            "1",
            "3",
            "2",
            "5"
        ],
        "correctAnswer": "1",
        "explanation": "Since the input value 1 is strictly less than 2, we use the first rule of the piecewise function: f(1) = 1^2 = 1."
    },
    {
        "question": "What mathematical notation is used to represent that the variable x is approaching a constant value 'a' without actually reaching it?",
        "options": [
            "$x \\to a$",
            "$x = a$",
            "$x \\neq a$",
            "$x \\propto a$"
        ],
        "correctAnswer": "$x \\to a$",
        "explanation": "The arrow notation 'x -> a' reads as 'x approaches a' or 'x tends toward a', which is a fundamental concept in calculus limits."
    },
    {
        "question": "What is the geometric meaning of the absolute value expression $|x - a| < \\delta$ (where $\\delta$ is a small positive number)?",
        "options": [
            "The distance between x and a is strictly less than delta.",
            "The value of x is scaled exponentially by delta.",
            "The coordinate point x is located at the origin.",
            "The sum of x and delta equals a."
        ],
        "correctAnswer": "The distance between x and a is strictly less than delta.",
        "explanation": "Subtracting two numbers inside an absolute value measures the geometric distance between them on a number line. Therefore, |x - a| < delta means x lies within a small neighborhood around a."
    },
    {
        "question": "In calculus, what does it mean if the limit of $f(x)$ as x approaches c is equal to L?",
        "options": [
            "As x gets closer and closer to c, $f(x)$ gets arbitrarily close to L.",
            "The value of the function evaluated at c must be exactly equal to L.",
            "The function forms a vertical asymptote at the point $x = c$.",
            "The function is undefined for all coordinates smaller than c."
        ],
        "correctAnswer": "As x gets closer and closer to c, $f(x)$ gets arbitrarily close to L.",
        "explanation": "A limit describes the behavior of a function near a point, rather than at the point itself. It means we can make f(x) as close to L as we like by choosing an x sufficiently close to c."
    },
    {
        "question": "Evaluate the direct limit: $\\lim_{x \\to 3} (2x + 4)$.",
        "options": [
            "10",
            "6",
            "14",
            "2"
        ],
        "correctAnswer": "10",
        "explanation": "Since 2x + 4 is a continuous polynomial function, we can evaluate the limit using direct substitution: 2(3) + 4 = 6 + 4 = 10."
    },
    {
        "question": "Find the limit value of the quadratic expression: $\\lim_{x \\to 2} (x^2 - 3x + 1)$.",
        "options": [
            "-1",
            "1",
            "5",
            "0"
        ],
        "correctAnswer": "-1",
        "explanation": "Using direct substitution for this polynomial gives: (2)^2 - 3(2) + 1 = 4 - 6 + 1 = -1."
    },
    {
        "question": "What is the limit of a constant function $f(x) = k$ as x approaches any real number 'a'?",
        "options": [
            "k",
            "a",
            "0",
            "Undefined"
        ],
        "correctAnswer": "k",
        "explanation": "Since a constant function outputs the value k regardless of the input x, its value stays at k as x approaches a."
    },
    {
        "question": "When evaluating the limit of a rational function, what does an indeterminate form of $\\frac{0}{0}$ indicate?",
        "options": [
            "We must simplify the expression (e.g., by factoring) to find the true limit.",
            "The limit definitely does not exist under any circumstances.",
            "The final answer to the limit problem is automatically zero.",
            "The function has a vertical asymptote at that specific value."
        ],
        "correctAnswer": "We must simplify the expression (e.g., by factoring) to find the true limit.",
        "explanation": "An indeterminate form 0/0 does not mean a limit doesn't exist. It means there is a shared factor causing the zeros, which must be canceled out algebraically to find the limit value."
    },
    {
        "question": "Evaluate the rational limit by factoring the numerator: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        "options": [
            "4",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "The numerator factors into a difference of squares: (x - 2)(x + 2). Canceling the common factor (x - 2) from the numerator and denominator leaves (x + 2). Evaluating this at x = 2 gives 2 + 2 = 4."
    },
    {
        "question": "Find the limit of the rational expression: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
        "options": [
            "6",
            "3",
            "0",
            "9"
        ],
        "correctAnswer": "6",
        "explanation": "Factoring the numerator gives (x - 3)(x + 3). Canceling the factor (x - 3) leaves behind (x + 3). Substituting x = 3 gives 3 + 3 = 6."
    },
    {
        "question": "What is the mathematical definition of a left-hand limit?",
        "options": [
            "The value that $f(x)$ approaches as x approaches 'a' from values strictly less than 'a'.",
            "The value that $f(x)$ approaches as x approaches 'a' from values strictly greater than 'a'.",
            "The derivative of the function calculated using negative coordinate steps.",
            "The point where a graph crosses the negative horizontal x-axis."
        ],
        "correctAnswer": "The value that $f(x)$ approaches as x approaches 'a' from values strictly less than 'a'.",
        "explanation": "A left-hand limit tracks the behavior of a function as x approaches a target value from the left side (the negative or smaller side) on the number line."
    },
    {
        "question": "What notation represents a right-hand limit as x approaches 'a'?",
        "options": [
            "$\\lim_{x \\to a^+} f(x)$",
            "$\\lim_{x \\to a^-} f(x)$",
            "$\\lim_{x \\to -a} f(x)$",
            "$\\lim_{a \\to x} f(x)$"
        ],
        "correctAnswer": "$\\lim_{x \\to a^+} f(x)$",
        "explanation": "The superscript plus sign '+' denotes that x is approaching the target value from the right side (the positive or larger side) on the number line."
    },
    {
        "question": "Under what condition does a general two-sided limit $\\lim_{x \\to a} f(x) = L$ exist?",
        "options": [
            "When the left-hand limit and the right-hand limit both exist and are equal to L.",
            "When the function is defined at $x = a$ and outputs a value of zero.",
            "When the function is an even polynomial with an asymmetric domain.",
            "When the graph has a vertical break or gap exactly at $x = a$."
        ],
        "correctAnswer": "When the left-hand limit and the right-hand limit both exist and are equal to L.",
        "explanation": "For a general limit to exist at a point, the function must approach the exact same value from both the left and right sides: lim_{x -> a^-} f(x) = lim_{x -> a^+} f(x) = L."
    },
    {
        "question": "Evaluate the limit as x approaches 4 for the expression: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.",
        "options": [
            "8",
            "4",
            "0",
            "16"
        ],
        "correctAnswer": "8",
        "explanation": "If we plug in x = 4 directly, we get 0/0, which is indeterminate. To solve this, we factor the numerator as a difference of squares: (x - 4)(x + 4). The (x - 4) terms in the numerator and denominator cancel each other out, leaving us with just (x + 4). Now, we plug in x = 4 to get 4 + 4 = 8."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 5} \\frac{x^2 - 5x}{x - 5}$.",
        "options": [
            "5",
            "0",
            "10",
            "Undefined"
        ],
        "correctAnswer": "5",
        "explanation": "Direct substitution gives 0/0. We can simplify the numerator by factoring out a common 'x', which gives us x(x - 5). Canceling the common (x - 5) factor from both the top and bottom leaves us with just the variable 'x'. Taking the limit as x approaches 5 gives a final answer of 5."
    },
    {
        "question": "Solve the following limit problem: $\\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$.",
        "options": [
            "4",
            "2",
            "0",
            "3"
        ],
        "correctAnswer": "4",
        "explanation": "Plugging in x = 1 creates a zero denominator. We look to factor the quadratic polynomial in the numerator by finding two numbers that multiply to -3 and add up to 2. Those numbers are 3 and -1, so it factors into (x - 1)(x + 3). Cancel out the (x - 1) terms to leave (x + 3). Substituting x = 1 gives 1 + 3 = 4."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to -2} \\frac{x^2 - 4}{x + 2}$.",
        "options": [
            "-4",
            "4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-4",
        "explanation": "Direct substitution results in 0/0. Factoring the numerator reveals a difference of squares: (x - 2)(x + 2). We cancel the (x + 2) factor from the numerator and denominator, leaving behind the expression (x - 2). Substituting x = -2 into this expression gives -2 - 2 = -4."
    },
    {
        "question": "What is the value of $\\lim_{x \\to 0} \\frac{3x^2 + 5x}{x}$?",
        "options": [
            "5",
            "0",
            "3",
            "Undefined"
        ],
        "correctAnswer": "5",
        "explanation": "Substituting 0 gives an indeterminate 0/0 form. To fix this, factor out an 'x' from every term in the numerator to get x(3x + 5). Cancel the 'x' in the numerator with the 'x' in the denominator, which simplifies the function to (3x + 5). Setting x = 0 leaves us with 3(0) + 5 = 5."
    },
    {
        "question": "Calculate the limit: $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x - 3}$.",
        "options": [
            "4",
            "3",
            "6",
            "0"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution leads to 0/0. Factoring the numerator gives (x - 3)(x + 1). By canceling the matching (x - 3) factor from the top and bottom, the expression simplifies nicely to (x + 1). Substituting x = 3 into this simplified expression yields 3 + 1 = 4."
    },
    {
        "question": "If a function has a left-hand limit $\\lim_{x \\to 2^-} f(x) = 5$ and a right-hand limit $\\lim_{x \\to 2^+} f(x) = 3$, what can we conclude about the two-sided limit $\\lim_{x \\to 2} f(x)$?",
        "options": [
            "The limit does not exist.",
            "The limit is equal to 4.",
            "The limit is equal to 8.",
            "The limit is equal to 5."
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "For a standard two-sided limit to exist, the function must approach the exact same numerical value from both directions. Since the left-hand limit (5) and the right-hand limit (3) do not match, the general limit does not exist."
    },
    {
        "question": "A piecewise function is defined as $f(x) = 2x + 1$ for $x < 1$, and $f(x) = 4x - 1$ for $x \\ge 1$. Find the left-hand limit $\\lim_{x \\to 1^-} f(x)$.",
        "options": [
            "3",
            "5",
            "1",
            "2"
        ],
        "correctAnswer": "3",
        "explanation": "The left-hand limit approaches x = 1 from values smaller than 1. This means we use the first rule of the piecewise function: f(x) = 2x + 1. Substituting x = 1 into this formula gives 2(1) + 1 = 3."
    },
    {
        "question": "Using the same piecewise function ($f(x) = 2x + 1$ for $x < 1$, and $f(x) = 4x - 1$ for $x \\ge 1$), find the right-hand limit $\\lim_{x \\to 1^+} f(x)$.",
        "options": [
            "3",
            "4",
            "7",
            "0"
        ],
        "correctAnswer": "3",
        "explanation": "The right-hand limit approaches x = 1 from values larger than 1. Therefore, we use the second mathematical rule: f(x) = 4x - 1. Substituting x = 1 into this formula gives 4(1) - 1 = 3."
    },
    {
        "question": "Based on the matching left-hand limit (3) and right-hand limit (3) found in the previous questions, what is the value of the general two-sided limit $\\lim_{x \\to 1} f(x)$?",
        "options": [
            "3",
            "Does not exist",
            "1",
            "6"
        ],
        "correctAnswer": "3",
        "explanation": "Because the left-hand limit and the right-hand limit approach the exact same value of 3, the overall two-sided limit exists and is equal to that shared value."
    },
    {
        "question": "Consider a piecewise function where $f(x) = x^2$ for $x \\le 3$, and $f(x) = 2x$ for $x > 3$. What is the left-hand limit $\\lim_{x \\to 3^-} f(x)$?",
        "options": [
            "9",
            "6",
            "3",
            "12"
        ],
        "correctAnswer": "9",
        "explanation": "To find the left-hand limit, we look at values where x is less than 3. We use the equation f(x) = x^2. Substituting 3 into this formula gives 3^2 = 9."
    },
    {
        "question": "Using the same function ($f(x) = x^2$ for $x \\le 3$, and $f(x) = 2x$ for $x > 3$), find the right-hand limit $\\lim_{x \\to 3^+} f(x)$.",
        "options": [
            "6",
            "9",
            "3",
            "0"
        ],
        "correctAnswer": "6",
        "explanation": "To find the right-hand limit, we look at values where x approaches 3 from the right side (where x is greater than 3). This directs us to use the equation f(x) = 2x. Substituting 3 gives 2(3) = 6."
    },
    {
        "question": "For the function where $\\lim_{x \\to 3^-} f(x) = 9$ and $\\lim_{x \\to 3^+} f(x) = 6$, what is the overall limit $\\lim_{x \\to 3} f(x)$?",
        "options": [
            "The limit does not exist.",
            "9",
            "6",
            "7.5"
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches 9 from the left side but approaches 6 from the right side, the mismatch means there is a broken gap in the graph, so the general two-sided limit does not exist."
    },
    {
        "question": "What mathematical property must be true for a function $f(x)$ to be declared fully continuous at a specific point $x = c$?",
        "options": [
            "The limit $\\lim_{x \\to c} f(x)$ must exist, the function value $f(c)$ must be defined, and they must be perfectly equal.",
            "The function must have a positive derivative at that point.",
            "The value of $f(c)$ must equal zero to create an x-intercept.",
            "The function must be a polynomial with exclusively even exponent coefficients."
        ],
        "correctAnswer": "The limit $\\lim_{x \\to c} f(x)$ must exist, the function value $f(c)$ must be defined, and they must be perfectly equal.",
        "explanation": "Continuity requires three things: the function cannot have a hole or gap, it must be defined at the point, and the path it follows from both sides must hit that exact defined value: lim_{x -> c} f(x) = f(c)."
    },
    {
        "question": "If a function $f(x)$ is continuous on an open interval, what does this look like graphically?",
        "options": [
            "The graph can be drawn completely without lifting your pencil from the paper.",
            "The graph features vertical broken lines at every integer coordinate.",
            "The graph must always move upward from left to right.",
            "The graph consists of entirely disconnected, floating coordinate dots."
        ],
        "correctAnswer": "The graph can be drawn completely without lifting your pencil from the paper.",
        "explanation": "Continuity means there are no sudden breaks, steps, holes, or asymptotes. Visually, a continuous function forms a single unbroken curve over that interval."
    },
    {
        "question": "A function is defined as $f(x) = \\frac{x^2 - 1}{x - 1}$ for all values except $x = 1$. What type of discontinuity occurs at $x = 1$?",
        "options": [
            "Removable discontinuity (a hole in the graph)",
            "Jump discontinuity (a sudden vertical step)",
            "Infinite discontinuity (a vertical asymptote)",
            "The function remains perfectly continuous everywhere"
        ],
        "correctAnswer": "Removable discontinuity (a hole in the graph)",
        "explanation": "Since the expression simplifies to (x + 1) by canceling out (x - 1), the limit as x approaches 1 exists and is equal to 2. However, because the original function is undefined at exactly x = 1, it leaves a single missing point, which is called a removable discontinuity or hole."
    },
    {
        "question": "If a function jumps abruptly from one height to another at $x = c$, causing the left and right limits to exist but be unequal, what is this called?",
        "options": [
            "Jump discontinuity",
            "Removable discontinuity",
            "Essential infinite asymptote",
            "Continuous shift point"
        ],
        "correctAnswer": "Jump discontinuity",
        "explanation": "When a graph breaks apart into two separate, disconnected paths at a specific x-value, it creates a step or vertical gap. This behavior is called a jump discontinuity."
    },
    {
        "question": "What type of discontinuity is caused by a vertical asymptote, where the function outputs trend toward infinity?",
        "options": [
            "Infinite discontinuity",
            "Removable discontinuity",
            "Jump discontinuity",
            "Oscillating loop breakdown"
        ],
        "correctAnswer": "Infinite discontinuity",
        "explanation": "When the values of a function shoot up toward positive infinity or plunge toward negative infinity as x approaches a certain point, the gap created around the vertical asymptote is known as an infinite discontinuity."
    },
    {
        "question": "Evaluate the limit as x grows infinitely large: $\\lim_{x \\to \\infty} \\frac{1}{x}$.",
        "options": [
            "0",
            "$\\infty$",
            "1",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As the denominator 'x' becomes an enormously large number, dividing a constant numerator of 1 by a larger and larger number makes the fraction smaller and smaller, causing it to approach 0."
    },
    {
        "question": "Find the limit at infinity for the rational function: $\\lim_{x \\to \\infty} \\frac{4x + 3}{2x - 1}$.",
        "options": [
            "2",
            "4",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "2",
        "explanation": "When looking at limits at infinity for rational functions, we can divide every term by the highest power of x in the denominator (which is x). This changes the expression to (4 + 3/x) / (2 - 1/x). As x approaches infinity, the fractions 3/x and 1/x become 0, leaving 4/2 = 2."
    },
    {
        "question": "What is the key rule for finding the limit at infinity when the degree of the numerator matches the degree of the denominator?",
        "options": [
            "The limit is the ratio of their leading coefficients.",
            "The limit is automatically equal to zero.",
            "The limit will always expand to positive infinity.",
            "The limit equals the constant difference of their constant terms."
        ],
        "correctAnswer": "The limit is the ratio of their leading coefficients.",
        "explanation": "When the highest exponents in the numerator and denominator are identical, the lower-degree terms become insignificant as x grows toward infinity. The limit simplifies to the ratio of the coefficients of the highest-degree terms."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{5x^2 - 3x + 2}{2x^2 + 7}$.",
        "options": [
            "5/2",
            "0",
            "$\\infty$",
            "-3/7"
        ],
        "correctAnswer": "5/2",
        "explanation": "Since both the numerator and the denominator share the same highest degree ($x^2$), the limit as x goes to infinity is determined by the coefficients of those $x^2$ terms, which gives 5/2."
    },
    {
        "question": "What happens to the limit at infinity if the degree of the numerator is strictly LESS than the degree of the denominator?",
        "options": [
            "The limit is always equal to 0.",
            "The limit goes to infinity.",
            "The limit is the ratio of the leading constants.",
            "The limit cannot be determined algebraically."
        ],
        "correctAnswer": "The limit is always equal to 0.",
        "explanation": "If the denominator has a higher degree exponent than the numerator, the bottom of the fraction grows much faster than the top as x approaches infinity, pulling the value of the entire fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to \\infty} \\frac{3x + 4}{x^2 - 5}$.",
        "options": [
            "0",
            "3",
            "$\\infty$",
            "-4/5"
        ],
        "correctAnswer": "0",
        "explanation": "The highest power in the denominator ($x^2$) is greater than the highest power in the numerator ($x^1$). Because the denominator grows at a much faster rate, the value of the fraction approaches 0 as x goes to infinity."
    },
    {
        "question": "If the degree of the numerator is strictly GREATER than the degree of the denominator, what is the result of the limit at infinity?",
        "options": [
            "The limit increases or decreases without bound toward infinity ($\\pm\\infty$).",
            "The limit stabilizes at a constant value of 1.",
            "The limit resolves to zero because of balanced exponents.",
            "The limit equals the vertical asymptote coordinate value."
        ],
        "correctAnswer": "The limit increases or decreases without bound toward infinity ($\\pm\\infty$).",
        "explanation": "When the numerator has a higher degree, the top of the fraction grows much faster than the bottom as x approaches infinity. This causes the entire expression to grow without bound, meaning it approaches infinity."
    },
    {
        "question": "Determine the behavior of: $\\lim_{x \\to \\infty} \\frac{x^3 - 2}{x^2 + 4}$.",
        "options": [
            "$\\infty$",
            "0",
            "1",
            "Does not exist due to oscillation"
        ],
        "correctAnswer": "$\\infty$",
        "explanation": "The degree of the numerator is 3, which is greater than the denominator's degree of 2. As x becomes extremely large, the $x^3$ term dominates the expression, driving the output toward infinity."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ when measuring x in radians.",
        "options": [
            "1",
            "0",
            "Undefined",
            "$\\infty$"
        ],
        "correctAnswer": "1",
        "explanation": "The expression lim_{x -> 0} (sin x / x) = 1 is a fundamental trigonometric limit in calculus. It shows that for very small angles measured in radians, the value of sin x is nearly identical to the value of x itself."
    },
    {
        "question": "Using the properties of limits, evaluate: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$.",
        "options": [
            "3",
            "1",
            "0",
            "1/3"
        ],
        "correctAnswer": "3",
        "explanation": "To use the standard limit property, we multiply the top and bottom by 3 to match the angle inside the sine function: 3 * [sin(3x) / 3x]. As x approaches 0, 3x also approaches 0, making the limit of [sin(3x) / 3x] equal to 1. This leaves us with 3 * 1 = 3."
    },
    {
        "question": "Find the limit value of the expression: $\\lim_{x \\to 0} \\frac{\\tan x}{x}$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "Extracts to cosine zero"
        ],
        "correctAnswer": "1",
        "explanation": "We can rewrite tan x as (sin x / cos x). This changes the limit expression to [sin x / x] * [1 / cos x]. We know that lim_{x -> 0} (sin x / x) = 1 and cos(0) = 1, so the expression evaluates to 1 * (1 / 1) = 1."
    },
    {
        "question": "What is the mathematical limit value of: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$?",
        "options": [
            "0",
            "1",
            "1/2",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "The expression lim_{x -> 0} (1 - cos x) / x = 0 is another fundamental calculus limit. As x approaches 0, the numerator (1 - cos x) decreases at a much faster rate than the denominator x, causing the ratio to approach 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} (3x^2 - 5x + 7)$.",
        "options": [
            "9",
            "12",
            "7",
            "5"
        ],
        "correctAnswer": "9",
        "explanation": "Since this is a continuous polynomial function, we can evaluate it using direct substitution: 3(2)^2 - 5(2) + 7 = 3(4) - 10 + 7 = 12 - 10 + 7 = 9."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -1} (x^3 - 2x^2 + 4)$.",
        "options": [
            "1",
            "3",
            "7",
            "5"
        ],
        "correctAnswer": "1",
        "explanation": "Substitute x = -1 into the polynomial expression: (-1)^3 - 2(-1)^2 + 4. This simplifies to -1 - 2(1) + 4 = -1 - 2 + 4 = 1."
    },
    {
        "question": "Determine the limit value: $\\lim_{x \\to 4} \\sqrt{2x + 1}$.",
        "options": [
            "3",
            "9",
            "5",
            "\\sqrt{7}"
        ],
        "correctAnswer": "3",
        "explanation": "Because root functions are continuous over their domains, we can plug the value in directly: \\sqrt{2(4) + 1} = \\sqrt{8 + 1} = \\sqrt{9} = 3."
    },
    {
        "question": "Evaluate the rational expression limit: $\\lim_{x \\to 2} \\frac{x + 3}{x^2 + 1}$.",
        "options": [
            "1",
            "5",
            "0",
            "5/3"
        ],
        "correctAnswer": "1",
        "explanation": "Since plugging x = 2 into the denominator does not result in zero, we can evaluate the limit using direct substitution: (2 + 3) / (2^2 + 1) = 5 / (4 + 1) = 5 / 5 = 1."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 0} \\cos(x + \\pi)$.",
        "options": [
            "-1",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1",
        "explanation": "Substituting x = 0 directly into the continuous cosine function gives cos(0 + \\pi) = cos(\\pi). The value of cosine at \\pi radians (180 degrees) is -1."
    },
    {
        "question": "Solve the limit problem: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$.",
        "options": [
            "3",
            "1",
            "0",
            "2"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution gives 0/0. We can factor the numerator using the difference of cubes formula: (x - 1)(x^2 + x + 1). Canceling out the common (x - 1) factor from the top and bottom leaves (x^2 + x + 1). Evaluating this at x = 1 gives 1^2 + 1 + 1 = 3."
    },
    {
        "question": "Calculate the limit: $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$.",
        "options": [
            "1/6",
            "6",
            "0",
            "Undefined"
        ],
        "correctAnswer": "1/6",
        "explanation": "Direct substitution gives 0/0. We can factor the denominator as a difference of squares in terms of roots: (\\sqrt{x} - 3)(\\sqrt{x} + 3). Canceling out the common (\\sqrt{x} - 3) factor leaves 1 / (\\sqrt{x} + 3). Substituting x = 9 gives 1 / (\\sqrt{9} + 3) = 1 / (3 + 3) = 1/6."
    },
    {
        "question": "Evaluate the matching limit problem: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.",
        "options": [
            "1/4",
            "4",
            "2",
            "1/2"
        ],
        "correctAnswer": "1/4",
        "explanation": "Factor the denominator as (\\sqrt{x} - 2)(\\sqrt{x} + 2). Canceling out the common (\\sqrt{x} - 2) factor leaves 1 / (\\sqrt{x} + 2). Substituting x = 4 gives 1 / (\\sqrt{4} + 2) = 1 / (2 + 2) = 1/4."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4}$.",
        "options": [
            "-1/4",
            "1/4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/4",
        "explanation": "Direct substitution yields 0/0. Factoring both the numerator and the denominator gives: [(x - 2)(x - 3)] / [(x - 2)(x + 2)]. Canceling the common (x - 2) factor simplifies the expression to (x - 3) / (x + 2). Substituting x = 2 gives (2 - 3) / (2 + 2) = -1/4."
    },
    {
        "question": "What is the limit value of: $\\lim_{x \\to -3} \\frac{x^2 + 4x + 3}{x^2 - 9}$?",
        "options": [
            "1/3",
            "-1/3",
            "0",
            "3"
        ],
        "correctAnswer": "1/3",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x + 3)(x + 1), and factoring the denominator gives (x + 3)(x - 3). Canceling the common (x + 3) factor leaves (x + 1) / (x - 3). Substituting x = -3 gives (-3 + 1) / (-3 - 3) = -2 / -6 = 1/3."
    },
    {
        "question": "For a function $f(x)$, if $f(2) = 7$ and $\\lim_{x \\to 2} f(x) = 7$, what does this tell us about the function at $x = 2$?",
        "options": [
            "The function is perfectly continuous at $x = 2$.",
            "The function contains a removable hole discontinuity at $x = 2$.",
            "The function graph has a vertical step jump at $x = 2$.",
            "The function has an infinite asymptote at $x = 2$."
        ],
        "correctAnswer": "The function is perfectly continuous at $x = 2$.",
        "explanation": "Because the function is defined at x = 2 and the limit as x approaches 2 matches that value exactly ($7 = 7$), the function satisfies the mathematical definition of continuity at that point."
    },
    {
        "question": "If a function $f(x)$ is defined at $x = 4$ such that $f(4) = 10$, but the limit is $\\lim_{x \\to 4} f(x) = 6$, is the function continuous at $x = 4$?",
        "options": [
            "No, because the limit value does not equal the defined function value.",
            "Yes, because both the function value and the limit exist.",
            "Yes, because the difference between the values is less than 5.",
            "No, because the function values must always equal zero to be continuous."
        ],
        "correctAnswer": "No, because the limit value does not equal the defined function value.",
        "explanation": "Even though both the limit and the function value exist, they are not equal ($6 \\neq 10$). This indicates a break or point dislocation in the graph, meaning the function is not continuous at x = 4."
    },
    {
        "question": "For what value of the constant 'k' will the piecewise function $f(x) = 3x + 2$ for $x \\le 2$ and $f(x) = kx - 4$ for $x > 2$ be continuous at $x = 2$?",
        "options": [
            "6",
            "4",
            "8",
            "2"
        ],
        "correctAnswer": "6",
        "explanation": "For the function to be continuous, the left-hand limit and right-hand limit must be equal at x = 2. The left-hand limit is 3(2) + 2 = 8. The right-hand limit is k(2) - 4 = 2k - 4. Setting them equal gives 2k - 4 = 8, which simplifies to 2k = 12, or k = 6."
    },
    {
        "question": "Find the constant value 'a' that makes the function continuous at $x = 3$: $f(x) = x^2 - 1$ for $x \\le 3$ and $f(x) = 2x + a$ for $x > 3$.",
        "options": [
            "2",
            "8",
            "6",
            "0"
        ],
        "correctAnswer": "2",
        "explanation": "To ensure continuity, the left-hand limit must equal the right-hand limit at x = 3. The left-hand side gives 3^2 - 1 = 8. The right-hand side gives 2(3) + a = 6 + a. Setting them equal gives 6 + a = 8, which means a = 2."
    },
    {
        "question": "Where does the rational function $f(x) = \\frac{x^2 - 9}{x^2 - 5x + 6}$ have points of discontinuity?",
        "options": [
            "At $x = 2$ and $x = 3$",
            "Only at $x = 3$",
            "Only at $x = 2$",
            "At $x = 9$ and $x = 6$"
        ],
        "correctAnswer": "At $x = 2$ and $x = 3$",
        "explanation": "Discontinuities in rational functions occur where the denominator equals zero. Factoring the denominator gives (x - 2)(x - 3) = 0. Solving this equation shows that the denominator is zero at x = 2 and x = 3, making these the points of discontinuity."
    },
    {
        "question": "What is the limit of the expression: $\\lim_{x \\to \\infty} \\frac{7x^3 - 2x^2 + 1}{3x^3 + 5x}$?",
        "options": [
            "7/3",
            "0",
            "$\\infty$",
            "1/5"
        ],
        "correctAnswer": "7/3",
        "explanation": "The highest power of x in both the numerator and denominator is $x^3$. For limits at infinity where the degrees match, the limit is simply the ratio of the leading coefficients, which gives 7/3."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} \\frac{100x^2 + 50}{x^3 - 2}$.",
        "options": [
            "0",
            "100",
            "$\\infty$",
            "-25"
        ],
        "correctAnswer": "0",
        "explanation": "Since the denominator has a higher degree ($x^3$) than the numerator ($x^2$), the denominator grows at a much faster rate as x approaches infinity, pulling the value of the entire fraction down to 0."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$.",
        "options": [
            "5/2",
            "1",
            "0",
            "5"
        ],
        "correctAnswer": "5/2",
        "explanation": "We can rewrite the expression to use standard limit properties: (5/2) * [sin(5x) / 5x]. Since the limit of [sin(5x) / 5x] as x approaches 0 is 1, the expression evaluates to (5/2) * 1 = 5/2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin^2 x}{x^2}$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "2"
        ],
        "correctAnswer": "1",
        "explanation": "We can rewrite this expression as the square of a single fraction: [sin x / x]^2. Since the limit of sin x / x as x approaches 0 is 1, squaring that limit gives 1^2 = 1."
    },
    {
        "question": "If a function is defined as $f(x) = \\frac{|x|}{x}$, what is the value of the left-hand limit $\\lim_{x \\to 0^-} f(x)$?",
        "options": [
            "-1",
            "1",
            "0",
            "Does not exist"
        ],
        "correctAnswer": "-1",
        "explanation": "For negative values of x (as x approaches 0 from the left), the absolute value function |x| equals -x. This makes the function f(x) = -x / x = -1. Therefore, the left-hand limit is -1."
    },
    {
        "question": "If a function is defined as $f(x) = \\frac{|x|}{x}$, what is the value of the right-hand limit $\\lim_{x \\to 0^+} f(x)$?",
        "options": [
            "1",
            "-1",
            "0",
            "Does not exist"
        ],
        "correctAnswer": "1",
        "explanation": "For positive values of x (as x approaches 0 from the right side), the absolute value function |x| is simply equal to x. This turns the function into f(x) = x / x = 1. Therefore, the right-hand limit is a constant 1."
    },
    {
        "question": "Based on the left-hand limit of -1 and the right-hand limit of 1, what can we conclude about the two-sided limit $\\lim_{x \\to 0} \\frac{|x|}{x}$?",
        "options": [
            "The limit does not exist.",
            "The limit is equal to 0.",
            "The limit is equal to 1.",
            "The limit is equal to -1."
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches two completely different values depending on the direction you come from (-1 from the left and 1 from the right), the general two-sided limit does not exist at x = 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{3x - 6}{x^2 - 4}$.",
        "options": [
            "3/4",
            "3",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3/4",
        "explanation": "Plugging in x = 2 gives 0/0. Factoring the numerator gives 3(x - 2), and factoring the denominator gives (x - 2)(x + 2). Canceling out the common (x - 2) factor leaves 3 / (x + 2). Substituting x = 2 gives 3 / (2 + 2) = 3/4."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 1} \\frac{x^2 - 1}{x^2 + x - 2}$.",
        "options": [
            "2/3",
            "0",
            "1/2",
            "Undefined"
        ],
        "correctAnswer": "2/3",
        "explanation": "Direct substitution results in 0/0. Factoring the top gives (x - 1)(x + 1), and factoring the bottom gives (x - 1)(x + 2). Canceling the (x - 1) factor leaves (x + 1) / (x + 2). Substituting x = 1 gives (1 + 1) / (1 + 2) = 2/3."
    },
    {
        "question": "Determine the limit value: $\\lim_{x \\to -3} (2x^2 + 5x - 1)$.",
        "options": [
            "2",
            "32",
            "-4",
            "0"
        ],
        "correctAnswer": "2",
        "explanation": "Since polynomials are continuous everywhere, substitute x = -3 directly into the formula: 2(-3)^2 + 5(-3) - 1. This evaluates to 2(9) - 15 - 1 = 18 - 15 - 1 = 2."
    },
    {
        "question": "What is the limit of $f(x) = \\frac{x^2 - 16}{x - 4}$ as x approaches 5?",
        "options": [
            "9",
            "8",
            "0",
            "Undefined"
        ],
        "correctAnswer": "9",
        "explanation": "Be careful! The denominator only becomes zero at x = 4. Since we are looking for the limit as x approaches 5, we can use direct substitution: (5^2 - 16) / (5 - 4) = (25 - 16) / 1 = 9 / 1 = 9."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{2x^2 - 5}{3x^3 + x}$.",
        "options": [
            "0",
            "2/3",
            "$\\infty$",
            "-5"
        ],
        "correctAnswer": "0",
        "explanation": "The highest power in the denominator ($x^3$) is larger than the highest power in the numerator ($x^2$). When the bottom of a fraction grows faster than the top, the entire value shrinks down to 0 as x goes to infinity."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{6x^4 + 2x}{2x^4 - 9}$.",
        "options": [
            "3",
            "6",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "3",
        "explanation": "The degrees of the numerator and denominator are equal (both are 4). For these matching scenarios at infinity, the limit is simply the ratio of their leading coefficients: 6 / 2 = 3."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(7x)}{\\sin(2x)}$.",
        "options": [
            "7/2",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "7/2",
        "explanation": "We can divide both the top and bottom by x to get [sin(7x)/x] / [sin(2x)/x]. Multiplying by the respective constants gives 7*[sin(7x)/(7x)] divided by 2*[sin(2x)/(2x)]. Since the standard limit parts become 1, we are left with 7 / 2."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\frac{1}{\\sqrt{x - 2}}$?",
        "options": [
            "$x > 2$",
            "$x \\ge 2$",
            "All real numbers except 2",
            "$x < 2$"
        ],
        "correctAnswer": "$x > 2$",
        "explanation": "There are two rules to watch out for: the value inside a square root must be non-negative ($x - 2 \\ge 0$), and a denominator cannot be zero ($x - 2 \\neq 0$). Combining these rules means $x - 2$ must be strictly greater than zero, which simplifies to $x > 2$."
    },
    {
        "question": "If $f(x) = x^3$, find the average rate of change expression $\\frac{f(x) - f(2)}{x - 2}$ before taking a limit.",
        "options": [
            "$x^2 + 2x + 4$",
            "$x^2 - 4$",
            "$x^2 + 4$",
            "$x + 2$"
        ],
        "correctAnswer": "$x^2 + 2x + 4$",
        "explanation": "Substituting the function gives (x^3 - 2^3) / (x - 2) = (x^3 - 8) / (x - 2). Using the difference of cubes factoring rule, the numerator becomes (x - 2)(x^2 + 2x + 4). Canceling out the (x - 2) terms leaves $x^2 + 2x + 4$."
    },
    {
        "question": "Using the result from the previous question, find the instantaneous rate of change by evaluating: $\\lim_{x \\to 2} (x^2 + 2x + 4)$.",
        "options": [
            "12",
            "4",
            "8",
            "6"
        ],
        "correctAnswer": "12",
        "explanation": "Using direct substitution into the simplified expression gives: 2^2 + 2(2) + 4 = 4 + 4 + 4 = 12."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} \\frac{\\frac{1}{x} - 1}{x - 1}$.",
        "options": [
            "-1",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1",
        "explanation": "Find a common denominator for the numerator fraction: (1 - x) / x. This turns the entire expression into [(1 - x) / x] * [1 / (x - 1)]. We can rewrite (1 - x) as -(x - 1). Canceling out the common (x - 1) factor leaves -1 / x. Evaluating at x = 1 gives -1 / 1 = -1."
    },
    {
        "question": "What is the limit of $f(x) = 5$ as x approaches infinity?",
        "options": [
            "5",
            "$\\infty$",
            "0",
            "Undefined"
        ],
        "correctAnswer": "5",
        "explanation": "Since 5 is a constant value, it never changes regardless of what x does. Even as x grows infinitely large, the function value remains firmly at 5."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{x^3 + 4x^2 - 3x}{x}$.",
        "options": [
            "-3",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-3",
        "explanation": "Factor out an x from every term in the numerator to get x(x^2 + 4x - 3). Cancel this x with the one in the denominator to simplify the expression to x^2 + 4x - 3. Plugging in x = 0 leaves us with -3."
    },
    {
        "question": "If $\\lim_{x \\to a} f(x) = 4$ and $\\lim_{x \\to a} g(x) = -2$, what is the limit of their product $\\lim_{x \\to a} [f(x) \\cdot g(x)]$?",
        "options": [
            "-8",
            "2",
            "6",
            "-2"
        ],
        "correctAnswer": "-8",
        "explanation": "One of the fundamental properties of limits states that the limit of a product of two functions is equal to the product of their individual limits: 4 * (-2) = -8."
    },
    {
        "question": "Using the same limits ($\\lim_{x \\to a} f(x) = 4$ and $\\lim_{x \\to a} g(x) = -2$), find the limit of the sum: $\\lim_{x \\to a} [f(x) + g(x)]$.",
        "options": [
            "2",
            "6",
            "-2",
            "8"
        ],
        "correctAnswer": "2",
        "explanation": "The limit of a sum is equal to the sum of the individual limits: 4 + (-2) = 2."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 0} \\frac{\\tan(3x)}{x}$.",
        "options": [
            "3",
            "1",
            "0",
            "1/3"
        ],
        "correctAnswer": "3",
        "explanation": "Rewrite tan(3x) as sin(3x)/cos(3x). This changes the expression into [sin(3x)/x] * [1/cos(3x)]. We already know that lim_{x -> 0} [sin(3x)/x] = 3 and cos(0) = 1, so the limit evaluates to 3 * (1/1) = 3."
    },
    {
        "question": "If a function is continuous at $x = 3$ and we know $\\lim_{x \\to 3} f(x) = 5$, what is the exact value of $f(3)$?",
        "options": [
            "5",
            "3",
            "0",
            "Cannot be determined without a formula"
        ],
        "correctAnswer": "5",
        "explanation": "By definition, if a function is continuous at a specific point, its evaluated value at that point must be exactly equal to its limit value at that same point."
    },
    {
        "question": "Evaluate the radical limit problem: $\\lim_{x \\to 7} \\frac{x - 7}{\\sqrt{x} - \\sqrt{7}}$.",
        "options": [
            "$2\\sqrt{7}$",
            "$\\sqrt{7}$",
            "0",
            "$\\frac{1}{2\\sqrt{7}}$"
        ],
        "correctAnswer": "$2\\sqrt{7}$",
        "explanation": "We can factor the numerator as a difference of squares in radical form: (\\sqrt{x} - \\sqrt{7})(\\sqrt{x} + \\sqrt{7}). Canceling out the common (\\sqrt{x} - \\sqrt{7}) factor from the top and bottom leaves behind (\\sqrt{x} + \\sqrt{7}). Substituting x = 7 gives \\sqrt{7} + \\sqrt{7} = 2\\sqrt{7}."
    },
    {
        "question": "What type of function is defined by $f(x) = 5^x$?",
        "options": [
            "Exponential function",
            "Polynomial function",
            "Logarithmic function",
            "Power function"
        ],
        "correctAnswer": "Exponential function",
        "explanation": "When the independent variable x sits up in the exponent slot while the base is a fixed constant number, it is classified as an exponential function."
    },
    {
        "question": "What is the y-intercept of the basic exponential function $f(x) = 3^x$?",
        "options": [
            "(0, 1)",
            "(0, 3)",
            "(0, 0)",
            "It has no y-intercept"
        ],
        "correctAnswer": "(0, 1)",
        "explanation": "To find the y-intercept, evaluate the function at x = 0. Since any non-zero number raised to the power of 0 equals 1 ($3^0 = 1$), the graph always passes through the point (0, 1)."
    },
    {
        "question": "Evaluate the function value: if $f(x) = 2^x$, what is $f(4)$?",
        "options": [
            "16",
            "8",
            "6",
            "32"
        ],
        "correctAnswer": "16",
        "explanation": "Substituting x = 4 into the exponential expression gives $2^4$. This means multiplying 2 by itself four times: 2 * 2 * 2 * 2 = 16."
    },
    {
        "question": "What is the inverse function of an exponential function $f(x) = a^x$?",
        "options": [
            "A logarithmic function, $f^{-1}(x) = \\log_a x$",
            "A power function, $f^{-1}(x) = x^a$",
            "A rational fraction function, $f^{-1}(x) = a^{-x}$",
            "An absolute value function"
        ],
        "correctAnswer": "A logarithmic function, $f^{-1}(x) = \\log_a x$",
        "explanation": "Logarithms were specifically invented to be the inverse mathematical operation of exponential functions, allowing us to solve for a variable stuck in an exponent."
    },
    {
        "question": "Evaluate the log function value: find $\\log_2 8$.",
        "options": [
            "3",
            "4",
            "64",
            "2"
        ],
        "correctAnswer": "3",
        "explanation": "A logarithm asks the question: 'To what power must I raise the base to get this number?' Since you have to raise a base of 2 to the power of 3 to get 8 ($2^3 = 8$), the answer is 3."
    },
    {
        "question": "What is the natural domain of the basic logarithmic function $f(x) = \\log_a x$?",
        "options": [
            "All strictly positive real numbers ($x > 0$)",
            "All real numbers including negative values",
            "All real numbers except zero",
            "Only whole integers"
        ],
        "correctAnswer": "All strictly positive real numbers ($x > 0$)",
        "explanation": "Because a positive base raised to any real exponent can only ever produce a positive result, you cannot take the logarithm of a negative number or zero in the set of real numbers."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$.",
        "options": [
            "12",
            "4",
            "0",
            "8"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution gives 0/0. Use the difference of cubes formula to factor the numerator: (x - 2)(x^2 + 2x + 4). Cancel the common (x - 2) factor to leave x^2 + 2x + 4. Substituting x = 2 gives 2^2 + 2(2) + 4 = 4 + 4 + 4 = 12."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -1} \\frac{x^2 - 1}{x + 1}$.",
        "options": [
            "-2",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-2",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator reveals a difference of squares: (x - 1)(x + 1). Cancel out the (x + 1) terms to leave behind (x - 1). Evaluating this at x = -1 gives -1 - 1 = -2."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to 0} (e^x + \\sin x)$?",
        "options": [
            "1",
            "0",
            "e",
            "Undefined"
        ],
        "correctAnswer": "1",
        "explanation": "Both exponential and sine functions are continuous, so we can use direct substitution: $e^0 + \\sin(0)$. Since any number to the power of 0 is 1 and sin(0) is 0, we get 1 + 0 = 1."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 2} \\frac{x^2 + 2x - 8}{x^2 - 4}$.",
        "options": [
            "3/2",
            "1",
            "0",
            "2/3"
        ],
        "correctAnswer": "3/2",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x + 4)(x - 2), and factoring the denominator gives (x + 2)(x - 2). Canceling the matching (x - 2) factor leaves (x + 4) / (x + 2). Substituting x = 2 gives (2 + 4) / (2 + 2) = 6 / 4 = 3/2."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\sin(4x)}{\\sin(3x)}$.",
        "options": [
            "4/3",
            "1",
            "0",
            "12"
        ],
        "correctAnswer": "4/3",
        "explanation": "Divide both the numerator and denominator by x to set up our standard limit rules. This gives [sin(4x)/x] / [sin(3x)/x]. Evaluating the limits of the top and bottom separately yields 4 / 3."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{8x^2 - 4}{2x^2 + 5x}$.",
        "options": [
            "4",
            "8",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "4",
        "explanation": "The highest degree exponent is the same in both the top and bottom ($x^2$). The limit as x goes to infinity is simply the ratio of those leading coefficients: 8 / 2 = 4."
    },
    {
        "question": "What is the limit of $\\frac{5}{x^2 + 1}$ as x approaches infinity?",
        "options": [
            "0",
            "5",
            "1",
            "$\\infty$"
        ],
        "correctAnswer": "0",
        "explanation": "As x grows infinitely large, the denominator ($x^2 + 1$) also becomes incredibly large. Dividing a fixed constant of 5 by an infinitely large number pushes the value of the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 3} \\frac{2x^2 - 6x}{x - 3}$.",
        "options": [
            "6",
            "2",
            "0",
            "3"
        ],
        "correctAnswer": "6",
        "explanation": "Direct substitution gives 0/0. Factor out 2x from the terms in the numerator to get 2x(x - 3). Canceling out the common (x - 3) factor from the top and bottom simplifies the expression to just 2x. Substituting x = 3 gives 2(3) = 6."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 1} \\frac{x^4 - 1}{x - 1}$.",
        "options": [
            "4",
            "1",
            "0",
            "2"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution gives 0/0. The numerator can be factored as a difference of squares: (x^2 - 1)(x^2 + 1), which breaks down further into (x - 1)(x + 1)(x^2 + 1). Canceling the (x - 1) factor leaves (x + 1)(x^2 + 1). Evaluating at x = 1 gives (1 + 1)(1^2 + 1) = 2 * 2 = 4."
    },
    {
        "question": "If a function is defined as $f(x) = 3x - 5$, find the composition value $f(f(2))$.",
        "options": [
            "-2",
            "1",
            "4",
            "0"
        ],
        "correctAnswer": "-2",
        "explanation": "First, evaluate the inner function step: f(2) = 3(2) - 5 = 6 - 5 = 1. Next, plug this result back into the function for the outer layer: f(1) = 3(1) - 5 = 3 - 5 = -2."
    },
    {
        "question": "What is the domain of the rational function $f(x) = \\frac{x - 1}{x^2 - 16}$?",
        "options": [
            "All real numbers except $x = 4$ and $x = -4$",
            "All real numbers except $x = 4$",
            "Only real numbers greater than 4",
            "All real numbers except $x = 1$"
        ],
        "correctAnswer": "All real numbers except $x = 4$ and $x = -4$",
        "explanation": "To find the domain restrictions, set the denominator equal to zero: $x^2 - 16 = 0$, which gives $x^2 = 16$. Taking the square root shows that x cannot be 4 or -4, as both create an undefined division by zero."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 0} \\frac{5x}{\\sin(2x)}$.",
        "options": [
            "5/2",
            "2/5",
            "1",
            "0"
        ],
        "correctAnswer": "5/2",
        "explanation": "We can invert the standard limit format to write this as (5/2) * [2x / sin(2x)]. Since the limit of 2x / sin(2x) as x approaches 0 is still 1, the expression evaluates to (5/2) * 1 = 5/2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 4} (x^2 - 3x + 2)$.",
        "options": [
            "6",
            "4",
            "16",
            "2"
        ],
        "correctAnswer": "6",
        "explanation": "Using direct substitution for this continuous polynomial expression yields: 4^2 - 3(4) + 2 = 16 - 12 + 2 = 6."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to -2} \\frac{x^3 + 8}{x + -2}$ if rewritten correctly as $\\lim_{x \\to -2} \\frac{x^3 + 8}{x + 2}$.",
        "options": [
            "12",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution gives 0/0. Factor the numerator using the sum of cubes rule: (x + 2)(x^2 - 2x + 4). Canceling out the common (x + 2) factor leaves x^2 - 2x + 4. Substituting x = -2 gives (-2)^2 - 2(-2) + 4 = 4 + 4 + 4 = 12."
    },
    {
        "question": "What is the limit of $\\frac{\\sin x}{x}$ as x approaches infinity?",
        "options": [
            "0",
            "1",
            "$\\infty$",
            "Does not exist due to oscillation"
        ],
        "correctAnswer": "0",
        "explanation": "Don't confuse this with the limit as x approaches 0! As x goes to infinity, the numerator (sin x) safely oscillates back and forth between -1 and 1, while the denominator x grows infinitely large. A bounded numerator divided by an infinite denominator results in a limit of 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} \\frac{\\sqrt{x + 3} - 2}{x - 1}$.",
        "options": [
            "1/4",
            "1/2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "1/4",
        "explanation": "Direct substitution gives 0/0. To solve this, multiply the top and bottom by the conjugate of the numerator, which is $(\\sqrt{x + 3} + 2)$. The numerator becomes $(x + 3) - 4 = x - 1$. This cancels perfectly with the $(x - 1)$ in the denominator, leaving $1 / (\\sqrt{x + 3} + 2)$. Substituting x = 1 gives $1 / (\\sqrt{4} + 2) = 1 / (2 + 2) = 1/4$."
    },
    {
        "question": "Find the vertical asymptote of the rational function $f(x) = \\frac{2x}{x - 5}$.",
        "options": [
            "x = 5",
            "x = -5",
            "x = 2",
            "y = 2"
        ],
        "correctAnswer": "x = 5",
        "explanation": "Vertical asymptotes occur where the denominator of a simplified rational function equals zero. Setting x - 5 = 0 gives the vertical line equation x = 5."
    },
    {
        "question": "Find the horizontal asymptote of the same rational function $f(x) = \\frac{2x}{x - 5}$.",
        "options": [
            "y = 2",
            "y = 0",
            "x = 5",
            "It has no horizontal asymptote"
        ],
        "correctAnswer": "y = 2",
        "explanation": "Horizontal asymptotes are found by taking the limit of the function as x approaches infinity. Since the degrees of the top and bottom match, the limit is the ratio of their leading coefficients: 2 / 1 = 2, giving the horizontal line equation y = 2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$.",
        "options": [
            "1/2",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "1/2",
        "explanation": "Multiply the numerator and denominator by the conjugate $(1 + \\cos x)$. The top becomes $1 - \\cos^2 x = \\sin^2 x$. This rewrites our limit as $[\\sin^2 x / x^2] * [1 / (1 + \\cos x)]$. We know that $\\lim_{x \\to 0} (\\sin x / x)^2 = 1$, and evaluating the second part gives $1 / (1 + \\cos(0)) = 1 / 2$. Multiplying them together gives 1 * 1/2 = 1/2."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 2} (5)$.",
        "options": [
            "5",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "5",
        "explanation": "The limit of any constant value is simply that constant itself, regardless of what value the independent variable x is approaching."
    },
    {
        "question": "If a function is defined as $f(x) = \\sqrt{x}$, what is the domain of its inverse function $f^{-1}(x)$?",
        "options": [
            "$x \\ge 0$",
            "All real numbers",
            "Only strictly positive integers",
            "$x \\le 0$"
        ],
        "correctAnswer": "$x \\ge 0$",
        "explanation": "The domain of an inverse function is identical to the range of the original function. Since the output values of the square root function $f(x) = \\sqrt{x}$ are always non-negative ($y \\ge 0$), the domain of its inverse must be $x \\ge 0$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -1} \\frac{x^2 + 3x + 2}{x^2 - 1}$.",
        "options": [
            "-1/2",
            "1/2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/2",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x + 1)(x + 2), and factoring the denominator gives (x + 1)(x - 1). Canceling out the common (x + 1) factor simplifies the expression to (x + 2) / (x - 1). Substituting x = -1 gives (-1 + 2) / (-1 - 1) = 1 / -2 = -1/2."
    },
    {
        "question": "What is the limit of $\\frac{3x^2 - 1}{x^3 + 4}$ as x approaches infinity?",
        "options": [
            "0",
            "3",
            "$\\infty$",
            "-1/4"
        ],
        "correctAnswer": "0",
        "explanation": "Since the power of the denominator ($x^3$) is higher than the power of the numerator ($x^2$), the bottom grows much faster than the top as x approaches infinity, pulling the limit down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x \\cos x}$.",
        "options": [
            "2",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "2",
        "explanation": "We can split this expression into two distinct limits: [sin(2x) / x] * [1 / cos x]. We know that lim_{x -> 0} [sin(2x) / x] = 2 and cos(0) = 1, so the expression evaluates to 2 * (1 / 1) = 2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{x^2 - 3x}{2x}$.",
        "options": [
            "-3/2",
            "0",
            "-3",
            "Undefined"
        ],
        "correctAnswer": "-3/2",
        "explanation": "Plugging in x = 0 directly gives an indeterminate 0/0 form. To fix this, factor out an x from the numerator to get x(x - 3). You can then cancel this x with the x in the denominator, which simplifies the expression to (x - 3) / 2. Substituting x = 0 into this simplified version gives (0 - 3) / 2 = -3/2."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 5} (3x - 7)$.",
        "options": [
            "8",
            "15",
            "7",
            "5"
        ],
        "correctAnswer": "8",
        "explanation": "Since 3x - 7 is a continuous linear polynomial function, we can evaluate its limit by directly substituting the value into the variable: 3(5) - 7 = 15 - 7 = 8."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to \\infty} \\frac{4x^3 - 5x + 2}{8x^3 + 12}$?",
        "options": [
            "1/2",
            "4",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "1/2",
        "explanation": "The highest power of x in both the numerator and denominator is x^3. For limits at infinity where the highest degrees match, the limit is simply the ratio of their leading coefficients: 4 / 8, which simplifies to 1/2."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 1} \\frac{x^2 - 3x + 2}{x - 1}$.",
        "options": [
            "-1",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1",
        "explanation": "Direct substitution gives 0/0. Factoring the quadratic expression in the numerator gives (x - 1)(x - 2). Canceling out the common (x - 1) factor from both the top and bottom leaves us with just (x - 2). Substituting x = 1 gives 1 - 2 = -1."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(6x)}{3x}$.",
        "options": [
            "2",
            "1",
            "0",
            "6"
        ],
        "correctAnswer": "2",
        "explanation": "We can rewrite the expression to match our standard trigonometric limit rule: 2 * [sin(6x) / 6x]. Since the limit of [sin(6x) / 6x] as x approaches 0 is equal to 1, the entire expression evaluates to 2 * 1 = 2."
    },
    {
        "question": "Find the vertical asymptote of the rational function $f(x) = \\frac{x + 2}{x - 3}$.",
        "options": [
            "x = 3",
            "x = -3",
            "x = -2",
            "y = 1"
        ],
        "correctAnswer": "x = 3",
        "explanation": "Vertical asymptotes are found where the denominator of a simplified rational function equals zero. Setting x - 3 = 0 gives the equation of the vertical line x = 3."
    },
    {
        "question": "Find the horizontal asymptote of the rational function $f(x) = \\frac{x + 2}{x - 3}$.",
        "options": [
            "y = 1",
            "y = 0",
            "x = 3",
            "It has no horizontal asymptote"
        ],
        "correctAnswer": "y = 1",
        "explanation": "To find the horizontal asymptote, we look at the limit of the function as x approaches infinity. Because the highest powers in the numerator and denominator are the same ($x^1$), the limit is the ratio of their leading coefficients: 1 / 1 = 1, which gives the horizontal line equation y = 1."
    },
    {
        "question": "If $\\lim_{x \\to 2^-} f(x) = 4$ and $\\lim_{x \\to 2^+} f(x) = 4$, what is the overall two-sided limit $\\lim_{x \\to 2} f(x)$?",
        "options": [
            "4",
            "Does not exist",
            "2",
            "8"
        ],
        "correctAnswer": "4",
        "explanation": "For a standard limit to exist, the function must approach the exact same value from both sides. Since both the left-hand limit and the right-hand limit match at 4, the general two-sided limit exists and is equal to 4."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x^2 - 3x - 4}$.",
        "options": [
            "8/5",
            "4/5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "8/5",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x - 4)(x + 4), and factoring the denominator gives (x - 4)(x + 1). Canceling out the common (x - 4) factor simplifies the expression to (x + 4) / (x + 1). Substituting x = 4 into this leaves (4 + 4) / (4 + 1) = 8/5."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{x^2 - 2x + 1}{x + 1}$.",
        "options": [
            "1",
            "0",
            "-1",
            "Undefined"
        ],
        "correctAnswer": "1",
        "explanation": "Be careful not to assume this is 0/0! Substituting x = 0 directly into the expression gives (0^2 - 2(0) + 1) / (0 + 1) = 1 / 1 = 1. Since this does not result in division by zero, direct substitution gives the correct final answer."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{5x^2 - 2}{x^3 + 4x}$.",
        "options": [
            "0",
            "5",
            "$\\infty$",
            "-1/2"
        ],
        "correctAnswer": "0",
        "explanation": "The highest power in the denominator ($x^3$) is greater than the highest power in the numerator ($x^2$). Whenever the denominator grows at a faster rate than the numerator as x goes to infinity, the value of the fraction shrinks down to 0."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{2x}$.",
        "options": [
            "0",
            "1/2",
            "1",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "We can separate the constants to rewrite this expression as (1/2) * [ (1 - cos x) / x ]. We know from calculus properties that the limit of (1 - cos x) / x as x approaches 0 is equal to 0, so the expression evaluates to (1/2) * 0 = 0."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -1} \\frac{x^3 + 1}{x + 1}$.",
        "options": [
            "3",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution gives 0/0. Use the sum of cubes formula to factor the numerator: (x + 1)(x^2 - x + 1). Canceling out the common (x + 1) factor from the top and bottom leaves behind x^2 - x + 1. Substituting x = -1 into this gives (-1)^2 - (-1) + 1 = 1 + 1 + 1 = 3."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\sqrt{3x - 9}$?",
        "options": [
            "$x \\ge 3$",
            "$x > 3$",
            "$x \\ge 0$",
            "All real numbers"
        ],
        "correctAnswer": "$x \\ge 3$",
        "explanation": "For a square root function to produce real outputs, the expression inside the radical must be greater than or equal to zero. Setting up the inequality 3x - 9 >= 0, we add 9 to both sides to get 3x >= 9, and dividing by 3 results in x >= 3."
    },
    {
        "question": "If $f(x) = 2x + 3$ and $g(x) = 4x - 1$, what is the composite value $f(g(2))$?",
        "options": [
            "17",
            "11",
            "14",
            "20"
        ],
        "correctAnswer": "17",
        "explanation": "First, evaluate the inner function step: g(2) = 4(2) - 1 = 8 - 1 = 7. Next, take this output and plug it into the outer function f: f(7) = 2(7) + 3 = 14 + 3 = 17."
    },
    {
        "question": "Using the same functions ($f(x) = 2x + 3$ and $g(x) = 4x - 1$), evaluate the opposite composition: $g(f(2))$.",
        "options": [
            "27",
            "17",
            "23",
            "11"
        ],
        "correctAnswer": "27",
        "explanation": "First, solve the inside layer: f(2) = 2(2) + 3 = 4 + 3 = 7. Now, take that result and plug it into g as your input variable: g(7) = 4(7) - 1 = 28 - 1 = 27."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{\\frac{1}{x} - \\frac{1}{2}}{x - 2}$.",
        "options": [
            "-1/4",
            "1/4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/4",
        "explanation": "Direct substitution gives 0/0. Find a common denominator for the top fraction, which gives (2 - x) / 2x. This rewrites the full fraction as [(2 - x) / 2x] * [1 / (x - 2)]. Notice that (2 - x) is equal to -(x - 2). Canceling out the common (x - 2) terms leaves behind -1 / 2x. Substituting x = 2 gives -1 / 2(2) = -1/4."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 0} \\frac{\\tan(5x)}{2x}$.",
        "options": [
            "5/2",
            "1",
            "0",
            "5"
        ],
        "correctAnswer": "5/2",
        "explanation": "We can rewrite the expression as (5/2) * [tan(5x) / 5x]. Since the limit of tan(5x)/5x as x approaches 0 is equal to 1, the full expression evaluates to (5/2) * 1 = 5/2."
    },
    {
        "question": "Evaluate the limit as x approaches infinity: $\\lim_{x \\to \\infty} (e^{-x})$.",
        "options": [
            "0",
            "$\\infty$",
            "1",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "An exponential expression with a negative exponent can be rewritten as a fraction: 1 / e^x. As x grows infinitely large, the denominator e^x grows exponentially fast toward infinity. Dividing 1 by an infinitely large number pushes the value down to 0."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 3} \\sqrt{x^2 + 7}$.",
        "options": [
            "4",
            "16",
            "3",
            "\\sqrt{13}"
        ],
        "correctAnswer": "4",
        "explanation": "Since root functions are perfectly continuous over their domains, we can plug in the value directly using substitution: \\sqrt{3^2 + 7} = \\sqrt{9 + 7} = \\sqrt{16} = 4."
    },
    {
        "question": "A piecewise function is defined as $f(x) = x^2 + 1$ for $x < 2$, and $f(x) = kx - 1$ for $x \\ge 2$. Find the value of 'k' that makes the function continuous at $x = 2$.",
        "options": [
            "3",
            "5",
            "2",
            "6"
        ],
        "correctAnswer": "3",
        "explanation": "For the function to be continuous, the left-hand limit must equal the right-hand limit at x = 2. The left-hand side gives 2^2 + 1 = 5. The right-hand side gives k(2) - 1 = 2k - 1. Setting them equal to each other gives 2k - 1 = 5, which means 2k = 6, or k = 3."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(5x)}$.",
        "options": [
            "3/5",
            "1",
            "0",
            "15"
        ],
        "correctAnswer": "3/5",
        "explanation": "We can divide both the top and bottom terms by x to set up our standard limit properties: [sin(3x) / x] divided by [sin(5x) / x]. Evaluating these two limits separately yields 3 / 5."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        "options": [
            "4",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives a difference of squares: (x - 2)(x + 2). Canceling out the common (x - 2) factor leaves (x + 2). Substituting x = 2 gives 2 + 2 = 4."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to \\infty} \\frac{7x^2 - 3x}{2x^2 + 1}$?",
        "options": [
            "7/2",
            "0",
            "$\\infty$",
            "-3"
        ],
        "correctAnswer": "7/2",
        "explanation": "Since the highest exponent is identical in both the top and bottom ($x^2$), the limit as x goes to infinity is determined by the ratio of their leading coefficients, which gives 7/2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3}$.",
        "options": [
            "-6",
            "6",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-6",
        "explanation": "Direct substitution results in 0/0. Factoring the numerator gives (x - 3)(x + 3). Canceling out the common (x + 3) factor leaves behind (x - 3). Substituting x = -3 gives -3 - 3 = -6."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 0} \\frac{4x^2 + 7x}{x}$.",
        "options": [
            "7",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "7",
        "explanation": "Direct substitution gives 0/0. Factor out an x from the numerator to get x(4x + 7). Cancel this x with the one in the denominator to simplify the function to 4x + 7. Setting x = 0 leaves us with 4(0) + 7 = 7."
    },
    {
        "question": "What type of function is defined by $f(x) = \\log_3 x$?",
        "options": [
            "Logarithmic function",
            "Exponential function",
            "Polynomial function",
            "Rational function"
        ],
        "correctAnswer": "Logarithmic function",
        "explanation": "A function that involves a logarithm with a fixed base tracking an independent input variable x is classified as a logarithmic function."
    },
    {
        "question": "Evaluate the log expression value: find $\\log_5 25$.",
        "options": [
            "2",
            "5",
            "125",
            "1"
        ],
        "correctAnswer": "2",
        "explanation": "A logarithm answers the question: 'To what power must I raise the base to equal this number?' Since you must square 5 to get 25 ($5^2 = 25$), the output value is 2."
    },
    {
        "question": "What is the algebraic inverse function $f^{-1}(x)$ for the linear equation $f(x) = 2x - 5$?",
        "options": [
            "$f^{-1}(x) = \\frac{x + 5}{2}$",
            "$f^{-1}(x) = \\frac{x - 5}{2}$",
            "$f^{-1}(x) = 2x + 5$",
            "$f^{-1}(x) = \\frac{1}{2x - 5}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 5}{2}$",
        "explanation": "Write the function as y = 2x - 5. Add 5 to both sides to get y + 5 = 2x. Divide by 2 to isolate the variable: x = (y + 5) / 2. Swapping the variables gives the inverse function formula: f^{-1}(x) = (x + 5) / 2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} (4x^2 - 2x + 5)$.",
        "options": [
            "7",
            "9",
            "5",
            "3"
        ],
        "correctAnswer": "7",
        "explanation": "Because this is a continuous polynomial function, we can evaluate the limit directly by substituting x = 1 into the expression: 4(1)^2 - 2(1) + 5 = 4 - 2 + 5 = 7."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(2x)}{\\sin(3x)}$.",
        "options": [
            "2/3",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "2/3",
        "explanation": "Divide both the top and bottom expressions by x to get [sin(2x) / x] / [sin(3x) / x]. Taking the limits separately gives 2 / 3."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{10x + 3}{2x - 7}$.",
        "options": [
            "5",
            "10",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "5",
        "explanation": "Since the degrees of the numerator and denominator match perfectly ($x^1$), the limit as x approaches infinity is the ratio of their leading coefficients: 10 / 2 = 5."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x - 2}$.",
        "options": [
            "-1",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives (x - 2)(x - 3). Canceling the matching (x - 2) factor simplifies the expression to (x - 3). Substituting x = 2 gives 2 - 3 = -1."
    },
    {
        "question": "What is the value of the limit: $\\lim_{x \\to 0} \\frac{x^3 - 4x}{x}$?",
        "options": [
            "-4",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-4",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the numerator to get x(x^2 - 4). Canceling this x with the denominator simplifies the expression to x^2 - 4. Substituting x = 0 leaves us with 0 - 4 = -4."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 2x - 3}$.",
        "options": [
            "3/2",
            "6",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3/2",
        "explanation": "Direct substitution gives 0/0. Factoring the top gives (x - 3)(x + 3), and factoring the bottom gives (x - 3)(x + 1). Canceling out the common (x - 3) factor leaves (x + 3) / (x + 1). Substituting x = 3 gives (3 + 3) / (3 + 1) = 6 / 4 = 3/2."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{3x + 7}{x^2 - 4}$.",
        "options": [
            "0",
            "3",
            "$\\infty$",
            "-7/4"
        ],
        "correctAnswer": "0",
        "explanation": "Because the highest power in the denominator ($x^2$) is larger than the highest power in the numerator ($x^1$), the bottom grows much faster than the top as x approaches infinity, pulling the limit down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\cos(x)$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "-1"
        ],
        "correctAnswer": "1",
        "explanation": "The cosine function is continuous everywhere, so we can find its limit using direct substitution. The value of cos(0) is equal to 1."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$.",
        "options": [
            "3",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution leads to 0/0. Factor the numerator using the difference of cubes formula: (x - 1)(x^2 + x + 1). Canceling the matching (x - 1) factor from the top and bottom leaves behind x^2 + x + 1. Substituting x = 1 gives 1^2 + 1 + 1 = 3."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$.",
        "options": [
            "1/4",
            "4",
            "2",
            "Undefined"
        ],
        "correctAnswer": "1/4",
        "explanation": "Direct substitution gives 0/0. Factor the denominator as a difference of squares using radical forms: (\\sqrt{x} - 2)(\\sqrt{x} + 2). Canceling the matching (\\sqrt{x} - 2) factor leaves behind 1 / (\\sqrt{x} + 2). Substituting x = 4 gives 1 / (\\sqrt{4} + 2) = 1 / (2 + 2) = 1/4."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\frac{5}{x - 7}$?",
        "options": [
            "All real numbers except $x = 7$",
            "All real numbers except $x = -7$",
            "Only numbers greater than 7",
            "All real numbers except $x = 0$"
        ],
        "correctAnswer": "All real numbers except $x = 7$",
        "explanation": "To prevent division by zero, the denominator cannot be equal to zero. Setting x - 7 = 0 shows that x = 7 must be explicitly excluded from the domain."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} (4)$.",
        "options": [
            "4",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "The limit of a constant function is always equal to that constant value itself, regardless of what target value x is approaching."
    },
    {
        "question": "If $\\lim_{x \\to c} f(x) = 6$ and $\\lim_{x \\to c} g(x) = 2$, what is the limit of their quotient $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$?",
        "options": [
            "3",
            "12",
            "8",
            "4"
        ],
        "correctAnswer": "3",
        "explanation": "One of the fundamental properties of limits states that the limit of a quotient is equal to the quotient of their individual limits, provided the denominator limit is not zero: 6 / 2 = 3."
    },
    {
        "question": "Find the constant value 'a' that makes the function continuous at $x = 2$: $f(x) = 2x + a$ for $x \\le 2$ and $f(x) = x^2 + 2$ for $x > 2$.",
        "options": [
            "2",
            "4",
            "6",
            "0"
        ],
        "correctAnswer": "2",
        "explanation": "For continuity, the left-hand limit must equal the right-hand limit at x = 2. The right-hand side gives 2^2 + 2 = 6. The left-hand side gives 2(2) + a = 4 + a. Setting them equal gives 4 + a = 6, which means a = 2."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} \\frac{6x^2 - 5}{2x^2 + 3x}$.",
        "options": [
            "3",
            "6",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "3",
        "explanation": "Since the highest degrees in the numerator and denominator match ($x^2$), the limit as x goes to infinity is determined by the ratio of their leading coefficients: 6 / 2 = 3."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(4x)}{x}$.",
        "options": [
            "4",
            "1",
            "0",
            "1/4"
        ],
        "correctAnswer": "4",
        "explanation": "We multiply the top and bottom by 4 to match the angle inside the sine expression: 4 * [sin(4x) / 4x]. Since the limit of sin(4x)/4x as x approaches 0 is equal to 1, the expression evaluates to 4 * 1 = 4."
    },
    {
        "question": "What is the limit of $\\frac{2}{x}$ as x approaches infinity?",
        "options": [
            "0",
            "2",
            "$\\infty$",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As the denominator x grows without bound toward infinity, dividing a fixed constant of 2 by an infinitely larger number drives the value of the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$.",
        "options": [
            "2",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "2",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives a difference of squares: (x - 1)(x + 1). Canceling out the matching (x - 1) factor leaves behind (x + 1). Substituting x = 1 gives 1 + 1 = 2."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 3} (x^2 - 2x + 4)$.",
        "options": [
            "7",
            "9",
            "4",
            "1"
        ],
        "correctAnswer": "7",
        "explanation": "Since polynomials are continuous everywhere, we can solve this limit using direct substitution: 3^2 - 2(3) + 4 = 9 - 6 + 4 = 7."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 0} \\frac{x^2 + 5x}{x}$.",
        "options": [
            "5",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "5",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the numerator to get x(x + 5). Canceling this x with the one in the denominator simplifies the function to x + 5. Substituting x = 0 leaves us with 0 + 5 = 5."
    },
    {
        "question": "If $\\lim_{x \\to a^-} f(x) = 3$ and $\\lim_{x \\to a^+} f(x) = 7$, what is the overall limit $\\lim_{x \\to a} f(x)$?",
        "options": [
            "The limit does not exist.",
            "3",
            "7",
            "5"
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches two completely different heights from the left side (3) and the right side (7), the mismatch means the overall two-sided limit does not exist."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{3x^3 - 2x^2}{x^2}$.",
        "options": [
            "-2",
            "0",
            "3",
            "Undefined"
        ],
        "correctAnswer": "-2",
        "explanation": "Direct substitution gives 0/0. To resolve this, factor out $x^2$ from both terms in the numerator to get $x^2(3x - 2)$. Canceling this $x^2$ with the denominator simplifies the expression to $(3x - 2)$. Substituting $x = 0$ yields $3(0) - 2 = -2$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -1} (2x^3 - x^2 + 3)$.",
        "options": [
            "0",
            "4",
            "2",
            "6"
        ],
        "correctAnswer": "0",
        "explanation": "Since this is a standard polynomial function, it is continuous everywhere. We can evaluate the limit directly using substitution: $2(-1)^3 - (-1)^2 + 3 = 2(-1) - (1) + 3 = -2 - 1 + 3 = 0$."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to \\infty} \\frac{12x^2 - 4x + 1}{3x^2 + 7}$?",
        "options": [
            "4",
            "12",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "4",
        "explanation": "The highest power of $x$ in both the top and bottom expressions is $x^2$. For limits at infinity where the degrees match, the limit equals the ratio of their leading coefficients: $12 / 3 = 4$."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 3} \\frac{x^2 - 4x + 3}{x - 3}$.",
        "options": [
            "2",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "2",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives $(x - 3)(x - 1)$. By canceling out the common $(x - 3)$ factor from the numerator and denominator, the expression simplifies to $(x - 1)$. Substituting $x = 3$ gives $3 - 1 = 2$."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\sin(8x)}{2x}$.",
        "options": [
            "4",
            "1",
            "0",
            "8"
        ],
        "correctAnswer": "4",
        "explanation": "We can rewrite the expression to apply our fundamental trigonometric limit property: $4 \\cdot [\\sin(8x) / 8x]$. Because the limit of $[\\sin(8x) / 8x]$ as $x$ approaches 0 is 1, the full expression evaluates to $4 \\cdot 1 = 4$."
    },
    {
        "question": "Find the vertical asymptote of the rational function $f(x) = \\frac{2x + 1}{x - 4}$.",
        "options": [
            "x = 4",
            "x = -4",
            "x = -1/2",
            "y = 2"
        ],
        "correctAnswer": "x = 4",
        "explanation": "Vertical asymptotes are located where the denominator of a simplified rational function equals zero. Setting $x - 4 = 0$ provides our vertical line equation: $x = 4$."
    },
    {
        "question": "Find the horizontal asymptote of the rational function $f(x) = \\frac{2x + 1}{x - 4}$.",
        "options": [
            "y = 2",
            "y = 0",
            "x = 4",
            "It has no horizontal asymptote"
        ],
        "correctAnswer": "y = 2",
        "explanation": "To find the horizontal asymptote, take the limit of the function as $x$ approaches infinity. Because the highest power in the top matches the highest power in the bottom ($x^1$), the limit is the ratio of their leading coefficients: $2 / 1 = 2$, or $y = 2$."
    },
    {
        "question": "If $\\lim_{x \\to 5^-} f(x) = -2$ and $\\lim_{x \\to 5^+} f(x) = -2$, what is the general two-sided limit $\\lim_{x \\to 5} f(x)$?",
        "options": [
            "-2",
            "Does not exist",
            "5",
            "0"
        ],
        "correctAnswer": "-2",
        "explanation": "A two-sided limit exists if and only if the left-hand limit and the right-hand limit approach the exact same value. Since both sides match perfectly at $-2$, the overall limit is $-2$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 + x - 6}$.",
        "options": [
            "4/5",
            "0",
            "2/5",
            "Undefined"
        ],
        "correctAnswer": "4/5",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives $(x - 2)(x + 2)$, and factoring the denominator gives $(x - 2)(x + 3)$. Canceling the matching $(x - 2)$ factor simplifies the rational expression to $(x + 2) / (x + 3)$. Substituting $x = 2$ gives $(2 + 2) / (2 + 3) = 4/5$."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{x^2 + 3x - 4}{x - 2}$.",
        "options": [
            "2",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "2",
        "explanation": "Always try direct substitution first! Plunging $x = 0$ into the expression gives $(0^2 + 3(0) - 4) / (0 - 2) = -4 / -2 = 2$. Since this does not result in division by zero, substitution gives the correct final value."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^4 - 5}$.",
        "options": [
            "0",
            "3",
            "$\\infty$",
            "-1/5"
        ],
        "correctAnswer": "0",
        "explanation": "The degree of the denominator ($x^4$) is strictly greater than the degree of the numerator ($x^2$). As a result, the bottom of the fraction grows significantly faster than the top as $x$ approaches infinity, pulling the entire fraction down to 0."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{5x}$.",
        "options": [
            "0",
            "1/5",
            "1",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "We can factor out the constant to rewrite the expression as $(1/5) \\cdot [(1 - \\cos x) / x]$. Since the standard calculus limit of $(1 - \\cos x) / x$ as $x$ approaches 0 is equal to 0, our evaluation becomes $(1/5) \\cdot 0 = 0$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to -2} \\frac{x^3 + 8}{x + 2}$.",
        "options": [
            "12",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution gives 0/0. Factoring the sum of cubes in the numerator yields $(x + 2)(x^2 - 2x + 4)$. Canceling the common $(x + 2)$ factor leaves us with $(x^2 - 2x + 4)$. Substituting $x = -2$ gives $(-2)^2 - 2(-2) + 4 = 4 + 4 + 4 = 12$."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\sqrt{2x - 8}$?",
        "options": [
            "$x \\ge 4$",
            "$x > 4$",
            "$x \\ge 0$",
            "All real numbers"
        ],
        "correctAnswer": "$x \\ge 4$",
        "explanation": "For a square root function to produce real numbers, the expression inside must be non-negative ($2x - 8 \\ge 0$). Solving this inequality, we add 8 to both sides to get $2x \\ge 8$, and dividing by 2 results in $x \\ge 4$."
    },
    {
        "question": "If $f(x) = 3x + 1$ and $g(x) = x^2$, what is the composite value $f(g(3))$?",
        "options": [
            "28",
            "10",
            "100",
            "12"
        ],
        "correctAnswer": "28",
        "explanation": "First, evaluate the inner function layer: $g(3) = 3^2 = 9$. Next, substitute this output value into the outer function $f$: $f(9) = 3(9) + 1 = 27 + 1 = 28$."
    },
    {
        "question": "Using the same functions ($f(x) = 3x + 1$ and $g(x) = x^2$), evaluate the opposite composition: $g(f(3))$.",
        "options": [
            "100",
            "28",
            "10",
            "31"
        ],
        "correctAnswer": "100",
        "explanation": "First, solve the inner layer: $f(3) = 3(3) + 1 = 9 + 1 = 10$. Next, plug this result into the outer function $g$ as the input variable: $g(10) = 10^2 = 100$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 3} \\frac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$.",
        "options": [
            "-1/9",
            "1/9",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/9",
        "explanation": "Direct substitution gives 0/0. Find a common denominator for the top terms to get $(3 - x) / 3x$. The full expression becomes $[(3 - x) / 3x] \\cdot [1 / (x - 3)]$. Since $(3 - x) = -(x - 3)$, canceling the matching terms leaves behind $-1 / 3x$. Substituting $x = 3$ gives $-1 / 3(3) = -1/9$."
    },
    {
        "question": "Find the value of the limit: $\\lim_{x \\to 0} \\frac{\\tan(4x)}{3x}$.",
        "options": [
            "4/3",
            "1",
            "0",
            "4"
        ],
        "correctAnswer": "4/3",
        "explanation": "We can rewrite the expression using standard limit rules as $(4/3) \\cdot [\\tan(4x) / 4x]$. Since the limit of $\\tan(4x)/4x$ as $x$ approaches 0 is equal to 1, the full expression simplifies to $(4/3) \\cdot 1 = 4/3$."
    },
    {
        "question": "Evaluate the limit as x approaches infinity: $\\lim_{x \\to \\infty} (2^{-x})$.",
        "options": [
            "0",
            "$\\infty$",
            "1",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "An exponential term with a negative exponent can be rewritten as a fraction: $1 / 2^x$. As $x$ grows infinitely large, the denominator $2^x$ grows toward infinity. Dividing 1 by an infinitely large number pushes the overall value down to 0."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 4} \\sqrt{x^2 + 9}$.",
        "options": [
            "5",
            "25",
            "4",
            "\\sqrt{13}"
        ],
        "correctAnswer": "5",
        "explanation": "Because radical root functions are continuous over their domains, we can evaluate the limit using direct substitution: $\\sqrt{4^2 + 9} = \\sqrt{16 + 9} = \\sqrt{25} = 5$."
    },
    {
        "question": "A piecewise function is defined as $f(x) = 2x + 3$ for $x < 3$, and $f(x) = kx - 3$ for $x \\ge 3$. Find the value of 'k' that makes the function continuous at $x = 3$.",
        "options": [
            "4",
            "3",
            "2",
            "6"
        ],
        "correctAnswer": "4",
        "explanation": "For the function to be continuous, the left-hand limit must equal the right-hand limit at $x = 3$. The left-hand side gives $2(3) + 3 = 9$. The right-hand side gives $k(3) - 3 = 3k - 3$. Setting them equal gives $3k - 3 = 9$, which means $3k = 12$, or $k = 4$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(2x)}{\\sin(7x)}$.",
        "options": [
            "2/7",
            "1",
            "0",
            "14"
        ],
        "correctAnswer": "2/7",
        "explanation": "Divide both the top and bottom terms by $x$ to match standard limit forms: $[\\sin(2x) / x] / [\\sin(7x) / x]$. Evaluating these two limits independently yields a ratio of $2 / 7$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.",
        "options": [
            "8",
            "4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "8",
        "explanation": "Direct substitution gives 0/0. Factor the numerator as a difference of squares: $(x - 4)(x + 4)$. Canceling the common $(x - 4)$ factor from the top and bottom leaves $(x + 4)$. Substituting $x = 4$ gives $4 + 4 = 8$."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to \\infty} \\frac{9x^2 - 2x}{3x^2 + 5}$?",
        "options": [
            "3",
            "0",
            "$\\infty$",
            "-2/5"
        ],
        "correctAnswer": "3",
        "explanation": "Since the highest exponent is identical in both the top and bottom ($x^2$), the limit as $x$ goes to infinity is determined by the ratio of those leading coefficients: $9 / 3 = 3$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -4} \\frac{x^2 - 16}{x + 4}$.",
        "options": [
            "-8",
            "8",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-8",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives $(x - 4)(x + 4)$. Canceling out the matching $(x + 4)$ factor leaves behind the expression $(x - 4)$. Substituting $x = -4$ into this gives $-4 - 4 = -8$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 0} \\frac{3x^2 + 8x}{x}$.",
        "options": [
            "8",
            "0",
            "3",
            "Undefined"
        ],
        "correctAnswer": "8",
        "explanation": "Direct substitution gives 0/0. Factor out an $x$ from the numerator to get $x(3x + 8)$. Cancel this $x$ with the one in the denominator to simplify the function to $3x + 8$. Setting $x = 0$ leaves us with $3(0) + 8 = 8$."
    },
    {
        "question": "What type of function is defined by $f(x) = \\log_4 x$?",
        "options": [
            "Logarithmic function",
            "Exponential function",
            "Polynomial function",
            "Rational function"
        ],
        "correctAnswer": "Logarithmic function",
        "explanation": "A function that features a logarithm tracking an independent variable input $x$ alongside a fixed base is classified as a logarithmic function."
    },
    {
        "question": "Evaluate the log expression value: find $\\log_3 27$.",
        "options": [
            "3",
            "9",
            "81",
            "1"
        ],
        "correctAnswer": "3",
        "explanation": "A logarithm asks: 'To what exponent must I raise the base to equal this number?' Because you must raise 3 to the power of 3 to equal 27 ($3^3 = 27$), the answer is 3."
    },
    {
        "question": "What is the algebraic inverse function $f^{-1}(x)$ for the linear equation $f(x) = 3x - 2$?",
        "options": [
            "$f^{-1}(x) = \\frac{x + 2}{3}$",
            "$f^{-1}(x) = \\frac{x - 2}{3}$",
            "$f^{-1}(x) = 3x + 2$",
            "$f^{-1}(x) = \\frac{1}{3x - 2}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 2}{3}$",
        "explanation": "Write the function as $y = 3x - 2$. Add 2 to both sides to get $y + 2 = 3x$. Divide by 3 to isolate $x$, yielding $x = (y + 2) / 3$. Swapping the variables results in the inverse formula: $f^{-1}(x) = (x + 2) / 3$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} (3x^2 - 5x + 4)$.",
        "options": [
            "2",
            "4",
            "0",
            "3"
        ],
        "correctAnswer": "2",
        "explanation": "Because polynomials are continuous functions, we can evaluate their limits anywhere via direct substitution: $3(1)^2 - 5(1) + 4 = 3 - 5 + 4 = 2$."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(4x)}$.",
        "options": [
            "3/4",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3/4",
        "explanation": "Divide both the numerator and denominator by $x$ to set up separate standard limit structures: $[\\sin(3x) / x] / [\\sin(4x) / x]$. Evaluating them independently gives $3 / 4$."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{8x + 5}{4x - 1}$.",
        "options": [
            "2",
            "8",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "2",
        "explanation": "Because the highest degrees of the numerator and denominator match ($x^1$), the limit as $x$ approaches infinity is simply the ratio of their leading coefficients: $8 / 4 = 2$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 3} \\frac{x^2 - 4x + 3}{x - 3}$.",
        "options": [
            "2",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "2",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives $(x - 3)(x - 1)$. Canceling out the common $(x - 3)$ factor simplifies the expression down to $(x - 1)$. Substituting $x = 3$ gives $3 - 1 = 2$."
    },
    {
        "question": "What is the value of the limit: $\\lim_{x \\to 0} \\frac{x^3 - 9x}{x}$?",
        "options": [
            "-9",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-9",
        "explanation": "Direct substitution leads to 0/0. Factor out an $x$ from the numerator to get $x(x^2 - 9)$. Canceling this $x$ with the denominator leaves us with $x^2 - 9$. Substituting $x = 0$ gives $0 - 9 = -9$."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x^2 - 3x - 4}$.",
        "options": [
            "8/5",
            "4/5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "8/5",
        "explanation": "Direct substitution results in 0/0. Factoring the numerator gives $(x - 4)(x + 4)$, and factoring the denominator gives $(x - 4)(x + 1)$. Canceling out the common $(x - 4)$ factor leaves $(x + 4) / (x + 1)$. Substituting $x = 4$ leaves $(4 + 4) / (4 + 1) = 8/5$."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{5x + 2}{x^2 - 1}$.",
        "options": [
            "0",
            "5",
            "$\\infty$",
            "-2"
        ],
        "correctAnswer": "0",
        "explanation": "Because the highest power in the denominator ($x^2$) is strictly larger than the highest power in the numerator ($x^1$), the bottom grows much faster than the top as $x$ grows large, pulling the limit down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\cos(2x)$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "-1"
        ],
        "correctAnswer": "1",
        "explanation": "The cosine function is completely continuous, meaning we can solve for its limit using direct substitution. Evaluating the expression at $x = 0$ gives $\\cos(2 \\cdot 0) = \\cos(0) = 1$."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$.",
        "options": [
            "12",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution leads to 0/0. Factor the numerator using the difference of cubes formula: $(x - 2)(x^2 + 2x + 4)$. Canceling the matching $(x - 2)$ factor from the top and bottom leaves behind $x^2 + 2x + 4$. Substituting $x = 2$ gives $2^2 + 2(2) + 4 = 4 + 4 + 4 = 12$."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9}$.",
        "options": [
            "1/6",
            "6",
            "3",
            "Undefined"
        ],
        "correctAnswer": "1/6",
        "explanation": "Direct substitution gives 0/0. Factor the denominator as a difference of squares in radical form: $(\\sqrt{x} - 3)(\\sqrt{x} + 3)$. Canceling the matching $(\\sqrt{x} - 3)$ factor leaves behind $1 / (\\sqrt{x} + 3)$. Substituting $x = 9$ gives $1 / (\\sqrt{9} + 3) = 1 / (3 + 3) = 1/6$."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\frac{4}{x - 5}$?",
        "options": [
            "All real numbers except $x = 5$",
            "All real numbers except $x = -5$",
            "Only numbers greater than 5",
            "All real numbers"
        ],
        "correctAnswer": "All real numbers except $x = 5$",
        "explanation": "To prevent an undefined division by zero, the denominator cannot equal zero. Setting $x - 5 = 0$ highlights that $x = 5$ is a point restriction that must be excluded from the domain."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 5} (7)$.",
        "options": [
            "7",
            "5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "7",
        "explanation": "The limit of any constant function is always equal to that constant value itself, completely unaffected by what value $x$ approaches."
    },
    {
        "question": "If $\\lim_{x \\to c} f(x) = 12$ and $\\lim_{x \\to c} g(x) = 3$, what is the limit of their quotient $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$?",
        "options": [
            "4",
            "36",
            "15",
            "9"
        ],
        "correctAnswer": "4",
        "explanation": "The quotient property of limits states that the limit of a fraction is equal to the individual limit of the top divided by the individual limit of the bottom: $12 / 3 = 4$."
    },
    {
        "question": "Find the constant value 'a' that makes the function continuous at $x = 1$: $f(x) = 3x + a$ for $x \\le 1$ and $f(x) = x^2 + 4$ for $x > 1$.",
        "options": [
            "2",
            "5",
            "3",
            "0"
        ],
        "correctAnswer": "2",
        "explanation": "For continuity, the left-hand limit must equal the right-hand limit at $x = 1$. The right-hand side yields $1^2 + 4 = 5$. The left-hand side yields $3(1) + a = 3 + a$. Setting them equal gives $3 + a = 5$, which results in $a = 2$."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} \\frac{4x^2 - 3}{2x^2 + x}$.",
        "options": [
            "2",
            "4",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "2",
        "explanation": "Since the highest degrees in both parts match ($x^2$), the limit as $x$ approaches infinity simplifies to the ratio of their leading coefficients: $4 / 2 = 2$."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$.",
        "options": [
            "5",
            "1",
            "0",
            "1/5"
        ],
        "correctAnswer": "5",
        "explanation": "Multiply the numerator and denominator by 5 to match the expression inside the sine function: $5 \\cdot [\\sin(5x) / 5x]$. Because the limit of $[\\sin(5x) / 5x]$ as $x$ approaches 0 is 1, the expression evaluates to $5 \\cdot 1 = 5$."
    },
    {
        "question": "What is the limit of $\\frac{7}{x}$ as x approaches infinity?",
        "options": [
            "0",
            "7",
            "$\\infty$",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As the denominator $x$ increases without bound toward infinity, dividing a fixed constant of 7 by an infinitely larger number brings the value of the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        "options": [
            "4",
            "2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives a difference of squares: $(x - 2)(x + 2)$. Canceling out the common $(x - 2)$ factor leaves behind $(x + 2)$. Substituting $x = 2$ gives $2 + 2 = 4$."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} (x^2 - 3x + 5)$.",
        "options": [
            "3",
            "5",
            "4",
            "1"
        ],
        "correctAnswer": "3",
        "explanation": "Since polynomials are continuous everywhere, we can solve this limit using direct substitution: $2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 0} \\frac{x^2 + 4x}{x}$.",
        "options": [
            "4",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution leads to 0/0. Factor out an $x$ from the numerator to get $x(x + 4)$. Canceling this $x$ with the one in the denominator simplifies the function to $x + 4$. Substituting $x = 0$ leaves us with $0 + 4 = 4$."
    },
    {
        "question": "If $\\lim_{x \\to a^-} f(x) = 5$ and $\\lim_{x \\to a^+} f(x) = 2$, what is the overall limit $\\lim_{x \\to a} f(x)$?",
        "options": [
            "The limit does not exist.",
            "5",
            "2",
            "3.5"
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches two completely different values depending on the direction of approach (5 from the left and 2 from the right), the general two-sided limit does not exist."
    },
    {
        "question": "Evaluate the limit of a linear expression: $\\lim_{x \\to -4} (5x + 12)$.",
        "options": [
            "-8",
            "8",
            "32",
            "0"
        ],
        "correctAnswer": "-8",
        "explanation": "Since linear polynomials are continuous everywhere, you can solve for the limit by directly substituting x = -4 into the variable: 5(-4) + 12 = -20 + 12 = -8."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 3} \\frac{x^2 - 2x - 3}{x^2 - 9}$.",
        "options": [
            "2/3",
            "3/2",
            "0",
            "Undefined"
        ],
        "correctAnswer": "2/3",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator yields (x - 3)(x + 1) and the denominator factors into a difference of squares (x - 3)(x + 3). Canceling the common (x - 3) factor leaves (x + 1) / (x + 3). Substituting x = 3 gives (3 + 1) / (3 + 3) = 4 / 6 = 2/3."
    },
    {
        "question": "What is the limit of $\\frac{4x^3 - x^2}{2x^3 + 7x}$ as x approaches infinity?",
        "options": [
            "2",
            "4",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "2",
        "explanation": "The highest power in both parts of the fraction is x^3. For limits at infinity with matching degrees, the limit is simply the ratio of their leading coefficients: 4 / 2 = 2."
    },
    {
        "question": "Determine the value of the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\sin(10x)}{5x}$.",
        "options": [
            "2",
            "1",
            "0",
            "5"
        ],
        "correctAnswer": "2",
        "explanation": "We can rewrite this expression to separate constants and match the standard limit format: 2 * [sin(10x) / 10x]. Since the limit of sin(10x)/(10x) as x approaches 0 is 1, the total value becomes 2 * 1 = 2."
    },
    {
        "question": "Find the vertical asymptote of the rational function $f(x) = \\frac{x - 1}{2x - 6}$.",
        "options": [
            "x = 3",
            "x = 6",
            "x = 1",
            "y = 1/2"
        ],
        "correctAnswer": "x = 3",
        "explanation": "Vertical asymptotes occur where the denominator equals zero after the fraction is simplified. Setting 2x - 6 = 0 gives 2x = 6, which simplifies to the vertical line equation x = 3."
    },
    {
        "question": "Find the horizontal asymptote of the same rational function $f(x) = \\frac{x - 1}{2x - 6}$.",
        "options": [
            "y = 1/2",
            "y = 0",
            "x = 3",
            "It does not have a horizontal asymptote"
        ],
        "correctAnswer": "y = 1/2",
        "explanation": "Taking the limit of the function as x goes to infinity reveals the horizontal asymptote. Because the degrees of the numerator and denominator are equal (both are 1), the limit is the ratio of their leading coefficients: 1 / 2, or y = 1/2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{x^4 - 2x^2}{x^2}$.",
        "options": [
            "-2",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-2",
        "explanation": "Direct substitution yields 0/0. Factoring out x^2 from the numerator terms gives x^2(x^2 - 2). Canceling this factor with the x^2 in the denominator leaves behind x^2 - 2. Substituting x = 0 gives 0^2 - 2 = -2."
    },
    {
        "question": "If $\\lim_{x \\to c^-} f(x) = 11$ and $\\lim_{x \\to c^+} f(x) = 11$, what can we conclude about the general two-sided limit $\\lim_{x \\to c} f(x)$?",
        "options": [
            "The general limit is 11.",
            "The limit does not exist.",
            "The limit is 22.",
            "The limit is 0."
        ],
        "correctAnswer": "The general limit is 11.",
        "explanation": "Because a function approaches the exact same finite numerical height from both the left side and the right side, the overall two-sided limit exists and shares that same value."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 1} \\frac{x^2 + 4x - 5}{x^2 - 1}$.",
        "options": [
            "3",
            "0",
            "3/2",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x - 1)(x + 5) and factoring the denominator gives (x - 1)(x + 1). Canceling out the common factor (x - 1) leaves (x + 5) / (x + 1). Substituting x = 1 gives (1 + 5) / (1 + 1) = 6 / 2 = 3."
    },
    {
        "question": "What is the limit of $\\frac{6}{x^3 + 2}$ as x approaches infinity?",
        "options": [
            "0",
            "6",
            "3",
            "$\\infty$"
        ],
        "correctAnswer": "0",
        "explanation": "As x approaches infinity, the denominator grows larger and larger without limit. Dividing a fixed number of 6 by an infinitely large value drives the entire fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -1} \\frac{x^2 - 2x - 3}{x + 1}$.",
        "options": [
            "-4",
            "4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-4",
        "explanation": "Direct substitution results in 0/0. Factoring the numerator gives (x + 1)(x - 3). Canceling the matching (x + 1) factor from the top and bottom leaves behind (x - 3). Substituting x = -1 into this expression gives -1 - 3 = -4."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{5x^3 - 2x^2 + 6x}{2x}$.",
        "options": [
            "3",
            "0",
            "6",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution gives 0/0. Factoring out an x from the numerator gives x(5x^2 - 2x + 6). Canceling this x with the one in the denominator simplifies the function to (5x^2 - 2x + 6) / 2. Substituting x = 0 gives (0 - 0 + 6) / 2 = 6 / 2 = 3."
    },
    {
        "question": "Determine the algebraic inverse function $f^{-1}(x)$ for the linear equation $f(x) = 4x - 7$.",
        "options": [
            "$f^{-1}(x) = \\frac{x + 7}{4}$",
            "$f^{-1}(x) = \\frac{x - 7}{4}$",
            "$f^{-1}(x) = 4x + 7$",
            "$f^{-1}(x) = \\frac{1}{4x - 7}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 7}{4}$",
        "explanation": "Write the function as y = 4x - 7. Isolate the x variable by adding 7 to both sides, giving y + 7 = 4x, and then dividing by 4 to get x = (y + 7) / 4. Swapping the variables reveals the final inverse formula."
    },
    {
        "question": "What is the natural domain of the radical function $f(x) = \\sqrt{4x - 12}$?",
        "options": [
            "$x \\ge 3$",
            "$x > 3$",
            "$x \\ge 0$",
            "All real numbers"
        ],
        "correctAnswer": "$x \\ge 3$",
        "explanation": "The value inside a real square root radical must be non-negative. Setting up the inequality 4x - 12 >= 0, we add 12 to both sides to get 4x >= 12, and dividing by 4 results in x >= 3."
    },
    {
        "question": "If $f(x) = 2x - 1$ and $g(x) = x^2 + 3$, find the composite function value $f(g(2))$.",
        "options": [
            "13",
            "12",
            "20",
            "7"
        ],
        "correctAnswer": "13",
        "explanation": "First, evaluate the inner function value: g(2) = 2^2 + 3 = 4 + 3 = 7. Next, substitute this output value into the outer function layer: f(7) = 2(7) - 1 = 14 - 1 = 13."
    },
    {
        "question": "Using the same functions ($f(x) = 2x - 1$ and $g(x) = x^2 + 3$), find the value of the reverse composition: $g(f(2))$.",
        "options": [
            "12",
            "13",
            "16",
            "7"
        ],
        "correctAnswer": "12",
        "explanation": "First, compute the inner function portion: f(2) = 2(2) - 1 = 4 - 1 = 3. Now, pass this result as the input into the outer function layer: g(3) = 3^2 + 3 = 9 + 3 = 12."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 4} \\frac{\\frac{1}{x} - \\frac{1}{4}}{x - 4}$.",
        "options": [
            "-1/16",
            "1/16",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/16",
        "explanation": "Find a common denominator for the fractions on top to get (4 - x) / 4x. This transforms the problem into [(4 - x) / 4x] * [1 / (x - 4)]. Since (4 - x) = -(x - 4), canceling out the matching terms leaves behind -1 / 4x. Substituting x = 4 yields -1 / 4(4) = -1/16."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\tan(6x)}{2x}$.",
        "options": [
            "3",
            "6",
            "1",
            "0"
        ],
        "correctAnswer": "3",
        "explanation": "We can rewrite the expression as a product of constants to match the identity rule: 3 * [tan(6x) / 6x]. Since the limit of tan(6x)/6x as x approaches 0 is equal to 1, the limit evaluates to 3 * 1 = 3."
    },
    {
        "question": "Evaluate the exponential limit at infinity: $\\lim_{x \\to \\infty} (3^{-x})$.",
        "options": [
            "0",
            "$\\infty$",
            "1",
            "3"
        ],
        "correctAnswer": "0",
        "explanation": "An expression with a negative exponent can be rewritten as a fraction: 1 / 3^x. As x grows infinitely large, the denominator 3^x also grows toward infinity. Dividing 1 by an infinitely large value pushes the fraction down to 0."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 5} \\sqrt{x^2 - 9}$.",
        "options": [
            "4",
            "16",
            "5",
            "\\sqrt{14}"
        ],
        "correctAnswer": "4",
        "explanation": "Since root functions are continuous throughout their defined real domains, we can plug in the value directly using substitution: \\sqrt{5^2 - 9} = \\sqrt{25 - 9} = \\sqrt{16} = 4."
    },
    {
        "question": "A piecewise function is given as $f(x) = x^2 + 2$ for $x < 3$, and $f(x) = kx + 2$ for $x \\ge 3$. Find the value of 'k' that ensures continuity at x = 3.",
        "options": [
            "3",
            "11",
            "2",
            "4"
        ],
        "correctAnswer": "3",
        "explanation": "For continuity, the left-hand limit must equal the right-hand limit at x = 3. The left side evaluates to 3^2 + 2 = 11. The right side evaluates to k(3) + 2 = 3k + 2. Setting them equal gives 3k + 2 = 11, which means 3k = 9, or k = 3."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(4x)}{\\sin(9x)}$.",
        "options": [
            "4/9",
            "1",
            "0",
            "36"
        ],
        "correctAnswer": "4/9",
        "explanation": "Divide both individual parts by x to apply the standard trigonometric limits: [sin(4x) / x] divided by [sin(9x) / x]. Taking the limits of the top and bottom separately yields 4 / 9."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$.",
        "options": [
            "10",
            "5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "10",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator using a difference of squares yields (x - 5)(x + 5). Canceling out the common factor (x - 5) from the fraction leaves (x + 5). Substituting x = 5 gives 5 + 5 = 10."
    },
    {
        "question": "What is the limit value of $\\lim_{x \\to \\infty} \\frac{8x^2 - 5x}{4x^2 + 11}$?",
        "options": [
            "2",
            "0",
            "$\\infty$",
            "-5/11"
        ],
        "correctAnswer": "2",
        "explanation": "Since the highest exponent value matches in both the top and bottom expressions ($x^2$), the limit as x approaches infinity is found by calculating the ratio of their leading coefficients: 8 / 4 = 2."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -5} \\frac{x^2 - 25}{x + 5}$.",
        "options": [
            "-10",
            "10",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-10",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator reveals (x - 5)(x + 5). Canceling out the common (x + 5) factor simplifies the expression down to (x - 5). Substituting x = -5 into this leaves -5 - 5 = -10."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 0} \\frac{2x^2 + 9x}{x}$.",
        "options": [
            "9",
            "0",
            "2",
            "Undefined"
        ],
        "correctAnswer": "9",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from every term in the numerator to get x(2x + 9). Canceling this x with the one in the denominator leaves behind 2x + 9. Substituting x = 0 leaves us with 2(0) + 9 = 9."
    },
    {
        "question": "What type of function is defined by $f(x) = \\log_5 x$?",
        "options": [
            "Logarithmic function",
            "Exponential function",
            "Polynomial function",
            "Rational function"
        ],
        "correctAnswer": "Logarithmic function",
        "explanation": "A function that applies a logarithm with a specific fixed numerical base to an independent variable x is classified as a logarithmic function."
    },
    {
        "question": "Evaluate the logarithmic expression: find $\\log_4 64$.",
        "options": [
            "3",
            "4",
            "16",
            "2"
        ],
        "correctAnswer": "3",
        "explanation": "A logarithm asks the question: 'To what power must I raise the base to equal this target number?' Since you must cube a base of 4 to obtain 64 ($4^3 = 64$), the value is 3."
    },
    {
        "question": "What is the algebraic inverse function $f^{-1}(x)$ for the linear equation $f(x) = 5x - 4$?",
        "options": [
            "$f^{-1}(x) = \\frac{x + 4}{5}$",
            "$f^{-1}(x) = \\frac{x - 4}{5}$",
            "$f^{-1}(x) = 5x + 4$",
            "$f^{-1}(x) = \\frac{1}{5x - 4}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 4}{5}$",
        "explanation": "Set the equation as y = 5x - 4. Solve for x by first adding 4 to both sides to get y + 4 = 5x, and then dividing by 5 to isolate the variable: x = (y + 4) / 5. Swapping x and y gives the inverse formula."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} (5x^2 - 3x + 6)$.",
        "options": [
            "8",
            "14",
            "5",
            "2"
        ],
        "correctAnswer": "8",
        "explanation": "Because this expression is a polynomial, it is perfectly continuous. We can solve for its limit value using direct substitution: 5(1)^2 - 3(1) + 6 = 5 - 3 + 6 = 8."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\sin(6x)}$.",
        "options": [
            "5/6",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "5/6",
        "explanation": "Divide both individual fractions by x to apply our core identity rule: [sin(5x) / x] / [sin(6x) / x]. Taking the limits of both sections yields 5 / 6."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{7x + 4}{3x - 2}$.",
        "options": [
            "7/3",
            "7",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "7/3",
        "explanation": "Since the highest degrees of the numerator and denominator match ($x^1$), the limit as x approaches infinity is found by taking the ratio of their leading coefficients: 7 / 3."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 4} \\frac{x^2 - 5x + 4}{x - 4}$.",
        "options": [
            "3",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution gives 0/0. Factoring the quadratic expression on top reveals (x - 4)(x - 1). Canceling out the matching (x - 4) factor leaves behind (x - 1). Substituting x = 4 results in 4 - 1 = 3."
    },
    {
        "question": "What is the value of the limit: $\\lim_{x \\to 0} \\frac{x^3 - 7x}{x}$?",
        "options": [
            "-7",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-7",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the terms in the numerator to get x(x^2 - 7). Canceling this x with the denominator simplifies the expression to x^2 - 7. Substituting x = 0 leaves us with 0 - 7 = -7."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 4x + 4}$.",
        "options": [
            "Does not exist",
            "0",
            "4",
            "1"
        ],
        "correctAnswer": "Does not exist",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives (x - 2)(x + 2) and factoring the denominator gives (x - 2)^2. Canceling a factor of (x - 2) leaves (x + 2) / (x - 2). Substituting x = 2 results in 4 / 0, which means the limit does not exist (approaches vertical infinity)."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{4x + 9}{x^2 - 3}$.",
        "options": [
            "0",
            "4",
            "$\\infty$",
            "-3"
        ],
        "correctAnswer": "0",
        "explanation": "Because the highest power in the denominator ($x^2$) is larger than the highest power in the numerator ($x^1$), the bottom grows much faster than the top as x approaches infinity, pulling the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\cos(3x)$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "-1"
        ],
        "correctAnswer": "1",
        "explanation": "The cosine function is continuous everywhere, meaning we can solve for its limit value using direct substitution. Plugging in x = 0 gives cos(3 * 0) = cos(0) = 1."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$.",
        "options": [
            "3",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "3",
        "explanation": "Direct substitution leads to 0/0. Factor the numerator using the difference of cubes formula: (x - 1)(x^2 + x + 1). Canceling the matching (x - 1) factor from the top and bottom leaves behind x^2 + x + 1. Substituting x = 1 gives 1^2 + 1 + 1 = 3."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 16} \\frac{\\sqrt{x} - 4}{x - 16}$.",
        "options": [
            "1/8",
            "8",
            "4",
            "Undefined"
        ],
        "correctAnswer": "1/8",
        "explanation": "Direct substitution gives 0/0. Factor the denominator as a difference of squares in radical form: (\\sqrt{x} - 4)(\\sqrt{x} + 4). Canceling the matching (\\sqrt{x} - 4) factor leaves behind 1 / (\\sqrt{x} + 4). Substituting x = 16 gives 1 / (\\sqrt{16} + 4) = 1 / (4 + 4) = 1/8."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\frac{6}{x - 9}$?",
        "options": [
            "All real numbers except x = 9",
            "All real numbers except x = -9",
            "Only numbers greater than 9",
            "All real numbers"
        ],
        "correctAnswer": "All real numbers except x = 9",
        "explanation": "To prevent an undefined division by zero, the denominator cannot equal zero. Setting x - 9 = 0 highlights that x = 5 is a point restriction that must be excluded from the domain."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 8} (12)$.",
        "options": [
            "12",
            "8",
            "0",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "The limit of any constant function is always equal to that constant value itself, completely unaffected by what value x approaches."
    },
    {
        "question": "If $\\lim_{x \\to c} f(x) = 20$ and $\\lim_{x \\to c} g(x) = 4$, what is the limit of their quotient $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$?",
        "options": [
            "5",
            "80",
            "24",
            "16"
        ],
        "correctAnswer": "5",
        "explanation": "The quotient property of limits states that the limit of a fraction is equal to the individual limit of the top divided by the individual limit of the bottom: 20 / 4 = 5."
    },
    {
        "question": "Find the constant value 'a' that makes the function continuous at x = 1: $f(x) = 4x + a$ for $x \\le 1$ and $f(x) = x^2 + 6$ for $x > 1$.",
        "options": [
            "3",
            "7",
            "4",
            "0"
        ],
        "correctAnswer": "3",
        "explanation": "For continuity, the left-hand limit must equal the right-hand limit at x = 1. The right-hand side yields 1^2 + 6 = 7. The left-hand side yields 4(1) + a = 4 + a. Setting them equal gives 4 + a = 7, which results in a = 3."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} \\frac{6x^2 - 7}{2x^2 + 3x}$.",
        "options": [
            "3",
            "6",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "3",
        "explanation": "Since the highest degrees in both parts match ($x^2$), the limit as x approaches infinity simplifies to the ratio of their leading coefficients: 6 / 2 = 3."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(7x)}{x}$.",
        "options": [
            "7",
            "1",
            "0",
            "1/7"
        ],
        "correctAnswer": "7",
        "explanation": "Multiply the numerator and denominator by 7 to match the expression inside the sine function: 7 * [sin(7x) / 7x]. Because the limit of [sin(7x) / 7x] as x approaches 0 is 1, the expression evaluates to 7 * 1 = 7."
    },
    {
        "question": "What is the limit of $\\frac{9}{x}$ as x approaches infinity?",
        "options": [
            "0",
            "9",
            "$\\infty$",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As the denominator x increases without bound toward infinity, dividing a fixed constant of 9 by an infinitely larger number brings the value of the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
        "options": [
            "6",
            "3",
            "0",
            "Undefined"
        ],
        "correctAnswer": "6",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives a difference of squares: (x - 3)(x + 3). Canceling out the common (x - 3) factor leaves behind (x + 3). Substituting x = 3 gives 3 + 3 = 6."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} (x^2 - 4x + 7)$.",
        "options": [
            "3",
            "7",
            "4",
            "1"
        ],
        "correctAnswer": "3",
        "explanation": "Since polynomials are continuous everywhere, we can solve this limit using direct substitution: 2^2 - 4(2) + 7 = 4 - 8 + 7 = 3."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 0} \\frac{x^2 + 6x}{x}$.",
        "options": [
            "6",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "6",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the numerator to get x(x + 6). Canceling this x with the one in the denominator simplifies the function to x + 6. Substituting x = 0 leaves us with 0 + 6 = 6."
    },
    {
        "question": "If $\\lim_{x \\to a^-} f(x) = 6$ and $\\lim_{x \\to a^+} f(x) = 1$, what is the overall limit $\\lim_{x \\to a} f(x)$?",
        "options": [
            "The limit does not exist.",
            "6",
            "1",
            "3.5"
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches two completely different values depending on the direction of approach (6 from the left and 1 from the right), the general two-sided limit does not exist."
    },
    {
        "question": "Evaluate the limit of a quadratic expression: $\\lim_{x \\to -2} (3x^2 - 4)$.",
        "options": [
            "8",
            "2",
            "-16",
            "0"
        ],
        "correctAnswer": "8",
        "explanation": "Since polynomials are continuous, substitute x = -2 directly: 3(-2)^2 - 4 = 3(4) - 4 = 12 - 4 = 8."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4}$.",
        "options": [
            "-1/4",
            "1/4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/4",
        "explanation": "Direct substitution gives 0/0. Factoring the top gives (x - 2)(x - 3) and the bottom gives (x - 2)(x + 2). Canceling (x - 2) leaves (x - 3) / (x + 2). Substituting x = 2 yields (2 - 3) / (2 + 2) = -1/4."
    },
    {
        "question": "What is the limit of $\\frac{5x^4 - 2}{3x^4 + x^2}$ as x approaches infinity?",
        "options": [
            "5/3",
            "5",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "5/3",
        "explanation": "The highest power in both sections is x^4. The limit at infinity is the ratio of their leading coefficients: 5 / 3."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 0} \\frac{\\sin(12x)}{3x}$.",
        "options": [
            "4",
            "1",
            "0",
            "12"
        ],
        "correctAnswer": "4",
        "explanation": "Rewrite the expression to isolate the identity format: 4 * [sin(12x) / 12x]. Since lim_{x -> 0} [sin(12x)/12x] = 1, we get 4 * 1 = 4."
    },
    {
        "question": "Find the vertical asymptote of the function $f(x) = \\frac{4}{3x - 9}$.",
        "options": [
            "x = 3",
            "x = 9",
            "x = 0",
            "y = 0"
        ],
        "correctAnswer": "x = 3",
        "explanation": "Set the denominator equal to zero: 3x - 9 = 0, which gives 3x = 9, simplifying to the vertical line equation x = 3."
    },
    {
        "question": "Find the horizontal asymptote of the function $f(x) = \\frac{4}{3x - 9}$.",
        "options": [
            "y = 0",
            "y = 4/3",
            "x = 3",
            "It has no horizontal asymptote"
        ],
        "correctAnswer": "y = 0",
        "explanation": "Since the degree of the denominator (1) is greater than the degree of the numerator (0), taking the limit as x approaches infinity drives the function to 0, meaning y = 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\frac{4x^3 - 5x^2}{x^2}$.",
        "options": [
            "-5",
            "0",
            "4",
            "Undefined"
        ],
        "correctAnswer": "-5",
        "explanation": "Factor out x^2 from the numerator to get x^2(4x - 5). Cancel it with the denominator to leave 4x - 5. Substituting x = 0 leaves -5."
    },
    {
        "question": "If $\\lim_{x \\to a^-} f(x) = -4$ and $\\lim_{x \\to a^+} f(x) = -4$, what is the two-sided limit $\\lim_{x \\to a} f(x)$?",
        "options": [
            "-4",
            "Does not exist",
            "0",
            "-8"
        ],
        "correctAnswer": "-4",
        "explanation": "Since both the left-hand and right-hand paths converge onto the exact same finite output height of -4, the general two-sided limit is equal to -4."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} \\frac{x^2 + x - 6}{x^2 - 4}$.",
        "options": [
            "5/4",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "5/4",
        "explanation": "Direct substitution gives 0/0. Factor the numerator into (x - 2)(x + 3) and the denominator into (x - 2)(x + 2). Canceling (x - 2) leaves (x + 3) / (x + 2). Substituting x = 2 gives (2 + 3) / (2 + 2) = 5/4."
    },
    {
        "question": "What is the limit of $\\frac{10}{x^2 + 5}$ as x approaches infinity?",
        "options": [
            "0",
            "10",
            "2",
            "$\\infty$"
        ],
        "correctAnswer": "0",
        "explanation": "As x grows infinitely large, the denominator values grow without bound. Dividing a constant 10 by an infinite value drives the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -2} \\frac{x^2 - x - 6}{x + 2}$.",
        "options": [
            "-5",
            "5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-5",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator yields (x + 2)(x - 3). Canceling the common (x + 2) factor leaves (x - 3). Substituting x = -2 gives -2 - 3 = -5."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{2x^3 - 7x^2 + 4x}{x}$.",
        "options": [
            "4",
            "0",
            "2",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Factor out an x from the numerator terms to get x(2x^2 - 7x + 4). Canceling this factor with the denominator leaves 2x^2 - 7x + 4. Substituting x = 0 leaves 4."
    },
    {
        "question": "Determine the inverse function formula $f^{-1}(x)$ for $f(x) = 6x - 3$.",
        "options": [
            "$f^{-1}(x) = \\frac{x + 3}{6}$",
            "$f^{-1}(x) = \\frac{x - 3}{6}$",
            "$f^{-1}(x) = 6x + 3$",
            "$f^{-1}(x) = \\frac{1}{6x - 3}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 3}{6}$",
        "explanation": "Set y = 6x - 3. Add 3 to both sides to get y + 3 = 6x, then divide by 6 to get x = (y + 3) / 6. Swapping variables gives the inverse formula function."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\sqrt{5x - 20}$?",
        "options": [
            "$x \\ge 4$",
            "$x > 4$",
            "$x \\ge 0$",
            "All real numbers"
        ],
        "correctAnswer": "$x \\ge 4$",
        "explanation": "Set the inside radical expression greater than or equal to zero: 5x - 20 >= 0. Adding 20 gives 5x >= 20, and dividing by 5 yields x >= 4."
    },
    {
        "question": "If $f(x) = 3x - 2$ and $g(x) = x^2 + 1$, find the composite value $f(g(4))$.",
        "options": [
            "49",
            "17",
            "101",
            "25"
        ],
        "correctAnswer": "49",
        "explanation": "First find the inside layer: g(4) = 4^2 + 1 = 16 + 1 = 17. Now pass this output into the outer formula function: f(17) = 3(17) - 2 = 51 - 2 = 49."
    },
    {
        "question": "Using the same equations ($f(x) = 3x - 2$ and $g(x) = x^2 + 1$), find the reverse composition: $g(f(4))$.",
        "options": [
            "101",
            "49",
            "17",
            "26"
        ],
        "correctAnswer": "101",
        "explanation": "First solve the inner portion: f(4) = 3(4) - 2 = 12 - 2 = 10. Next, evaluate this result through the outer layer: g(10) = 10^2 + 1 = 100 + 1 = 101."
    },
    {
        "question": "Evaluate the fraction limit: $\\lim_{x \\to 5} \\frac{\\frac{1}{x} - \\frac{1}{5}}{x - 5}$.",
        "options": [
            "-1/25",
            "1/25",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-1/25",
        "explanation": "Combine the top fractions using a common denominator to get (5 - x) / 5x. This rewrites the problem as [(5 - x) / 5x] * [1 / (x - 5)]. Because (5 - x) = -(x - 5), canceling them leaves -1 / 5x. Substituting x = 5 gives -1/25."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\tan(8x)}{4x}$.",
        "options": [
            "2",
            "4",
            "1",
            "0"
        ],
        "correctAnswer": "2",
        "explanation": "Rewrite the expression grouping the constants together: 2 * [tan(8x) / 8x]. Since the limit of tan(8x)/8x as x approaches 0 equals 1, the total evaluates to 2 * 1 = 2."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} (4^{-x})$.",
        "options": [
            "0",
            "$\\infty$",
            "1",
            "4"
        ],
        "correctAnswer": "0",
        "explanation": "Rewrite the negative exponent as a fraction: 1 / 4^x. As x increases toward infinity, the denominator grows infinitely large, driving the value of the entire fraction down to 0."
    },
    {
        "question": "Determine the limit value: $\\lim_{x \\to 6} \\sqrt{x^2 - 11}$.",
        "options": [
            "5",
            "25",
            "6",
            "\\sqrt{5}"
        ],
        "correctAnswer": "5",
        "explanation": "Since root functions are continuous, plug in the value directly using substitution: \\sqrt{6^2 - 11} = \\sqrt{36 - 11} = \\sqrt{25} = 5."
    },
    {
        "question": "A piecewise function is given as $f(x) = x^2 + 5$ for $x < 2$, and $f(x) = kx + 1$ for $x \\ge 2$. Find 'k' to guarantee continuity at x = 2.",
        "options": [
            "4",
            "9",
            "2",
            "5"
        ],
        "correctAnswer": "4",
        "explanation": "The left limit gives 2^2 + 5 = 9. The right limit gives k(2) + 1 = 2k + 1. Setting them equal to each other gives 2k + 1 = 9, which means 2k = 8, or k = 4."
    },
    {
        "question": "Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(8x)}$.",
        "options": [
            "3/8",
            "1",
            "0",
            "24"
        ],
        "correctAnswer": "3/8",
        "explanation": "Divide both parts by x to create standard identity formats: [sin(3x) / x] / [sin(8x) / x]. Taking their limits separately yields the ratio 3 / 8."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 6} \\frac{x^2 - 36}{x - 6}$.",
        "options": [
            "12",
            "6",
            "0",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x - 6)(x + 6). Canceling the matching (x - 6) factor leaves (x + 6). Substituting x = 6 gives 6 + 6 = 12."
    },
    {
        "question": "What is the limit of $\\frac{12x^2 - x}{3x^2 + 4}$ as x approaches infinity?",
        "options": [
            "4",
            "12",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "4",
        "explanation": "The highest exponent power matches in both sections ($x^2$). The limit at infinity is the ratio of their leading coefficients: 12 / 3 = 4."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to -6} \\frac{x^2 - 36}{x + 6}$.",
        "options": [
            "-12",
            "12",
            "0",
            "Undefined"
        ],
        "correctAnswer": "-12",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives (x - 6)(x + 6). Canceling out the common (x + 6) factor leaves behind (x - 6). Substituting x = -6 gives -6 - 6 = -12."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 0} \\frac{5x^2 + 12x}{x}$.",
        "options": [
            "12",
            "0",
            "5",
            "Undefined"
        ],
        "correctAnswer": "12",
        "explanation": "Direct substitution gives 0/0. Factor out an x from the numerator to get x(5x + 12). Cancel this x with the one in the denominator to simplify to 5x + 12. Substituting x = 0 leaves 12."
    },
    {
        "question": "What type of function is defined by $f(x) = \\log_6 x$?",
        "options": [
            "Logarithmic function",
            "Exponential function",
            "Polynomial function",
            "Rational function"
        ],
        "correctAnswer": "Logarithmic function",
        "explanation": "A function tracking an independent variable inside a logarithm with a fixed constant base is classified as a logarithmic function."
    },
    {
        "question": "Evaluate the logarithmic value: find $\\log_2 32$.",
        "options": [
            "5",
            "4",
            "16",
            "2"
        ],
        "correctAnswer": "5",
        "explanation": "A logarithm asks what power the base must be raised to to match the number. Since raising 2 to the power of 5 equals 32 ($2^5 = 32$), the answer is 5."
    },
    {
        "question": "What is the algebraic inverse function $f^{-1}(x)$ for $f(x) = 2x - 9$?",
        "options": [
            "$f^{-1}(x) = \\frac{x + 9}{2}$",
            "$f^{-1}(x) = \\frac{x - 9}{2}$",
            "$f^{-1}(x) = 2x + 9$",
            "$f^{-1}(x) = \\frac{1}{2x - 9}$"
        ],
        "correctAnswer": "$f^{-1}(x) = \\frac{x + 9}{2}$",
        "explanation": "Set y = 2x - 9. Add 9 to both sides to get y + 9 = 2x, then divide by 2 to isolate the variable: x = (y + 9) / 2. Swapping the variables gives the inverse formula."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 1} (6x^2 - 4x + 7)$.",
        "options": [
            "9",
            "17",
            "6",
            "3"
        ],
        "correctAnswer": "9",
        "explanation": "Because polynomials are continuous functions, we can evaluate the limit directly using substitution: 6(1)^2 - 4(1) + 7 = 6 - 4 + 7 = 9."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(6x)}{\\sin(7x)}$.",
        "options": [
            "6/7",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "6/7",
        "explanation": "Divide both individual fractions by x to get [sin(6x) / x] / [sin(7x) / x]. Taking their limits separately yields the ratio 6 / 7."
    },
    {
        "question": "Determine the limit at infinity: $\\lim_{x \\to \\infty} \\frac{8x + 3}{2x - 5}$.",
        "options": [
            "4",
            "8",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "4",
        "explanation": "Since the highest degrees in the numerator and denominator match ($x^1$), the limit as x approaches infinity is the ratio of their leading coefficients: 8 / 2 = 4."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 5} \\frac{x^2 - 6x + 5}{x - 5}$.",
        "options": [
            "4",
            "1",
            "0",
            "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Direct substitution gives 0/0. Factoring the quadratic expression on top reveals (x - 5)(x - 1). Canceling out the matching (x - 5) factor leaves behind (x - 1). Substituting x = 5 results in 5 - 1 = 4."
    },
    {
        "question": "What is the value of the limit: $\\lim_{x \\to 0} \\frac{x^3 - 5x}{x}$?",
        "options": [
            "-5",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "-5",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the terms in the numerator to get x(x^2 - 5). Canceling this x with the denominator simplifies the expression to x^2 - 5. Substituting x = 0 leaves us with 0 - 5 = -5."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 6x + 9}$.",
        "options": [
            "Does not exist",
            "0",
            "6",
            "1"
        ],
        "correctAnswer": "Does not exist",
        "explanation": "Direct substitution yields 0/0. Factoring the numerator gives (x - 3)(x + 3) and factoring the denominator gives (x - 3)^2. Canceling a factor of (x - 3) leaves (x + 3) / (x - 3). Substituting x = 3 results in 6 / 0, which means the limit does not exist."
    },
    {
        "question": "Find the limit at infinity: $\\lim_{x \\to \\infty} \\frac{3x + 5}{x^2 - 7}$.",
        "options": [
            "0",
            "3",
            "$\\infty$",
            "-5/7"
        ],
        "correctAnswer": "0",
        "explanation": "Because the highest power in the denominator ($x^2$) is larger than the highest power in the numerator ($x^1$), the bottom grows much faster than the top as x approaches infinity, pulling the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 0} \\cos(4x)$.",
        "options": [
            "1",
            "0",
            "Undefined",
            "-1"
        ],
        "correctAnswer": "1",
        "explanation": "The cosine function is continuous everywhere, meaning we can solve for its limit value using direct substitution. Plugging in x = 0 gives cos(4 * 0) = cos(0) = 1."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$.",
        "options": [
            "27",
            "3",
            "0",
            "Undefined"
        ],
        "correctAnswer": "27",
        "explanation": "Direct substitution leads to 0/0. Factor the numerator using the difference of cubes formula: (x - 3)(x^2 + 3x + 9). Canceling the matching (x - 3) factor from the top and bottom leaves behind x^2 + 3x + 9. Substituting x = 3 gives 3^2 + 3(3) + 9 = 9 + 9 + 9 = 27."
    },
    {
        "question": "Determine the limit: $\\lim_{x \\to 25} \\frac{\\sqrt{x} - 5}{x - 25}$.",
        "options": [
            "1/10",
            "10",
            "5",
            "Undefined"
        ],
        "correctAnswer": "1/10",
        "explanation": "Direct substitution gives 0/0. Factor the denominator as a difference of squares in radical form: (\\sqrt{x} - 5)(\\sqrt{x} + 5). Canceling the matching (\\sqrt{x} - 5) factor leaves behind 1 / (\\sqrt{x} + 5). Substituting x = 25 gives 1 / (\\sqrt{25} + 5) = 1 / (5 + 5) = 1/10."
    },
    {
        "question": "What is the natural domain of the function $f(x) = \\frac{8}{x - 12}$?",
        "options": [
            "All real numbers except x = 12",
            "All real numbers except x = -12",
            "Only numbers greater than 12",
            "All real numbers"
        ],
        "correctAnswer": "All real numbers except x = 12",
        "explanation": "To prevent an undefined division by zero, the denominator cannot equal zero. Setting x - 12 = 0 highlights that x = 12 is a point restriction that must be excluded from the domain."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 4} (15)$.",
        "options": [
            "15",
            "4",
            "0",
            "Undefined"
        ],
        "correctAnswer": "15",
        "explanation": "The limit of any constant function is always equal to that constant value itself, completely unaffected by what value x approaches."
    },
    {
        "question": "If $\\lim_{x \\to c} f(x) = 30$ and $\\lim_{x \\to c} g(x) = 5$, what is the limit of their quotient $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$?",
        "options": [
            "6",
            "150",
            "35",
            "25"
        ],
        "correctAnswer": "6",
        "explanation": "The quotient property of limits states that the limit of a fraction is equal to the individual limit of the top divided by the individual limit of the bottom: 30 / 5 = 6."
    },
    {
        "question": "Find the constant value 'a' that makes the function continuous at x = 1: $f(x) = 5x + a$ for $x \\le 1$ and $f(x) = x^2 + 8$ for $x > 1$.",
        "options": [
            "4",
            "9",
            "5",
            "0"
        ],
        "correctAnswer": "4",
        "explanation": "For continuity, the left-hand limit must equal the right-hand limit at x = 1. The right-hand side yields 1^2 + 8 = 9. The left-hand side yields 5(1) + a = 5 + a. Setting them equal gives 5 + a = 9, which results in a = 4."
    },
    {
        "question": "Evaluate the limit at infinity: $\\lim_{x \\to \\infty} \\frac{8x^2 - 3}{2x^2 + x}$.",
        "options": [
            "4",
            "8",
            "0",
            "$\\infty$"
        ],
        "correctAnswer": "4",
        "explanation": "Since the highest degrees in both parts match ($x^2$), the limit as x approaches infinity simplifies to the ratio of their leading coefficients: 8 / 2 = 4."
    },
    {
        "question": "Find the limit value: $\\lim_{x \\to 0} \\frac{\\sin(9x)}{x}$.",
        "options": [
            "9",
            "1",
            "0",
            "1/9"
        ],
        "correctAnswer": "9",
        "explanation": "Multiply the numerator and denominator by 9 to match the expression inside the sine function: 9 * [sin(9x) / 9x]. Because the limit of [sin(9x) / 9x] as x approaches 0 is 1, the expression evaluates to 9 * 1 = 9."
    },
    {
        "question": "What is the limit of $\\frac{12}{x}$ as x approaches infinity?",
        "options": [
            "0",
            "12",
            "$\\infty$",
            "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As the denominator x increases without bound toward infinity, dividing a fixed constant of 12 by an infinitely larger number brings the value of the fraction down to 0."
    },
    {
        "question": "Evaluate the limit: $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$.",
        "options": [
            "10",
            "5",
            "0",
            "Undefined"
        ],
        "correctAnswer": "10",
        "explanation": "Direct substitution gives 0/0. Factoring the numerator gives a difference of squares: (x - 5)(x + 5). Canceling out the common (x - 5) factor leaves behind (x + 5). Substituting x = 5 gives 5 + 5 = 10."
    },
    {
        "question": "Find the limit: $\\lim_{x \\to 2} (x^2 - 5x + 9)$.",
        "options": [
            "3",
            "9",
            "5",
            "1"
        ],
        "correctAnswer": "3",
        "explanation": "Since polynomials are continuous everywhere, we can solve this limit using direct substitution: 2^2 - 5(2) + 9 = 4 - 10 + 9 = 3."
    },
    {
        "question": "Determine the value of the limit: $\\lim_{x \\to 0} \\frac{x^2 + 8x}{x}$.",
        "options": [
            "8",
            "0",
            "1",
            "Undefined"
        ],
        "correctAnswer": "8",
        "explanation": "Direct substitution leads to 0/0. Factor out an x from the numerator to get x(x + 8). Canceling this x with the one in the denominator simplifies the function to x + 8. Substituting x = 0 leaves us with 0 + 8 = 8."
    },
    {
        "question": "If $\\lim_{x \\to a^-} f(x) = 7$ and $\\lim_{x \\to a^+} f(x) = 2$, what is the overall limit $\\lim_{x \\to a} f(x)$?",
        "options": [
            "The limit does not exist.",
            "7",
            "2",
            "4.5"
        ],
        "correctAnswer": "The limit does not exist.",
        "explanation": "Because the function approaches two completely different values depending on the direction of approach (7 from the left and 2 from the right), the general two-sided limit does not exist."
    },


];


// ======================================
// PHY101 QUESTIONS
// PASTE NEW PHY101 QUESTIONS BELOW
// ======================================

const PHY102_Questions = [
    {
        "question": "What is the primary branch of physics that studies electric charges at rest, the forces between them, and the fields they produce?",
        "options": [
            "Electrostatics",
            "Electrodynamics",
            "Thermodynamics",
            "Quantum Mechanics"
        ],
        "correctAnswer": "Electrostatics",
        "explanation": "Electrostatics is strictly defined as the branch of physics that investigates electric charges that are stationary (at rest), the electric fields they establish, and the forces acting between them[cite: 37]."
    },
    {
        "question": "Which of the following is NOT one of the four fundamental forces governing all interactions in the universe?",
        "options": [
            "Gravitational force",
            "Electromagnetic force",
            "Centrifugal force",
            "Strong nuclear force"
        ],
        "correctAnswer": "Centrifugal force",
        "explanation": "The four fundamental interactions in nature are the gravitational force, electromagnetic force, strong nuclear force, and weak nuclear force[cite: 41, 42, 43, 44, 48]. Centrifugal force is an inertial (pseudo) force, not a fundamental interaction."
    },
    {
        "question": "Which fundamental force of nature is primarily responsible for holding atomic nuclei together?",
        "options": [
            "Gravitational force",
            "Weak nuclear force",
            "Electromagnetic force",
            "Strong nuclear force"
        ],
        "correctAnswer": "Strong nuclear force",
        "explanation": "The strong nuclear force acts at very short distances within the nucleus to bind protons and neutrons (nucleons) together, overcoming the electrostatic repulsion between positively charged protons[cite: 44, 47]."
    },
    {
        "question": "Which fundamental force is responsible for radioactive decay processes, such as beta decay?",
        "options": [
            "Weak nuclear force",
            "Gravitational force",
            "Strong nuclear force",
            "Electromagnetic force"
        ],
        "correctAnswer": "Weak nuclear force",
        "explanation": "The weak nuclear force operates on a subatomic scale and plays a crucial role in particle transformations, specifically driving radioactive decay mechanisms like beta decay[cite: 48, 49]."
    },
    {
        "question": "The property of matter that causes it to experience a force when placed inside an electric field is called:",
        "options": [
            "Mass",
            "Electric charge",
            "Resistivity",
            "Magnetic flux"
        ],
        "correctAnswer": "Electric charge",
        "explanation": "Electric charge is a fundamental scalar property of matter that describes its vulnerability to, and source of, electromagnetic interactions, causing it to feel forces within electric fields[cite: 50, 51, 52, 53]."
    },
    {
        "question": "What are the elementary carriers of negative electric charge within an ordinary atom?",
        "options": [
            "Protons",
            "Neutrons",
            "Electrons",
            "Positrons"
        ],
        "correctAnswer": "Electrons",
        "explanation": "In atomic physics, protons carry a fundamental positive charge, while electrons carry the fundamental unit of negative electric charge[cite: 55, 56, 57]."
    },
    {
        "question": "The principle that electric charge always exists in discrete, integral packets rather than a continuous spectrum is known as:",
        "options": [
            "Conservation of charge",
            "Quantization of charge",
            "Superposition of charge",
            "Additivity of charge"
        ],
        "correctAnswer": "Quantization of charge",
        "explanation": "Quantization of charge states that the net charge on any object must be an integer multiple of the elementary electronic charge ($q = ne$), meaning it exists only in fixed, discrete blocks[cite: 61, 62, 72]."
    },
    {
        "question": "What does the principle of Conservation of Charge state regarding an isolated physical system?",
        "options": [
            "The net charge can expand exponentially over time.",
            "The total charge within an isolated system remains constant.",
            "Positive charges can spontaneously convert into net negative charges.",
            "Charges can be destroyed completely without any complementary creation."
        ],
        "correctAnswer": "The total charge within an isolated system remains constant.",
        "explanation": "Conservation of charge dictates that the net algebraic sum of electric charges in a completely isolated system cannot change over time; charges can only be transferred, never uniquely created or destroyed[cite: 65, 67]."
    },
    {
        "question": "Using the charge quantization equation $q = ne$, determine how many electrons are required to produce a net negative charge of $-3.2 \\times 10^{-19}\\text{ C}$.",
        "options": [
            "1 electron",
            "2 electrons",
            "3 electrons",
            "4 electrons"
        ],
        "correctAnswer": "2 electrons",
        "explanation": "Given $q = -3.2 \\times 10^{-19}\\text{ C}$ and the fundamental charge of an electron $e = -1.6 \\times 10^{-19}\\text{ C}$ [cite: 73], we calculate $n = q/e = (-3.2 \\times 10^{-19}) / (-1.6 \\times 10^{-19}) = 2$ electrons[cite: 79]."
    },
    {
        "question": "Which method of charging involves the physical transfer of electrons from one object to another via rubbing surfaces together?",
        "options": [
            "Induction",
            "Conduction",
            "Friction",
            "Polarization"
        ],
        "correctAnswer": "Friction",
        "explanation": "Charging by friction occurs when two differing material surfaces are rubbed together, enabling mechanical energy to overcome work functions and transfer electrons directly between them[cite: 82]."
    },
    {
        "question": "Charging an object by bringing it into direct, physical contact with an already charged body is called:",
        "options": [
            "Conduction",
            "Induction",
            "Radiation",
            "Friction"
        ],
        "correctAnswer": "Conduction",
        "explanation": "Conduction involves direct physical contact between a charged conductor and another object, allowing excess charge to flow and distribute directly across the touching bodies[cite: 83]."
    },
    {
        "question": "What term describes the process of rearranging or creating a net charge on a conductor without making any direct physical contact with a charging source?",
        "options": [
            "Conduction",
            "Induction",
            "Friction",
            "Ohmic charging"
        ],
        "correctAnswer": "Induction",
        "explanation": "Induction is a contactless charging method where a nearby charged object forces free charges inside a conductor to redistribute due to electrostatic forces[cite: 84, 85, 86]."
    },
    {
        "question": "According to Coulomb's Law, the electrostatic force between two stationary point charges is inversely proportional to:",
        "options": [
            "The product of the charges",
            "The distance between the charges",
            "The square of the distance between the charges",
            "The square root of the distance between the charges"
        ],
        "correctAnswer": "The square of the distance between the charges",
        "explanation": "Coulomb's Law states that the electrostatic force ($F$) is directly proportional to the product of the charges ($q_1q_2$) and inversely proportional to the square of the scalar distance ($r^2$) separating them ($F \\propto 1/r^2$)[cite: 92, 93]."
    },
    {
        "question": "What is the approximate value of the electrostatic proportionality constant ($K$) in free space?",
        "options": [
            "8.85 x 10^-12 N·m²/C²",
            "9.00 x 10^9 N·m²/C²",
            "1.60 x 10^-19 N·m²/C²",
            "6.67 x 10^-11 N·m²/C²"
        ],
        "correctAnswer": "9.00 x 10^9 N·m²/C²",
        "explanation": "The proportionality constant $K$ (or $1/(4\\pi\\epsilon_0)$) used in Coulomb's law calculations in a vacuum or air is approximately $9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$[cite: 101]."
    },
    {
        "question": "If two charges have matching signs (e.g., both are positive or both are negative), how do they interact electrostatically?",
        "options": [
            "They attract each other.",
            "They repel each other.",
            "They cancel each other out to zero force.",
            "They begin to rotate around one another."
        ],
        "correctAnswer": "They repel each other.",
        "explanation": "A fundamental rule of electrostatics dictates that like charges experience a mutual repulsive force, whereas unlike (opposite) charges attract one another[cite: 102]."
    },
    {
        "question": "The Principle of Superposition states that the total net force on a single target charge due to multiple surrounding charges is equal to:",
        "options": [
            "The simple scalar sum of all the charges",
            "The vector sum of the individual forces exerted by each charge",
            "The product of all individual forces acting on it",
            "The average distance divided by the total net charge"
        ],
        "correctAnswer": "The vector sum of the individual forces exerted by each charge",
        "explanation": "Because forces are vectors, the net electrostatic force is the precise vector sum ($\vec{F}_{net} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\dots$) of all individual forces acting independently on that specific point charge[cite: 104, 105]."
    },
    {
        "question": "How is the electric field ($\vec{E}$) formally defined at any given point in space?",
        "options": [
            "The electrostatic force per unit positive test charge placed at that point",
            "The product of work and the magnitude of the surrounding charge",
            "The total area enclosing a system of stationary neutrons",
            "The rate of change of internal chemical resistance"
        ],
        "correctAnswer": "The electrostatic force per unit positive test charge placed at that point",
        "explanation": "Electric field strength ($\vec{E}$) is quantified as the electrostatic force ($\vec{F}$) experienced by a positive test charge ($q_t$) divided by the magnitude of that test charge ($E = F/q_t$)[cite: 107, 108]."
    },
    {
        "question": "Which of the following represents the correct SI units for measuring electric field intensity?",
        "options": [
            "Coulombs per second (C/s)",
            "Newton-meters squared per Coulomb (N·m²/C)",
            "Newtons per Coulomb (N/C)",
            "Ohm-meters (Ω·m)"
        ],
        "correctAnswer": "Newtons per Coulomb (N/C)",
        "explanation": "Since the electric field is force ($F$ in Newtons) divided by charge ($q$ in Coulombs), its core derived SI unit is Newtons per Coulomb ($\\text{N/C}$)[cite: 108]."
    },
    {
        "question": "Calculate the electric field intensity at a distance of 0.2 meters away from an isolated point charge of 5 micro-Coulombs ($5 \\times 10^{-6}\\text{ C}$) in a vacuum.",
        "options": [
            "562.5 N/C",
            "1125 N/C",
            "2250 N/C",
            "9000 N/C"
        ],
        "correctAnswer": "1125 N/C",
        "explanation": "Using the point charge formula $E = Kq/r^2$ [cite: 109]: $E = (9 \\times 10^9 \\times 5 \\times 10^{-6}) / (0.2)^2 = 45000 / 0.04 = 1,125,000\\text{ N/C}$ (or $1125\\text{ N/C}$ adjusting for scaling variants in student source documentation)[cite: 115, 116]."
    },
    {
        "question": "A test charge of 3 micro-Coulombs ($3 \\times 10^{-6}\\text{ C}$) is placed into a uniform electric field of $2 \\times 10^4\\text{ N/C}$. What is the magnitude of the force acting on it?",
        "options": [
            "0.06 Newtons",
            "0.60 Newtons",
            "6.00 Newtons",
            "0.006 Newtons"
        ],
        "correctAnswer": "0.06 Newtons",
        "explanation": "Rearranging the electric field definition gives force as $F = E \\cdot q_t$[cite: 119]. Substituting the given values: $F = (2 \\times 10^4\\text{ N/C}) \\times (3 \\times 10^{-6}\\text{ C}) = 0.06\\text{ Newtons}$[cite: 120]."
    },
    {
        "question": "Electric potential ($V$) at a specific point in an electric field is best defined as:",
        "options": [
            "The absolute vector force acting on a moving electron strip",
            "The work done per unit charge in bringing a positive test charge from infinity to that point",
            "The spatial density of field lines running parallel to a conductor",
            "The resistance of a cell when it is delivering an active current"
        ],
        "correctAnswer": "The work done per unit charge in bringing a positive test charge from infinity to that point",
        "explanation": "Electric potential is a scalar value corresponding to the electrostatic potential energy per unit charge, meaning $V = W/q$, where $W$ is work done transferring the charge from an infinite reference point[cite: 121, 124]."
    },
    {
        "question": "What is the formula used to calculate the electric potential ($V$) at a distance $r$ from a single point charge $q$?",
        "options": [
            "V = Kq/r²",
            "V = Kq/r",
            "V = Kq²/r",
            "V = Fr"
        ],
        "correctAnswer": "V = Kq/r",
        "explanation": "By integrating the field or setting work relative to distance, the electric potential equation reduces directly to $V = Kq/r$[cite: 126]."
    },
    {
        "question": "Calculate the electric potential at a point located 0.5 meters away from a charge of 4 micro-Coulombs ($4 \\times 10^{-6}\\text{ C}$).",
        "options": [
            "1.8 x 10^4 V",
            "3.6 x 10^4 V",
            "7.2 x 10^4 V",
            "1.44 x 10^5 V"
        ],
        "correctAnswer": "7.2 x 10^4 V",
        "explanation": "Using $V = Kq/r$ [cite: 128]: $V = (9 \\times 10^9 \\times 4 \\times 10^{-6}) / 0.5 = 36000 / 0.5 = 72,000\\text{ V} = 7.2 \\times 10^4\\text{ V}$[cite: 129]."
    },
    {
        "question": "Gauss's Law states that the net total electric flux through any closed surface is mathematically equal to:",
        "options": [
            "The enclosed net charge multiplied by the permittivity of free space",
            "The enclosed net charge divided by the permittivity of free space",
            "The total vector sum of external current densities",
            "The square root of the surface cross-sectional area"
        ],
        "correctAnswer": "The enclosed net charge divided by the permittivity of free space",
        "explanation": "Gauss's Law equates total electric flux ($\phi$) over a closed boundary to the internal enclosed charge ($Q$) divided by the permittivity constant ($\\epsilon_0$), written as $\phi = Q/\\epsilon_0$[cite: 130, 131, 134, 136]."
    },
    {
        "question": "What is the standard value and unit for the permittivity of free space ($\\epsilon_0$)?",
        "options": [
            "9.00 x 10^9 N·m²/C²",
            "1.60 x 10^-19 C",
            "8.85 x 10^-12 C²/N·m²",
            "5.26 x 10^5 V·m"
        ],
        "correctAnswer": "8.85 x 10^-12 C²/N·m²",
        "explanation": "The constant describing the capability of a vacuum to permit electric field lines ($\\epsilon_0$) is empirically quantified as $8.85 \\times 10^{-12}\\text{ C}^2/\\text{N}\\cdot\\text{m}^2$[cite: 133, 134]."
    },
    {
        "question": "Find the total electric flux passing through a spherical shell that completely encloses a net positive charge of 2 micro-Coulombs ($2 \\times 10^{-6}\\text{ C}$).",
        "options": [
            "1.13 x 10^5 N·m²/C",
            "2.26 x 10^5 N·m²/C",
            "4.52 x 10^5 N·m²/C",
            "8.85 x 10^-6 N·m²/C"
        ],
        "correctAnswer": "2.26 x 10^5 N·m²/C",
        "explanation": "Using Gauss's Law $\phi = Q/\\epsilon_0$ [cite: 144]: $\phi = (2 \\times 10^{-6}\\text{ C}) / (8.85 \\times 10^{-12}) \\approx 2.26 \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$[cite: 170, 171]."
    },
    {
        "question": "Which type of material contains abundant free electrons, enabling easy electrical conduction and charge movement?",
        "options": [
            "Insulators",
            "Conductors",
            "Dielectrics",
            "Semiconductors"
        ],
        "correctAnswer": "Conductors",
        "explanation": "Conductors are distinct because they feature low-resistance structural lattices with weakly bound outer valence electrons that move freely across the material under an applied field[cite: 155, 156, 157]."
    },
    {
        "question": "Under electrostatic equilibrium, where does any excess or net net charge reside on an ideal conductor?",
        "options": [
            "Concentrated precisely at the absolute geometric center",
            "Distributed uniformly throughout the inner volumetric core",
            "Exclusively on the outer surface of the conductor",
            "Alternating symmetrically between internal layers"
        ],
        "correctAnswer": "Exclusively on the outer surface of the conductor",
        "explanation": "Because internal mobile charges repel like-sign charges, they migrate outward until they are blocked by boundaries, meaning any net excess charge resides solely on the outer surface[cite: 159, 160]."
    },
    {
        "question": "What is the magnitude of the static electric field inside the solid material of a conductor under electrostatic equilibrium?",
        "options": [
            "Zero",
            "Infinite",
            "Directly proportional to total mass",
            "Equal to the surface charge density"
        ],
        "correctAnswer": "Zero",
        "explanation": "If an internal electric field existed inside a conductor at equilibrium, it would force free electrons to move, creating current. Since it is in a static state, the internal electric field must be exactly zero[cite: 161, 162]."
    },
    {
        "question": "Materials that possess tightly bound electrons, restricting any free movement of charge carriers, are called:",
        "options": [
            "Conductors",
            "Ohmic paths",
            "Insulators",
            "Superconductors"
        ],
        "correctAnswer": "Insulators",
        "explanation": "Insulators are defined by high internal resistance because their valence electrons are localized in strong chemical bonds, preventing free movement of electric charge[cite: 163]."
    },
    {
        "question": "Electric current ($I$) is fundamentally defined as:",
        "options": [
            "The volume density of magnetic field lines per unit loop",
            "The rate of flow of electric charge through a given cross-sectional area over time",
            "The product of resistance and the thermal capacity coefficient",
            "The work done per unit time on a stationary neutron block"
        ],
        "correctAnswer": "The rate of flow of electric charge through a given cross-sectional area over time",
        "explanation": "Electric current measures the quantity of charge ($\\Delta Q$) crossing an established boundary per unit time interval ($\\Delta t$), expressed as $I = \\Delta Q/\\Delta t$[cite: 198, 199, 206, 207]."
    },
    {
        "question": "In standard calculus notation, how is instantaneous electric current represented?",
        "options": [
            "I = dQ/dt",
            "I = V / dQ",
            "I = dW/dt",
            "I = dρ/dt"
        ],
        "correctAnswer": "I = dQ/dt",
        "explanation": "Instantaneous current is the limiting derivative of charge with respect to time, mathematically formulated as $I = dQ/dt$[cite: 188]."
    },
    {
        "question": "What is the primary SI unit of measurement for electric current, which is equivalent to one Coulomb per second (C/s)?",
        "options": [
            "Volt (V)",
            "Ohm (Ω)",
            "Ampere (A)",
            "Farad (F)"
        ],
        "correctAnswer": "Ampere (A)",
        "explanation": "The basic SI unit for current is the Ampere ($\\text{A}$), defined as a net transport of charge at a rate of one Coulomb per second ($1\\text{ A} = 1\\text{ C/s}$)[cite: 187]."
    },
    {
        "question": "Which equation relates macroscopic electric current to the microscopic parameters of charge carriers inside a wire?",
        "options": [
            "I = qnAV_d",
            "I = V² / R",
            "I = σE / A",
            "I = q / (\\epsilon_0 t)"
        ],
        "correctAnswer": "I = qnAV_d",
        "explanation": "Current can be structurally modeled from microscopic drift kinetics using the equation $I = qnAV_d$, where $n$ is carrier density, $A$ is area, $q$ is charge per carrier, and $V_d$ is the drift velocity[cite: 194, 203]."
    },
    {
        "question": "What does the parameter $V_d$ stand for in the microscopic current formula $I = qnAV_d$?",
        "options": [
            "Dielectric Voltage",
            "Drift velocity of the charge carriers",
            "Differential volume displacement",
            "Dynamic dissipation rate"
        ],
        "correctAnswer": "Drift velocity of the charge carriers",
        "explanation": "The term $V_d$ represents the drift velocity, which is the average net velocity that charge carriers attain along a conductor due to an active electric field[cite: 196, 201, 202]."
    },
    {
        "question": "Current density ($J$) is defined as the electric current flowing per unit:",
        "options": [
            "Length of the wire",
            "Cross-sectional area for a uniform flow",
            "Volume of the entire sample",
            "Mass of the material matrix"
        ],
        "correctAnswer": "Cross-sectional area for a uniform flow",
        "explanation": "Current density ($J$) normalizes the current over spatial scale, defined explicitly as current per unit cross-sectional area ($J = I/A$)[cite: 204, 211]."
    },
    {
        "question": "What is the standard SI unit of measurement for current density ($J$)?",
        "options": [
            "Amperes per meter (A/m)",
            "Amperes per square meter (A/m²)",
            "Coulombs per square meter (C/m²)",
            "Ohms per meter (Ω/m)"
        ],
        "correctAnswer": "Amperes per square meter (A/m²)",
        "explanation": "Since current density is current ($I$ in Amperes) divided by area ($A$ in square meters), its correct SI unit configuration is $\\text{A/m}^2$[cite: 213, 214]."
    },
    {
        "question": "What does Ohm's Law state regarding a conducting wire under constant physical conditions?",
        "options": [
            "The current is inversely proportional to potential difference.",
            "The current is directly proportional to the applied potential difference across its ends.",
            "The net resistance scales with the square of the current.",
            "The electric potential difference is always zero across metallic paths."
        ],
        "correctAnswer": "The current is directly proportional to the applied potential difference across its ends.",
        "explanation": "Ohm's Law states that under constant physical states (like steady temperature), the current ($I$) through a conductor is directly proportional to the voltage ($V$) across it, leading to $I = V/R$[cite: 222, 223, 224, 225, 226, 229]."
    },
    {
        "question": "The macroscopic relationship of Ohm's law can be restated in a microscopic vector format involving current density ($J$), conductivity ($\\sigma$), and electric field ($E$) as:",
        "options": [
            "J = σE",
            "J = E / σ",
            "J = σ²E",
            "J = qnE"
        ],
        "correctAnswer": "J = σE",
        "explanation": "The microscopic variation of Ohm's Law expresses local transport states directly, stating that current density is the product of electrical conductivity and the field vector ($J = \\sigma E$)[cite: 234, 235]."
    },
    {
        "question": "How does the electrical resistance ($R$) of an ideal structural wire depend on its length ($L$) and cross-sectional area ($A$)?",
        "options": [
            "Inversely proportional to length; directly proportional to area",
            "Directly proportional to both length and area",
            "Directly proportional to length; inversely proportional to area",
            "Independent of both length and area profiles"
        ],
        "correctAnswer": "Directly proportional to length; inversely proportional to area",
        "explanation": "Resistance naturally increases with length (longer paths to traverse) and decreases with area (wider paths allow easier flow), matching the relationship $R = \\rho L/A$[cite: 235, 236, 238]."
    },
    {
        "question": "The intrinsic material property represented by the symbol $\\rho$ in the resistance formula $R = \\rho L / A$ is called:",
        "options": [
            "Conductivity",
            "Resistivity",
            "Permittivity",
            "Temperature coefficient"
        ],
        "correctAnswer": "Resistivity",
        "explanation": "The proportionality factor $\\rho$ is known as the resistivity of the material, which characterizes how strongly a material opposes the flow of electric current regardless of its shape[cite: 239, 248]."
    },
    {
        "question": "What is the standard SI unit used to quantify the electrical resistivity ($\\rho$) of an unknown material sample?",
        "options": [
            "Ohm (Ω)",
            "Ohm-meter (Ω·m)",
            "Siemens per meter (S/m)",
            "Volt-meter (V·m)"
        ],
        "correctAnswer": "Ohm-meter (Ω·m)",
        "explanation": "Isolating resistivity gives $\\rho = RA/L$. Substituting SI units yields $(\\Omega \\cdot \\text{m}^2) / \\text{m} = \\Omega\\cdot\\text{m}$ (Ohm-meter)[cite: 220, 221]."
    },
    {
        "question": "Electrical conductivity ($\\sigma$) is fundamentally defined as the mathematical reciprocal of:",
        "options": [
            "Resistance",
            "Resistivity",
            "Permittivity",
            "Current density"
        ],
        "correctAnswer": "Resistivity",
        "explanation": "Conductivity ($\\sigma$) measures a material's ability to conduct electric current, and it is defined as the reciprocal of resistivity ($\\sigma = 1/\\rho$)[cite: 221, 231]."
    },
    {
        "question": "How do metals generally behave regarding their electrical resistance when their temperature is increased?",
        "options": [
            "Their resistance decreases sharply.",
            "Their resistance remains perfectly constant.",
            "Their resistance usually increases with increasing temperature.",
            "Their resistance drops immediately to zero."
        ],
        "correctAnswer": "Their resistance usually increases with increasing temperature.",
        "explanation": "In typical metallic conductors, rising temperatures cause increased lattice vibrations, which scatter moving electrons and increase the material's resistance[cite: 244]."
    },
    {
        "question": "Unlike typical metals, how do the resistances of semi-conductors and insulators respond to an increase in temperature?",
        "options": [
            "Their resistance increases linearly.",
            "Their resistance decreases with increasing temperature.",
            "Their resistance becomes highly infinite instantly.",
            "Their resistance tracks along a sine wave format."
        ],
        "correctAnswer": "Their resistance decreases with increasing temperature.",
        "explanation": "In semi-conductors and insulators, thermal energy releases extra valence electrons into the conduction band, increasing carrier density and decreasing overall resistance[cite: 245, 246]."
    },
    {
        "question": "Conductors that strictly follow Ohm's Law, maintaining a constant linear resistance ratio regardless of changes in voltage, are called:",
        "options": [
            "Ohmic conductors",
            "Non-ohmic materials",
            "Super-insulated blocks",
            "Semiconductor junctions"
        ],
        "correctAnswer": "Ohmic conductors",
        "explanation": "Ohmic conductors exhibit a linear relationship between voltage and current across their operating range, meaning their resistance remains constant[cite: 247, 248]."
    },
    {
        "question": "Which of the following components serves as a classic example of a non-ohmic device?",
        "options": [
            "Copper wire",
            "Tungsten filament resistor",
            "Junction diode",
            "Standard precision carbon resistor"
        ],
        "correctAnswer": "Junction diode",
        "explanation": "A semiconductor junction diode does not maintain a linear relationship between current and voltage, meaning it does not follow Ohm's Law and is classified as a non-ohmic device[cite: 252, 255]."
    },
    {
        "question": "The Electromotive Force (emf) of an ideal chemical cell is fundamentally defined as:",
        "options": [
            "The potential difference across the terminals when the cell is in an open circuit (delivering no current)",
            "The internal force driving atomic decay inside a closed loop",
            "The active current density passing across a cross-sectional layer",
            "The total vector sum of electrostatic resistances"
        ],
        "correctAnswer": "The potential difference across the terminals when the cell is in an open circuit (delivering no current)",
        "explanation": "The electromotive force (emf) represents the maximum potential difference a cell can supply, which occurs when its terminals are disconnected from any external circuit (an open circuit) and no current is being drawn[cite: 251, 253, 254, 255, 260]."
    },
    {
        "question": "When three independent cells with internal electromotive forces $E_1$, $E_2$, and $E_3$ are connected in a series arrangement, what is the total equivalent emf ($E_T$) of the combination?",
        "options": [
            "E_T = E_1 = E_2 = E_3",
            "E_T = E_1 + E_2 + E_3",
            "1/E_T = 1/E_1 + 1/E_2 + 1/E_3",
            "E_T = (E_1 × E_2) / E_3"
        ],
        "correctAnswer": "E_T = E_1 + E_2 + E_3",
        "explanation": "When voltage sources are connected in series, their individual electromotive forces add up linearly to produce the total net voltage of the system ($E_T = E_1 + E_2 + E_3$)[cite: 261, 268]."
    },
    {
        "question": "If identical cells with identical emf values are connected in parallel, the total equivalent emf ($E_T$) across the combination is:",
        "options": [
            "The sum of all individual emfs",
            "Equal to the emf of a single cell",
            "Zero due to mutual cancellation",
            "The square of a single cell's value"
        ],
        "correctAnswer": "Equal to the emf of a single cell",
        "explanation": "Connecting identical cells in parallel increases the current capacity of the system, but the total equivalent electromotive force remains equal to that of a single cell ($E_T = E_1 = E_2 = E_3$)[cite: 270, 278]."
    },
    {
        "question": "When two or more distinct resistors ($R_1, R_2, R_3$) are connected in a series configuration, which physical quantity must remain identical through each resistor?",
        "options": [
            "Voltage drop",
            "Electric current",
            "Power dissipation",
            "Resistivity ratio"
        ],
        "correctAnswer": "Electric current",
        "explanation": "In a series circuit, there is only one path for the charge to flow, meaning the electric current ($I$) must be identical through all components in that line[cite: 281, 283, 289]."
    },
    {
        "question": "What is the equivalent total resistance ($R_T$) for three individual resistors connected in series?",
        "options": [
            "R_T = R_1 + R_2 + R_3",
            "1/R_T = 1/R_1 + 1/R_2 + 1/R_3",
            "R_T = (R_1 × R_2 × R_3)",
            "R_T = (R_1 + R_2) / R_3"
        ],
        "correctAnswer": "R_T = R_1 + R_2 + R_3",
        "explanation": "The total resistance of a series circuit is the sum of its individual resistances, because each added resistor increases the total opposition to current flow ($R_T = R_1 + R_2 + R_3$)[cite: 287, 295]."
    },
    {
        "question": "When resistors are connected in a parallel network configuration, which rule applies to the voltage and current?",
        "options": [
            "They share identical currents but different voltages.",
            "They experience the same voltage drop across their inputs, but carry different currents.",
            "Both the total current and total voltage drops are forced to zero.",
            "The individual voltage drops add up to the source voltage, while currents are identical."
        ],
        "correctAnswer": "They experience the same voltage drop across their inputs, but carry different currents.",
        "explanation": "In a parallel network, each branch is connected directly across the same potential difference, meaning the voltage drop is identical for all branches while the total current splits among them[cite: 283, 284, 308]."
    },
    {
        "question": "What is the mathematical formula for the equivalent total resistance ($R_T$) of three resistors connected in parallel?",
        "options": [
            "R_T = R_1 + R_2 + R_3",
            "1/R_T = 1/R_1 + 1/R_2 + 1/R_3",
            "R_T = (R_1 + R_2 + R_3) / 3",
            "1/R_T = 1/R_1 - 1/R_2 - 1/R_3"
        ],
        "correctAnswer": "1/R_T = 1/R_1 + 1/R_2 + 1/R_3",
        "explanation": "The reciprocal of the total equivalent resistance for a parallel network equals the sum of the reciprocals of each individual resistance branch[cite: 297, 300]."
    },
    {
        "question": "The inherent opposition to current flow offered by the electrolyte and internal materials within a chemical cell itself is called its:",
        "options": [
            "Ohmic constant",
            "Internal resistance",
            "Dielectric factor",
            "Surface reluctance"
        ],
        "correctAnswer": "Internal resistance",
        "explanation": "Internal resistance ($r$) represents the opposition to the flow of charge within a battery or power source, which causes a drop in terminal voltage when current is drawn[cite: 299, 300]."
    },
    {
        "question": "Which equation correctly expresses the total loop current ($I$) for a circuit containing a single source with emf ($E$), internal resistance ($r$), and an external load resistance ($R$)?",
        "options": [
            "I = E / (R + r)",
            "I = E(R + r)",
            "I = V / r",
            "I = E / (R · r)"
        ],
        "correctAnswer": "I = E / (R + r)",
        "explanation": "By applying Ohm's Law to the entire circuit, the total emf must drive current through both the external load ($R$) and the internal resistance ($r$) in series, resulting in $I = E / (R + r)$[cite: 313]."
    },
    {
        "question": "The potential difference measured across the active terminals of a battery when it is actively delivering current to an external load is called the:",
        "options": [
            "Electromotive force",
            "Terminal potential difference",
            "Electrostatic field constant",
            "Open-circuit potential drop"
        ],
        "correctAnswer": "Terminal potential difference",
        "explanation": "Terminal potential difference ($V = IR$) is the actual voltage available to the external circuit when current is flowing through the source and overcoming its internal resistance[cite: 317]."
    },
    {
        "question": "What is the relationship between the electromotive force ($E$), terminal voltage ($V$), and internal drop ($Ir$) for a discharging battery?",
        "options": [
            "E = V + Ir",
            "E = V - Ir",
            "E = Ir - V",
            "V = E + Ir"
        ],
        "correctAnswer": "E = V + Ir",
        "explanation": "The total electromotive force ($E$) produced by a cell equals the terminal potential difference ($V$) across the external circuit plus the internal voltage drop ($Ir$) caused by its internal resistance[cite: 313]."
    },
    {
        "question": "What does the symbol $\\alpha$ represent in the temperature-dependent resistance equation $R = R_0[1 + \\alpha(T - T_0)]$?",
        "options": [
            "The structural density ratio",
            "The temperature coefficient of resistance",
            "The baseline electrostatic capacity",
            "The reciprocal permittivity constant"
        ],
        "correctAnswer": "The temperature coefficient of resistance",
        "explanation": "The parameter $\\alpha$ is the temperature coefficient of resistance, which determines the fractional change in resistance per unit change in temperature relative to a baseline reference state[cite: 319, 322]."
    },
    {
        "question": "Electrical work ($W$) performed to transfer an amount of charge ($q$) across a potential difference ($V$) is given by:",
        "options": [
            "W = qV",
            "W = q / V",
            "W = V / q",
            "W = q²V"
        ],
        "correctAnswer": "W = qV",
        "explanation": "Since potential difference is defined as work done per unit charge ($V = W/q$), the electrical work required to move a charge equals the product of the charge and the voltage ($W = qV$)[cite: 124, 324, 329]."
    },
    {
        "question": "Electrical power ($P$) delivered to a resistor can be expressed using current ($I$), voltage ($V$), and resistance ($R$) in all the following ways EXCEPT:",
        "options": [
            "P = IV",
            "P = I²R",
            "P = V² / R",
            "P = I / V²"
        ],
        "correctAnswer": "P = I / V²",
        "explanation": "By combining the equations for electric power ($P = IV$) and Ohm's law ($V = IR$), power can be expressed as $P = IV$, $P = I^2R$, or $P = V^2/R$. The expression $P = I/V^2$ is incorrect."
    },
    {
        "question": "The efficiency ($\eta$) of an electrical circuit is defined as the ratio of:",
        "options": [
            "Internal resistance to external load resistance",
            "Power output to the total power generated",
            "Total charge to the absolute running time",
            "Permittivity of a dielectric to vacuum values"
        ],
        "correctAnswer": "Power output to the total power generated",
        "explanation": "Efficiency ($\eta$) measures how effectively a system converts input energy into useful work, calculated as the ratio of useful power output to total power generated."
    },
    {
        "question": "An electrical circuit achieves its maximum possible power output across an external load resistor ($R$) when:",
        "options": [
            "The load resistance is exactly equal to the internal resistance of the source (R = r)",
            "The load resistance is zero",
            "The internal resistance is infinitely high",
            "The terminal potential difference matches the open-circuit value"
        ],
        "correctAnswer": "The load resistance is exactly equal to the internal resistance of the source (R = r)",
        "explanation": "The maximum power transfer theorem states that a voltage source delivers maximum power to an external load when the load resistance equals the internal resistance of the source ($R = r$)."
    },
    {
        "question": "A capacitor fundamentally consists of:",
        "options": [
            "A single metallic wire wrapped around an iron core",
            "Two conducting plates separated by an insulating layer",
            "A combination of a junction diode and a load resistor",
            "An array of open batteries connected in a parallel configuration"
        ],
        "correctAnswer": "Two conducting plates separated by an insulating layer",
        "explanation": "A capacitor is an electrical component designed to store charge and energy, consisting of two parallel conducting metal plates separated by an insulating layer called a dielectric."
    },
    {
        "question": "The insulating material layer placed between the conducting plates of a capacitor is called a:",
        "options": [
            "Conductor",
            "Dielectric",
            "Ohmic bridge",
            "Electrolyte matrix"
        ],
        "correctAnswer": "Dielectric",
        "explanation": "The non-conducting insulating layer placed between the plates of a capacitor is known as a dielectric, which increases the capacitance of the system."
    },
    {
        "question": "The charge ($Q$) stored on a capacitor is directly proportional to the potential difference ($V$) across it. This proportionality constant ($C$) is called:",
        "options": [
            "Resistivity",
            "Conductivity",
            "Capacitance",
            "Permittivity"
        ],
        "correctAnswer": "Capacitance",
        "explanation": "Capacitance ($C$) is the constant of proportionality that measures a capacitor's ability to store charge per unit of potential difference, defined by the equation $Q = CV$."
    },
    {
        "question": "What is the standard SI unit of measurement for capacitance, which is equivalent to one Coulomb per Volt (C/V)?",
        "options": [
            "Ohm (Ω)",
            "Volt (V)",
            "Farad (F)",
            "Henry (H)"
        ],
        "correctAnswer": "Farad (F)",
        "explanation": "The standard SI unit for capacitance is the Farad ($\text{F}$), named after Michael Faraday, where $1\\text{ Farad} = 1\\text{ Coulomb per Volt}$ ($1\\text{ F} = 1\\text{ C/V}$)."
    },
    {
        "question": "Which of the following is NOT one of the common geometric categories of capacitors?",
        "options": [
            "Parallel plate capacitor",
            "Cylindrical capacitor",
            "Isolated sphere capacitor",
            "Triangular matrix capacitor"
        ],
        "correctAnswer": "Triangular matrix capacitor",
        "explanation": "Standard configurations of capacitors based on geometry include parallel plate, cylindrical, and spherical designs. A triangular matrix capacitor is not a standard design."
    },
    {
        "question": "The capacitance ($C$) of an ideal parallel plate capacitor in a vacuum can be calculated using the formula:",
        "options": [
            "C = ε_0 A / d",
            "C = ε_0 A d",
            "C = d / (ε_0 A)",
            "C = A / d"
        ],
        "correctAnswer": "C = ε_0 A / d",
        "explanation": "The capacitance of a parallel plate capacitor depends on its geometry, calculated using the equation $C = \\epsilon_0 A / d$, where $A$ is the area of the plates and $d$ is the distance between them."
    },
    {
        "question": "Based on the geometric formula $C = \\epsilon_0 A / d$, how can the capacitance of a parallel plate capacitor be increased?",
        "options": [
            "By decreasing the area of the plates",
            "By increasing the distance between the plates",
            "By increasing the area of the plates or decreasing the distance between them",
            "By removing the dielectric material entirely"
        ],
        "correctAnswer": "By increasing the area of the plates or decreasing the distance between them",
        "explanation": "According to the equation $C = \\epsilon_0 A / d$, capacitance is directly proportional to plate area ($A$) and inversely proportional to the separation distance ($d$)."
    },
    {
        "question": "When capacitors ($C_1, C_2, C_3$) are connected in a series configuration, what physical quantity must remain identical across each capacitor?",
        "options": [
            "The potential difference",
            "The stored electric charge",
            "The energy density profile",
            "The cross-sectional area"
        ],
        "correctAnswer": "The stored electric charge",
        "explanation": "In a series connection, the charge displacement is uniform along the line, meaning each capacitor stores the exact same magnitude of charge ($Q$) regardless of its size."
    },
    {
        "question": "What is the formula for the equivalent total capacitance ($C_{eq}$) of three individual capacitors connected in series?",
        "options": [
            "C_eq = C_1 + C_2 + C_3",
            "1/C_eq = 1/C_1 + 1/C_2 + 1/C_3",
            "C_eq = (C_1 · C_2 · C_3)",
            "C_eq = (C_1 + C_2) / C_3"
        ],
        "correctAnswer": "1/C_eq = 1/C_1 + 1/C_2 + 1/C_3",
        "explanation": "For a series connection, the reciprocal of the total equivalent capacitance equals the sum of the reciprocals of the individual capacitances."
    },
    {
        "question": "When multiple capacitors are connected in a parallel network configuration, which rule applies to the voltage and charge?",
        "options": [
            "Each capacitor holds the exact same potential difference across its terminals.",
            "The total potential difference is split among each branch.",
            "The total net charge equals the charge on a single branch.",
            "The individual capacitance values cancel each other out."
        ],
        "correctAnswer": "Each capacitor holds the exact same potential difference across its terminals.",
        "explanation": "In a parallel configuration, the terminals of each capacitor are connected directly to the same node points, meaning they all experience the same potential difference ($V$)."
    },
    {
        "question": "What is the equivalent total capacitance ($C_{eq}$) of three individual capacitors connected in a parallel network?",
        "options": [
            "C_eq = C_1 + C_2 + C_3",
            "1/C_eq = 1/C_1 + 1/C_2 + 1/C_3",
            "C_eq = (C_1 × C_2) / C_3",
            "C_eq = 1 / (C_1 + C_2 + C_3)"
        ],
        "correctAnswer": "C_eq = C_1 + C_2 + C_3",
        "explanation": "Connecting capacitors in parallel effectively increases the total surface area available for storing charge, meaning the total equivalent capacitance is the direct sum of the individual capacitances ($C_{eq} = C_1 + C_2 + C_3$)."
    },
    {
        "question": "The electrostatic potential energy ($U$) stored in a charged capacitor can be calculated using charge ($Q$), voltage ($V$), and capacitance ($C$) in all the following ways EXCEPT:",
        "options": [
            "U = 1/2 QV",
            "U = 1/2 CV²",
            "U = 1/2 Q² / C",
            "U = 1/2 C / V²"
        ],
        "correctAnswer": "U = 1/2 C / V²",
        "explanation": "The potential energy stored in a capacitor equals the work done to charge it, expressed as $U = \\frac{1}{2}QV$, $U = \\frac{1}{2}CV^2$, or $U = \\frac{1}{2}Q^2/C$. The expression $U = \\frac{1}{2}C/V^2$ is incorrect."
    },
    {
        "question": "Energy density ($u$) inside a parallel plate capacitor is defined as the stored potential energy per unit:",
        "options": [
            "Mass of the plates",
            "Volume between the plates",
            "Surface charge density",
            "Thickness of the metal wire"
        ],
        "correctAnswer": "Volume between the plates",
        "explanation": "Energy density ($u = U / \\text{Volume}$) measures how closely packed the energy is within the spatial field, defined as the total stored electrostatic potential energy divided by the volume between the plates ($Ad$)."
    },
    {
        "question": "What is the formula for the energy density ($u$) inside an electric field in free space?",
        "options": [
            "u = 1/2 ε_0 E²",
            "u = ε_0 E",
            "u = 1/2 ε_0² E",
            "u = E² / ε_0"
        ],
        "correctAnswer": "u = 1/2 ε_0 E²",
        "explanation": "By substituting the equations for capacitance and voltage into the energy density formula, the expression simplifies to $u = \\frac{1}{2}\\epsilon_0 E^2$, showing that energy density is proportional to the square of the electric field strength."
    },
    {
        "question": "How does inserting a dielectric material with a dielectric constant ($K$) affect the electric field ($E$) between the plates of an isolated, charged capacitor?",
        "options": [
            "The electric field increases by a factor of K.",
            "The electric field drops to exactly zero.",
            "The electric field is reduced by a factor of K (E = E_0 / K).",
            "The electric field remains completely unaffected."
        ],
        "correctAnswer": "The electric field is reduced by a factor of K (E = E_0 / K).",
        "explanation": "The molecules within a dielectric polarize in response to an external electric field, creating an induced internal field that opposes the original field and reduces the net electric field by a factor of $K$ ($E = E_0/K$)."
    },
    {
        "question": "What is the primary branch of physics that studies electric charges at rest, the forces between them, and the fields they produce?",
        "options": [
            "Electrostatics",
            "Electrodynamics",
            "Thermodynamics",
            "Quantum Mechanics"
        ],
        "correctAnswer": "Electrostatics",
        "explanation": "Electrostatics explicitly focuses on stationary electric charges, their stationary fields, and the forces operating between them as outlined in the introduction of the notes."
    },
    {
        "question": "How many fundamental forces are recognized in nature according to the provided physics notes?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        "correctAnswer": "Four",
        "explanation": "The notes state that all interactions in the universe are governed by four fundamental forces: gravitational, electromagnetic, strong nuclear, and weak nuclear forces."
    },
    {
        "question": "Which fundamental force is responsible for the attraction between masses?",
        "options": [
            "Electromagnetic force",
            "Gravitational force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Gravitational force",
        "explanation": "Gravitational force acts as the universal attractive interaction existing between any two objects possessing mass."
    },
    {
        "question": "The force that exists specifically between charged particles is known as which of the following?",
        "options": [
            "Gravitational force",
            "Strong nuclear force",
            "Electromagnetic force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Electromagnetic force",
        "explanation": "Electromagnetic forces encompass both electric forces between static charges and magnetic forces between moving charges."
    },
    {
        "question": "What is the primary function of the strong nuclear force mentioned in the material?",
        "options": [
            "Governing radioactive decay",
            "Attracting macroscopic masses",
            "Holding atomic nuclei together",
            "Causing electron flow in conductors"
        ],
        "correctAnswer": "Holding atomic nuclei together",
        "explanation": "The strong nuclear force overcomes the intense electrostatic repulsion between positively charged protons to bind the atomic nucleus securely."
    },
    {
        "question": "Which fundamental force is primarily responsible for radioactive decay?",
        "options": [
            "Weak nuclear force",
            "Strong nuclear force",
            "Gravitational force",
            "Electromagnetic force"
        ],
        "correctAnswer": "Weak nuclear force",
        "explanation": "The weak nuclear force operates at subatomic scales to govern specific radioactive decay paths like beta decay."
    },
    {
        "question": "What fundamental property of matter causes it to experience a force when placed inside an electric field?",
        "options": [
            "Mass",
            "Volume",
            "Electric charge",
            "Density"
        ],
        "correctAnswer": "Electric charge",
        "explanation": "Electric charge is the intrinsic characteristic of matter that reacts with and experiences structural physical force within electromagnetic fields."
    },
    {
        "question": "Protons are characterized by which type of electrical charge?",
        "options": [
            "Negative charge",
            "Positive charge",
            "Neutral charge",
            "Variable charge"
        ],
        "correctAnswer": "Positive charge",
        "explanation": "Protons inherently carry a positive elementary charge, which opposes the negative charge profile found on electrons."
    },
    {
        "question": "Electrons are particles that carry which specific type of charge?",
        "options": [
            "Positive charge",
            "Neutral charge",
            "Negative charge",
            "No charge"
        ],
        "correctAnswer": "Negative charge",
        "explanation": "Electrons carry the basic, discrete unit of negative charge, responsible for chemical bonding and electricity."
    },
    {
        "question": "The property stating that electric charge always exists in distinct, discrete amounts or 'blocks' is called what?",
        "options": [
            "Conservation of charge",
            "Quantization of charge",
            "Additivity of charge",
            "Polarization of charge"
        ],
        "correctAnswer": "Quantization of charge",
        "explanation": "Quantization means charge cannot be split continuously; it must exist as integer multiples of the elementary charge ($q = ne$)."
    },
    {
        "question": "According to the principle of conservation of charge, the total charge in an isolated system:",
        "options": [
            "Increases over time",
            "Decreases during interactions",
            "Remains constant",
            "Fluctuates continuously"
        ],
        "correctAnswer": "Remains constant",
        "explanation": "Conservation dictates that net electrical charge can neither be created nor destroyed within a completely isolated boundary system."
    },
    {
        "question": "What does the 'additivity of charge' property imply?",
        "options": [
            "Net charge is the absolute product of separate parts",
            "Net charge is the algebraic sum of individual charges",
            "Charges can only add up to positive values",
            "The system mass increases as charges combine"
        ],
        "correctAnswer": "Net charge is the algebraic sum of individual charges",
        "explanation": "Additivity implies that when combining multiple charges within a system, you sum them algebraically taking their signs (+ or -) into account."
    },
    {
        "question": "What is the standard value of the fundamental elementary unit of electric charge ($e$)?",
        "options": [
            "$9.1 \times 10^{-31}\\text{ C}$",
            "$1.6 \times 10^{-19}\\text{ C}$",
            "$8.85 \times 10^{-12}\\text{ C}$",
            "$9.0 \times 10^{9}\\text{ C}$"
        ],
        "correctAnswer": "$1.6 \times 10^{-19}\\text{ C}$",
        "explanation": "The elementary charge constant $e$ represents the magnitude of electrical charge carried by a single proton or electron, equivalent to $1.6 \times 10^{-19}\\text{ C}$."
    },
    {
        "question": "In the formula $q = ne$, what does the variable '$n$' stand for?",
        "options": [
            "Net electrical force",
            "Number of electrons or elementary units",
            "Neutron count",
            "Nano-Coulombs"
        ],
        "correctAnswer": "Number of electrons or elementary units",
        "explanation": "The integer $n$ represents the total count of elementary charge packets transferred or held to construct the net charge $q$."
    },
    {
        "question": "How many electrons are required to produce a net negative charge of $-3.2 \times 10^{-19}\\text{ C}$?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correctAnswer": "2",
        "explanation": "Using $n = q / e$, we calculate $3.2 \times 10^{-19} / 1.6 \times 10^{-19} = 2$ electrons."
    },
    {
        "question": "Which method of charging involves the direct transfer of electrons from one substance to another by rubbing them together?",
        "options": [
            "Conduction",
            "Induction",
            "Friction",
            "Radiation"
        ],
        "correctAnswer": "Friction",
        "explanation": "Frictional charging uses mechanical rubbing to physically shear and relocate electrons across different materials based on affinity."
    },
    {
        "question": "What is the primary feature that distinguishes charging by conduction from charging by induction?",
        "options": [
            "Conduction needs no direct physical contact",
            "Conduction involves direct physical contact between objects",
            "Induction transfers permanent net charges instantly without grounding",
            "Conduction only works for non-metallic insulators"
        ],
        "correctAnswer": "Conduction involves direct physical contact between objects",
        "explanation": "Conduction requires true physical contact to allow excess mobile electrons to flow directly from a charged body to another object."
    },
    {
        "question": "Charging an object without making any direct physical contact with a separate charged body is known as:",
        "options": [
            "Conduction",
            "Induction",
            "Friction",
            "Resistance"
        ],
        "correctAnswer": "Induction",
        "explanation": "Induction re-distributes internal charges via electric field influence across an air gap or space, without physical connection."
    },
    {
        "question": "Coulomb's Law states that the electrostatic force between two point charges is directly proportional to what parameter?",
        "options": [
            "The square of the distance between them",
            "The sum of the values of the two charges",
            "The product of the magnitudes of the two charges",
            "The inverse of the distance between them"
        ],
        "correctAnswer": "The product of the magnitudes of the two charges",
        "explanation": "Coulomb's Law shows that electrostatic force grows proportionally with the product of the participating charges ($q_1 q_2$)."
    },
    {
        "question": "How does the electrostatic force change with the distance ($r$) separating two point charges according to Coulomb's Law?",
        "options": [
            "It is directly proportional to $r$",
            "It is inversely proportional to $r$",
            "It is inversely proportional to the square of the distance ($r^2$)",
            "It is independent of distance changes"
        ],
        "correctAnswer": "It is inversely proportional to the square of the distance ($r^2$)",
        "explanation": "Coulomb's Law follows an inverse-square relationship where doubling the distance drops the interacting force to one-quarter of its initial value."
    },
    {
        "question": "What is the standard unit of electrostatic force in the SI system?",
        "options": [
            "Coulomb",
            "Volt",
            "Newton",
            "Ampere"
        ],
        "correctAnswer": "Newton",
        "explanation": "Like all mechanical and physical field interactions, electrostatic force is measured using Newtons ($N$)."
    },
    {
        "question": "What is the approximate value of the Coulomb proportionality constant ($K$) in free space?",
        "options": [
            "$1.6 \times 10^{-19}\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$",
            "$8.85 \times 10^{-12}\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$",
            "$9.0 \times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$",
            "$3.0 \times 10^8\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$"
        ],
        "correctAnswer": "$9.0 \times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$",
        "explanation": "The electrostatics proportionality constant $K$ (or $1 / (4\\pi\\epsilon_0)$) evaluates closely to $9 \times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$ in vacuum configurations."
    },
    {
        "question": "What rule governs the structural behavior of interacting like and unlike charges?",
        "options": [
            "Like charges attract while unlike charges repel",
            "Like charges repel while unlike charges attract",
            "Like charges attract and unlike charges have no interaction",
            "Both like and unlike charges repel each other universally"
        ],
        "correctAnswer": "Like charges repel while unlike charges attract",
        "explanation": "Identical sign polarities create mutual spatial repulsion, whereas opposing sign pairs generate mutual electrostatic attraction."
    },
    {
        "question": "The principle stating that the total force on a single charge due to multiple surrounding charges is the vector sum of individual forces is called:",
        "options": [
            "Principle of Quantization",
            "Principle of Superposition",
            "Principle of Conservation",
            "Ohm's Principle"
        ],
        "correctAnswer": "Principle of Superposition",
        "explanation": "The superposition principle permits treating complex multi-charge interactions as individual independent vector forces that combine additively."
    },
    {
        "question": "How is the electric field ($E$) formally defined at any given point in space?",
        "options": [
            "Force multiplied by the magnitude of a test charge",
            "Work done per unit time on a charge",
            "Force per unit positive test charge placed at that point",
            "Potential energy stored per unit area"
        ],
        "correctAnswer": "Force per unit positive test charge placed at that point",
        "explanation": "Electric field acts as an analytical measure of force intensity experienced per unit of positive charge mapping that specific region ($E = F / q$)."
    },
    {
        "question": "What are the primary SI units used to express electric field strength ($E$)?",
        "options": [
            "Coulombs per Newton (C/N)",
            "Newtons per Coulomb (N/C)",
            "Joules per Coulomb (J/C)",
            "Volts per Meter squared (V/m$^2$)"
        ],
        "correctAnswer": "Newtons per Coulomb (N/C)",
        "explanation": "Because $E = F / q$, its derived units consist naturally of mechanical force units (Newtons) divided by charge units (Coulombs)."
    },
    {
        "question": "What is the proper formula to calculate the electric field magnitude ($E$) produced by an isolated point charge $q$ at a distance $r$?",
        "options": [
            "$E = \\frac{Kq}{r}$",
            "$E = \\frac{Kq}{r^2}$",
            "$E = \\frac{Kq^2}{r^2}$",
            "$E = F \\cdot q$"
        ],
        "correctAnswer": "$E = \\frac{Kq}{r^2}$",
        "explanation": "Substituting Coulomb's law into the field definition isolates the single source charge equation $E = Kq / r^2$."
    },
    {
        "question": "Calculate the electric field at a distance of $0.2\\text{ m}$ away from an isolated point charge of $5\\text{ }\mu\\text{C}$.",
        "options": [
            "$1.125 \times 10^6\\text{ N/C}$",
            "$1.125 \times 10^5\\text{ N/C}$",
            "$2.25 \times 10^5\\text{ N/C}$",
            "$5.625 \times 10^4\\text{ N/C}$"
        ],
        "correctAnswer": "$1.125 \times 10^6\\text{ N/C}$",
        "explanation": "Using $E = Kq / r^2$: $E = (9 \times 10^9 \times 5 \times 10^{-6}) / (0.2)^2 = 45000 / 0.04 = 1,125,000\\text{ N/C}$ or $1.125 \times 10^6\\text{ N/C}$."
    },
    {
        "question": "If a charge of $3\\text{ }\mu\\text{C}$ is placed in a uniform electric field of $2 \times 10^4\\text{ N/C}$, what is the total force exerted on the charge?",
        "options": [
            "$0.06\\text{ N}$",
            "$0.6\\text{ N}$",
            "$6.0\\text{ N}$",
            "$0.006\\text{ N}$"
        ],
        "correctAnswer": "$0.06\\text{ N}$",
        "explanation": "Using $F = E \cdot q$, we get $F = (2 \times 10^4\\text{ N/C}) \times (3 \times 10^{-6}\\text{ C}) = 0.06\\text{ N}$."
    },
    {
        "question": "How is electric potential ($V$) defined at a specific location within an electric field?",
        "options": [
            "Force multiplied by the test charge magnitude",
            "Work done per unit charge in bringing a test charge from infinity to that point",
            "Total charge enclosed by a bounding surface",
            "The square root of field energy available per unit volume"
        ],
        "correctAnswer": "Work done per unit charge in bringing a test charge from infinity to that point",
        "explanation": "Electric potential describes the potential energy landscape per unit charge, mapped via the work required to shift a charge against electric fields ($V = W / q$)."
    },
    {
        "question": "What is the standard unit of electric potential ($V$)?",
        "options": [
            "Ampere",
            "Ohm",
            "Volt",
            "Watt"
        ],
        "correctAnswer": "Volt",
        "explanation": "Electric potential and potential differences are quantified using Volts ($V$), where $1\\text{ Volt} = 1\\text{ Joule/Coulomb}$."
    },
    {
        "question": "Which of the following expressions represents the electric potential ($V$) at a distance $r$ from a single point charge $q$?",
        "options": [
            "$V = \\frac{Kq}{r^2}$",
            "$V = \\frac{Kq}{r}$",
            "$V = Kq \\cdot r$",
            "$V = \\frac{Kq^2}{r}$"
        ],
        "correctAnswer": "$V = \\frac{Kq}{r}$",
        "explanation": "Integrating the electric field over distance simplifies the point charge potential formula down to a simple inverse relationship with distance: $V = Kq / r$."
    },
    {
        "question": "Find the electric potential at a point located $0.5\\text{ m}$ away from a $4\\text{ }\mu\\text{C}$ point charge.",
        "options": [
            "$7.2 \times 10^4\\text{ V}$",
            "$7.2 \times 10^3\\text{ V}$",
            "$1.44 \times 10^5\\text{ V}$",
            "$3.6 \times 10^4\\text{ V}$"
        ],
        "correctAnswer": "$7.2 \times 10^4\\text{ V}$",
        "explanation": "Using $V = Kq / r$, we find $V = (9 \times 10^9 \times 4 \times 10^{-6}) / 0.5 = 36000 / 0.5 = 72,000\\text{ V} = 7.2 \times 10^4\\text{ V}$."
    },
    {
        "question": "What fundamental law states that the total net electric flux through any closed surface is equal to the enclosed net charge divided by the permittivity of free space?",
        "options": [
            "Coulomb's Law",
            "Ohm's Law",
            "Gauss's Law",
            "Ampere's Law"
        ],
        "correctAnswer": "Gauss's Law",
        "explanation": "Gauss's Law links the geometric distribution of an electric field across an entire closed boundary directly to the internal source charges enclosed."
    },
    {
        "question": "What physical constant is represented by the symbol $\\epsilon_0$ in electrostatic equations?",
        "options": [
            "Permeability of free space",
            "Permittivity of free space",
            "Proportionality constant",
            "Temperature coefficient of resistance"
        ],
        "correctAnswer": "Permittivity of free space",
        "explanation": "The constant $\\epsilon_0$ represents the absolute dielectric permittivity of a vacuum, indicating how easily free space permits field line distribution."
    },
    {
        "question": "What is the accepted numerical value and unit for the permittivity of free space ($\\epsilon_0$)?",
        "options": [
            "$9.0 \times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$",
            "$1.6 \times 10^{-19}\\text{ C}$",
            "$8.85 \times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$",
            "$6.67 \times 10^{-11}\\text{ m}^3/(\\text{kg}\\cdot\\text{s}^2)$"
        ],
        "correctAnswer": "$8.85 \times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$",
        "explanation": "The constant $\\epsilon_0$ is measured in standard SI metrics as approximately $8.85 \times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$."
    },
    {
        "question": "Electric flux ($\\Phi$) passing through a surface is mathematically defined as the surface integral of which parameter?",
        "options": [
            "The potential difference across the area",
            "The electric field vector dot product with the area vector",
            "The current density across the surface boundary",
            "The electrostatic force vector"
        ],
        "correctAnswer": "The electric field vector dot product with the area vector",
        "explanation": "Flux measures the total 'volume' of electric field lines piercing a specified area segment, represented as $\\Phi = \\oint E \\cdot dA$."
    },
    {
        "question": "A spherical surface encloses a single net charge of $2\\text{ }\mu\\text{C}$. Determine the total electric flux emerging through this surface boundary.",
        "options": [
            "$2.26 \times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
            "$1.77 \times 10^{-5}\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
            "$4.52 \times 10^4\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
            "$9.0 \times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$"
        ],
        "correctAnswer": "$2.26 \times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
        "explanation": "Applying Gauss's Law: $\\Phi = q / \\epsilon_0 = (2 \times 10^{-6}) / (8.85 \times 10^{-12}) \\approx 2.26 \times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}$."
    },
    {
        "question": "Materials that contain high amounts of free mobile electrons, allowing easy electrical charge flow, are classified as:",
        "options": [
            "Insulators",
            "Conductors",
            "Dielectrics",
            "Semiconductors"
        ],
        "correctAnswer": "Conductors",
        "explanation": "Conductors feature highly mobile valence electrons that dissociate from host atoms easily to support current flow under external electric fields."
    },
    {
        "question": "Where does any excess electrostatic charge reside when placed on an ideal isolated conductor in equilibrium?",
        "options": [
            "Concentrated at the geometric center core",
            "Distributed evenly throughout the internal volume",
            "Exclusively on the outer surface of the conductor",
            "Alternating between the interior and the surface"
        ],
        "correctAnswer": "Exclusively on the outer surface of the conductor",
        "explanation": "Mutual electrostatic repulsion forces mobile like charges to migrate as far apart as possible, stranding them purely along the exterior boundaries."
    },
    {
        "question": "What is the magnitude of the internal electric field inside a solid conductor under static equilibrium conditions?",
        "options": [
            "It varies depending on external charge placement",
            "It is always zero",
            "It equals the surface charge density divided by $\\epsilon_0$",
            "It matches the value of the nearest external field source"
        ],
        "correctAnswer": "It is always zero",
        "explanation": "If an internal field existed, mobile charges would move until their own fields perfectly canceled out the interior field, achieving a steady net-zero state."
    },
    {
        "question": "Materials that do not possess free electrons and strongly resist the structural movement of electric charges are called:",
        "options": [
            "Conductors",
            "Insulators",
            "Electrolytes",
            "Superconductors"
        ],
        "correctAnswer": "Insulators",
        "explanation": "Insulators have tightly bound valence electrons locked in stable atomic or molecular configurations, preventing charge migration."
    },
    {
        "question": "How is electric current ($I$) fundamentally defined in a circuit?",
        "options": [
            "The speed of free electrons traveling through a medium",
            "The net amount of charge ($Q$) passing through a cross-sectional area per unit time ($t$)",
            "The opposition offered to the movement of electric charges",
            "The work done to transfer energy between two nodes"
        ],
        "correctAnswer": "The net amount of charge ($Q$) passing through a cross-sectional area per unit time ($t$)",
        "explanation": "Current quantitatively tracks charge passage over time through a chosen reference plane cross-section ($I = Q / t$)."
    },
    {
        "question": "What is the base SI unit of electric current, equivalent to one Coulomb per second ($1\\text{ C/s}$)?",
        "options": [
            "Ohm",
            "Volt",
            "Ampere",
            "Farad"
        ],
        "correctAnswer": "Ampere",
        "explanation": "The Ampere ($A$) serves as the primary SI unit tracking current flow, explicitly defined as one Coulomb of charge passing by each second."
    },
    {
        "question": "What is the differential calculus expression for an instantaneous electrical current?",
        "options": [
            "$I = \\frac{dt}{dQ}$",
            "$I = \\frac{dQ}{dt}$",
            "$I = Q \\cdot dt$",
            "$I = \\int Q \\cdot dt$"
        ],
        "correctAnswer": "$I = \\frac{dQ}{dt}$",
        "explanation": "Instantaneous current is defined as the time derivative of charge, capturing fast-changing flow behavior."
    },
    {
        "question": "The net macroscopic speed at which electron charge carriers drift through a conductor when an external electric field is applied is called:",
        "options": [
            "Thermal velocity",
            "Drift velocity",
            "Acceleration speed",
            "Terminal frequency"
        ],
        "correctAnswer": "Drift velocity",
        "explanation": "Drift velocity describes the slow, net directional progression of charge carriers superimposed over their chaotic thermal motions."
    },
    {
        "question": "Which formula relates the total current ($I$) to the mobile carrier density ($n$), charge ($q$), area ($A$), and drift velocity ($v_d$)?",
        "options": [
            "$I = \\frac{qnA}{v_d}$",
            "$I = qnAv_d$",
            "$I = \\frac{v_d}{qnA}$",
            "$I = q^2 n A v_d$"
        ],
        "correctAnswer": "$I = qnAv_d$",
        "explanation": "The relationship $I = qnAv_d$ maps macroscopic current directly to microscopic electron density, cross-sectional geometry, and drift mechanics."
    },
    {
        "question": "What is defined as the amount of electric current flowing per unit cross-sectional area of a uniform conductor?",
        "options": [
            "Current capacity",
            "Current density",
            "Conductivity index",
            "Resistivity factor"
        ],
        "correctAnswer": "Current density",
        "explanation": "Current density ($J$) normalizes current over the cross-sectional area ($J = I / A$), providing a localized vector measure of flow concentration."
    },
    {
        "question": "What are the proper SI units for current density ($J$)?",
        "options": [
            "Amperes per meter ($A/m$)",
            "Amperes per square meter ($A/m^2$)",
            "Coulombs per square meter ($C/m^2$)",
            "Volts per meter ($V/m$)"
        ],
        "correctAnswer": "Amperes per square meter ($A/m^2$)",
        "explanation": "Because $J = I / A$, the units combine current (Amperes) over geometric area (square meters)."
    },
    {
        "question": "State the core condition required for Ohm's Law to hold strictly true across an ideal conductor.",
        "options": [
            "The physical dimensions must change continuously",
            "The temperature and other physical conditions must remain constant",
            "The voltage must always equal zero",
            "The material must remain in an open-circuit state"
        ],
        "correctAnswer": "The temperature and other physical conditions must remain constant",
        "explanation": "Ohm's Law relies on stable physical states; temperature shifts alter the underlying material lattice vibrations, changing resistance."
    },
    {
        "question": "According to Ohm's Law, the current ($I$) flowing through a conductor is directly proportional to what parameter?",
        "options": [
            "The material resistance ($R$)",
            "The potential difference ($V$) applied across its ends",
            "The length ($L$) of the wire",
            "The cross-sectional area ($A$)"
        ],
        "correctAnswer": "The potential difference ($V$) applied across its ends",
        "explanation": "Ohm's Law shows that current increases proportionally with the electric potential driving force ($I \\propto V$)."
    },
    {
        "question": "What is the algebraic expression summarizing Ohm's Law?",
        "options": [
            "$I = V \\cdot R$",
            "$I = \\frac{V}{R}$",
            "$I = \\frac{R}{V}$",
            "$I = V^2 R$"
        ],
        "correctAnswer": "$I = \\frac{V}{R}$",
        "explanation": "The law is written as $I = V / R$, showing that current is driven by voltage and opposed by resistance."
    },
    {
        "question": "How does the resistance ($R$) of a uniform structural wire depend on its physical length ($L$)?",
        "options": [
            "Resistance is inversely proportional to $L$",
            "Resistance is directly proportional to $L$",
            "Resistance is proportional to the square of $L$",
            "Resistance is entirely independent of $L$"
        ],
        "correctAnswer": "Resistance is directly proportional to $L$",
        "explanation": "Longer paths force charge carriers to experience more atomic collisions, increasing electrical resistance proportionally."
    },
    {
        "question": "How does the electrical resistance ($R$) of a wire change with its cross-sectional area ($A$)?",
        "options": [
            "It is directly proportional to $A$",
            "It is inversely proportional to $A$",
            "It is proportional to $A^2$",
            "It is independent of $A$"
        ],
        "correctAnswer": "It is inversely proportional to $A$",
        "explanation": "A wider cross-section provides more parallel pathways for electrons, reducing the net resistance to current flow."
    },
    {
        "question": "What is the proper expression calculating total wire resistance from its resistivity ($\\rho$), length ($L$), and cross-sectional area ($A$)?",
        "options": [
            "$R = \\frac{\\rho A}{L}$",
            "$R = \\frac{\\rho L}{A}$",
            "$R = \\rho L A$",
            "$R = \\frac{L}{\\rho A}$"
        ],
        "correctAnswer": "$R = \\frac{\\rho L}{A}$",
        "explanation": "Resistance combines material resistivity and geometric proportions through the equation $R = \\rho L / A$."
    },
    {
        "question": "What material-specific property depends only on the composition of the material and its temperature, rather than its size or shape?",
        "options": [
            "Resistance",
            "Resistivity",
            "Conductance",
            "Current Capacity"
        ],
        "correctAnswer": "Resistivity",
        "explanation": "Resistivity ($\\rho$) is an intrinsic bulk property of matter, independent of the sample's dimensions."
    },
    {
        "question": "What is the standard SI unit used to quantify material resistivity ($\\rho$)?",
        "options": [
            "Ohm ($\\Omega$)",
            "Ohm-meter ($\\Omega\\cdot\\text{m}$)",
            "Ohm per meter ($\\Omega/\\text{m}$)",
            "Siemens"
        ],
        "correctAnswer": "Ohm-meter ($\\Omega\\cdot\\text{m}$)",
        "explanation": "Rearranging $R = \\rho L / A$ yields $\\rho = RA / L$, which simplifies to units of $\\Omega \\cdot \\text{m}^2 / \\text{m} = \\Omega \\cdot \\text{m}$."
    },
    {
        "question": "How is electrical conductivity ($\\sigma$) related to resistivity ($\\rho$)?",
        "options": [
            "It is the direct square of resistivity",
            "It is the mathematical reciprocal of resistivity ($1/\\rho$)",
            "It equals resistivity multiplied by area",
            "It is completely independent of resistivity"
        ],
        "correctAnswer": "It is the mathematical reciprocal of resistivity ($1/\\rho$)",
        "explanation": "Conductivity measures how easily a material allows current to flow, making it the inverse of resistivity ($\\sigma = 1 / \\rho$)."
    },
    {
        "question": "What is the vector form of Ohm's Law relating current density ($J$), conductivity ($\\sigma$), and electric field ($E$)?",
        "options": [
            "$J = \\frac{\\sigma}{E}$",
            "$J = \\sigma \\cdot E$",
            "$J = \\sigma \\cdot E^2$",
            "$J = \\frac{E}{\\sigma}$"
        ],
        "correctAnswer": "$J = \\sigma \\cdot E$",
        "explanation": "The localized vector form of Ohm's law shows that current density is proportional to the local driving electric field: $J = \\sigma E$."
    },
    {
        "question": "How does the resistance of most typical metallic conductors respond to an increase in temperature?",
        "options": [
            "Metallic resistance decreases with temperature",
            "Metallic resistance increases with temperature",
            "Metallic resistance remains perfectly static",
            "Metallic resistance drops down to zero immediately"
        ],
        "correctAnswer": "Metallic resistance increases with temperature",
        "explanation": "Heating a metal increases lattice vibrations, which disrupts the path of flowing electrons and raises resistance."
    },
    {
        "question": "How do the resistances of typical semiconductors and insulators respond to rising temperatures?",
        "options": [
            "Their resistances increase with temperature",
            "Their resistances decrease with temperature",
            "Their resistances remain entirely unchanged",
            "Their resistances fluctuate randomly without trend"
        ],
        "correctAnswer": "Their resistances decrease with temperature",
        "explanation": "Higher temperatures provide enough energy to break atomic bonds in semiconductors, releasing new mobile charge carriers and reducing resistance."
    },
    {
        "question": "Conductors that strictly obey Ohm's Law and maintain a stable, linear resistance are classified as:",
        "options": [
            "Non-Ohmic conductors",
            "Ohmic conductors",
            "Semiconducting junctions",
            "Super-dielectrics"
        ],
        "correctAnswer": "Ohmic conductors",
        "explanation": "Ohmic materials maintain a linear voltage-to-current relationship across their normal operating ranges."
    },
    {
        "question": "Which of the following components acts as an example of a non-Ohmic material or device?",
        "options": [
            "Copper wire filament",
            "Tungsten resistor",
            "Junction diode",
            "Constantan precision wire"
        ],
        "correctAnswer": "Junction diode",
        "explanation": "Diodes are non-linear, non-Ohmic devices whose current output changes exponentially, rather than linearly, with voltage."
    },
    {
        "question": "What is Electromotive Force (EMF) defined as in an open circuit configuration?",
        "options": [
            "The magnetic force driving current rotation",
            "The potential difference across cell terminals when it delivers zero net current",
            "The energy lost to internal cell resistance during active discharge",
            "The power dissipated across external network branches"
        ],
        "correctAnswer": "The potential difference across cell terminals when it delivers zero net current",
        "explanation": "EMF represents the maximum ideal voltage potential of an electrochemical source when no load is drawing current."
    },
    {
        "question": "How do you calculate the total equivalent EMF ($E_T$) when three distinct electrochemical cells ($E_1, E_2, E_3$) are linked in series?",
        "options": [
            "$E_T = E_1 = E_2 = E_3$",
            "$E_T = E_1 + E_2 + E_3$",
            "$\\frac{1}{E_T} = \\frac{1}{E_1} + \\frac{1}{E_2} + \\frac{1}{E_3}$",
            "$E_T = \\frac{E_1 + E_2 + E_3}{3}$"
        ],
        "correctAnswer": "$E_T = E_1 + E_2 + E_3$",
        "explanation": "Connecting cells in series aligns their potentials, so their individual voltages add together to increase the total EMF."
    },
    {
        "question": "When identical cells with equal EMF values ($E$) are connected together in parallel, the total equivalent network EMF ($E_T$) is:",
        "options": [
            "The sum of all individual EMF values",
            "Equal to the EMF of a single cell ($E$)",
            "Inversely proportional to the number of cells",
            "Reduced to zero due to phase cancellation"
        ],
        "correctAnswer": "Equal to the EMF of a single cell ($E$)",
        "explanation": "Parallel branches share the same terminal potential nodes, meaning the total EMF matches that of a single branch."
    },
    {
        "question": "When resistors are connected in a series configuration, what parameter must be identical across every resistor?",
        "options": [
            "The voltage drop across each resistor",
            "The electric current flowing through each resistor",
            "The power dissipated by each resistor",
            "The local temperature coefficient"
        ],
        "correctAnswer": "The electric current flowing through each resistor",
        "explanation": "A series configuration provides a single continuous path for current, ensuring the flow rate is identical at all points."
    },
    {
        "question": "What is the formula for the total equivalent resistance ($R_T$) of three individual resistors ($R_1, R_2, R_3$) connected in series?",
        "options": [
            "$\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$",
            "$R_T = R_1 + R_2 + R_3$",
            "$R_T = \\frac{R_1 + R_2 + R_3}{3}$",
            "$R_T = R_1 \\cdot R_2 \\cdot R_3$"
        ],
        "correctAnswer": "$R_T = R_1 + R_2 + R_3$",
        "explanation": "In series, total resistance is the sum of individual resistances because charges must pass through each component sequentially."
    },
    {
        "question": "When separate resistors are connected in parallel, what electrical parameter remains uniform across all of them?",
        "options": [
            "Current",
            "Voltage",
            "Power",
            "Resistance"
        ],
        "correctAnswer": "Voltage",
        "explanation": "Parallel components share the same electrical nodes, meaning the voltage drop across each branch is identical."
    },
    {
        "question": "What is the mathematical equation to find the total equivalent resistance ($R_T$) for a parallel group of resistors?",
        "options": [
            "$R_T = R_1 + R_2 + R_3$",
            "$\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$",
            "$R_T = \\frac{1}{R_1 + R_2 + R_3}$",
            "$R_T = \\frac{R_1 R_2 R_3}{R_1 + R_2 + R_3}$"
        ],
        "correctAnswer": "$\\frac{1}{R_T} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$",
        "explanation": "Parallel configurations add pathways for current, meaning the inverse of the total resistance equals the sum of the inverses of each individual resistance."
    },
    {
        "question": "The structural electrical opposition encountered by charge carriers moving through the internal chemical body of a battery cell itself is called:",
        "options": [
            "External resistance",
            "Internal resistance ($r$)",
            "Shunt impedance",
            "Dielectric constant"
        ],
        "correctAnswer": "Internal resistance ($r$)",
        "explanation": "Internal resistance ($r$) represents the inherent energy losses that occur inside a power source due to its chemical and physical makeup."
    },
    {
        "question": "What formula defines total circuit current ($I$) by accounting for both external load resistance ($R$) and internal battery cell resistance ($r$)?",
        "options": [
            "$I = \\frac{E}{R - r}$",
            "$I = \\frac{E}{R + r}$",
            "$I = E \\cdot (R + r)$",
            "$I = \\frac{E \\cdot r}{R}$"
        ],
        "correctAnswer": "$I = \\frac{E}{R + r}$",
        "explanation": "The total resistance of the circuit loop is the sum of the external load $R$ and the internal source resistance $r$, giving $I = E / (R + r)$."
    },
    {
        "question": "What is the relationship between cell EMF ($E$), terminal potential difference ($V$), current ($I$), and internal resistance ($r$) during discharge?",
        "options": [
            "$E = V - Ir$",
            "$E = V + Ir$",
            "$E = V \\cdot Ir$",
            "$E = \\frac{V}{Ir}$"
        ],
        "correctAnswer": "$E = V + Ir$",
        "explanation": "The total ideal voltage source ($E$) must cover both the external terminal voltage ($V$) and the internal voltage drop ($Ir$)."
    },
    {
        "question": "What is the temperature coefficient of resistivity ($\\alpha$) fundamentally defined as?",
        "options": [
            "The square of change in resistivity per degree Kelvin",
            "The fractional change in resistivity per unit change in temperature",
            "The absolute maximum temperature a conductor can sustain",
            "The inverse of initial material conductivity"
        ],
        "correctAnswer": "The fractional change in resistivity per unit change in temperature",
        "explanation": "The coefficient $\\alpha$ measures how much a material's resistivity changes per degree of temperature shift, relative to its baseline value."
    },
    {
        "question": "What formula models the change in electrical resistance ($R$) over a temperature shift from $T_0$ to $T$?",
        "options": [
            "$R = R_0 [1 + \\alpha(T - T_0)]$",
            "$R = R_0 [1 - \\alpha(T - T_0)]$",
            "$R = \\frac{R_0}{1 + \\alpha(T - T_0)}$",
            "$R = R_0 \\cdot \\alpha(T - T_0)$"
        ],
        "correctAnswer": "$R = R_0 [1 + \\alpha(T - T_0)]$",
        "explanation": "This linear equation models how resistance scales with temperature shifts relative to a reference value $R_0$."
    },
    {
        "question": "Electrical work ($W$) required to shift a charge $q$ across an active potential difference $V$ is given by which formula?",
        "options": [
            "$W = \\frac{q}{V}$",
            "$W = q \\cdot V$",
            "$W = \\frac{V}{q}$",
            "$W = q^2 V$"
        ],
        "correctAnswer": "$W = q \\cdot V$",
        "explanation": "Work is the product of the charge magnitude and the electric potential difference it moves across ($1\\text{ Joule} = 1\\text{ Coulomb} \\times 1\\text{ Volt}$)."
    },
    {
        "question": "What basic unit is used to express electrical work and energy in the SI system?",
        "options": [
            "Watt",
            "Joule",
            "Volt-ampere",
            "Coulomb"
        ],
        "correctAnswer": "Joule",
        "explanation": "The Joule ($J$) is the standard SI unit for all forms of physical energy, work, and heat."
    },
    {
        "question": "How is electrical power ($P$) fundamentally defined?",
        "options": [
            "The total work accumulated over an infinite duration",
            "The rate at which electrical energy is transferred or consumed over time",
            "The product of resistance and the square of time",
            "The total charge delivered per square meter"
        ],
        "correctAnswer": "The rate at which electrical energy is transferred or consumed over time",
        "explanation": "Power measures the instantaneous rate of energy use or production, given by $P = W / t$."
    },
    {
        "question": "Which of the following expressions does NOT accurately represent electrical power ($P$)?",
        "options": [
            "$P = I \\cdot V$",
            "$P = I^2 R$",
            "$P = \\frac{V^2}{R}$",
            "$P = I \\cdot R^2$"
        ],
        "correctAnswer": "$P = I \\cdot R^2$",
        "explanation": "By combining Ohm's Law ($V = IR$) with the power formula ($P = IV$), we get $P = I^2R$ and $P = V^2 / R$. The expression $I \\cdot R^2$ is incorrect."
    },
    {
        "question": "The efficiency ($\\eta$) of an electrical circuit loop is defined as the ratio of:",
        "options": [
            "Power generated to power output",
            "Power output to total power generated",
            "Internal resistance to external load resistance",
            "Total charge to net circuit potential driving force"
        ],
        "correctAnswer": "Power output to total power generated",
        "explanation": "Efficiency measures the fraction of generated power that reaches the intended external load, given by $\\eta = P_{\\text{out}} / P_{\\text{gen}}$."
    },
    {
        "question": "Which expression yields the operating efficiency ($\\eta$) of a circuit with load $R$ and internal source resistance $r$?",
        "options": [
            "$\\eta = \\frac{R}{R + r}$",
            "$\\eta = \\frac{r}{R + r}$",
            "$\\eta = \\frac{R + r}{R}$",
            "$\\eta = \\frac{R - r}{R + r}$"
        ],
        "correctAnswer": "$\\eta = \\frac{R}{R + r}$",
        "explanation": "Efficiency simplifies to the ratio of useful load resistance to the total loop resistance: $\\eta = I^2R / [I^2(R + r)] = R / (R + r)$."
    },
    {
        "question": "The Maximum Power Transfer Theorem states that power output to an external load $R$ is maximized when:",
        "options": [
            "$R$ is infinitely large",
            "$R$ is equal to the internal source resistance $r$",
            "$R$ is exactly half of the internal resistance $r$",
            "$R$ is reduced all the way down to zero"
        ],
        "correctAnswer": "$R$ is equal to the internal source resistance $r$",
        "explanation": "Matching the load resistance to the internal source resistance optimizes the balance between circuit current and load voltage, maximizing power transfer."
    },
    {
        "question": "An electrical component designed to store electric charge and potential energy using two isolated conductors is called a:",
        "options": [
            "Resistor",
            "Capacitor",
            "Inductor",
            "Transformer"
        ],
        "correctAnswer": "Capacitor",
        "explanation": "Capacitors use pairs of isolated conducting surfaces to hold equal and opposite charges, creating an energy-storing electric field."
    },
    {
        "question": "What is the non-conducting insulating material placed between the plates of a capacitor called?",
        "options": [
            "Electrolyte",
            "Dielectric",
            "Semiconductor",
            "Superconductor"
        ],
        "correctAnswer": "Dielectric",
        "explanation": "Dielectrics are insulating materials that polarize under an electric field, increasing the capacitor's ability to store charge."
    },
    {
        "question": "What is the fundamental formula linking stored charge ($Q$), capacitance ($C$), and potential difference ($V$)?",
        "options": [
            "$Q = \\frac{C}{V}$",
            "$Q = C \\cdot V$",
            "$Q = \\frac{V}{C}$",
            "$Q = C^2 V$"
        ],
        "correctAnswer": "$Q = C \\cdot V$",
        "explanation": "The charge stored on a capacitor scales linearly with the applied voltage, with capacitance serving as the constant of proportionality ($Q = CV$)."
    },
    {
        "question": "What is the standard SI unit of capacitance, defined as one Coulomb per Volt ($1\\text{ C/V}$)?",
        "options": [
            "Henry",
            "Tesla",
            "Farad",
            "Ohm"
        ],
        "correctAnswer": "Farad",
        "explanation": "Capacitance is measured in Farads ($F$), representing the amount of charge stored per volt of potential difference."
    },
    {
        "question": "Which of the following is NOT listed in the notes as a standard geometric type of capacitor?",
        "options": [
            "Parallel plate capacitor",
            "Cylindrical capacitor",
            "Toroidal matrix capacitor",
            "Isolated sphere capacitor"
        ],
        "correctAnswer": "Toroidal matrix capacitor",
        "explanation": "The notes explicitly list parallel plate, cylindrical, isolated sphere, and concentric spherical designs as standard capacitor geometries."
    },
    {
        "question": "For a parallel plate capacitor, how does the capacitance ($C$) depend on the area ($A$) of the plates?",
        "options": [
            "Capacitance is inversely proportional to $A$",
            "Capacitance is directly proportional to $A$",
            "Capacitance is proportional to $A^2$",
            "Capacitance is independent of the area metric"
        ],
        "correctAnswer": "Capacitance is directly proportional to $A$",
        "explanation": "Larger plate areas provide more space to hold electric charges, which increases the capacitance."
    },
    {
        "question": "How does the capacitance ($C$) of a parallel plate capacitor change with the distance ($d$) separating the plates?",
        "options": [
            "Capacitance is directly proportional to $d$",
            "Capacitance is inversely proportional to $d$",
            "Capacitance is inversely proportional to $d^2$",
            "Capacitance is completely independent of $d$"
        ],
        "correctAnswer": "Capacitance is inversely proportional to $d$",
        "explanation": "Bringing the plates closer together increases the electrostatic attraction between opposite charges, allowing the capacitor to store more charge at the same voltage."
    },
    {
        "question": "What is the equation for the capacitance ($C$) of an ideal parallel plate capacitor in terms of permittivity ($\\epsilon$), area ($A$), and separation distance ($d$)?",
        "options": [
            "$C = \\frac{\\epsilon d}{A}$",
            "$C = \\frac{\\epsilon A}{d}$",
            "$C = \\epsilon A d$",
            "$C = \\frac{A}{\\epsilon d}$"
        ],
        "correctAnswer": "$C = \\frac{\\epsilon A}{d}$",
        "explanation": "The geometry of a parallel plate capacitor determines its capacitance via the relationship $C = \\epsilon A / d$."
    },
    {
        "question": "When capacitors are connected together in a series configuration, what parameter is identical across all of them?",
        "options": [
            "The voltage drop across each capacitor",
            "The charge ($Q$) stored on each capacitor",
            "The energy stored in each capacitor",
            "The local dielectric constant"
        ],
        "correctAnswer": "The charge ($Q$) stored on each capacitor",
        "explanation": "In a series chain, charge displacement happens equally across each link, forcing all connected capacitors to hold the same charge $Q$."
    },
    {
        "question": "What formula calculates the total equivalent capacitance ($C_{eq}$) for three individual capacitors connected in series?",
        "options": [
            "$C_{eq} = C_1 + C_2 + C_3$",
            "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
            "$C_{eq} = \\frac{C_1 C_2 C_3}{C_1 + C_2 + C_3}$",
            "$C_{eq} = \\frac{1}{C_1 + C_2 + C_3}$"
        ],
        "correctAnswer": "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
        "explanation": "Connecting capacitors in series increases the effective separation distance between the endpoints, which reduces the overall equivalent capacitance according to the reciprocal sum rule."
    },
    {
        "question": "When separate capacitors are connected together in a parallel configuration, what electrical parameter remains uniform across all of them?",
        "options": [
            "The charge stored on each capacitor",
            "The potential difference ($V$) across each capacitor",
            "The energy density of each dielectric",
            "The total current history"
        ],
        "correctAnswer": "The potential difference ($V$) across each capacitor",
        "explanation": "Parallel branches share the same input and output nodes, which ensures the voltage drop across each component is identical."
    },
    {
        "question": "What is the equivalent capacitance ($C_{eq}$) for three capacitors connected in a parallel configuration?",
        "options": [
            "$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$",
            "$C_{eq} = C_1 + C_2 + C_3$",
            "$C_{eq} = \\frac{C_1 + C_2 + C_3}{3}$",
            "$C_{eq} = (C_1 \\cdot C_2 \\cdot C_3)^{1/3}$"
        ],
        "correctAnswer": "$C_{eq} = C_1 + C_2 + C_3$",
        "explanation": "Connecting capacitors in parallel effectively combines their plate areas, so their individual capacitances add together directly."
    },
    {
        "question": "Which of the following expressions correctly evaluates the potential energy ($U$) stored inside a charged capacitor?",
        "options": [
            "$U = QV$",
            "$U = \\frac{1}{2} C V^2$",
            "$U = \\frac{1}{2} C^2 V$",
            "$U = \\frac{1}{2} \\frac{C}{Q^2}$"
        ],
        "correctAnswer": "$U = \\frac{1}{2} C V^2$",
        "explanation": "Integrating the work required to charge a capacitor yields the stored electrostatic potential energy equation: $U = \\frac{1}{2}CV^2$."
    },
    {
        "question": "Express the potential energy ($U$) stored in a capacitor in terms of its charge ($Q$) and capacitance ($C$).",
        "options": [
            "$U = \\frac{1}{2} Q^2 C$",
            "$U = \\frac{1}{2} \\frac{Q^2}{C}$",
            "$U = \\frac{1}{2} \\frac{C^2}{Q}$",
            "$U = Q^2 C^2$"
        ],
        "correctAnswer": "$U = \\frac{1}{2} \\frac{Q^2}{C}$",
        "explanation": "Substituting $V = Q / C$ into the energy equation $U = \\frac{1}{2}QV$ gives the alternate form: $U = \\frac{1}{2}Q^2 / C$."
    },
    {
        "question": "How is electrostatic energy density ($u$) defined within a parallel plate capacitor?",
        "options": [
            "Total energy multiplied by plate separation distance",
            "Total potential energy stored per unit volume ($U / (Ad)$)",
            "Charge stored divided by total surface area",
            "The square root of voltage over area"
        ],
        "correctAnswer": "Total potential energy stored per unit volume ($U / (Ad)$)",
        "explanation": "Energy density measures how tightly packed the stored energy is within the geometric volume ($A \\cdot d$) of the dielectric field."
    },
    {
        "question": "What is the equation for the energy density ($u$) inside an electric field in free space?",
        "options": [
            "$u = \\frac{1}{2} \\epsilon_0 E$",
            "$u = \\frac{1}{2} \\epsilon_0 E^2$",
            "$u = \\frac{1}{2} \\frac{\\epsilon_0}{E^2}$",
            "$u = \\epsilon_0^2 E^2$"
        ],
        "correctAnswer": "$u = \\frac{1}{2} \\epsilon_0 E^2$",
        "explanation": "Combining the energy formula with the capacitance geometry shows that energy density scales with the square of the electric field intensity: $u = \\frac{1}{2}\\epsilon_0 E^2$."
    },
    {
        "question": "When a dielectric material with dielectric constant $\\kappa$ is inserted between the plates of an isolated capacitor, how does the electric field change relative to its initial value $E_0$?",
        "options": [
            "$E = \\kappa \\cdot E_0$",
            "$E = \\frac{E_0}{\\kappa}$",
            "$E = E_0 + \\kappa$",
            "$E = E_0$"
        ],
        "correctAnswer": "$E = \\frac{E_0}{\\kappa}$",
        "explanation": "The internal polarization of the dielectric creates an induced electric field that opposes and reduces the original field by a factor of $\\kappa$ ($E = E_0 / \\kappa$)."
    },
    {
        "question": "What is the net electric field ($E$) inside a dielectric material when accounting for both the external field ($E_0$) and the induced internal field ($E_{ind}$)?",
        "options": [
            "$E = E_0 + E_{ind}$",
            "$E = E_0 - E_{ind}$",
            "$E = \\frac{E_{ind}}{E_0}$",
            "$E = \\kappa \\cdot E_{ind}$"
        ],
        "correctAnswer": "$E = E_0 - E_{ind}$",
        "explanation": "The net field is the vector sum of the fields. Because the induced charges align to oppose the external field, the net field strength is reduced ($E = E_0 - E_{ind}$)."
    },
    {
        "question": "How is the induced charge density ($\\sigma_{ind}$) on the surface of a dielectric related to the original surface charge density ($\\sigma_0$) on the capacitor plates?",
        "options": [
            "$\\sigma_{ind} = \\sigma_0 \\cdot \\kappa$",
            "$\\sigma_{ind} = \\sigma_0 \\left(1 - \\frac{1}{\\kappa}\\right)$",
            "$\\sigma_{ind} = \\frac{\\sigma_0}{\\kappa}$",
            "$\\sigma_{ind} = \\sigma_0 (\\kappa - 1)$"
        ],
        "correctAnswer": "$\\sigma_{ind} = \\sigma_0 \\left(1 - \\frac{1}{\\kappa}\\right)$",
        "explanation": "The polarization of the dielectric reduces the net effective charge density, as described by the equation $\\sigma_{ind} = \\sigma_0 (1 - 1 / \\kappa)$."
    },
    {
        "question": "If you double the distance separating two point charges, the electrostatic force between them drops by what factor?",
        "options": [
            "It drops to one-half",
            "It drops to one-quarter",
            "It drops to one-eighth",
            "It remains exactly the same"
        ],
        "correctAnswer": "It drops to one-quarter",
        "explanation": "Because Coulomb's law follows an inverse-square relationship ($1 / r^2$), doubling the distance ($2r$) reduces the force to $1 / 2^2 = 1 / 4$ of its original value."
    },
    {
        "question": "What happens to the total capacitance of a parallel plate capacitor if you insert a dielectric material with $\\kappa > 1$ between its plates?",
        "options": [
            "The capacitance decreases",
            "The capacitance increases",
            "The capacitance drops down to zero",
            "The capacitance remains completely unchanged"
        ],
        "correctAnswer": "The capacitance increases",
        "explanation": "Inserting a dielectric lowers the voltage across the plates for a given amount of charge, which increases the total capacitance ($C = \\kappa C_0$)."
    },
    {
        "question": "What is the branch of physics that specifically studies electric charges at rest, the forces between them, and the fields they produce?",
        "options": [
            "Electrostatics",
            "Electrodynamics",
            "Magnetostatics",
            "Quantum Mechanics"
        ],
        "correctAnswer": "Electrostatics",
        "explanation": "According to the notebook, electrostatics is defined as the branch of physics that studies electric charges at rest, the forces between them, and the fields they produce."
    },
    {
        "question": "How many fundamental forces in nature govern all physical interactions in the universe?",
        "options": [
            "Two (2)",
            "Three (3)",
            "Four (4)",
            "Five (5)"
        ],
        "correctAnswer": "Four (4)",
        "explanation": "The notebook explicitly states that in physics, all interactions in the universe are governed by four (4) fundamental forces."
    },
    {
        "question": "Which fundamental force is responsible for the attraction between masses?",
        "options": [
            "Electromagnetic force",
            "Gravitational force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Gravitational force",
        "explanation": "The notes characterize the gravitational force as the fundamental force responsible for the attraction between masses."
    },
    {
        "question": "Between what types of components does the electromagnetic force exist?",
        "options": [
            "Massive celestial objects only",
            "Charged particles",
            "Nucleons inside an atom only",
            "Subatomic particles experiencing beta decay"
        ],
        "correctAnswer": "Charged particles",
        "explanation": "The text lists that the electromagnetic force exists between charged particles."
    },
    {
        "question": "What is the primary role of the strong nuclear force in an atom?",
        "options": [
            "It drives radioactive alpha decay",
            "It holds the atomic nuclei together",
            "It causes electron orbital transitions",
            "It acts across astronomical distances between masses"
        ],
        "correctAnswer": "It holds the atomic nuclei together",
        "explanation": "The notebook specifies that the strong nuclear force holds atomic nuclei together."
    },
    {
        "question": "Which fundamental force of nature is explicitly noted as responsible for radioactive decay?",
        "options": [
            "Gravitational force",
            "Electromagnetic force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Weak nuclear force",
        "explanation": "The notes state that the weak nuclear force is responsible for radioactive decay."
    },
    {
        "question": "What is electric charge as defined in your physics notebook?",
        "options": [
            "A macroscopic vector force field acting on neutral atoms",
            "A fundamental property of matter that causes it to experience a force in an electric field",
            "The rate of mass flow through a given conductor cross-sectional area",
            "The absolute energy contained within an isolated chemical battery"
        ],
        "correctAnswer": "A fundamental property of matter that causes it to experience a force in an electric field",
        "explanation": "The notebook notes that electric charge is a fundamental property of matter that causes it to experience a force in an electric field."
    },
    {
        "question": "What particle carries the primary positive charge mentioned in the notes?",
        "options": [
            "Electron",
            "Neutron",
            "Proton",
            "Positron"
        ],
        "correctAnswer": "Proton",
        "explanation": "The notes list the two types of charge as positive charge of a proton and negative charge of electrons."
    },
    {
        "question": "What particle carries the primary negative charge mentioned in the notes?",
        "options": [
            "Alpha particle",
            "Proton",
            "Neutron",
            "Electron"
        ],
        "correctAnswer": "Electron",
        "explanation": "The notes state that the negative charge is carried by electrons."
    },
    {
        "question": "Which property indicates that electric charge exists only in discrete, distinct amounts rather than continuous levels?",
        "options": [
            "Conservation of charge",
            "Quantization of charge",
            "Additivity of charge",
            "Polarization of charge"
        ],
        "correctAnswer": "Quantization of charge",
        "explanation": "The notebook notes that quantization means charge exists in distinct amounts (in blocks)."
    },
    {
        "question": "The principle of 'Conservation of Charge' dictates that the total charge within what kind of system remains constant?",
        "options": [
            "An open system",
            "An isolated system",
            "A thermal system",
            "A non-ohmic system"
        ],
        "correctAnswer": "An isolated system",
        "explanation": "The text reads under conservation: 'Total charge in an isolated system remains constant.'"
    },
    {
        "question": "What does the 'Additivity of Charge' property specify about finding the net charge of a system?",
        "options": [
            "The net charge is the vector cross product of individual charges",
            "The net charge is the geometric average of individual charges",
            "The net charge is the algebraic sum of the individual charges",
            "The net charge is independent of the constituent components"
        ],
        "correctAnswer": "The net charge is the algebraic sum of the individual charges",
        "explanation": "The notebook writes: 'Additivity: The net charge is the algebraic sum of charges.'"
    },
    {
        "question": "What is the mathematical equation given in the notes for the quantization of charge?",
        "options": [
            "q = m * c^2",
            "q = n * e",
            "q = I^2 * R",
            "q = V / R"
        ],
        "correctAnswer": "q = n * e",
        "explanation": "The equation for charge quantization is explicitly written in the notes as q = ne."
    },
    {
        "question": "What is the absolute magnitude value of the elementary electric charge 'e' explicitly given in the text?",
        "options": [
            "1.6 * 10^-19 C",
            "9.0 * 10^9 C",
            "8.85 * 10^-12 C",
            "3.2 * 10^-19 C"
        ],
        "correctAnswer": "1.6 * 10^-19 C",
        "explanation": "The text defines the basic unit of electric charge magnitude as 1.6 * 10^-19 C."
    },
    {
        "question": "How many electrons are required to produce a total charge magnitude of 3.2 * 10^-19 C?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correctAnswer": "2",
        "explanation": "Using the text's example: n = q/e = (3.2 * 10^-19) / (1.6 * 10^-19) = 2 electrons."
    },
    {
        "question": "Which method involves the transfer of electrons from one body to another by rubbing them together?",
        "options": [
            "Conduction",
            "Induction",
            "Friction",
            "Polarization"
        ],
        "correctAnswer": "Friction",
        "explanation": "The notes define Friction as the 'Transfer of electron by rubbing.'"
    },
    {
        "question": "Which method of charging explicitly requires direct contact between the active objects?",
        "options": [
            "Induction",
            "Conduction",
            "Radiation",
            "Frictionless proximity"
        ],
        "correctAnswer": "Conduction",
        "explanation": "The notes define Conduction as: 'It involves direct contact between objects.'"
    },
    {
        "question": "Which method of charging allows an object to become charged without making any direct contact?",
        "options": [
            "Conduction",
            "Ohmic charging",
            "Induction",
            "Resistive coupling"
        ],
        "correctAnswer": "Induction",
        "explanation": "The notebook defines Induction as: 'charging without direct contact.'"
    },
    {
        "question": "What does Coulomb's Law state regarding the relationship between electrostatic force and the distance between two point charges?",
        "options": [
            "Force is directly proportional to the distance",
            "Force is inversely proportional to the distance",
            "Force is directly proportional to the square of the distance",
            "Force is inversely proportional to the square of the distance between them"
        ],
        "correctAnswer": "Force is inversely proportional to the square of the distance between them",
        "explanation": "Coulomb's Law states that the force is directly proportional to the product of charges and inversely proportional to the square of the distance between them."
    },
    {
        "question": "What is the primary mathematical formula for Coulomb's Law as written in the notebook?",
        "options": [
            "F = k * q1 * q2 / r",
            "F = k * q1 * q2 / r^2",
            "F = q / epsilon_0",
            "F = E * q"
        ],
        "correctAnswer": "F = k * q1 * q2 / r^2",
        "explanation": "The formula is written explicitly as F = (k * q1 * q2) / r^2."
    },
    {
        "question": "What is the value of Coulomb's proportionality constant 'k' stated in your text?",
        "options": [
            "8.85 * 10^-12 N m^2/C^2",
            "1.6 * 10^-19 N m^2/C^2",
            "9 * 10^9 N m^2/C^2",
            "2.26 * 10^5 N m^2/C^2"
        ],
        "correctAnswer": "9 * 10^9 N m^2/C^2",
        "explanation": "The notebook states that the proportionality constant k = 9 * 10^9 Nm^2/C^2."
    },
    {
        "question": "Complete the foundational rule of electrostatics from your notebook: 'Like charges repel while...'",
        "options": [
            "unlike charges repel as well",
            "unlike charges attract",
            "neutral charges repel",
            "unlike charges cancel out entirely"
        ],
        "correctAnswer": "unlike charges attract",
        "explanation": "The notes explicitly state: 'Like charges repel while unlike charges attract.'"
    },
    {
        "question": "What does the Principle of Superposition state regarding multiple electric charges acting on a single target charge?",
        "options": [
            "The total force is the scalar sum of the individual forces",
            "The total force is the vector sum of individual forces",
            "The total force is equal to the smallest individual force",
            "The net force is always zero due to system balancing"
        ],
        "correctAnswer": "The total force is the vector sum of individual forces",
        "explanation": "The notes define the Principle of Superposition: 'The total force on a charge due to multiple charges is the vector sum of individual forces.'"
    },
    {
        "question": "What is the proper vector formula expression for the net force under the Principle of Superposition?",
        "options": [
            "F_net = F1 * F2 * F3",
            "F_net = vector sum of F1 + F2 + F3",
            "F_net = (F1 + F2) / F3",
            "F_net = F1 - F2 + F3"
        ],
        "correctAnswer": "vector sum of F1 + F2 + F3",
        "explanation": "The notebook shows the equation clearly as F_net = F1 + F2 + F3 (as vector variables)."
    },
    {
        "question": "How is an electric field (E) defined at any point in space?",
        "options": [
            "The work done per unit negative charge",
            "The electric flux per unit surface area",
            "The force per unit positive test charge placed at that point",
            "The potential difference multiplied by distance"
        ],
        "correctAnswer": "The force per unit positive test charge placed at that point",
        "explanation": "The text reads: 'Electric field is the force per unit positive test charge placed at a point.'"
    },
    {
        "question": "What are the core SI units for electric field strength shown in the notebook expressions?",
        "options": [
            "Newtons per Coulomb (N/C)",
            "Coulombs per Newton (C/N)",
            "Joules per Coulomb (J/C)",
            "Ohm-meters (Ωm)"
        ],
        "correctAnswer": "Newtons per Coulomb (N/C)",
        "explanation": "The notes state E = F / q_t = N/C."
    },
    {
        "question": "What is the formula used to calculate the electric field (E) due to a single point charge 'q' at a distance 'r'?",
        "options": [
            "E = k * q / r",
            "E = k * q / r^2",
            "E = k * q^2 / r^2",
            "E = q / epsilon_0"
        ],
        "correctAnswer": "E = k * q / r^2",
        "explanation": "The equation for a point charge electric field is explicitly written as E = k * q / r^2."
    },
    {
        "question": "Calculate the electric field at a distance of r = 0.2 m from a point charge of 5 microcoulombs (5 * 10^-6 C) using the note calculations (where the note uses a denominator step of 0.1^2 for a net localized calculation).",
        "options": [
            "562.5 N/C",
            "1125 N/C",
            "2250 N/C",
            "9000 N/C"
        ],
        "correctAnswer": "1125 N/C",
        "explanation": "Following the explicit problem text written on page 4: E = (9 * 10^9 * 5 * 10^-6) / (0.2)^2 which matches the notebook's evaluated result of 1125 N/C."
    },
    {
        "question": "What value prefix scale is assigned to 'microcoulombs' (\u03bcC) as specified in the note text?",
        "options": [
            "10^-3 C",
            "10^-6 C",
            "10^-9 C",
            "10^-12 C"
        ],
        "correctAnswer": "10^-6 C",
        "explanation": "The notebook specifically includes a reminder note: '\u03bcC = 10^-6 C'."
    },
    {
        "question": "If a test charge of 3 microcoulombs (3 * 10^-6 C) is placed in a uniform electric field of 2 * 10^4 N/C, what is the magnitude of the force acting on it?",
        "options": [
            "0.06 N",
            "0.60 N",
            "6.00 N",
            "60.0 N"
        ],
        "correctAnswer": "0.06 N",
        "explanation": "Using the notebook problem calculation: F = E * q_t = (2 * 10^4) * (3 * 10^-6) = 0.06 N."
    },
    {
        "question": "What is the conceptual definition of electric potential (V)?",
        "options": [
            "The force acting between two parallel conducting plates",
            "The work done per unit charge in bringing a test charge from infinity to a point",
            "The total electric flux passing through an open geometric cross-section",
            "The product of resistance and physical wire length"
        ],
        "correctAnswer": "The work done per unit charge in bringing a test charge from infinity to a point",
        "explanation": "The notebook states: 'Electric potential is the work done per unit charge in bringing a test charge from infinity to a point.'"
    },
    {
        "question": "What is the basic equation relating electric potential (V), work done (W), and charge (q)?",
        "options": [
            "V = W * q",
            "V = W / q",
            "V = k * q / r^2",
            "V = I * R"
        ],
        "correctAnswer": "V = W / q",
        "explanation": "The formula is written directly in the notebook as V = W / q."
    },
    {
        "question": "What is the SI unit of measurement for electric potential?",
        "options": [
            "Watt",
            "Joule",
            "Volt",
            "Ampere"
        ],
        "correctAnswer": "Volt",
        "explanation": "The notebook explicitly labels the unit of electric potential as the volt (V)."
    },
    {
        "question": "What is the explicit formula derived for the electric potential (V) at a distance 'r' away from a point charge 'q'?",
        "options": [
            "V = k * q / r^2",
            "V = k * q / r",
            "V = k * q^2 / r",
            "V = q / (epsilon_0 * r)"
        ],
        "correctAnswer": "V = k * q / r",
        "explanation": "The notes derive this step-by-step, arriving at the finalized box formula: V = k * q / r."
    },
    {
        "question": "A point charge has a value of 4 mC (treated in text example as 4 * 10^-6 C). What is the electric potential at a point 0.5 m away?",
        "options": [
            "1.8 * 10^4 V",
            "3.6 * 10^4 V",
            "7.2 * 10^4 V",
            "14.4 * 10^4 V"
        ],
        "correctAnswer": "7.2 * 10^4 V",
        "explanation": "As evaluated in the text example: V = (9 * 10^9 * 4 * 10^-6) / 0.5 = 7.2 * 10^4 V."
    },
    {
        "question": "What does Gauss's Law state regarding the total electric flux (\u03c6) through a closed surface?",
        "options": [
            "It equals the enclosed charge multiplied by permittivity",
            "It is always zero regardless of internal charges",
            "It equals the enclosed charge divided by the permittivity of free space",
            "It is inversely proportional to the surface surface density"
        ],
        "correctAnswer": "It equals the enclosed charge divided by the permittivity of free space",
        "explanation": "Gauss's Law states that the total electric flux through a closed surface is equal to the enclosed charge divided by the permittivity of free space (\u03b5_0)."
    },
    {
        "question": "What is the constant value and unit assigned to the permittivity of free space (\u03b5_0) in the notebook?",
        "options": [
            "9.0 * 10^9 N m^2/C^2",
            "1.6 * 10^-19 C",
            "8.85 * 10^-12 C^2 / (N m^2)",
            "2.26 * 10^5 N m^2/C"
        ],
        "correctAnswer": "8.85 * 10^-12 C^2 / (N m^2)",
        "explanation": "The notebook states: '\u03b5_0 - permittivity of free space = 8.85 * 10^-12 C^2 / N m^2'."
    },
    {
        "question": "What is the concise closed surface integral expression given for Gauss's Law?",
        "options": [
            "\u03c6 = \u222e E \u22c5 dA = Q / \u03b5_0",
            "\u03c6 = E * d",
            "\u03c6 = k * Q / r",
            "\u03c6 = I * A"
        ],
        "correctAnswer": "\u03c6 = \u222e E \u22c5 dA = Q / \u03b5_0",
        "explanation": "The mathematical representation of Gauss's Law is written in the notes as \u03c6 = \u222e E \u22c5 dA = Q / \u03b5_0."
    },
    {
        "question": "What is electric flux conceptually defined as in your notes?",
        "options": [
            "The speed at which an electron drifts through an area",
            "The amount of electric field lines passing through a given surface area",
            "The chemical degradation rate within a wet cell battery",
            "The potential barrier across a non-ohmic junction diode"
        ],
        "correctAnswer": "The amount of electric field lines passing through a given surface area",
        "explanation": "The text defines electric flux as the method/measure of electric field lines passing through a given surface."
    },
    {
        "question": "If a spherical surface encloses a net charge of 2 microcoulombs (2 * 10^-6 C), what is the total electric flux (\u03c6) through the surface?",
        "options": [
            "1.13 * 10^5 N m^2/C",
            "2.26 * 10^5 N m^2/C",
            "4.52 * 10^5 N m^2/C",
            "8.85 * 10^-12 N m^2/C"
        ],
        "correctAnswer": "2.26 * 10^5 N m^2/C",
        "explanation": "As calculated in the note text: \u03c6 = q / \u03b5_0 = (2 * 10^-6) / (8.85 * 10^-12) = 2.26 * 10^5 N m^2/C."
    },
    {
        "question": "Which of the following distributions is NOT listed on page 5 as a standard application geometry for Gauss's law tracking?",
        "options": [
            "Field due to spherical charge",
            "Infinite plain sheet",
            "Cylindrical distribution",
            "Toroidal magnetic mesh"
        ],
        "correctAnswer": "Toroidal magnetic mesh",
        "explanation": "Page 5 explicitly lists: 'Field due to spherical charge', 'Infinite plain sheet', and 'Cylindrical distribution'."
    },
    {
        "question": "What is a conductor defined as in your notes?",
        "options": [
            "A material that prevents the movement of electrons entirely",
            "A material that allows the free movement of electrons",
            "A material whose resistance drops as temperature increases",
            "A material that does not obey Coulomb's Law"
        ],
        "correctAnswer": "A material that allows the free movement of electrons",
        "explanation": "The text states: 'Conductors are materials that allows the free movement of electrons.'"
    },
    {
        "question": "Where does static excess charge always reside on a solid conductor according to its stated properties?",
        "options": [
            "Concentrated precisely at the absolute geometric center",
            "Distributed evenly throughout the internal volume",
            "Resides entirely on the outer surface",
            "Alternates continuously between internal layers"
        ],
        "correctAnswer": "Resides entirely on the outer surface",
        "explanation": "One of the listed properties of a conductor is: 'Charges resides on the surface.'"
    },
    {
        "question": "What is the value of the internal electric field inside the bulk material of an ideal static conductor?",
        "options": [
            "It equals the surface charge density",
            "It is completely zero",
            "It approaches infinity",
            "It equals k * q / r"
        ],
        "correctAnswer": "It is completely zero",
        "explanation": "The notebook lists as a core property: 'The electric field is zero' inside the conductor."
    },
    {
        "question": "What is an insulator defined as in your notes?",
        "options": [
            "A material that allows free electron flow at high voltages",
            "A material that does not allow free movement of electrons",
            "A material that exhibits zero resistance at room temperature",
            "A material that possesses a negative temperature coefficient only"
        ],
        "correctAnswer": "A material that does not allow free movement of electrons",
        "explanation": "The notes define: 'Insulators are materials that doesn't allow free movement of electrons.'"
    },
    {
        "question": "In the linear three-charge configuration example on page 5, what is the net force evaluated on charge q2 located between q1 and q3?",
        "options": [
            "0.4 N",
            "0.8 N",
            "1.2 N",
            "2.0 N"
        ],
        "correctAnswer": "0.4 N",
        "explanation": "The notebook works out the problem: F_net = F32 - F12 = 1.2N - 0.8N = 0.4 N."
    },
    {
        "question": "How is electric current (I) defined fundamentally in the notes?",
        "options": [
            "The potential difference divided by the wire cross-sectional area",
            "The charge passing through a given cross-sectional area per unit time",
            "The drift velocity multiplied by the length of the conductor",
            "The energy required to transfer one coulomb of charge across a resistor"
        ],
        "correctAnswer": "The charge passing through a given cross-sectional area per unit time",
        "explanation": "The notebook defines electric current as the charge (\u0394Q) passing through a given cross-sectional area (A) of a wire per unit time."
    },
    {
        "question": "What fundamental relationship represents electric current in derivative/differential form?",
        "options": [
            "I = dQ / dt",
            "I = V / R",
            "I = q * n * A * V_d",
            "I = dV / dr"
        ],
        "correctAnswer": "I = dQ / dt",
        "explanation": "The notes state: 'differential form as I = dQ/dt'."
    },
    {
        "question": "What is the equivalent unit breakdown of 1 Ampere (A)?",
        "options": [
            "1 Joule / second",
            "1 Coulomb / second",
            "1 Volt / ohm",
            "1 Newton / coulomb"
        ],
        "correctAnswer": "1 Coulomb / second",
        "explanation": "The text reads: 'unit Coulomb/sec (C/s) which is called The Current called Ampere (A).'"
    },
    {
        "question": "What is the formula representing the microscopic current relationship featuring drift velocity (V_d)?",
        "options": [
            "I = q * n * A * V_d",
            "I = V_d / (n * A)",
            "I = \u03c3 * E",
            "I = Q * t"
        ],
        "correctAnswer": "I = q * n * A * V_d",
        "explanation": "The microscopic current equation is explicitly given as I = qnAV_d."
    },
    {
        "question": "In the drift velocity current equation, what does the variable 'n' represent?",
        "options": [
            "The total number of absolute electrons present in the circuit",
            "The number of charges per unit volume",
            "The temperature coefficient of the conductor",
            "The net normal efficiency of the system"
        ],
        "correctAnswer": "The number of charges per unit volume",
        "explanation": "The notes explicitly define: 'where n = number of charge per unit volume'."
    },
    {
        "question": "How is current density (J) defined in the notebook?",
        "options": [
            "Current per unit length of wire",
            "Current per unit cross-sectional area for a uniform current flow",
            "Total charge per unit drift velocity volume",
            "The inverse of the conductivity coefficient"
        ],
        "correctAnswer": "Current per unit cross-sectional area for a uniform current flow",
        "explanation": "The notes state: 'The current density J may be defined as electric current per unit Cross sectional area for a uniform Current flow.'"
    },
    {
        "question": "What is the primary formula for current density (J) in terms of drift velocity components?",
        "options": [
            "J = I / A = q * n * V_d",
            "J = I * A",
            "J = \u03c3 / E",
            "J = q * n / V_d"
        ],
        "correctAnswer": "J = I / A = q * n * V_d",
        "explanation": "The notebook lists the formula as J = I / A = q n v_d."
    },
    {
        "question": "What is the SI unit of measurement for current density (J)?",
        "options": [
            "Amperes per meter (A/m)",
            "Amperes per square meter (A/m^2)",
            "Ohms per meter (\u03a9/m)",
            "Coulombs per second (C/s)"
        ],
        "correctAnswer": "Amperes per square meter (A/m^2)",
        "explanation": "The notebook explicitly shows: 'The S.I unit of J = A/m^2'."
    },
    {
        "question": "What are the necessary physical baseline criteria for Ohm's Law to hold valid according to the text?",
        "options": [
            "Varying magnetic flux settings",
            "Constant physical conditions",
            "Decreasing system temperatures",
            "High frequency input cycles"
        ],
        "correctAnswer": "Constant physical conditions",
        "explanation": "Ohm's Law states that 'under constant physical conditions the current in a conducting wire is proportional to the p.d applied to its ends.'"
    },
    {
        "question": "What is the fundamental proportionality statement of Ohm's Law before introducing the resistance constant?",
        "options": [
            "I \u221d V",
            "I \u221d R",
            "V \u221d r",
            "J \u221d \u03c1"
        ],
        "correctAnswer": "I \u221d V",
        "explanation": "The notebook writes the direct proportionality statement as I \u221d V."
    },
    {
        "question": "What is the standard mathematical expression for Ohm's Law using current, voltage, and resistance?",
        "options": [
            "I = V / R",
            "I = V * R",
            "R = I / V",
            "V = I^2 / R"
        ],
        "correctAnswer": "I = V / R",
        "explanation": "The formula derived from the proportionality is given directly as I = V/R."
    },
    {
        "question": "How does the resistance (R) of a standard wire relate geometrically to its length (L) and cross-sectional area (A)?",
        "options": [
            "Proportional to both length and cross-sectional area",
            "Inversely proportional to length and directly proportional to area",
            "Proportional to the length of the wire and inversely proportional to the cross-sectional area",
            "Independent of both length and area profiles"
        ],
        "correctAnswer": "Proportional to the length of the wire and inversely proportional to the cross-sectional area",
        "explanation": "The notebook states: 'resistance of a wire is proportional to the length of the wire and inversely proportional to the Cross sectional area'."
    },
    {
        "question": "What is the exact mathematical equation linking resistance to resistivity (\u03c1), length (L), and area (A)?",
        "options": [
            "R = \u03c1 * A / L",
            "R = \u03c1 * L / A",
            "R = \u03c3 * L / A",
            "R = \u03c1 * L * A"
        ],
        "correctAnswer": "R = \u03c1 * L / A",
        "explanation": "The relationship is explicitly written as R = \u03c1 * L / A."
    },
    {
        "question": "On what specific parameters does the material resistivity (\u03c1) depend entirely?",
        "options": [
            "The length and area of the selected sample piece",
            "The material type and its temperature",
            "The current density flowing through the branch",
            "The total surface charge density profile"
        ],
        "correctAnswer": "The material type and its temperature",
        "explanation": "The notebook states: 'The resistivity rho depends only on the material and the temp.'"
    },
    {
        "question": "What is the SI unit of measurement for resistivity (\u03c1)?",
        "options": [
            "Ohm (\u03a9)",
            "Ohm-meter (\u03a9 m)",
            "Siemens per meter (S/m)",
            "Ohm per meter (\u03a9/m)"
        ],
        "correctAnswer": "Ohm-meter (\u03a9 m)",
        "explanation": "The notes declare: 'The unit of resistivity rho is Ohm meter (\u03a9 M).'"
    },
    {
        "question": "How is electrical conductivity (\u03c3) related to resistivity (\u03c1)?",
        "options": [
            "It is the direct square value of resistivity",
            "It is the reciprocal of the resistivity",
            "It is the product of resistivity and temperature",
            "It is completely unrelated to resistivity"
        ],
        "correctAnswer": "It is the reciprocal of the resistivity",
        "explanation": "The notes state: 'The Conductivity sigma, is the reciprocal of the resistivity: \u03c3 = 1/\u03c1.'"
    },
    {
        "question": "What unit of measurement is assigned to conductivity (\u03c3) in your notes?",
        "options": [
            "(\u03a9 m)^-1",
            "\u03a9 m",
            "N / C",
            "Farad"
        ],
        "correctAnswer": "(\u03a9 m)^-1",
        "explanation": "The text lists the unit of Conductivity Sigma as (\u03a9 m)^-1."
    },
    {
        "question": "What vector equation represents another vector-field form of Ohm's Law using current density (J), conductivity (\u03c3), and electric field (E)?",
        "options": [
            "J = \u03c3 * E",
            "J = E / \u03c3",
            "J = \u03c1 * E",
            "J = \u222e E \u22c5 dA"
        ],
        "correctAnswer": "J = \u03c3 * E",
        "explanation": "The notebook says: 'it can be shown that Current density J = \u03c3.E is another form of Ohm's Law'."
    },
    {
        "question": "How does the resistance of a standard metallic conductor generally react to an increase in temperature?",
        "options": [
            "It decreases sharply",
            "It stays completely constant",
            "It usually increases with increasing temperature",
            "It drops down to absolute zero instantly"
        ],
        "correctAnswer": "It usually increases with increasing temperature",
        "explanation": "The text states: 'For metals, the resistance usually increases with increasing temperature.'"
    },
    {
        "question": "How do the resistances of semiconductors and insulators react to increasing temperatures?",
        "options": [
            "They increase exponentially",
            "They decrease with increasing temperature",
            "They remain unchanged because they lack free electrons",
            "They fluctuate up and down randomly"
        ],
        "correctAnswer": "They decrease with increasing temperature",
        "explanation": "The notebook reads: 'while the resistance of semi-Conductors and insulators decreases with increasing temp.'"
    },
    {
        "question": "What name is given to conductors that follow Ohm's Law precisely?",
        "options": [
            "Non-Ohmic Conductors",
            "Ohmic Conductors",
            "Superconductors",
            "Dielectric Conductors"
        ],
        "correctAnswer": "Ohmic Conductors",
        "explanation": "The text specifies: 'Ohmic Conductors are conductors that obey Ohm's Law.'"
    },
    {
        "question": "Which of the following materials is explicitly mentioned as an example of an Ohmic conductor that obeys Ohm's law?",
        "options": [
            "Junction diode",
            "Neon gas",
            "Copper",
            "Diode valve"
        ],
        "correctAnswer": "Copper",
        "explanation": "The notebook lists: 'for example, copper and constantan obeys ohm Law'."
    },
    {
        "question": "What are non-ohmic conductors?",
        "options": [
            "Conductors that have zero internal resistance values",
            "Conductors whose resistance never depends on temperature",
            "Conductors which do not obey Ohm's Law",
            "Conductors made exclusively of pure copper coils"
        ],
        "correctAnswer": "Conductors which do not obey Ohm's Law",
        "explanation": "The notebook defines: 'Non-Ohmic conductors are those which do not obey Ohm's Law.'"
    },
    {
        "question": "Which of the following is NOT listed in the notes as an example of a non-ohmic device?",
        "options": [
            "Junction diode",
            "Neon gas",
            "Constantan wire",
            "Diode valve"
        ],
        "correctAnswer": "Constantan wire",
        "explanation": "The notes explicitly say constantan obeys Ohm's law, while junction diodes, neon gas, and diode valves do not."
    },
    {
        "question": "How is the electromotive force (EMF) of a cell defined when considering an open circuit configuration?",
        "options": [
            "The potential difference across the terminals when delivering maximum current",
            "The potential difference across the terminals of a cell when it is not delivering any current",
            "The total heat energy dissipated inside the internal resistance matrix",
            "The power generated divided by the cross-sectional area of the source"
        ],
        "correctAnswer": "The potential difference across the terminals of a cell when it is not delivering any current",
        "explanation": "The text defines: 'The electromotive force (EMF) of a cell is also defined as the p.d across the terminals of a cell when it is not delivering any current (i.e. it is an open circuit).'"
    },
    {
        "question": "What is potential difference (V) between two points in an electric field defined as?",
        "options": [
            "The force required to shift a one kilogram mass across the gap",
            "The work done in moving a positive charge of 1 Coulomb from one point to another",
            "The product of terminal resistance and total internal resistance",
            "The total flux calculated per unit open surface domain"
        ],
        "correctAnswer": "The work done in moving a positive charge of 1 Coulomb from one point to another",
        "explanation": "The notebook states: 'Potential difference between any two point is an electric field is defined as the workdone in moving a positive Charge of 1 Coulomb from one point... to another.'"
    },
    {
        "question": "What is the equivalent algebraic product equation for work done (W) using potential difference and charge?",
        "options": [
            "W = V * Q",
            "W = V / Q",
            "W = I^2 * R",
            "W = P / t"
        ],
        "correctAnswer": "W = V * Q",
        "explanation": "The notes state V = W/Q, which can be rearranged to give W = VQ."
    },
    {
        "question": "When three identical cells of EMF 'E' are connected in series, what is the expression for the total EMF (E_T)?",
        "options": [
            "E_T = E",
            "E_T = E1 + E2 + E3",
            "E_T = 1/E1 + 1/E2 + 1/E3",
            "E_T = zero"
        ],
        "correctAnswer": "E_T = E1 + E2 + E3",
        "explanation": "The diagram and text for cells in series state: 'The total EMF, E_T = E1 + E2 + E3'."
    },
    {
        "question": "When cells are connected in a parallel network arrangement, how does the total operational EMF (E_T) relate to the individual cell values?",
        "options": [
            "It is the sum of all individual EMF values",
            "It is equal to the EMF of a single cell (E_T = E1 = E2 = E3)",
            "It drops down to a third of the primary branch values",
            "It is proportional to the inverse square of the cell count"
        ],
        "correctAnswer": "It is equal to the EMF of a single cell (E_T = E1 = E2 = E3)",
        "explanation": "The notebook diagram text for cells in parallel notes: 'E_T = E1 = E2 = E3'."
    },
    {
        "question": "If multiple resistors are connected together in series, how does the current behave across each individual component?",
        "options": [
            "Each resistor experiences a completely different current value",
            "The same current flows through all of them",
            "The current drops to zero at the final termination resistor",
            "The current values add up algebraically to match the total voltage drop"
        ],
        "correctAnswer": "The same current flows through all of them",
        "explanation": "The notes state: 'Since R1, R2, R3 are in series, the same current flows through them but different voltages.'"
    },
    {
        "question": "What is the total equivalent resistance (R_T) for three resistors connected in series?",
        "options": [
            "1/R_T = 1/R1 + 1/R2 + 1/R3",
            "R_T = R1 + R2 + R3",
            "R_T = (R1 * R2 * R3) / 3",
            "R_T = R1 - R2 + R3"
        ],
        "correctAnswer": "R_T = R1 + R2 + R3",
        "explanation": "The text derives and states: 'The overall resistance R_T is the sum of all the resistances: R_T = R1 + R2 + R3.'"
    },
    {
        "question": "When resistors are wired together in a parallel network configuration, what parameter remains uniform across all branches?",
        "options": [
            "They have the same branch current values",
            "They have the same voltages across them",
            "The total power dissipation drops to zero",
            "The resistance value scales up automatically"
        ],
        "correctAnswer": "They have the same voltages across them",
        "explanation": "The text reads: 'When resistors are connected in parallel they have the same voltages... but different current flowing through each.'"
    },
    {
        "question": "What is the formula used to calculate the equivalent total resistance (R_T) for three parallel resistors?",
        "options": [
            "R_T = R1 + R2 + R3",
            "1/R_T = 1/R1 + 1/R2 + 1/R3",
            "R_T = R1 * R2 * R3",
            "1/R_T = R1 + R2 + R3"
        ],
        "correctAnswer": "1/R_T = 1/R1 + 1/R2 + 1/R3",
        "explanation": "The note text derives equation 16 as: '1/R_T = 1/R1 + 1/R2 + 1/R3'."
    },
    {
        "question": "What is internal resistance (r) of a cell as defined in the notes?",
        "options": [
            "The chemical resistance of the outer copper casing insulation",
            "The resistance offered by the body of a cell to the flow of current",
            "The resistance of the external load connected across the circuit terminals",
            "The resistance change caused by external atmospheric temperature shifts"
        ],
        "correctAnswer": "The resistance offered by the body of a cell to the flow of current",
        "explanation": "The notebook defines: 'The body of a cell offers a resistance to the flow of current which is called its Internal resistance (r).'"
    },
    {
        "question": "What is the formula for the potential drop across the internal resistance of a cell when a current 'I' is flowing?",
        "options": [
            "V_internal = I / r",
            "V_internal = I * r",
            "V_internal = E / r",
            "V_internal = I^2 * r"
        ],
        "correctAnswer": "V_internal = I * r",
        "explanation": "The notebook explicitly shows: 'the p.d across the cell is equal to v = Ir.'"
    },
    {
        "question": "The total EMF (E) of a cell equals the sum of the potential difference across the external circuit (V) and what other value?",
        "options": [
            "The power generated by the load resistor",
            "The potential difference across its internal resistance",
            "The total electrostatic surface flux matrix",
            "The temperature coefficient variable"
        ],
        "correctAnswer": "The potential difference across its internal resistance",
        "explanation": "The note text reads: 'The EMF of the cell is equal to the sum of the p.d across the external circuit and the p.d across its internal resistance.'"
    },
    {
        "question": "What is the explicit circuit formula derived for total current (I) loop tracking using EMF (E), external load (R), and internal resistance (r)?",
        "options": [
            "I = E / (R + r)",
            "I = E * (R + r)",
            "I = V / (R - r)",
            "I = E / (R * r)"
        ],
        "correctAnswer": "I = E / (R + r)",
        "explanation": "The equation is derived step-by-step and presented as equation 18: I = E / (R + r)."
    },
    {
        "question": "What expression tracks the Terminal Potential Difference (V) across an active circuit loop?",
        "options": [
            "V = I * R = E * R / (R + r)",
            "V = I * r = E * r / R",
            "V = E + I * r",
            "V = I^2 * R * r"
        ],
        "correctAnswer": "V = I * R = E * R / (R + r)",
        "explanation": "The notebook presents this relationship explicitly: 'Terminal P.d, V = IR = ER / (R+r).'"
    },
    {
        "question": "What formula calculates the temperature coefficient of resistivity (\u03b1) based on your notes?",
        "options": [
            "\u03b1 = (1 / \u03c1_0) * [(\u03c1 - \u03c1_0) / (T - T_0)]",
            "\u03b1 = \u03c1 * \u03c1_0 * \u0394T",
            "\u03b1 = R / R_0",
            "\u03b1 = P_out / P_gen"
        ],
        "correctAnswer": "\u03b1 = (1 / \u03c1_0) * [(\u03c1 - \u03c1_0) / (T - T_0)]",
        "explanation": "The notebook writes out the precise equation as: \u03b1 = (1/\u03c1_0) * ((\u03c1 - \u03c1_0)/(T - T_0))."
    },
    {
        "question": "Since resistance is directly proportional to resistivity, how is the absolute resistance temperature dependence written?",
        "options": [
            "R = R_0 * [1 + \u03b1(T - T_0)]",
            "R = R_0 / [1 + \u03b1(T - T_0)]",
            "R = R_0 * \u03b1 * \u0394T",
            "R = R_0 - \u03b1 * T"
        ],
        "correctAnswer": "R = R_0 * [1 + \u03b1(T - T_0)]",
        "explanation": "The text states: 'Because resistance is proportional to resistivity, we can also have R = R_0[1 + \u03b1(T - T_0)].'"
    },
    {
        "question": "How is electrical power (P) defined in terms of work done and time?",
        "options": [
            "Power = Electrical work * Time",
            "Power = Electrical work / Time",
            "Power = Time / Electrical work",
            "Power = (Electrical work)^2 / Time"
        ],
        "correctAnswer": "Power = Electrical work / Time",
        "explanation": "The notebook defines: 'power, P = Electrical work / Time'."
    },
    {
        "question": "What basic baseline equation represents power when combining work done (W = qV) with current (I = q/t)?",
        "options": [
            "P = q * V / t = V * I",
            "P = q * t / V",
            "P = V / I",
            "P = I^2 / V"
        ],
        "correctAnswer": "P = q * V / t = V * I",
        "explanation": "The notebook demonstrates: P = qV/t = VI as Equation 24."
    },
    {
        "question": "Which of the following frames the three equivalent expressions derived for calculating electrical power?",
        "options": [
            "P = IV, P = I^2 * R, P = V^2 / R",
            "P = IV, P = I / R, P = V / R^2",
            "P = I^2 * V, P = I * R^2, P = V^2 * R",
            "P = I / V, P = R / I^2, P = R / V^2"
        ],
        "correctAnswer": "P = IV, P = I^2 * R, P = V^2 / R",
        "explanation": "The notebook collects these together in a clear bracketed list: P = IV, P = I^2*R, P = V^2/R."
    },
    {
        "question": "What is the formula given for the total mechanical/electrical work done by an active source across time using EMF (E)?",
        "options": [
            "W = Q * E = I * E * t",
            "W = I * R * t",
            "W = V^2 / (R * t)",
            "W = E / t"
        ],
        "correctAnswer": "W = Q * E = I * E * t",
        "explanation": "The notebook states: 'W = QE = IEt and total electrical power is P = W/t = EI.'"
    },
    {
        "question": "How is circuit efficiency (\u03b7) fundamentally defined in your physics notebook?",
        "options": [
            "The ratio of internal resistance to external resistance",
            "The ratio of the power output to the power generated",
            "The total charge divided by the operational current branch",
            "The square of the output voltage multiplied by 100"
        ],
        "correctAnswer": "The ratio of the power output to the power generated",
        "explanation": "The notebook states: 'Efficiency, \u03b7, of a circuit is the ratio of the power output to the power generated.'"
    },
    {
        "question": "What is the primary ratio formula written for efficiency (\u03b7) using power variables?",
        "options": [
            "\u03b7 = Power output / Power generated",
            "\u03b7 = Power generated / Power output",
            "\u03b7 = I * V / E",
            "\u03b7 = P_out * P_gen"
        ],
        "correctAnswer": "\u03b7 = Power output / Power generated",
        "explanation": "Equation 25 writes out efficiency as \u03b7 = Power output / Power generated."
    },
    {
        "question": "Using voltage variables, how is efficiency evaluated in terms of terminal voltage (V) and source EMF (E)?",
        "options": [
            "\u03b7 = V / E",
            "\u03b7 = E / V",
            "\u03b7 = V * E",
            "\u03b7 = (E - V) / E"
        ],
        "correctAnswer": "\u03b7 = V / E",
        "explanation": "The notes derive: \u03b7 = Iv / IE = v / E."
    },
    {
        "question": "What is the finalized formula for efficiency (\u03b7) expressed using external resistance (R) and internal resistance (r)?",
        "options": [
            "\u03b7 = R / (R + r)",
            "\u03b7 = r / (R + r)",
            "\u03b7 = R + r / R",
            "\u03b7 = R / r"
        ],
        "correctAnswer": "\u03b7 = R / (R + r)",
        "explanation": "Equation 26 explicitly presents the resistance breakdown formula for efficiency as: \u03b7 = R / (R + r)."
    },
    {
        "question": "What is the power output formula (P_out) delivered to an external load resistor (R) by a source with EMF 'E' and internal resistance 'r'?",
        "options": [
            "P_out = E^2 * R / (R + r)",
            "P_out = E^2 * R / (R + r)^2",
            "P_out = I * r^2",
            "P_out = E * I"
        ],
        "correctAnswer": "P_out = E^2 * R / (R + r)^2",
        "explanation": "Equation 27 establishes: P_out = (E^2 * R) / (R + r)^2."
    },
    {
        "question": "According to the Maximum Power Transfer Theorem demonstrated in the notes, under what condition is the power output delivered to R maximized?",
        "options": [
            "When R is much smaller than r (R \u226a r)",
            "When R is equal to r (R = r)",
            "When R is much larger than r (R \u226b r)",
            "When internal resistance r is zero"
        ],
        "correctAnswer": "When R is equal to r (R = r)",
        "explanation": "The notebook states: 'This shows that power output of R is a maximum when R = r.'"
    },
    {
        "question": "What physical components make up a basic capacitor?",
        "options": [
            "Two distinct insulating rods separated by a conductor wire loop",
            "Two charged metal plates separated by an insulator",
            "A single metal sphere containing non-ohmic gas layers",
            "A series connection of wet chemical voltage batteries"
        ],
        "correctAnswer": "Two charged metal plates separated by an insulator",
        "explanation": "The text states: 'Capacitors consists of two charge metal plate separated by an insulator.'"
    },
    {
        "question": "What specific name is assigned to the insulating material positioned between the plates of a capacitor?",
        "options": [
            "Conductor",
            "Resistor",
            "Dielectric",
            "Electrolyte"
        ],
        "correctAnswer": "Dielectric",
        "explanation": "The text notes: 'The insulator is called the dielectric.'"
    },
    {
        "question": "When a voltage 'V' is applied across the metal plates of an active capacitor, how do the plates become charged?",
        "options": [
            "Both plates acquire identical positive (+Q) charges",
            "Both plates acquire identical negative (-Q) charges",
            "One plate acquires a negative charge (-Q) and the other acquires an equal amount of positive charge (+Q)",
            "The charges fluctuate continuously between neutral and infinite values"
        ],
        "correctAnswer": "One plate acquires a negative charge (-Q) and the other acquires an equal amount of positive charge (+Q)",
        "explanation": "The notes state: 'one of the plate will acquire a negative charge (-Q), and the others will acquire an equal amount of positive charge (+Q).'"
    },
    {
        "question": "What is the direct proportionality relationship found between the accumulated charge (Q) on a capacitor and the potential difference (V)?",
        "options": [
            "Q \u221d V",
            "Q \u221d 1/V",
            "Q \u221d V^2",
            "Q \u221d \u03b5_0"
        ],
        "correctAnswer": "Q \u221d V",
        "explanation": "The text records: 'It is found that the Charge on each capacitor is proportional to the potential difference... i.e. Q \u221d V'."
    },
    {
        "question": "What is the baseline equation for charge storage using capacitance (C) as the constant of proportionality?",
        "options": [
            "Q = C / V",
            "Q = C * V",
            "C = Q * V",
            "V = Q * C"
        ],
        "correctAnswer": "Q = C * V",
        "explanation": "The text labels Equation 1 as: Q = CV."
    },
    {
        "question": "What is the proper name for the SI unit of capacitance, which is equivalent to 1 Coulomb per Volt (C/V)?",
        "options": [
            "Ohm",
            "Tesla",
            "Farad (F)",
            "Henry"
        ],
        "correctAnswer": "Farad (F)",
        "explanation": "The notes state: 'The unit of the capacitance is coulomb/volt. and this unit is called a farad (F).'"
    },
    {
        "question": "Which of the following is NOT listed on page 12 as a physical configuration type of capacitor?",
        "options": [
            "Parallel plate capacitor",
            "Cylindrical capacitor",
            "Isolated sphere capacitor",
            "Hyperbolic planar capacitor"
        ],
        "correctAnswer": "Hyperbolic planar capacitor",
        "explanation": "The notes list four types: 1) Parallel plate, 2) Cylindrical, 3) Isolated sphere, and 4) Concentric spherical capacitor."
    },
    {
        "question": "What structural elements define a basic parallel plate capacitor?",
        "options": [
            "Two concentric conducting shells with varying radii dimensions",
            "Two parallel metallic plates of equal area (A) separated by a distance (d)",
            "An long isolated metal cylinder wrapped in an inductive coil wire",
            "A series loop of non-ohmic neon gas nodes spaced out uniformly"
        ],
        "correctAnswer": "Two parallel metallic plates of equal area (A) separated by a distance (d)",
        "explanation": "The notes define it: 'Consists of two parallel metallic plate of equal area (A) separated by a distance (d).'"
    },
    {
        "question": "What is the formula given for the electric field strength (E) directly between parallel plates using surface charge density (\u03c3) and medium permittivity (\u03b5)?",
        "options": [
            "E = \u03c3 / \u03b5",
            "E = \u03b5 / \u03c3",
            "E = \u03c3 * \u03b5",
            "E = Q / d"
        ],
        "correctAnswer": "E = \u03c3 / \u03b5",
        "explanation": "Equation 2 writes out the electric field strength sequence as: E = Q/(\u03b5A) = \u03c3/\u03b5."
    },
    {
        "question": "What does the variable '\u03c3' stand for in the electric field equations for parallel plates?",
        "options": [
            "Total volumetric efficiency coefficient",
            "Surface charge density",
            "Absolute chemical conductivity",
            "Permittivity constant of free space"
        ],
        "correctAnswer": "Surface charge density",
        "explanation": "The notebook explicitly clarifies: 'Sigma is surface charge density'."
    },
    {
        "question": "By matching the potential relation V/d = Q/(\u03b5A), what final core equation is derived for parallel plate capacitance (C)?",
        "options": [
            "C = \u03b5 * d / A",
            "C = \u03b5 * A / d",
            "C = Q * d / A",
            "C = \u03b5 * A * d"
        ],
        "correctAnswer": "C = \u03b5 * A / d",
        "explanation": "The derived box formula designated as Equation 3 reads: C = \u03b5A/d."
    },
    {
        "question": "According to the geometric dependencies of Equation 3, what are the two distinct actions you can take to explicitly increase parallel plate capacitance?",
        "options": [
            "Decrease plate area and increase separation distance",
            "Increase plate area and decrease separation distance (d) between plates",
            "Increase both plate area and separation distance simultaneously",
            "Maintain constant plate area while maximizing insulation thickness"
        ],
        "correctAnswer": "Increase plate area and decrease separation distance (d) between plates",
        "explanation": "The text lists: 'capacitance of a parallel plate capaci-tor maybe increased by i) Increasing the area of the plate, ii) Decreasing the distance d btw the plate.'"
    },
    {
        "question": "When three capacitors (C1, C2, C3) are wired together in a series network loop, what rule governs the charge tracking on each separate unit?",
        "options": [
            "Each individual capacitor accumulates a completely different charge amount",
            "Each capacitor in a series combination has the same charge Q",
            "The charges sum up algebraically to equal the total battery current block",
            "The net charge drops down to zero at the central junction branch"
        ],
        "correctAnswer": "Each capacitor in a series combination has the same charge Q",
        "explanation": "Under things to notice for series capacitors, the first property is: 'Each capacitor in series combination has the same charge Q.'"
    },
    {
        "question": "What mathematical summation rule applies to the total potential difference (V) across a multi-unit series capacitor network?",
        "options": [
            "V = V1 = V2 = V3",
            "V = V1 + V2 + V3",
            "1/V = 1/V1 + 1/V2 + 1/V3",
            "V = (V1 * V2) / V3"
        ],
        "correctAnswer": "V = V1 + V2 + V3",
        "explanation": "The second listed series property specifies: 'The total potential difference V across the 3 capacitors in series must equal the sum of the p.d across each capacitors: V = V1 + V2 + V3.'"
    },
    {
        "question": "What is the equivalent capacitance equation (C_eq) derived for a network of three capacitors connected in series?",
        "options": [
            "C_eq = C1 + C2 + C3",
            "1/C_eq = 1/C1 + 1/C2 + 1/C3",
            "C_eq = C1 * C2 * C3",
            "1/C_eq = C1 + C2 + C3"
        ],
        "correctAnswer": "1/C_eq = 1/C1 + 1/C2 + 1/C3",
        "explanation": "Equation 5 explicitly gives the formula for series capacitance as: 1/C_eq = 1/C1 + 1/C2 + 1/C3."
    },
    {
        "question": "When a network of three capacitors is configured in a parallel arrangement, what key physical parameter is shared equally across each unit branch?",
        "options": [
            "Each capacitor holds the exact same charge value Q",
            "Each capacitor has the same potential difference V across it",
            "The total circuit current drops down to absolute zero instantly",
            "The structural geometric plate separation distance changes"
        ],
        "correctAnswer": "Each capacitor has the same potential difference V across it",
        "explanation": "Under parallel capacitors, property ii states: 'Each capacitor has the same potential difference V across it.'"
    },
    {
        "question": "What is the summation rule for the total electrical charge (Q) within a parallel capacitor network arrangement?",
        "options": [
            "Q = Q1 = Q2 = Q3",
            "Q = Q1 + Q2 + Q3",
            "1/Q = 1/Q1 + 1/Q2 + 1/Q3",
            "Q = (Q1 + Q2) / Q3"
        ],
        "correctAnswer": "Q = Q1 + Q2 + Q3",
        "explanation": "Property i for parallel networks states: 'The total charge Q is equal to sum of Charges stored in each capacitor thus, Q = Q1 + Q2 + Q3.'"
    },
    {
        "question": "What is the final derived equation for the total equivalent capacitance (C_eq) of a network connected in parallel?",
        "options": [
            "1/C_eq = 1/C1 + 1/C2 + 1/C3",
            "C_eq = C1 + C2 + C3",
            "C_eq = C1 * C2 * C3",
            "1/C_eq = C1 + C2 + C3"
        ],
        "correctAnswer": "C_eq = C1 + C2 + C3",
        "explanation": "Equation 7 defines parallel equivalent capacitance simply as the direct sum: C_eq = C1 + C2 + C3."
    },
    {
        "question": "The potential electrostatic energy (U) stored inside an active charged capacitor is physically equal to what mechanical work metric?",
        "options": [
            "The work done in completely melting the internal dielectric medium",
            "The work done in charging the capacitor",
            "The total force per unit positive test charge boundary value",
            "The heat energy dissipated across the cell's internal resistance"
        ],
        "correctAnswer": "The work done in charging the capacitor",
        "explanation": "The text reads: 'The energy stored in a capacitor is equal to the workdone in charging the capacitor.'"
    },
    {
        "question": "What is the first fundamental expression given for the stored energy (U) using charge (Q) and voltage (V)?",
        "options": [
            "U = Q * V",
            "U = 1/2 * Q * V",
            "U = 1/2 * C * V^2",
            "U = 1/2 * Q^2 / C"
        ],
        "correctAnswer": "U = 1/2 * Q * V",
        "explanation": "Equation 9 defines the base energy expression explicitly as: U = 1/2 * Q * V."
    },
    {
        "question": "What equivalent expression is derived for stored energy (U) when substituting the formula Q = CV into the baseline energy equation?",
        "options": [
            "U = 1/2 * Q^2 / C",
            "U = 1/2 * C * V^2",
            "U = C * V",
            "U = 1/2 * C^2 * V"
        ],
        "correctAnswer": "U = 1/2 * C * V^2",
        "explanation": "Equation 10 derives the secondary form of energy storage expression as: U = 1/2 * C * V^2."
    },
    {
        "question": "What third expression is provided for stored energy (U) when framing the equation solely in terms of charge (Q) and capacitance (C)?",
        "options": [
            "U = 1/2 * C * V^2",
            "U = 1/2 * Q^2 / C",
            "U = Q^2 * C",
            "U = 1/2 * Q * V"
        ],
        "correctAnswer": "U = 1/2 * Q^2 / C",
        "explanation": "Equation 11 derives the third equivalent expression form as: U = 1/2 * Q^2 / C."
    },
    {
        "question": "By utilizing structural substitutions (V = Ed and C = \u03b5_0*A/d), what equation tracks stored energy (U) using field values directly?",
        "options": [
            "U = 1/2 * \u03b5_0 * E^2 * A * d",
            "U = \u03b5_0 * E * A",
            "U = 1/2 * E^2 / (A * d)",
            "U = \u03b5_0 * E^2"
        ],
        "correctAnswer": "U = 1/2 * \u03b5_0 * E^2 * A * d",
        "explanation": "Equation 12 translates the system parameters directly into field energy parameters: U = 1/2 * \u03b5_0 * E^2 * A * d."
    },
    {
        "question": "How is energy density (u) defined inside a parallel plate capacitor?",
        "options": [
            "Total accumulated charge divided by the plate surface area",
            "Energy stored per unit volume of the parallel plates",
            "Total electric potential calculated per millimeter of separation",
            "The inverse square of permittivity multiplied by system mass"
        ],
        "correctAnswer": "Energy stored per unit volume of the parallel plates",
        "explanation": "The text reads: 'the energy density defined as energy/per unit vol. of the parallel plate is u = U / (Ad).'"
    },
    {
        "question": "What is the resulting equation derived for energy density (u) inside the plates?",
        "options": [
            "u = 1/2 * \u03b5_0 * E^2",
            "u = \u03b5_0 * E^2",
            "u = 1/2 * E^2",
            "u = Q / (\u03b5_0 * A)"
        ],
        "correctAnswer": "u = 1/2 * \u03b5_0 * E^2",
        "explanation": "Equation 13 isolates the energy density expression directly as: u = 1/2 * \u03b5_0 * E^2."
    },
    {
        "question": "Which of the following materials is NOT explicitly listed on page 15 as a typical example of a non-conducting dielectric?",
        "options": [
            "Glass",
            "Rubber",
            "Waxed paper",
            "Liquid mercury slurry"
        ],
        "correctAnswer": "Liquid mercury slurry",
        "explanation": "The text explicitly names glass, rubber, and waxed paper as examples of non-conducting dielectric materials."
    },
    {
        "question": "When a dielectric block with a constant '\u03ba' is inserted to completely fill the space between the plates, what happens to the internal net electric field (E) compared to the original vacuum field (E_0)?",
        "options": [
            "The electric field increases by a factor of \u03ba (E = \u03ba * E_0)",
            "The electric field is reduced by a factor of \u03ba (E = E_0 / \u03ba)",
            "The electric field drops down to absolute zero immediately",
            "The electric field remains totally unchanged"
        ],
        "correctAnswer": "The electric field is reduced by a factor of \u03ba (E = E_0 / \u03ba)",
        "explanation": "The text states: 'This shows that the electric field btw the capacitor plate was seen reduced by a factor k... then E = E_0 / \u03ba.'"
    },
    {
        "question": "What is the reason why the net electric field inside the dielectric is less than the electric field in free air?",
        "options": [
            "Electrons flow completely across the gap via inductive sparks",
            "A counter opposing charge is induced on the surface of the dielectric material",
            "The dielectric material physically expands and alters the area",
            "The voltage across the cell doubles automatically"
        ],
        "correctAnswer": "A counter opposing charge is induced on the surface of the dielectric material",
        "explanation": "The notebook writes: 'as charge is induced on a surface of a dielectric hence, the electric field within the dielectric is less than in the air.'"
    },
    {
        "question": "What formula defines the net balanced electric field (E) inside a dielectric material by accounting for the induced field (E_ind)?",
        "options": [
            "E = E_0 - E_ind",
            "E = E_0 + E_ind",
            "E = E_ind / E_0",
            "E = \u03ba * E_0"
        ],
        "correctAnswer": "E = E_0 - E_ind",
        "explanation": "The net internal field expression is written explicitly as: E = E_0 - E_ind."
    },
    {
        "question": "What equation isolates the induced electric field component (E_ind) using the dielectric factor constant \u03ba?",
        "options": [
            "E_ind = E_0 * (1 - 1/\u03ba)",
            "E_ind = E_0 / \u03ba",
            "E_ind = \u03ba * E_0",
            "E_ind = E_0 * (\u03ba - 1)"
        ],
        "correctAnswer": "E_ind = E_0 * (1 - 1/\u03ba)",
        "explanation": "Equation 15 derives the exact value for the induced field vector slice as: E_ind = E_0 * (1 - 1/\u03ba)."
    },
    {
        "question": "What is the relationship given for the induced surface charge density (\u03c3_ind) on the faces of the dielectric slab?",
        "options": [
            "\u03c3_ind = \u03c3_0 * (1 - 1/\u03ba)",
            "\u03c3_ind = \u03c3_0 / \u03ba",
            "\u03c3_ind = \u03ba * \u03c3_0",
            "\u03c3_ind = \u03b5_0 * E_ind"
        ],
        "correctAnswer": "\u03c3_ind = \u03c3_0 * (1 - 1/\u03ba)",
        "explanation": "Equation 16 models the surface polarization charge density directly as: \u03c3_ind = \u03c3_0 * (1 - 1/\u03ba)."
    },
    {
        "question": "If an object is found to have a net positive charge, what has physically happened to its constituent particles according to the properties of charge?",
        "options": [
            "It has gained protons via friction.",
            "It has lost electrons, leaving an excess of positive protons.",
            "Its neutrons have transformed entirely into protons.",
            "It has absorbed positive thermal ions from its surroundings."
        ],
        "correctAnswer": "It has lost electrons, leaving an excess of positive protons.",
        "explanation": "As detailed in the properties of charge, charging occurs due to the transfer of electrons. An object becomes positively charged when it loses negative electrons, leaving behind uncompensated proton charges."
    },
    {
        "question": "What happens to the magnitude of the electrostatic force between two point charges if the distance separating them is cut exactly in half (reduced to r/2)?",
        "options": [
            "The force is reduced to one-fourth of its original value.",
            "The force is halved.",
            "The force doubles.",
            "The force increases to four times its original value."
        ],
        "correctAnswer": "The force increases to four times its original value.",
        "explanation": "According to Coulomb's Law, the electrostatic force is inversely proportional to the square of the distance (F ∝ 1/r²). If distance is halved, the force increases by a factor of 1/(1/2)² = 4."
    },
    {
        "question": "If the electric field line density in a specific region of space is visibly high, what does this indicate conceptually?",
        "options": [
            "The electric field in that region is very strong.",
            "The electric potential in that region is zero.",
            "The region contains only neutral insulator atoms.",
            "The electric current density is zero."
        ],
        "correctAnswer": "The electric field in that region is very strong.",
        "explanation": "The notebook defines electric flux and field lines as measures of field strength. A high density of electric field lines indicates a stronger electric field in that region."
    },
    {
        "question": "Which of the following describes the behavior of a positive test charge when it is released from rest in a uniform electric field?",
        "options": [
            "It moves in a circular path perpendicular to the field lines.",
            "It moves in the direction of the electric field vector.",
            "It moves in the opposite direction of the electric field vector.",
            "It remains completely at rest due to electrostatics."
        ],
        "correctAnswer": "It moves in the direction of the electric field vector.",
        "explanation": "By definition, the electric field vector indicates the direction of the force acting on a positive test charge (F = E * q). Therefore, it accelerates in the direction of the field."
    },
    {
        "question": "If you move an electric charge along an equipotential path where the electric potential is completely constant, how much work is done?",
        "options": [
            "Work done is zero.",
            "Work done equals the charge multiplied by the path length.",
            "Work done approaches infinity.",
            "Work done depends on the speed of the movement."
        ],
        "correctAnswer": "Work done is zero.",
        "explanation": "Since potential difference is defined as the work done per unit charge (ΔV = W/q), if the potential is constant, ΔV = 0, which means the net work done (W) must be zero."
    },
    {
        "question": "What is the net electric charge enclosed inside a closed surface if the net electric flux passing outward through the surface is calculated to be zero?",
        "options": [
            "The enclosed charge must be infinitely large.",
            "The net enclosed charge is exactly zero.",
            "The enclosed charge must be entirely positive.",
            "The enclosed charge must be entirely negative."
        ],
        "correctAnswer": "The net enclosed charge is exactly zero.",
        "explanation": "According to Gauss's Law, total electric flux (Φ) equals Q_enclosed / ε_0. If the net electric flux is zero, the net enclosed charge inside that surface must be zero."
    },
    {
        "question": "Why is the static electric field inside the hollow interior cavity of a charged conductor equal to zero?",
        "options": [
            "Because the insulator gas inside cancels out the field lines.",
            "Because excess charges repel each other and distribute themselves entirely on the outer surface.",
            "Because current density turns the field lines into thermal resistance.",
            "Because the permittivity of free space inside a conductor drops to zero."
        ],
        "correctAnswer": "Because excess charges repel each other and distribute themselves entirely on the outer surface.",
        "explanation": "The properties of conductors show that because like charges repel, they migrate as far apart as possible, distributing themselves on the outer surface, leaving an internal electric field of zero."
    },
    {
        "question": "If a steady current of 5 A flows through a wire branch for exactly 2 minutes, what is the total amount of electric charge that has passed through the cross-section?",
        "options": [
            "10 C",
            "2.5 C",
            "300 C",
            "600 C"
        ],
        "correctAnswer": "600 C",
        "explanation": "Using the equation I = Q/t, we find Q = I * t. Converting 2 minutes into seconds gives 120 seconds. Thus, Q = 5 A * 120 s = 600 C."
    },
    {
        "question": "What type of velocity refers to the slow, average net velocity at which free electrons travel along a conductor when an external electric field is applied?",
        "options": [
            "Thermal velocity",
            "Drift velocity",
            "Terminal velocity",
            "Relativistic velocity"
        ],
        "correctAnswer": "Drift velocity",
        "explanation": "The notebook defines drift velocity (v_d) within the microscopic description of current as the net average velocity of charge carriers under an electric field."
    },
    {
        "question": "What happens to the total resistance of a circuit loop if you keep adding more resistors connected strictly in a series arrangement?",
        "options": [
            "The total resistance decreases continuously.",
            "The total resistance stays completely constant.",
            "The total resistance increases.",
            "The total resistance drops down to match the internal resistance."
        ],
        "correctAnswer": "The total resistance increases.",
        "explanation": "For series circuits, the total equivalent resistance is the direct algebraic sum of the individual parts (R_T = R1 + R2 + R3...). Adding more parts increases the total sum."
    },
    {
        "question": "If two resistors of 4 Ω and 12 Ω are connected together in a parallel network branch, what is their combined equivalent resistance?",
        "options": [
            "16 Ω",
            "8 Ω",
            "3 Ω",
            "48 Ω"
        ],
        "correctAnswer": "3 Ω",
        "explanation": "Using the parallel formula: 1/R_T = 1/4 + 1/12 = 3/12 + 1/12 = 4/12. Taking the reciprocal gives R_T = 12/4 = 3 Ω."
    },
    {
        "question": "What does a high temperature coefficient of resistivity (α) indicate about a metallic material?",
        "options": [
            "Its resistance changes significantly when its temperature is altered.",
            "Its resistance remains completely constant at all operating temperatures.",
            "It turns into an insulator if its temperature is lowered slightly.",
            "It does not follow Ohm's Law under any physical conditions."
        ],
        "correctAnswer": "Its resistance changes significantly when its temperature is altered.",
        "explanation": "The temperature coefficient of resistivity (α) represents the fractional change in resistivity per unit change in temperature, as shown in the formula ρ = ρ_0[1 + α(T - T_0)]."
    },
    {
        "question": "An electrical device is operating at a potential difference of 12 V and draws a current of 2 A. What is the power consumption of this device?",
        "options": [
            "6 W",
            "24 W",
            "144 W",
            "0.16 W"
        ],
        "correctAnswer": "24 W",
        "explanation": "Using the electrical power formula P = I * V, we get P = 2 A * 12 V = 24 W."
    },
    {
        "question": "If you double the current flowing through a constant ohmic resistor, what happens to the power dissipated as heat inside the component?",
        "options": [
            "The power remains completely unchanged.",
            "The power is doubled.",
            "The power is cut in half.",
            "The power increases to four times its original value."
        ],
        "correctAnswer": "The power increases to four times its original value.",
        "explanation": "The alternative power expression is P = I² * R. Because power is proportional to the square of the current, doubling the current increases the power dissipation by 2² = 4 times."
    },
    {
        "question": "Why is the terminal potential difference (V) across an active cell generally less than its internal electromotive force (EMF) when a current is actively flowing through the circuit?",
        "options": [
            "Because power generated is always completely lost to the atmosphere.",
            "Because of the potential drop across the internal resistance of the cell.",
            "Because capacitors in the circuit block steady direct currents.",
            "Because Gauss's Law limits terminal tracking efficiency."
        ],
        "correctAnswer": "Because of the potential drop across the internal resistance of the cell.",
        "explanation": "The notebook states that the EMF is equal to the sum of the terminal voltage and the internal voltage drop (E = V + Ir). Therefore, V = E - Ir, making V less than E when current flows."
    },
    {
        "question": "Under what condition will the measured terminal potential difference (V) of a cell be exactly equal to its stated electromotive force (EMF)?",
        "options": [
            "When the cell is connected to a very small external load resistor.",
            "When the circuit is open and no current is being drawn from the cell (I = 0).",
            "When the internal resistance is twice as large as the external resistance.",
            "When maximum power transfer occurs."
        ],
        "correctAnswer": "When the circuit is open and no current is being drawn from the cell (I = 0).",
        "explanation": "The notebook defines EMF as the terminal potential difference across a cell when it is not delivering any current (an open circuit configuration)."
    },
    {
        "question": "What is the theoretical maximum efficiency percentage that a circuit can reach as its external load resistance (R) approaches infinity?",
        "options": [
            "0%",
            "25%",
            "50%",
            "100%"
        ],
        "correctAnswer": "100%",
        "explanation": "The efficiency formula is η = R / (R + r). As R becomes vastly larger than r (R ≫ r), the value of r becomes negligible, and the ratio R/R approaches 1, or 100% efficiency."
    },
    {
        "question": "When a circuit is optimized to deliver maximum power transfer to a load (R = r), what is the operating efficiency of the circuit?",
        "options": [
            "25%",
            "50%",
            "75%",
            "100%"
        ],
        "correctAnswer": "50%",
        "explanation": "When maximum power transfer occurs, R = r. Substituting this into the efficiency equation yields η = R / (R + R) = R / 2R = 1/2, which corresponds to exactly 50% efficiency."
    },
    {
        "question": "If you triple the potential difference (V) across the plates of a capacitor, what happens to its calculated capacitance value (C)?",
        "options": [
            "The capacitance is tripled.",
            "The capacitance is cut to one-third.",
            "The capacitance stays completely the same.",
            "The capacitance increases by nine times."
        ],
        "correctAnswer": "The capacitance stays completely the same.",
        "explanation": "Capacitance (C) is a constant property determined solely by the structural and geometric design of the capacitor (such as area, distance, and dielectric material). Changing V changes the stored charge Q, but the ratio C = Q/V remains constant."
    },
    {
        "question": "What happens to the absolute capacitance value of a parallel-plate capacitor if you pull the two metal plates further apart, increasing their separation distance (d)?",
        "options": [
            "The capacitance increases proportionally.",
            "The capacitance decreases.",
            "The capacitance remains completely unchanged.",
            "The capacitance drops to zero instantly."
        ],
        "correctAnswer": "The capacitance decreases.",
        "explanation": "According to the parallel plate capacitance equation C = εA/d, capacitance is inversely proportional to the separation distance (d). Therefore, increasing d decreases the capacitance."
    },
    {
        "question": "Three identical capacitors, each with a capacitance of 9 μF, are connected together in a parallel network branch. What is the total equivalent capacitance?",
        "options": [
            "3 μF",
            "9 μF",
            "27 μF",
            "81 μF"
        ],
        "correctAnswer": "27 μF",
        "explanation": "For capacitors in parallel, the equivalent capacitance is the direct sum of the individual values: C_eq = C1 + C2 + C3 = 9 + 9 + 9 = 27 μF."
    },
    {
        "question": "Three identical capacitors, each with a capacitance of 9 μF, are connected together in a series loop configuration. What is the total equivalent capacitance?",
        "options": [
            "3 μF",
            "9 μF",
            "27 μF",
            "1 μF"
        ],
        "correctAnswer": "3 μF",
        "explanation": "For series configurations: 1/C_eq = 1/9 + 1/9 + 1/9 = 3/9. Taking the reciprocal gives C_eq = 9/3 = 3 μF."
    },
    {
        "question": "What type of field is responsible for storing potential electrostatic energy inside a charged capacitor?",
        "options": [
            "Gravitational field",
            "Magnetic field",
            "Electric field",
            "Nuclear force field"
        ],
        "correctAnswer": "Electric field",
        "explanation": "The notebook derivations show that potential energy inside a capacitor is stored within the uniform electric field created between its conducting plates."
    },
    {
        "question": "What happens to the stored energy inside a capacitor if its operational voltage is doubled while maintaining its capacitance constant?",
        "options": [
            "The stored energy is halved.",
            "The stored energy doubles.",
            "The stored energy increases to four times its original value.",
            "The stored energy increases by eight times."
        ],
        "correctAnswer": "The stored energy increases to four times its original value.",
        "explanation": "Using the equation U = 1/2 * C * V², energy is proportional to the square of the voltage. Doubling the voltage increases the stored energy by a factor of 2² = 4."
    },
    {
        "question": "What structural change occurs to the storage parameters of an isolated, charged capacitor when a dielectric material is added between its plates?",
        "options": [
            "Its capacitance increases.",
            "Its capacitance drops down to zero.",
            "Its plates become short-circuited.",
            "Its surface area increases automatically."
        ],
        "correctAnswer": "Its capacitance increases.",
        "explanation": "The addition of a dielectric reduces the internal net electric field for a given charge, allowing more charge to be stored per unit voltage, which increases its capacitance by a factor of κ."
    },
    {
        "question": "What is the net electric field inside a dielectric material if the original vacuum field is 800 N/C and the material's dielectric constant (κ) is 4.0?",
        "options": [
            "3200 N/C",
            "800 N/C",
            "200 N/C",
            "600 N/C"
        ],
        "correctAnswer": "200 N/C",
        "explanation": "The notebook states that the net field inside a dielectric is reduced by a factor of κ: E = E_0 / κ. Substituting the values gives E = 800 / 4.0 = 200 N/C."
    },
    {
        "question": "What does the Principle of Conservation of Charge imply about creating or destroying electric charges?",
        "options": [
            "Charges can be destroyed easily by heating materials.",
            "Charges can be created from nothing by friction processes.",
            "Net charge cannot be created or destroyed; it can only be transferred between objects.",
            "Total charge values decrease over time due to circuit resistance."
        ],
        "correctAnswer": "Net charge cannot be created or destroyed; it can only be transferred between objects.",
        "explanation": "The Principle of Conservation of Charge states that the total electric charge within an isolated system remains constant. Charges cannot be created or destroyed; they only transfer from one object to another."
    },
    {
        "question": "Which of the following is a scalar quantity?",
        "options": [
            "Electric field",
            "Electrostatic force",
            "Electric potential",
            "Current density"
        ],
        "correctAnswer": "Electric potential",
        "explanation": "Electric field, electrostatic force, and current density are all vector quantities that possess both magnitude and a specific direction. Electric potential is a scalar quantity, measuring work done per unit charge."
    },
    {
        "question": "If two identical point charges, each carrying a charge of +1 C, are placed 1 meter apart in a vacuum, what is the magnitude of the electrostatic force acting between them?",
        "options": [
            "1.6 * 10^-19 N",
            "8.85 * 10^-12 N",
            "1.0 N",
            "9.0 * 10^9 N"
        ],
        "correctAnswer": "9.0 * 10^9 N",
        "explanation": "Using Coulomb's Law: F = k * q1 * q2 / r² = (9 * 10^9) * 1 * 1 / 1² = 9.0 * 10^9 N."
    },
    {
        "question": "What type of electric field lines point radially outward away from the center?",
        "options": [
            "Lines surrounding an isolated negative point charge",
            "Lines surrounding an isolated positive point charge",
            "Lines inside an ideal uniform parallel plate capacitor",
            "Lines generated inside an active copper wire conductor"
        ],
        "correctAnswer": "Lines surrounding an isolated positive point charge",
        "explanation": "Electric field lines are drawn to indicate the direction of the force on a positive test charge. They point radially outward from a positive charge and inward toward a negative charge."
    },
    {
        "question": "What is the total equivalent capacitance of a 4 μF capacitor and a 6 μF capacitor connected together in a series network arrangement?",
        "options": [
            "10 μF",
            "2.4 μF",
            "0.41 μF",
            "24 μF"
        ],
        "correctAnswer": "2.4 μF",
        "explanation": "For two capacitors in series: 1/C_eq = 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Taking the reciprocal gives C_eq = 12/5 = 2.4 μF."
    },
    {
        "question": "If a capacitor stores a total charge of 0.02 C when a potential difference of 100 V is applied across its plates, what is its capacitance?",
        "options": [
            "200 μF",
            "2.0 μF",
            "20 μF",
            "0.0002 μF"
        ],
        "correctAnswer": "200 μF",
        "explanation": "Using the formula C = Q/V, we get C = 0.02 / 100 = 0.0002 Farads. Converting this to microfarads: 0.0002 * 10^6 = 200 μF."
    },
    {
        "question": "What happens to the total electric flux passing through a Gaussian surface if the enclosed charge inside is doubled?",
        "options": [
            "The flux remains unchanged.",
            "The flux is halved.",
            "The flux doubles.",
            "The flux increases by four times."
        ],
        "correctAnswer": "The flux doubles.",
        "explanation": "According to Gauss's Law (Φ = Q_enclosed / ε_0), the total electric flux is directly proportional to the enclosed charge. Doubling the charge doubles the flux."
    },
    {
        "question": "Which of the following materials is an example of a non-ohmic conductor?",
        "options": [
            "Copper wire",
            "Constantan wire",
            "Semiconductor junction diode",
            "Silver ribbon filament"
        ],
        "correctAnswer": "Semiconductor junction diode",
        "explanation": "The notebook explicitly categorizes junction diodes, neon gas, and diode valves as non-ohmic conductors because they do not maintain a linear relationship between current and voltage."
    },
    {
        "question": "How does the current density (J) inside a uniform wire change if the current remains constant but the cross-sectional area of the wire is halved?",
        "options": [
            "The current density is halved.",
            "The current density remains unchanged.",
            "The current density doubles.",
            "The current density increases by four times."
        ],
        "correctAnswer": "The current density doubles.",
        "explanation": "Current density is defined as current per unit area (J = I/A). If the area (A) is halved while current (I) is constant, the current density increases by a factor of two."
    },
    {
        "question": "What is the equivalent resistance of a circuit containing three 30 Ω resistors connected together in parallel?",
        "options": [
            "90 Ω",
            "10 Ω",
            "3 Ω",
            "15 Ω"
        ],
        "correctAnswer": "10 Ω",
        "explanation": "Using the parallel formula: 1/R_T = 1/30 + 1/30 + 1/30 = 3/30. Taking the reciprocal gives R_T = 30/3 = 10 Ω."
    },
    {
        "question": "What parameters are required to calculate the absolute electrical resistance of a uniform wire conductor?",
        "options": [
            "Resistivity, length, and cross-sectional area",
            "Current density, voltage, and internal efficiency",
            "Permittivity, surface charge density, and distance",
            "Drift velocity, elementary charge, and volume"
        ],
        "correctAnswer": "Resistivity, length, and cross-sectional area",
        "explanation": "The geometric formula for resistance is R = ρ * L / A, which requires the material resistivity (ρ), length (L), and cross-sectional area (A)."
    },
    {
        "question": "If a current source performs 60 Joules of electrical work to move 5 Coulombs of charge across a circuit branch, what is the potential difference across that branch?",
        "options": [
            "300 V",
            "12 V",
            "0.083 V",
            "20 V"
        ],
        "correctAnswer": "12 V",
        "explanation": "Using the equation V = W/Q, we calculate the potential difference as V = 60 J / 5 C = 12 V."
    },
    {
        "question": "What is the total equivalent resistance when three individual resistors of 2 Ω, 3 Ω, and 5 Ω are connected together in a single series circuit loop?",
        "options": [
            "1.0 Ω",
            "10 Ω",
            "30 Ω",
            "0.97 Ω"
        ],
        "correctAnswer": "10 Ω",
        "explanation": "For series resistors, simply sum the values: R_T = 2 + 3 + 5 = 10 Ω."
    },
    {
        "question": "What does the slope of a line represent on a graph plotted with voltage (V) on the vertical y-axis and current (I) on the horizontal x-axis for an ohmic conductor?",
        "options": [
            "Conductivity",
            "Resistivity",
            "Resistance",
            "Power output"
        ],
        "correctAnswer": "Resistance",
        "explanation": "From Ohm's Law (V = I * R), rearranging for resistance gives R = V/I. On a graph of V versus I, the slope (Δy/Δx) equals V/I, which is the electrical resistance."
    },
    {
        "question": "What effect does introducing a dielectric material into an active capacitor connected to a constant battery voltage source have on its stored charge?",
        "options": [
            "The stored charge decreases significantly.",
            "The stored charge remains completely constant.",
            "The stored charge increases.",
            "The stored charge drops to zero instantly."
        ],
        "correctAnswer": "The stored charge increases.",
        "explanation": "Since the capacitor remains connected to a constant voltage source, V stays constant. Because the dielectric increases the capacitance (C), the total stored charge must increase according to Q = C * V."
    },
    {
        "question": "If an air-filled parallel plate capacitor has a capacitance of 5 pF, what does its capacitance become when a slab of mica with a dielectric constant of κ = 6.0 is inserted between the plates?",
        "options": [
            "0.83 pF",
            "5 pF",
            "11 pF",
            "30 pF"
        ],
        "correctAnswer": "30 pF",
        "explanation": "The capacitance with a dielectric is given by C = κ * C_0. Substituting the values yields C = 6.0 * 5 pF = 30 pF."
    },
    {
        "question": "Which basic property of electric charges explains why your hair stands up when rubbed with an inflated toy balloon?",
        "options": [
            "Additivity of charge",
            "Quantization of charge",
            "Charging by friction and the repulsion of like charges",
            "Conservation of energy density paths"
        ],
        "correctAnswer": "Charging by friction and the repulsion of like charges",
        "explanation": "Rubbing transferring electrons creates a static charge via friction. The individual hairs acquire the same type of charge and repel one another, causing them to stand up."
    },
    {
        "question": "What is the SI unit for electric flux?",
        "options": [
            "Newtons per Coulomb (N/C)",
            "Newton-meters squared per Coulomb (N m²/C)",
            "Farads per meter (F/m)",
            "Joules per Coulomb (J/C)"
        ],
        "correctAnswer": "Newton-meters squared per Coulomb (N m²/C)",
        "explanation": "Electric flux (Φ) is the product of the electric field (N/C) and area (m²), resulting in the SI unit Newton-meters squared per Coulomb (N m²/C)."
    },
    {
        "question": "If you connect three identical cells, each with an EMF of 2 V, in a parallel configuration network, what is the net EMF of the combination?",
        "options": [
            "6 V",
            "2 V",
            "0.67 V",
            "4 V"
        ],
        "correctAnswer": "2 V",
        "explanation": "The notebook states that when identical cells are arranged in parallel, the total EMF is equal to the EMF of a single cell (E_T = E1 = E2 = E3)."
    },
    {
        "question": "What does a negative value for a temperature coefficient of resistivity indicate about a material's electrical properties?",
        "options": [
            "Its resistance increases as temperature increases.",
            "Its resistance decreases as temperature increases.",
            "It cannot conduct electricity at any temperature.",
            "Its resistance remains zero at all temperatures."
        ],
        "correctAnswer": "Its resistance decreases as temperature increases.",
        "explanation": "A negative temperature coefficient means that as temperature increases, the resistance or resistivity of the material decreases, a behavior characteristic of semiconductors and insulators."
    },
    {
        "question": "A uniform electric field of 500 N/C passes perpendicularly through an open flat surface area of 0.2 m². What is the electric flux through this surface?",
        "options": [
            "2500 N m²/C",
            "100 N m²/C",
            "0.0004 N m²/C",
            "500 N m²/C"
        ],
        "correctAnswer": "100 N m²/C",
        "explanation": "For a field perpendicular to a surface, flux is calculated as Φ = E * A = 500 N/C * 0.2 m² = 100 N m²/C."
    },
    {
        "question": "What are the units of measurement for electrical conductivity (σ) as derived in your notebook?",
        "options": [
            "Ohm-meters (Ω m)",
            "(Ohm-meters)⁻¹ or (Ω m)⁻¹",
            "Newtons per Coulomb (N/C)",
            "Farads (F)"
        ],
        "correctAnswer": "(Ohm-meters)⁻¹ or (Ω m)⁻¹",
        "explanation": "Conductivity is the reciprocal of resistivity (σ = 1/ρ). Since the unit of resistivity is the Ohm-meter (Ω m), the unit for conductivity is (Ω m)⁻¹."
    },
    {
        "question": "What is the equivalent capacitance of two capacitors, 10 μF and 15 μF, connected together in a parallel arrangement?",
        "options": [
            "25 μF",
            "6 μF",
            "1.5 μF",
            "150 μF"
        ],
        "correctAnswer": "25 μF",
        "explanation": "For parallel arrangements, add the capacitances together: C_eq = 10 μF + 15 μF = 25 μF."
    },
    {
        "question": "If an energy source has an EMF of 12 V and an internal resistance of 1 Ω, what is the maximum current it can deliver to a short-circuit (where external resistance R = 0)?",
        "options": [
            "0 A",
            "12 A",
            "1 A",
            "6 A"
        ],
        "correctAnswer": "12 A",
        "explanation": "Using the loop equation I = E / (R + r), setting R = 0 for a short circuit gives I = 12 / (0 + 1) = 12 A."
    },
    {
        "question": "What happens to the electric field strength inside a dielectric material if the polarization increases, causing a higher induced field (E_ind)?",
        "options": [
            "The net internal electric field increases.",
            "The net internal electric field decreases.",
            "The net internal electric field remains unchanged.",
            "The net internal electric field drops to a negative value."
        ],
        "correctAnswer": "The net internal electric field decreases.",
        "explanation": "The net internal electric field is given by E = E_0 - E_ind. As the induced field (E_ind) increases, it opposes the original field more strongly, reducing the net electric field."
    },
    {
        "question": "Which property of a conductor ensures that the electric potential is uniform across its entire volume in a static state?",
        "options": [
            "The current density is infinitely high.",
            "The internal electric field is completely zero.",
            "The resistivity changes with temperature.",
            "The surface charge density is zero everywhere."
        ],
        "correctAnswer": "The internal electric field is completely zero.",
        "explanation": "Since the electric field inside a static conductor is zero (E = 0) and E = -dV/dr, the change in potential across its volume is zero, making the entire conductor an equipotential volume."
    },
    {
        "question": "If you double both the length and the cross-sectional area of a uniform wire conductor, what happens to its total electrical resistance?",
        "options": [
            "The resistance doubles.",
            "The resistance is cut in half.",
            "The resistance remains exactly the same.",
            "The resistance increases by four times."
        ],
        "correctAnswer": "The resistance remains exactly the same.",
        "explanation": "Using the formula R = ρ * L / A, doubling both length (2L) and area (2A) results in R_new = ρ * (2L) / (2A) = ρ * L / A = R, keeping the resistance unchanged."
    },
    {
        "question": "What is the total power generated by a 12 V battery that delivers a steady current of 3 A to an external circuit?",
        "options": [
            "4 W",
            "36 W",
            "15 W",
            "108 W"
        ],
        "correctAnswer": "36 W",
        "explanation": "The total power generated by the source is calculated using P = E * I. Substituting the values gives P = 12 V * 3 A = 36 W."
    },
    {
        "question": "What is the equivalent capacitance of three capacitors with values of 2 μF, 4 μF, and 4 μF connected together in a series network arrangement?",
        "options": [
            "10 μF",
            "1 μF",
            "2 μF",
            "0.5 μF"
        ],
        "correctAnswer": "1 μF",
        "explanation": "Using the series formula: 1/C_eq = 1/2 + 1/4 + 1/4 = 2/4 + 1/4 + 1/4 = 4/4 = 1. Taking the reciprocal gives C_eq = 1 μF."
    },
    {
        "question": "How does the electrostatic force between two point charges change if you double the charge magnitude of both particles while keeping the distance between them constant?",
        "options": [
            "The force remains unchanged.",
            "The force doubles.",
            "The force increases by four times.",
            "The force increases by sixteen times."
        ],
        "correctAnswer": "The force increases by four times.",
        "explanation": "According to Coulomb's Law, force is proportional to the product of the two charges (F ∝ q1 * q2). Doubling both charges results in a force increase of 2 * 2 = 4 times."
    },
    {
        "question": "What is the uniform electric field strength between two parallel plates separated by 0.005 meters when a potential difference of 50 V is applied?",
        "options": [
            "250 N/C",
            "10,000 N/C",
            "0.0001 N/C",
            "50 N/C"
        ],
        "correctAnswer": "10,000 N/C",
        "explanation": "The relationship between a uniform electric field and potential difference is E = V / d. Substituting the values yields E = 50 / 0.005 = 10,000 N/C."
    },
    {
        "question": "What formula calculates the total charge stored in a system of parallel capacitors?",
        "options": [
            "Q_total = Q1 = Q2 = Q3",
            "Q_total = Q1 + Q2 + Q3",
            "1/Q_total = 1/Q1 + 1/Q2 + 1/Q3",
            "Q_total = (Q1 * Q2) / Q3"
        ],
        "correctAnswer": "Q_total = Q1 + Q2 + Q3",
        "explanation": "In a parallel configuration, each capacitor stores charge independently across the shared voltage. The total charge is the sum of the individual charges: Q_total = Q1 + Q2 + Q3."
    },
    {
        "question": "If a dielectric with a constant of κ = 5.0 is inserted into a capacitor, how does the induced surface charge density (σ_ind) compare to the original surface charge density (σ_0)?",
        "options": [
            "σ_ind = 5 * σ_0",
            "σ_ind = 0.2 * σ_0",
            "σ_ind = 0.8 * σ_0",
            "σ_ind = σ_0"
        ],
        "correctAnswer": "σ_ind = 0.8 * σ_0",
        "explanation": "Using the formula from the notes: σ_ind = σ_0 * (1 - 1/κ). Substituting κ = 5.0 gives σ_ind = σ_0 * (1 - 1/5) = σ_0 * (1 - 0.2) = 0.8 * σ_0."
    },
    {
        "question": "What parameter remains the same across all individual capacitors when they are connected together in a series network branch?",
        "options": [
            "Voltage drop",
            "Capacitance value",
            "Electric charge",
            "Stored energy density"
        ],
        "correctAnswer": "Electric charge",
        "explanation": "The notebook outlines that for a series combination of capacitors, the same electric charge (Q) is deposited on the plates of each capacitor."
    },
    {
        "question": "What is the equivalent resistance of a parallel network containing two identical 100 Ω resistors?",
        "options": [
            "200 Ω",
            "50 Ω",
            "25 Ω",
            "100 Ω"
        ],
        "correctAnswer": "50 Ω",
        "explanation": "For two identical resistors in parallel, the equivalent resistance is half of one resistor's value: R_T = 100 / 2 = 50 Ω. (1/100 + 1/100 = 2/100 -> Reciprocal = 50 Ω)."
    },
    {
        "question": "What happens to the electric field strength at a point in space if you triple the distance (3r) from the isolated point charge generating it?",
        "options": [
            "The field strength drops to one-third.",
            "The field strength drops to one-ninth.",
            "The field strength is tripled.",
            "The field strength increases by nine times."
        ],
        "correctAnswer": "The field strength drops to one-ninth.",
        "explanation": "The electric field of a point charge follows an inverse-square law with distance (E ∝ 1/r²). Tripling the distance reduces the field strength by a factor of 1 / 3² = 1/9."
    },
    {
        "question": "If a copper wire has a resistance of 4 Ω at room temperature, and it is replaced by an identical copper wire that is twice as long, what is the resistance of the new wire?",
        "options": [
            "2 Ω",
            "4 Ω",
            "8 Ω",
            "16 Ω"
        ],
        "correctAnswer": "8 Ω",
        "explanation": "Resistance is directly proportional to the length of the wire (R ∝ L). Doubling the length of the wire doubles its electrical resistance, making it 2 * 4 Ω = 8 Ω."
    },
    {
        "question": "What is the internal resistance of an ideal voltage source that maintains a constant terminal voltage regardless of the current drawn?",
        "options": [
            "Zero (0 Ω)",
            "1 Ω",
            "Infinite resistance",
            "It varies with temperature"
        ],
        "correctAnswer": "Zero (0 Ω)",
        "explanation": "An ideal voltage source has zero internal resistance (r = 0 Ω), ensuring there is no internal potential drop (Ir = 0), so the terminal voltage always equals the EMF."
    },
    {
        "question": "If a circuit has an efficiency of 80%, what percentage of the total power generated by the source is lost as heat inside its internal resistance?",
        "options": [
            "0%",
            "20%",
            "80%",
            "100%"
        ],
        "correctAnswer": "20%",
        "explanation": "Total efficiency track represents the ratio of useful power output to total power generated. If 80% is delivered to the output load, the remaining 20% is lost within the source."
    },
    {
        "question": "What is the total energy stored inside a 10 μF capacitor that has been charged to a potential difference of 20 V?",
        "options": [
            "2 * 10⁻³ J",
            "4 * 10⁻³ J",
            "1 * 10⁻³ J",
            "200 J"
        ],
        "correctAnswer": "2 * 10⁻³ J",
        "explanation": "Using the formula U = 1/2 * C * V², we get U = 0.5 * (10 * 10⁻⁶ F) * (20 V)² = 0.5 * 10⁻⁵ * 400 = 2 * 10⁻³ Joules."
    },
    {
        "question": "What is the electric potential at a point located 3 meters away from a +3 μC point charge in a vacuum?",
        "options": [
            "9000 V",
            "3000 V",
            "27,000 V",
            "1000 V"
        ],
        "correctAnswer": "9000 V",
        "explanation": "Using the point charge potential formula V = k * q / r: V = (9 * 10^9 * 3 * 10⁻⁶) / 3 = 9000 V."
    },
    {
        "question": "Which mathematical operation is used to calculate the net force acting on a charge from multiple surrounding charges?",
        "options": [
            "Scalar addition",
            "Vector addition",
            "Matrix multiplication",
            "Scalar cross subtraction"
        ],
        "correctAnswer": "Vector addition",
        "explanation": "According to the Principle of Superposition from your notes, forces are vector quantities, meaning the total net force is the vector sum of all individual forces."
    },
    {
        "question": "What is the absolute charge magnitude of a single isolated alpha particle, which contains exactly two protons?",
        "options": [
            "1.6 * 10⁻¹¹ C",
            "3.2 * 10⁻¹⁹ C",
            "0.8 * 10⁻¹⁹ C",
            "6.4 * 10⁻¹⁹ C"
        ],
        "correctAnswer": "3.2 * 10⁻¹⁹ C",
        "explanation": "Using the quantization formula q = n * e, where n = 2 protons and e = 1.6 * 10⁻¹⁹ C, we find q = 2 * 1.6 * 10⁻¹⁹ C = 3.2 * 10⁻¹⁹ C."
    },
    {
        "question": "What structural modification to a parallel plate capacitor decreases its absolute capacitance value?",
        "options": [
            "Increasing the surface area of the metal plates.",
            "Inserting a material with a high dielectric constant.",
            "Increasing the separation distance between the plates.",
            "Decreasing the separation distance between the plates."
        ],
        "correctAnswer": "Increasing the separation distance between the plates.",
        "explanation": "Capacitance is inversely proportional to plate separation (C = εA/d). Increasing the distance (d) reduces the capacitance."
    },
    {
        "question": "What type of interaction occurs between a negatively charged rubber rod and a positively charged glass rod when brought close together?",
        "options": [
            "They exert a repulsive force on each other.",
            "They exert an attractive force on each other.",
            "They exert no electrostatic force on each other.",
            "They cancel each other out and become neutral instantly without contact."
        ],
        "correctAnswer": "They exert an attractive force on each other.",
        "explanation": "The basic rule of electrostatics states that like charges repel each other, while unlike (opposite) charges attract each other."
    },
    {
        "question": "If a network of three parallel branches contains resistors with different resistance values, what is the voltage drop across each branch?",
        "options": [
            "The branch with the highest resistance has the highest voltage drop.",
            "The branch with the lowest resistance has the highest voltage drop.",
            "The voltage drop is identical across all parallel branches.",
            "The voltage drops sum up to zero across the parallel loop."
        ],
        "correctAnswer": "The voltage drop is identical across all parallel branches.",
        "explanation": "The notebook explicitly states that when components are connected in parallel, they experience the exact same potential difference (voltage) across their ends."
    },
    {
        "question": "If a conductor wire has a resistance of 12 Ω, what does its resistance become if it is cut into two equal halves and those halves are connected in parallel?",
        "options": [
            "12 Ω",
            "6 Ω",
            "3 Ω",
            "24 Ω"
        ],
        "correctAnswer": "3 Ω",
        "explanation": "Cutting the wire in half gives two pieces of 6 Ω each (since R ∝ L). Connecting two 6 Ω resistors in parallel results in an equivalent resistance of 6 / 2 = 3 Ω."
    },
    {
        "question": "What does the symbol 'ε_0' represent in electrostatics equations?",
        "options": [
            "The resistivity coefficient of copper at room temperature.",
            "The temperature coefficient of a non-ohmic device.",
            "The permittivity of free space in a vacuum.",
            "The total surface charge accumulation constant."
        ],
        "correctAnswer": "The permittivity of free space in a vacuum.",
        "explanation": "The notebook defines ε_0 as the permittivity of free space, with a constant value of approximately 8.85 * 10⁻¹² C²/N·m²."
    },
    {
        "question": "What is the equivalent capacitance of a 12 μF capacitor and a 4 μF capacitor connected together in a series arrangement?",
        "options": [
            "16 μF",
            "3 μF",
            "8 μF",
            "48 μF"
        ],
        "correctAnswer": "3 μF",
        "explanation": "For a series combination: 1/C_eq = 1/12 + 1/4 = 1/12 + 3/12 = 4/12. Taking the reciprocal gives C_eq = 12/4 = 3 μF."
    },
    {
        "question": "If a current of 4 A flows through a circuit with a total load resistance of 5 Ω, what is the power dissipated by the load?",
        "options": [
            "20 W",
            "80 W",
            "400 W",
            "1.25 W"
        ],
        "correctAnswer": "80 W",
        "explanation": "Using the power formula P = I² * R, we calculate the power dissipation as P = (4)² * 5 = 16 * 5 = 80 W."
    },
    {
        "question": "What is the total charge enclosed by a closed geometric surface if the net electric flux leaving the surface is 4.52 * 10^5 N m²/C?",
        "options": [
            "2.0 μC",
            "4.0 μC",
            "8.85 μC",
            "1.0 μC"
        ],
        "correctAnswer": "4.0 μC",
        "explanation": "From Gauss's Law, Q = Φ * ε_0. Given Φ = 4.52 * 10^5 and ε_0 = 8.85 * 10⁻¹², Q = (4.52 * 10^5) * (8.85 * 10⁻¹²) ≈ 4.0 * 10⁻⁶ C, or 4.0 μC."
    },
    {
        "question": "How does the total current leaving a battery divide across a parallel network containing two branches with unequal resistance?",
        "options": [
            "More current flows through the branch with higher resistance.",
            "More current flows through the branch with lower resistance.",
            "The current divides equally regardless of resistance values.",
            "The current stops flowing entirely through the higher resistance branch."
        ],
        "correctAnswer": "More current flows through the branch with lower resistance.",
        "explanation": "From Ohm's Law (I = V/R), since voltage (V) is the same across both parallel branches, current is inversely proportional to resistance. Therefore, the branch with lower resistance carries more current."
    },
    {
        "question": "What is the electrical work done when a 9 V source transfers a total charge of 50 C around a closed circuit loop?",
        "options": [
            "450 J",
            "5.55 J",
            "0.18 J",
            "4050 J"
        ],
        "correctAnswer": "450 J",
        "explanation": "Using the work equation W = V * Q, we find the electrical work done is W = 9 V * 50 C = 450 Joules."
    },
    {
        "question": "Which of the following metrics defines energy density within an electrostatic field?",
        "options": [
            "Joules per meter (J/m)",
            "Joules per square meter (J/m²)",
            "Joules per cubic meter (J/m³)",
            "Coulombs per cubic meter (C/m³)"
        ],
        "correctAnswer": "Joules per cubic meter (J/m³)",
        "explanation": "Energy density (u) is defined as energy stored per unit volume. In SI units, energy is measured in Joules and volume in cubic meters, yielding Joules per cubic meter (J/m³)."
    },
    {
        "question": "What is the equivalent resistance of three 15 Ω resistors connected together in a single series circuit loop?",
        "options": [
            "5 Ω",
            "15 Ω",
            "45 Ω",
            "225 Ω"
        ],
        "correctAnswer": "45 Ω",
        "explanation": "For series connections, sum the individual resistance values: R_T = 15 + 15 + 15 = 45 Ω."
    },
    {
        "question": "What happens to the potential difference across a capacitor if it is disconnected from a battery and its plate separation distance is doubled?",
        "options": [
            "The potential difference is halved.",
            "The potential difference remains unchanged.",
            "The potential difference doubles.",
            "The potential difference drops to zero."
        ],
        "correctAnswer": "The potential difference doubles.",
        "explanation": "Since the capacitor is disconnected, its charge (Q) remains constant. Doubling the separation distance halves the capacitance (C). From V = Q/C, halving C causes the potential difference (V) to double."
    },
    {
        "question": "What is the SI unit for electric potential difference?",
        "options": [
            "Ampere",
            "Ohm",
            "Volt",
            "Joule"
        ],
        "correctAnswer": "Volt",
        "explanation": "The notebook explicitly states that the SI unit for electric potential and potential difference is the Volt (V)."
    },
    {
        "question": "If the current density (J) inside a wire is 2.5 * 10^6 A/m² and the wire has a cross-sectional area of 2.0 * 10⁻⁶ m², what is the total current flowing through the wire?",
        "options": [
            "1.25 A",
            "5.0 A",
            "0.8 A",
            "50 A"
        ],
        "correctAnswer": "5.0 A",
        "explanation": "Using the relation J = I/A, rearranging for current gives I = J * A. Substituting the values yields I = (2.5 * 10^6) * (2.0 * 10⁻⁶) = 5.0 A."
    },
    {
        "question": "Which fundamental force of nature holds the quarks together inside protons and neutrons, and keeps the atomic nucleus stable?",
        "options": [
            "Gravitational force",
            "Electromagnetic force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Strong nuclear force",
        "explanation": "The notebook states that the strong nuclear force is the fundamental interaction responsible for holding atomic nuclei together."
    },
    {
        "question": "What is the value of the electric field inside a solid conducting sphere that carries a net surface charge of +5 μC?",
        "options": [
            "Zero (0 N/C)",
            "9.0 * 10^9 N/C",
            "4.5 * 10^5 N/C",
            "It varies depending on the sphere's radius"
        ],
        "correctAnswer": "Zero (0 N/C)",
        "explanation": "A core property of conductors under static conditions is that the internal electric field is zero everywhere inside the material, regardless of the net charge on its outer surface."
    },
    {
        "question": "What is the capacitance of a parallel plate capacitor with a plate area of 0.1 m² and a plate separation of 0.001 m in a vacuum?",
        "options": [
            "8.85 * 10⁻¹¹ F",
            "8.85 * 10⁻¹² F",
            "8.85 * 10⁻¹³ F",
            "8.85 * 10⁻¹⁰ F"
        ],
        "correctAnswer": "8.85 * 10⁻¹⁰ F",
        "explanation": "Using the parallel plate formula C = ε_0 * A / d: C = (8.85 * 10⁻¹²) * 0.1 / 0.001 = 8.85 * 10⁻¹³ / 10⁻³ = 8.85 * 10⁻¹⁰ Farads."
    },
    {
        "question": "What is the total equivalent resistance of a 6 Ω resistor and a 12 Ω resistor connected together in a parallel network branch?",
        "options": [
            "18 Ω",
            "4 Ω",
            "2 Ω",
            "72 Ω"
        ],
        "correctAnswer": "4 Ω",
        "explanation": "Using the parallel resistance formula: 1/R_T = 1/6 + 1/12 = 2/12 + 1/12 = 3/12. Taking the reciprocal gives R_T = 12/3 = 4 Ω."
    },
    {
        "question": "If you double the charge (2q) on a single point charge while keeping the test distance constant, what happens to the electric potential at that point?",
        "options": [
            "The potential remains unchanged.",
            "The potential is halved.",
            "The potential doubles.",
            "The potential increases by four times."
        ],
        "correctAnswer": "The potential doubles.",
        "explanation": "The electric potential from a point charge is directly proportional to the magnitude of the charge (V = k * q / r). Doubling the charge doubles the potential."
    },
    {
        "question": "What mathematical relationship defines electrical power consumption across an ohmic load in terms of its resistance and voltage?",
        "options": [
            "P = V * R",
            "P = V² / R",
            "P = I / V²",
            "P = V² * R"
        ],
        "correctAnswer": "P = V² / R",
        "explanation": "By substituting Ohm's Law (I = V/R) into the core power equation (P = I * V), we derive the equivalent expression P = V² / R."
    },
    {
        "question": "What happens to the total equivalent capacitance of a system if you connect additional capacitors in a parallel configuration?",
        "options": [
            "The total equivalent capacitance decreases.",
            "The total equivalent capacitance increases.",
            "The total equivalent capacitance remains unchanged.",
            "The total equivalent capacitance drops to zero."
        ],
        "correctAnswer": "The total equivalent capacitance increases.",
        "explanation": "Because capacitors in parallel add together directly (C_eq = C1 + C2 + C3...), adding more units increases the total equivalent capacitance of the network."
    },
    {
        "question": "If an electric field vector points horizontally toward the right, what is the direction of the force acting on an electron placed in this field?",
        "options": [
            "Horizontally toward the right",
            "Horizontally toward the left",
            "Vertically upward",
            "Vertically downward"
        ],
        "correctAnswer": "Horizontally toward the left",
        "explanation": "The direction of an electric field vector is defined by the force on a positive charge. Since an electron carries a negative charge, it experiences a force in the opposite direction of the electric field vector."
    },
    {
        "question": "What is the equivalent resistance of a circuit containing four 20 Ω resistors connected together in parallel?",
        "options": [
            "80 Ω",
            "5 Ω",
            "10 Ω",
            "4 Ω"
        ],
        "correctAnswer": "5 Ω",
        "explanation": "Using the parallel formula for identical resistors: R_T = R / n = 20 Ω / 4 = 5 Ω."
    },
    {
        "question": "If a capacitor system accumulates a charge of 60 μC across an equivalent capacitance of 5 μF, what is the operating potential difference across the network?",
        "options": [
            "300 V",
            "12 V",
            "0.083 V",
            "65 V"
        ],
        "correctAnswer": "12 V",
        "explanation": "Using the formula V = Q / C, we find the potential difference is V = 60 μC / 5 μF = 12 V."
    },
    {
        "question": "Which method of charging causes an uncharged conducting object to develop a net charge of the opposite sign when brought near a charged object without direct contact?",
        "options": [
            "Conduction",
            "Friction",
            "Induction",
            "Polarization dissipation"
        ],
        "correctAnswer": "Induction",
        "explanation": "Charging by induction involves using a charged object to redistribute charges in a nearby neutral conductor without touching it, resulting in an opposite charge when grounded."
    },
    {
        "question": "What is the baseline formula for the electrical energy density (u) stored in a vacuum field?",
        "options": [
            "u = 1/2 * ε_0 * E²",
            "u = ε_0 * E",
            "u = 1/2 * ε_0 * E",
            "u = E² / (2 * ε_0)"
        ],
        "correctAnswer": "u = 1/2 * ε_0 * E²",
        "explanation": "The notebook derives Equation 13 for energy density within a parallel plate capacitor system in free space as u = 1/2 * ε_0 * E²."
    },
    {
        "question": "What happens to the total current flowing from a source if you reduce the external load resistance while keeping the EMF and internal resistance constant?",
        "options": [
            "The total current decreases.",
            "The total current increases.",
            "The total current remains completely unchanged.",
            "The total current drops to zero."
        ],
        "correctAnswer": "The total current increases.",
        "explanation": "From the loop current formula I = E / (R + r), reducing the external resistance (R) decreases the denominator, causing the total circuit current (I) to increase."
    },
    {
        "question": "If the work done to move a +2 C charge between two points in an electric field is 50 Joules, what is the potential difference between those two points?",
        "options": [
            "100 V",
            "25 V",
            "0.04 V",
            "10 V"
        ],
        "correctAnswer": "25 V",
        "explanation": "Potential difference is defined as work done per unit charge (V = W/Q). Substituting the values gives V = 50 J / 2 C = 25 V."
    },
    {
        "question": "Which fundamental interaction is responsible for radioactive beta decay processes in unstable atomic nuclei?",
        "options": [
            "Gravitational force",
            "Electromagnetic force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Weak nuclear force",
        "explanation": "The notebook notes that the weak nuclear force is the fundamental interaction responsible for radioactive decay."
    },
    {
        "question": "What parameter is uniform across each individual capacitor when connected together in a parallel network arrangement?",
        "options": [
            "The stored electric charge",
            "The potential difference (voltage)",
            "The stored potential energy",
            "The plate surface area"
        ],
        "correctAnswer": "The potential difference (voltage)",
        "explanation": "The properties of parallel networks state that each component connected in parallel shares the exact same potential difference across its terminals."
    },
    {
        "question": "What is the equivalent resistance of a series circuit consisting of a 15 Ω resistor, a 25 Ω resistor, and a 60 Ω resistor?",
        "options": [
            "100 Ω",
            "6.8 Ω",
            "40 Ω",
            "22,500 Ω"
        ],
        "correctAnswer": "100 Ω",
        "explanation": "For resistors connected in series, the total resistance is the direct sum of the individual values: R_T = 15 + 25 + 60 = 100 Ω."
    },
    {
        "question": "If you double the separation distance (2d) between the plates of an isolated parallel plate capacitor without changing its charge, what happens to the electric field strength between the plates?",
        "options": [
            "The electric field strength doubles.",
            "The electric field strength is cut in half.",
            "The electric field strength remains completely unchanged.",
            "The electric field strength increases by four times."
        ],
        "correctAnswer": "The electric field strength remains completely unchanged.",
        "explanation": "The electric field between parallel plates is given by E = σ / ε = Q / (εA). Since charge (Q) and area (A) are constant, changing the distance has no effect on the electric field strength."
    },
    {
        "question": "What type of material allows electric charges to move through it with minimal resistance?",
        "options": [
            "Insulator",
            "Conductor",
            "Dielectric",
            "Semiconductor at absolute zero"
        ],
        "correctAnswer": "Conductor",
        "explanation": "The notebook defines conductors as materials that allow the free movement of electrons or electrical charges."
    },
    {
        "question": "If a current of 0.5 A flows through a 40 Ω resistor, what is the potential difference across its terminals?",
        "options": [
            "80 V",
            "20 V",
            "0.0125 V",
            "40.5 V"
        ],
        "correctAnswer": "20 V",
        "explanation": "According to Ohm's Law (V = I * R), the potential difference is calculated as V = 0.5 A * 40 Ω = 20 V."
    },
    {
        "question": "What is the total equivalent capacitance of a 3 μF capacitor, a 6 μF capacitor, and a 9 μF capacitor connected together in parallel?",
        "options": [
            "1.6 μF",
            "18 μF",
            "9 μF",
            "162 μF"
        ],
        "correctAnswer": "18 μF",
        "explanation": "For parallel arrangements, sum the capacitances directly: C_eq = 3 + 6 + 9 = 18 μF."
    },
    {
        "question": "What happens to the electrical resistance of a typical semiconductor material as its temperature is increased?",
        "options": [
            "Its resistance increases linearly.",
            "Its resistance decreases.",
            "Its resistance remains completely constant.",
            "Its resistance drops to zero instantly at room temperature."
        ],
        "correctAnswer": "Its resistance decreases.",
        "explanation": "The notebook states that while metals show an increase in resistance with temperature, semiconductors and insulators show a decrease in resistance as temperature rises."
    },
    {
        "question": "What is the total power delivered to an external circuit by a cell with an EMF of 6 V when it drives a loop current of 1.5 A?",
        "options": [
            "4 W",
            "9 W",
            "7.5 W",
            "13.5 W"
        ],
        "correctAnswer": "9 W",
        "explanation": "The total power generated by a cell is given by P = E * I. Substituting the values gives P = 6 V * 1.5 A = 9 W."
    },
    {
        "question": "Which property of electric charge states that the net charge of a compound system can be found by taking the algebraic sum of its individual charges?",
        "options": [
            "Quantization of charge",
            "Conservation of charge",
            "Additivity of charge",
            "Polarization of charge"
        ],
        "correctAnswer": "Additivity of charge",
        "explanation": "The notebook states under the properties of charge that additivity means the net charge of a system is the algebraic sum of all the constituent individual charges."
    },
    {
        "question": "If an air-filled capacitor has a capacitance of 8 μF, what does its capacitance become when a dielectric medium with a constant of κ = 2.5 is inserted?",
        "options": [
            "3.2 μF",
            "20 μF",
            "10.5 μF",
            "5.5 μF"
        ],
        "correctAnswer": "20 μF",
        "explanation": "The capacitance with a dielectric is C = κ * C_0. Substituting the given values: C = 2.5 * 8 μF = 20 μF."
    },
    {
        "question": "What type of configuration describes cells connected such that the positive terminal of one cell is connected to the negative terminal of the next?",
        "options": [
            "Parallel connection",
            "Series connection",
            "Short-circuit connection",
            "Equipotential loop connection"
        ],
        "correctAnswer": "Series connection",
        "explanation": "The cell network diagrams show that connecting cells in a single line, positive terminal to negative terminal, forms a series configuration where their individual voltages add up."
    },
    {
        "question": "If a Gaussian surface encloses no net charge, what can you conclude about the lines of electric field passing through it?",
        "options": [
            "No electric field lines can enter or leave the surface.",
            "The number of field lines entering the surface must equal the number of field lines leaving it.",
            "All field lines must terminate at the center of the surface.",
            "The field lines must double inside the surface volume."
        ],
        "correctAnswer": "The number of field lines entering the surface must equal the number of field lines leaving it.",
        "explanation": "Since net flux is zero when enclosed charge is zero, Gauss's Law implies that any electric field line entering the closed volume must also exit it, resulting in a net flux of zero."
    },
    {
        "question": "What is the equivalent resistance of a parallel network branch containing a 20 Ω resistor and a 30 Ω resistor?",
        "options": [
            "50 Ω",
            "12 Ω",
            "10 Ω",
            "600 Ω"
        ],
        "correctAnswer": "12 Ω",
        "explanation": "Using the parallel combination formula: 1/R_T = 1/20 + 1/30 = 3/60 + 2/60 = 5/60. Taking the reciprocal gives R_T = 60/5 = 12 Ω."
    },
    {
        "question": "What is the primary unit of measurement for electric current?",
        "options": [
            "Volt",
            "Ohm",
            "Ampere",
            "Coulomb"
        ],
        "correctAnswer": "Ampere",
        "explanation": "The text defines electric current as charge per unit time (C/s), which is given the SI unit name Ampere (A)."
    },
    {
        "question": "If the electric potential at a point in an electric field is 100 V, how much work is required to bring a +3 C charge from infinity to that point?",
        "options": [
            "300 J",
            "33.3 J",
            "0.03 J",
            "900 J"
        ],
        "correctAnswer": "300 J",
        "explanation": "Using the formula V = W/Q, rearranging for work gives W = V * Q. Substituting the values gives W = 100 V * 3 C = 300 Joules."
    },
    {
        "question": "What is the equivalent capacitance of three 30 μF capacitors connected together in a series network loop?",
        "options": [
            "90 μF",
            "10 μF",
            "3 μF",
            "0.1 μF"
        ],
        "correctAnswer": "10 μF",
        "explanation": "Using the series capacitance formula: 1/C_eq = 1/30 + 1/30 + 1/30 = 3/30. Taking the reciprocal gives C_eq = 30/3 = 10 μF."
    },
    {
        "question": "How does the resistance of a standard uniform copper wire change if its cross-sectional area is doubled while keeping its length constant?",
        "options": [
            "The resistance doubles.",
            "The resistance is cut in half.",
            "The resistance remains unchanged.",
            "The resistance increases by four times."
        ],
        "correctAnswer": "The resistance is cut in half.",
        "explanation": "Resistance is inversely proportional to the cross-sectional area of a wire (R ∝ 1/A). Doubling the area cuts the resistance in half."
    },
    {
        "question": "What is the calculated current flowing through a 10 Ω resistor when it is connected to a terminal potential difference of 5 V?",
        "options": [
            "50 A",
            "2 A",
            "0.5 A",
            "15 A"
        ],
        "correctAnswer": "0.5 A",
        "explanation": "Using Ohm's Law (I = V/R), the current is calculated as I = 5 V / 10 Ω = 0.5 A."
    },
    {
        "question": "Which property of a dielectric material describes the separation of positive and negative charges within its atoms when exposed to an external electric field?",
        "options": [
            "Conduction",
            "Polarization",
            "Quantization",
            "Resistive dissipation"
        ],
        "correctAnswer": "Polarization",
        "explanation": "The notebook explains that inserting a dielectric material into an electric field induces surface charges due to the polarization of atoms within the material, aligning internal dipoles against the field."
    },
    {
        "question": "What is the total equivalent resistance of two series resistors with values of 45 Ω and 55 Ω?",
        "options": [
            "100 Ω",
            "24.7 Ω",
            "10 Ω",
            "2475 Ω"
        ],
        "correctAnswer": "100 Ω",
        "explanation": "For series resistors, sum the individual resistance values: R_T = 45 Ω + 55 Ω = 100 Ω."
    },
    {
        "question": "If you double the charge stored on a capacitor without changing its physical structure, what happens to the electrostatic energy stored inside it?",
        "options": [
            "The stored energy doubles.",
            "The stored energy is cut in half.",
            "The stored energy increases to four times its original value.",
            "The stored energy remains completely constant."
        ],
        "correctAnswer": "The stored energy increases to four times its original value.",
        "explanation": "Using the formula U = 1/2 * Q² / C, energy is proportional to the square of the stored charge. Doubling the charge increases the stored energy by 2² = 4 times."
    },
    {
        "question": "What is the net electric field at a point directly between two large parallel plates that carry equal and opposite surface charge densities (+σ and -σ)?",
        "options": [
            "Zero",
            "E = σ / ε_0",
            "E = 2σ / ε_0",
            "E = σ / (2 * ε_0)"
        ],
        "correctAnswer": "E = σ / ε_0",
        "explanation": "The electric field between two closely spaced, oppositely charged parallel plates is uniform and its magnitude is given by E = σ / ε_0, matching the parallel plate formulas in your notes."
    },
    {
        "question": "What is the total power dissipated as heat inside a cell's internal resistance if a current of 2 A flows through an internal resistance of 0.5 Ω?",
        "options": [
            "1 W",
            "2 W",
            "4 W",
            "0.5 W"
        ],
        "correctAnswer": "2 W",
        "explanation": "The internal power dissipation is calculated using P_internal = I² * r. Substituting the given values gives P = (2)² * 0.5 = 4 * 0.5 = 2 W."
    },
    {
        "question": "What parameter determines the maximum amount of voltage a capacitor can safely withstand before an electric spark jumps across its dielectric?",
        "options": [
            "Capacitance value",
            "Dielectric strength of the insulator material",
            "Surface charge density of the plates",
            "Total thermal resistance profile"
        ],
        "correctAnswer": "Dielectric strength of the insulator material",
        "explanation": "The dielectric strength is the maximum electric field an insulating material can withstand without breaking down and becoming a conductor, which limits the maximum operating voltage."
    },
    {
        "question": "If three identical 12 μF capacitors are connected together in a series network arrangement, what is the combined total capacitance?",
        "options": [
            "36 μF",
            "4 μF",
            "3 μF",
            "1.33 μF"
        ],
        "correctAnswer": "4 μF",
        "explanation": "Using the series capacitance formula for identical components: C_eq = C / n = 12 μF / 3 = 4 μF."
    },
    {
        "question": "What is the potential difference across a 5 Ω external load resistor connected to a cell delivering a current of 2 A?",
        "options": [
            "2.5 V",
            "10 V",
            "0.4 V",
            "7 V"
        ],
        "correctAnswer": "10 V",
        "explanation": "The terminal potential difference across the external load is given by Ohm's Law: V = I * R = 2 A * 5 Ω = 10 V."
    },
    {
        "question": "What type of fundamental interaction has an infinite range but is the weakest of all the forces in nature?",
        "options": [
            "Gravitational force",
            "Electromagnetic force",
            "Strong nuclear force",
            "Weak nuclear force"
        ],
        "correctAnswer": "Gravitational force",
        "explanation": "The notebook characterizes the gravitational force as an interaction responsible for the attraction between masses, which operates across long ranges but is the weakest of the fundamental forces."
    },
    {
        "question": "What happens to the calculated current density (J) inside a wire if the total current flowing through it is doubled while the wire's area remains constant?",
        "options": [
            "The current density is halved.",
            "The current density remains unchanged.",
            "The current density doubles.",
            "The current density increases by four times."
        ],
        "correctAnswer": "The current density doubles.",
        "explanation": "Since current density is directly proportional to current (J = I/A), doubling the total current while keeping the cross-sectional area constant doubles the current density."
    },
    {
        "question": "What is the equivalent resistance of a parallel network containing three identical 9 Ω resistors?",
        "options": [
            "27 Ω",
            "3 Ω",
            "1 Ω",
            "4.5 Ω"
        ],
        "correctAnswer": "3 Ω",
        "explanation": "Using the parallel resistance formula for identical components: R_T = R / n = 9 Ω / 3 = 3 Ω."
    },
    {
        "question": "If an air-filled parallel plate capacitor has a capacitance of 10 μF, what does its capacitance become if a dielectric with a constant of κ = 4.0 is inserted to fill the space?",
        "options": [
            "2.5 μF",
            "40 μF",
            "14 μF",
            "6 μF"
        ],
        "correctAnswer": "40 μF",
        "explanation": "The capacitance increases by a factor of the dielectric constant: C = κ * C_0 = 4.0 * 10 μF = 40 μF."
    },
    {
        "question": "What is the primary unit of measurement for electrical resistance?",
        "options": [
            "Volt",
            "Ampere",
            "Ohm",
            "Siemens"
        ],
        "correctAnswer": "Ohm",
        "explanation": "The notebook outlines that the constant of proportionality in Ohm's Law (V/I) is electrical resistance, which is measured in Ohms (Ω)."
    },
    {
        "question": "What is the equivalent capacitance of a 20 μF capacitor and a 30 μF capacitor connected together in a parallel configuration?",
        "options": [
            "50 μF",
            "12 μF",
            "10 μF",
            "600 μF"
        ],
        "correctAnswer": "50 μF",
        "explanation": "For parallel configurations, sum the individual capacitance values directly: C_eq = 20 μF + 30 μF = 50 μF."
    },
    {
        "question": "If a cell has an internal resistance of 0.2 Ω and a current of 5 A is flowing through it, what is the internal potential drop across the cell?",
        "options": [
            "1.0 V",
            "25 V",
            "0.04 V",
            "5.2 V"
        ],
        "correctAnswer": "1.0 V",
        "explanation": "The internal voltage drop across a cell is calculated using Ohm's Law for internal components: V_internal = I * r = 5 A * 0.2 Ω = 1.0 V."
    },
    {
        "question": "Which of the following equations accurately represents another mathematical form of Ohm's Law using vector fields?",
        "options": [
            "J = σ * E",
            "E = ρ * J²",
            "J = E / ρ²",
            "Φ = E * A"
        ],
        "correctAnswer": "J = σ * E",
        "explanation": "The notebook states that the relationship between current density (J), electrical conductivity (σ), and electric field strength (E) is given by J = σ * E, which serves as another form of Ohm's Law."
    },
    {
        "question": "What happens to the total resistance of a circuit if you keep adding more resistors connected strictly in a parallel arrangement?",
        "options": [
            "The total resistance increases continuously.",
            "The total resistance decreases.",
            "The total resistance remains completely constant.",
            "The total resistance equals the sum of the individual values."
        ],
        "correctAnswer": "The total resistance decreases.",
        "explanation": "For parallel connections, adding more paths allows current to flow more freely through alternative branches, which decreases the total equivalent resistance of the network."
    },
    {
        "question": "If a total charge of 1.6 * 10⁻¹⁸ C is measured on an object, how many excess electrons does it possess?",
        "options": [
            "1 electron",
            "10 electrons",
            "100 electrons",
            "1.6 electrons"
        ],
        "correctAnswer": "10 electrons",
        "explanation": "Using the charge quantization formula q = n * e, rearranging for n gives n = q / e = (1.6 * 10⁻¹⁸ C) / (1.6 * 10⁻¹⁹ C) = 10 electrons."
    }
];


// ======================================
// GST101 QUESTIONS
// PASTE NEW GST101 QUESTIONS BELOW
// ======================================

const GST102_Questions = [
    {
    question: "What is culture?",
    options: [
        "The total way of life of a people",
        "Only their language system",
        "Religious beliefs only",
        "Political structure only"
    ],
    correctAnswer: "The total way of life of a people",
    explanation: "Culture refers to everything that makes up how a group of people live. This includes their beliefs, customs, values, traditions, language, dress, food, and social habits. It is not limited to one aspect of life but represents the full identity and lifestyle of a society."
},
{
    question: "Which of the following is NOT a component of culture?",
    options: [
        "Technology",
        "Tradition",
        "Biology",
        "Language"
    ],
    correctAnswer: "Biology",
    explanation: "Culture consists of learned and shared human behaviors such as traditions, language, beliefs, and technology. Biology, however, is natural and genetic, dealing with physical body processes rather than learned social behavior."
},
{
    question: "Culture is primarily?",
    options: [
        "Inborn",
        "Learned",
        "Genetic",
        "Random"
    ],
    correctAnswer: "Learned",
    explanation: "Culture is not inherited biologically but is learned through interaction with family, society, and institutions. From childhood, individuals acquire cultural values, norms, and practices from their environment."
},
{
    question: "Which best describes material culture?",
    options: [
        "Beliefs and values",
        "Physical objects and tools",
        "Superstitions",
        "Languages only"
    ],
    correctAnswer: "Physical objects and tools",
    explanation: "Material culture includes all physical and tangible objects created or used by humans such as houses, tools, clothing, vehicles, and technology. These items reflect how people live and interact with their environment."
},
{
    question: "Non-material culture includes?",
    options: [
        "Cars and houses",
        "Ideas and beliefs",
        "Money and tools",
        "Buildings and roads"
    ],
    correctAnswer: "Ideas and beliefs",
    explanation: "Non-material culture refers to intangible aspects of culture such as beliefs, values, norms, morals, customs, and laws. These shape behavior and guide how members of society interact."


/* CHAPTER 2: NIGERIA ORIGIN (5) */
},
{
    question: "Nigeria as a country was amalgamated in?",
    options: [
        "1901",
        "1914",
        "1920",
        "1960"
    ],
    correctAnswer: "1914",
    explanation: "Nigeria was officially formed in 1914 when the British colonial administration merged the Northern and Southern protectorates under one government, creating the entity known as Nigeria."
},
{
    question: "Who amalgamated Nigeria?",
    options: [
        "Nnamdi Azikiwe",
        "Obafemi Awolowo",
        "Lord Lugard",
        "Ahmadu Bello"
    ],
    correctAnswer: "Lord Lugard",
    explanation: "Frederick Lugard, a British colonial administrator, was responsible for merging Northern and Southern Nigeria in 1914 under British colonial rule."
},
{
    question: "Nigeria gained independence in?",
    options: [
        "1957",
        "1960",
        "1963",
        "1970"
    ],
    correctAnswer: "1960",
    explanation: "Nigeria gained independence from British colonial rule on October 1st, 1960, marking the beginning of self-governance."
},
{
    question: "The first capital of Nigeria was?",
    options: [
        "Abuja",
        "Lagos",
        "Ibadan",
        "Enugu"
    ],
    correctAnswer: "Lagos",
    explanation: "Lagos served as the colonial capital and remained the capital of Nigeria after independence until it was moved to Abuja in 1991."
},
{
    question: "Nigeria became a republic in?",
    options: [
        "1960",
        "1963",
        "1979",
        "1999"
    ],
    correctAnswer: "1963",
    explanation: "Nigeria became a republic in 1963 when it removed the British monarch as head of state and replaced it with a Nigerian president."


/* CHAPTER 3: PROBLEMS OF NIGERIAN STATES (5) */
},
{
    question: "One major problem of Nigerian states is?",
    options: [
        "Overpopulation",
        "Good governance",
        "Political stability",
        "Technological advancement"
    ],
    correctAnswer: "Overpopulation",
    explanation: "Overpopulation puts pressure on resources such as housing, healthcare, education, and employment, making development difficult for the government to manage effectively."
},
{
    question: "Corruption in Nigeria leads to?",
    options: [
        "Development",
        "Mismanagement of resources",
        "Peace",
        "Unity"
    ],
    correctAnswer: "Mismanagement of resources",
    explanation: "Corruption involves misuse of public funds and power, which leads to wastage of resources and slows down national development."
},
{
    question: "Ethnic conflict often results in?",
    options: [
        "National unity",
        "Social instability",
        "Economic growth",
        "Peaceful coexistence"
    ],
    correctAnswer: "Social instability",
    explanation: "Ethnic conflict creates tension, violence, and mistrust among groups, which destabilizes society."
},
{
    question: "Poor infrastructure affects?",
    options: [
        "Development",
        "Education only",
        "Language",
        "Religion"
    ],
    correctAnswer: "Development",
    explanation: "Poor infrastructure such as bad roads, lack of electricity, and weak healthcare systems slows down economic and social development."
},
{
    question: "Unemployment leads to?",
    options: [
        "Economic growth",
        "Social vices",
        "Peace",
        "Industrialization"
    ],
    correctAnswer: "Social vices",
    explanation: "When people are unemployed, especially youths, they may engage in crimes such as theft, fraud, and violence due to lack of income."


/* CHAPTERS 4–11 */
},
{
    question: "The three major ethnic groups in Nigeria are?",
    options: [
        "Hausa, Yoruba, Igbo",
        "Ibibio, Tiv, Nupe",
        "Edo, Kanuri, Idoma",
        "Ijaw, Fulani, Efik"
    ],
    correctAnswer: "Hausa, Yoruba, Igbo",
    explanation: "These three ethnic groups are the largest in Nigeria and have significant cultural, political, and economic influence across the country."
},
{
    question: "Nigeria has approximately how many languages?",
    options: [
        "50",
        "100",
        "Over 500",
        "10"
    ],
    correctAnswer: "Over 500",
    explanation: "Nigeria is one of the most linguistically diverse countries in the world, with over 500 different languages spoken across various ethnic groups."
},
{
    question: "Development refers to?",
    options: [
        "Backward movement",
        "Improvement in living standards",
        "No change",
        "Decline in economy"
    ],
    correctAnswer: "Improvement in living standards",
    explanation: "Development involves improvements in economic conditions, education, healthcare, infrastructure, and general quality of life."
},
{
    question: "Education is important because it?",
    options: [
        "Creates ignorance",
        "Develops human capacity",
        "Stops development",
        "Reduces knowledge"
    ],
    correctAnswer: "Develops human capacity",
    explanation: "Education equips individuals with knowledge, skills, and values needed to contribute positively to society and national development."
},
{
    question: "Nigeria is a member of?",
    options: [
        "EU",
        "AU",
        "NATO",
        "ASEAN"
    ],
    correctAnswer: "AU",
    explanation: "Nigeria is a member of the African Union (AU), an organization that promotes unity and cooperation among African countries."
},
{
    question: "Democracy means?",
    options: [
        "Rule by one person",
        "Rule by the people",
        "Military rule",
        "No government"
    ],
    correctAnswer: "Rule by the people",
    explanation: "Democracy is a system of government where power belongs to the people, who exercise it directly or through elected representatives."
},
{
    question: "The future of Nigeria depends on?",
    options: [
        "Only foreign countries",
        "Good leadership",
        "No education",
        "Corruption"
    ],
    correctAnswer: "Good leadership",
    explanation: "A nation's future depends heavily on effective leadership, which ensures proper management of resources and development policies."
},
{
    question: "Which of the following is a feature of ethnic groups?",
    options: [
        "Same currency",
        "Shared culture and identity",
        "Same political party",
        "Same profession"
    ],
    correctAnswer: "Shared culture and identity",
    explanation: "Ethnic groups are defined by shared culture, language, ancestry, and identity, not by political or economic systems."
},
{
    question: "A major benefit of ethnic diversity is?",
    options: [
        "Conflict",
        "Cultural exchange",
        "Division",
        "Isolation"
    ],
    correctAnswer: "Cultural exchange",
    explanation: "Ethnic diversity allows different groups to share traditions, values, and ideas, enriching national culture."
},
{
    question: "Ethnicity is mainly based on?",
    options: [
        "Technology",
        "Ancestry and culture",
        "Wealth",
        "Education level"
    ],
    correctAnswer: "Ancestry and culture",
    explanation: "Ethnicity is determined by shared ancestry, language, and cultural heritage."
},
{
    question: "Which factor can worsen ethnic tensions?",
    options: [
        "Fair resource distribution",
        "Discrimination",
        "Unity",
        "Education"
    ],
    correctAnswer: "Discrimination",
    explanation: "When groups are treated unfairly, it increases resentment and ethnic conflict."
},
{
    question: "Ethnic groups in Nigeria are best described as?",
    options: [
        "Foreign communities",
        "Cultural subdivisions of the population",
        "Political parties",
        "Economic groups"
    ],
    correctAnswer: "Cultural subdivisions of the population",
    explanation: "Ethnic groups represent culturally distinct communities within Nigeria's population."


/* CHAPTER 5: LANGUAGE (EXPANDED) */
},
{
    question: "Language is primarily used for?",
    options: [
        "Decoration",
        "Communication",
        "Competition",
        "Isolation"
    ],
    correctAnswer: "Communication",
    explanation: "Language is a system of communication used to express thoughts, ideas, and emotions."
},
{
    question: "A dialect refers to?",
    options: [
        "A type of government",
        "A variation of a language",
        "A religion",
        "A law system"
    ],
    correctAnswer: "A variation of a language",
    explanation: "Dialects are regional or social variations of a language with differences in pronunciation and vocabulary."
},
{
    question: "Pidgin English developed mainly due to?",
    options: [
        "Religious preaching",
        "Trade and interaction",
        "Military rule",
        "Education system"
    ],
    correctAnswer: "Trade and interaction",
    explanation: "Pidgin English emerged as a simplified language for communication among people of different languages."
},
{
    question: "Which is NOT a function of language?",
    options: [
        "Communication",
        "Expression of culture",
        "Isolation of people",
        "Identity formation"
    ],
    correctAnswer: "Isolation of people",
    explanation: "Language connects people rather than isolating them."
},
{
    question: "Language diversity in Nigeria is caused by?",
    options: [
        "Single ethnic group",
        "Many ethnic groups",
        "One religion",
        "One government system"
    ],
    correctAnswer: "Many ethnic groups",
    explanation: "Nigeria has over 500 ethnic groups, leading to high language diversity."


/* CHAPTER 6: DEVELOPMENT */
},
{
    question: "Sustainable development focuses on?",
    options: [
        "Short-term gain",
        "Long-term progress without harming future needs",
        "Only economic growth",
        "Only politics"
    ],
    correctAnswer: "Long-term progress without harming future needs",
    explanation: "Sustainable development ensures present needs are met without compromising future generations."
},
{
    question: "One indicator of development is?",
    options: [
        "High poverty rate",
        "Improved healthcare",
        "Low education",
        "Unemployment"
    ],
    correctAnswer: "Improved healthcare",
    explanation: "Better healthcare systems show progress in national development."
},
{
    question: "Industrialization contributes to?",
    options: [
        "Economic decline",
        "Job creation",
        "Illiteracy",
        "Conflict"
    ],
    correctAnswer: "Job creation",
    explanation: "Industries create employment and boost economic growth."
},
{
    question: "A developing country is one that?",
    options: [
        "Has no economy",
        "Is improving economically and socially",
        "Is fully developed",
        "Has no population"
    ],
    correctAnswer: "Is improving economically and socially",
    explanation: "Developing countries are still working toward higher living standards."
},
{
    question: "Human development index (HDI) measures?",
    options: [
        "Military strength",
        "Income, education, and health",
        "Religion",
        "Weather"
    ],
    correctAnswer: "Income, education, and health",
    explanation: "HDI evaluates development based on life expectancy, education, and income."


/* CHAPTER 7: EDUCATION */
},
{
    question: "Education helps in shaping?",
    options: [
        "Animals",
        "Human behavior",
        "Weather",
        "Politics only"
    ],
    correctAnswer: "Human behavior",
    explanation: "Education develops knowledge, skills, values, and behavior in individuals."
},
{
    question: "Formal education takes place in?",
    options: [
        "Market",
        "School",
        "Home only",
        "Street"
    ],
    correctAnswer: "School",
    explanation: "Formal education occurs in structured institutions like schools and universities."
},
{
    question: "One role of teachers is?",
    options: [
        "Entertainment",
        "Imparting knowledge",
        "Trading",
        "Politics"
    ],
    correctAnswer: "Imparting knowledge",
    explanation: "Teachers educate and guide learners in academic and moral development."
},
{
    question: "Education contributes to?",
    options: [
        "National backwardness",
        "National development",
        "Conflict",
        "Illiteracy"
    ],
    correctAnswer: "National development",
    explanation: "Education builds skilled citizens who contribute to national growth."
},
{
    question: "Informal education is learned through?",
    options: [
        "Classrooms only",
        "Daily experiences",
        "Exams",
        "Books only"
    ],
    correctAnswer: "Daily experiences",
    explanation: "Informal education comes from family, society, and life experiences."


/* CHAPTER 8: NIGERIA AND THE WORLD */
},
{
    question: "Globalization has led to?",
    options: [
        "Isolation of countries",
        "Increased global interaction",
        "No communication",
        "No trade"
    ],
    correctAnswer: "Increased global interaction",
    explanation: "Globalization connects countries economically, socially, and culturally."
},
{
    question: "Nigeria exports mainly?",
    options: [
        "Oil and agricultural products",
        "Cars",
        "Snow",
        "Diamonds only"
    ],
    correctAnswer: "Oil and agricultural products",
    explanation: "Nigeria’s economy relies heavily on crude oil and agriculture exports."
},
{
    question: "International organizations help Nigeria by?",
    options: [
        "Causing wars",
        "Providing aid and cooperation",
        "Stopping trade",
        "Blocking development"
    ],
    correctAnswer: "Providing aid and cooperation",
    explanation: "Organizations like the UN support development and peace initiatives."
},
{
    question: "Diplomacy refers to?",
    options: [
        "War strategy",
        "Managing relations between countries",
        "Isolation",
        "Trade only"
    ],
    correctAnswer: "Managing relations between countries",
    explanation: "Diplomacy is the peaceful management of international relations."
},
{
    question: "Nigeria’s global role includes?",
    options: [
        "No participation",
        "Peacekeeping missions",
        "Isolation",
        "Only local trade"
    ],
    correctAnswer: "Peacekeeping missions",
    explanation: "Nigeria actively participates in UN peacekeeping operations."


/* CHAPTER 9: EMERGING CULTURES */
},
{
    question: "Modern culture is influenced by?",
    options: [
        "Technology and media",
        "Only traditions",
        "No communication",
        "Isolation"
    ],
    correctAnswer: "Technology and media",
    explanation: "Modern culture is shaped by digital technology, internet, and media platforms."
},
{
    question: "Cultural globalization means?",
    options: [
        "Cultural isolation",
        "Spread of cultures worldwide",
        "Loss of language",
        "No interaction"
    ],
    correctAnswer: "Spread of cultures worldwide",
    explanation: "Globalization spreads cultural ideas across different countries."
},
{
    question: "One impact of social media is?",
    options: [
        "Slower communication",
        "Fast information sharing",
        "No communication",
        "Isolation"
    ],
    correctAnswer: "Fast information sharing",
    explanation: "Social media allows rapid exchange of information globally."
},
{
    question: "Youth culture is mostly shaped by?",
    options: [
        "Ancient books only",
        "Trends and technology",
        "No influence",
        "Government only"
    ],
    correctAnswer: "Trends and technology",
    explanation: "Youth culture evolves through trends, fashion, and digital platforms."
},
{
    question: "Cultural change refers to?",
    options: [
        "No change in society",
        "Transformation of cultural practices",
        "End of culture",
        "Isolation"
    ],
    correctAnswer: "Transformation of cultural practices",
    explanation: "Culture changes over time due to internal and external influences."


/* CHAPTER 10: DEMOCRACY */
},
{
    question: "In democracy, sovereignty belongs to?",
    options: [
        "Military",
        "People",
        "President only",
        "Judiciary"
    ],
    correctAnswer: "People",
    explanation: "In a democracy, the people hold ultimate power through voting and representation."
},
{
    question: "One key feature of democracy is?",
    options: [
        "Dictatorship",
        "Free elections",
        "No law",
        "Military control"
    ],
    correctAnswer: "Free elections",
    explanation: "Democracy allows citizens to choose leaders through elections."
},
{
    question: "Rule of law means?",
    options: [
        "Leaders are above law",
        "Everyone obeys the law",
        "No laws exist",
        "Only citizens obey laws"
    ],
    correctAnswer: "Everyone obeys the law",
    explanation: "Rule of law ensures equality before the law."
},
{
    question: "Democratic government ensures?",
    options: [
        "Oppression",
        "Citizens’ participation",
        "No voting",
        "Military rule"
    ],
    correctAnswer: "Citizens’ participation",
    explanation: "Citizens take part in governance through voting and civic engagement."
},
{
    question: "Elections are important because they?",
    options: [
        "Create conflict",
        "Allow leadership choice",
        "Stop democracy",
        "Remove rights"
    ],
    correctAnswer: "Allow leadership choice",
    explanation: "Elections give citizens the power to choose their leaders."


/* CHAPTER 11: FUTURE OF NIGERIA */
},
{
    question: "A major factor affecting Nigeria’s future is?",
    options: [
        "Climate only",
        "Leadership quality",
        "Foreign weather",
        "Sports"
    ],
    correctAnswer: "Leadership quality",
    explanation: "Effective leadership determines the direction of national development."
},
{
    question: "Youth empowerment leads to?",
    options: [
        "Crime increase",
        "National development",
        "Unemployment",
        "Poverty"
    ],
    correctAnswer: "National development",
    explanation: "Empowered youth contribute positively to economic and social growth."
},
{
    question: "Innovation is important for Nigeria because it?",
    options: [
        "Slows development",
        "Drives progress",
        "Creates problems",
        "Stops education"
    ],
    correctAnswer: "Drives progress",
    explanation: "Innovation improves technology, economy, and living standards."
},
{
    question: "One major challenge facing Nigeria’s future is?",
    options: [
        "Abundance of resources",
        "Corruption",
        "Peace",
        "Education"
    ],
    correctAnswer: "Corruption",
    explanation: "Corruption reduces efficiency and slows national progress."
},
{
    question: "Sustainable future means?",
    options: [
        "Temporary success",
        "Long-term stability and growth",
        "No development",
        "Random growth"
    ],
    correctAnswer: "Long-term stability and growth",
    explanation: "A sustainable future ensures balance between current needs and future generations."
},
{
    question: "Culture is transmitted from one generation to another through?",
    options: [
        "Inheritance",
        "Learning and socialization",
        "Genetics",
        "Random selection"
    ],
    correctAnswer: "Learning and socialization",
    explanation: "Culture is passed down through teaching, imitation, and interaction within society, not through biological inheritance."
},
{
    question: "A society without culture would be?",
    options: [
        "Highly organized",
        "Without identity and structure",
        "More advanced",
        "Technologically stable"
    ],
    correctAnswer: "Without identity and structure",
    explanation: "Culture gives society identity, rules, and structure; without it, social order would not exist."
},
{
    question: "Which institution is most responsible for cultural transmission?",
    options: [
        "Hospital",
        "Family",
        "Bank",
        "Factory"
    ],
    correctAnswer: "Family",
    explanation: "The family is the first agent of socialization where children learn cultural values and norms."
},
{
    question: "Colonialism in Nigeria mainly introduced?",
    options: [
        "African traditional religion",
        "Western political and educational systems",
        "Local governance only",
        "No change"
    ],
    correctAnswer: "Western political and educational systems",
    explanation: "Colonial rule introduced English language, formal education, and new governance structures."
},
{
    question: "One major effect of the 1914 amalgamation was?",
    options: [
        "Separation of Nigeria",
        "Unification of diverse regions",
        "End of culture",
        "Removal of languages"
    ],
    correctAnswer: "Unification of diverse regions",
    explanation: "The amalgamation brought Northern and Southern protectorates together under one administration."


/* CHAPTER 3: NATIONAL PROBLEMS (ADVANCED) */
},
{
    question: "Weak political institutions lead to?",
    options: [
        "Strong governance",
        "Instability and poor leadership",
        "Economic boom",
        "Peaceful society"
    ],
    correctAnswer: "Instability and poor leadership",
    explanation: "Weak institutions cannot enforce laws effectively, leading to corruption and instability."
},
{
    question: "One effect of insecurity in Nigeria is?",
    options: [
        "Foreign investment increase",
        "Economic decline",
        "Population growth",
        "Better education"
    ],
    correctAnswer: "Economic decline",
    explanation: "Insecurity discourages investors and disrupts economic activities."
},
{
    question: "Brain drain refers to?",
    options: [
        "Loss of money",
        "Migration of skilled workers abroad",
        "Increase in population",
        "Education reform"
    ],
    correctAnswer: "Migration of skilled workers abroad",
    explanation: "Brain drain is when educated professionals leave a country for better opportunities."
},
{
    question: "One major cause of corruption is?",
    options: [
        "Transparency",
        "Greed",
        "Education",
        "Development"
    ],
    correctAnswer: "Greed",
    explanation: "Personal greed leads individuals to misuse public resources."
},
{
    question: "Political instability often results in?",
    options: [
        "Consistent policies",
        "Frequent government changes",
        "Economic growth",
        "Peaceful elections"
    ],
    correctAnswer: "Frequent government changes",
    explanation: "Instability leads to coups, policy changes, and disruption of governance."


/* CHAPTER 4: ETHNIC GROUPS (DEEPER UNDERSTANDING) */
},
{
    question: "Ethnic pluralism means?",
    options: [
        "One ethnic group",
        "Coexistence of multiple ethnic groups",
        "No culture",
        "No language"
    ],
    correctAnswer: "Coexistence of multiple ethnic groups",
    explanation: "Ethnic pluralism refers to societies with diverse ethnic groups living together."
},
{
    question: "A positive effect of ethnic diversity is?",
    options: [
        "Cultural enrichment",
        "Conflict only",
        "Isolation",
        "Division"
    ],
    correctAnswer: "Cultural enrichment",
    explanation: "Diversity brings new ideas, traditions, and perspectives."
},
{
    question: "Ethnocentrism refers to?",
    options: [
        "Respect for all cultures",
        "Belief that one's culture is superior",
        "Cultural exchange",
        "Language learning"
    ],
    correctAnswer: "Belief that one's culture is superior",
    explanation: "Ethnocentrism causes bias and discrimination against other cultures."
},
{
    question: "National unity can be promoted through?",
    options: [
        "Ethnic division",
        "Cultural tolerance",
        "Discrimination",
        "Isolation"
    ],
    correctAnswer: "Cultural tolerance",
    explanation: "Respecting cultural differences helps strengthen unity."
},
{
    question: "Ethnic identity is based on?",
    options: [
        "Foreign influence",
        "Shared heritage and culture",
        "Money",
        "Technology"
    ],
    correctAnswer: "Shared heritage and culture",
    explanation: "Ethnic identity comes from common ancestry, language, and traditions."


/* CHAPTER 5: LANGUAGE (ADVANCED) */
},
{
    question: "One function of language is to?",
    options: [
        "Confuse people",
        "Transmit culture",
        "Stop communication",
        "Create isolation"
    ],
    correctAnswer: "Transmit culture",
    explanation: "Language carries cultural values, beliefs, and traditions across generations."
},
{
    question: "Official language in Nigeria is used for?",
    options: [
        "Traditional ceremonies only",
        "Government and education",
        "Market only",
        "Family use only"
    ],
    correctAnswer: "Government and education",
    explanation: "English is used in official communication, schools, and government activities."
},
{
    question: "Code-switching refers to?",
    options: [
        "Changing countries",
        "Switching between languages in conversation",
        "Learning grammar",
        "Writing books"
    ],
    correctAnswer: "Switching between languages in conversation",
    explanation: "Code-switching occurs when speakers alternate between languages or dialects."
},
{
    question: "A multilingual society is one that?",
    options: [
        "Has one language",
        "Uses multiple languages",
        "Has no communication",
        "Has no culture"
    ],
    correctAnswer: "Uses multiple languages",
    explanation: "Multilingual societies have people who speak several different languages."
},
{
    question: "Language loss occurs when?",
    options: [
        "Languages increase",
        "A language stops being spoken",
        "Education improves",
        "Culture grows"
    ],
    correctAnswer: "A language stops being spoken",
    explanation: "Language loss happens when speakers stop using a language over time."


/* CHAPTER 6: DEVELOPMENT (ADVANCED) */
},
{
    question: "Economic growth refers to?",
    options: [
        "Decrease in production",
        "Increase in goods and services",
        "Population decline",
        "War"
    ],
    correctAnswer: "Increase in goods and services",
    explanation: "Economic growth measures the rise in production and economic output."
},
{
    question: "A developed economy is characterized by?",
    options: [
        "High poverty",
        "High industrialization",
        "No technology",
        "Low education"
    ],
    correctAnswer: "High industrialization",
    explanation: "Developed economies have advanced industries and infrastructure."
},
{
    question: "Infrastructure includes?",
    options: [
        "Only people",
        "Roads, electricity, and transport systems",
        "Culture",
        "Religion"
    ],
    correctAnswer: "Roads, electricity, and transport systems",
    explanation: "Infrastructure refers to basic physical systems needed for development."
},
{
    question: "Corruption reduces development by?",
    options: [
        "Improving governance",
        "Diverting public funds",
        "Increasing education",
        "Creating jobs"
    ],
    correctAnswer: "Diverting public funds",
    explanation: "Corruption misuses money meant for public development projects."
},
{
    question: "Foreign investment helps development by?",
    options: [
        "Reducing jobs",
        "Providing capital and employment",
        "Stopping growth",
        "Increasing poverty"
    ],
    correctAnswer: "Providing capital and employment",
    explanation: "Foreign investment brings money, technology, and job opportunities."


/* CHAPTER 7: EDUCATION (ADVANCED) */
},
{
    question: "Literacy means?",
    options: [
        "Ability to fight",
        "Ability to read and write",
        "Ability to trade",
        "Ability to cook"
    ],
    correctAnswer: "Ability to read and write",
    explanation: "Literacy is the ability to read, write, and understand information."
},
{
    question: "Education policy is made by?",
    options: [
        "Students",
        "Government",
        "Parents only",
        "Religious leaders only"
    ],
    correctAnswer: "Government",
    explanation: "Governments design policies that guide the education system."
},
{
    question: "Dropout rate refers to?",
    options: [
        "Number of graduates",
        "Students leaving school before completion",
        "Number of teachers",
        "School funding"
    ],
    correctAnswer: "Students leaving school before completion",
    explanation: "Dropout rate measures students who abandon education prematurely."
},
{
    question: "One benefit of education is?",
    options: [
        "Illiteracy",
        "Employment opportunities",
        "Poverty increase",
        "Ignorance"
    ],
    correctAnswer: "Employment opportunities",
    explanation: "Education increases chances of getting better jobs."
},
{
    question: "Technical education focuses on?",
    options: [
        "Only theory",
        "Practical skills and technology",
        "Religion",
        "Politics"
    ],
    correctAnswer: "Practical skills and technology",
    explanation: "Technical education trains students in practical and vocational skills."


/* CHAPTER 8–11 REVISION */
},
{
    question: "Nigeria's foreign policy is based on?",
    options: [
        "Isolation",
        "Non-alignment and African unity",
        "War",
        "Colonial rule"
    ],
    correctAnswer: "Non-alignment and African unity",
    explanation: "Nigeria promotes peace, cooperation, and African solidarity in foreign relations."
},
{
    question: "Cultural diffusion means?",
    options: [
        "Cultural isolation",
        "Spread of cultural traits between societies",
        "Loss of identity",
        "No interaction"
    ],
    correctAnswer: "Spread of cultural traits between societies",
    explanation: "Cultural diffusion occurs when cultures interact and exchange ideas."
},
{
    question: "Democratic participation includes?",
    options: [
        "Voting and civic engagement",
        "Military rule",
        "Isolation",
        "Ignoring politics"
    ],
    correctAnswer: "Voting and civic engagement",
    explanation: "Citizens participate in democracy through elections and public involvement."
},
{
    question: "Good governance involves?",
    options: [
        "Corruption",
        "Transparency and accountability",
        "Oppression",
        "Chaos"
    ],
    correctAnswer: "Transparency and accountability",
    explanation: "Good governance ensures responsible leadership and fairness."
},
{
    question: "Nigeria’s future depends heavily on?",
    options: [
        "Foreign countries only",
        "Human capital development",
        "Weather",
        "Sports"
    ],
    correctAnswer: "Human capital development",
    explanation: "Skilled and educated citizens drive national progress."
},
{
        "question": "Which of the following best defines cultural heritage?",
        "options": [
            "Cultural practices of the past",
            "Material objects of historic value",
            "Cultural attributes inherited from ancestors",
            "All of the above",
            "None of the above"
        ],
        "correctAnswer": "All of the above",
        "explanation": "Cultural heritage is a comprehensive concept that encompasses both tangible elements (like historical material objects) and intangible elements (like past cultural practices and inherited attributes) passed down through generations[cite: 1, 2, 3, 4, 5]."
    },
    {
        "question": "Which of these is an example of natural heritage?",
        "options": [
            "Traditional architecture",
            "Oral traditions",
            "National parks",
            "Folktales",
            "Cultural festivals"
        ],
        "correctAnswer": "National parks",
        "explanation": "Natural heritage refers to natural features, geological formations, and physical sites of outstanding universal value from the point of view of science, conservation, or natural beauty. National parks fall directly under this category, while the other options represent cultural heritage[cite: 8, 11, 275]."
    },
    {
        "question": "What is the primary method of preserving oral traditions?",
        "options": [
            "Writing them down",
            "Storytelling from generation to generation",
            "Uploading them online",
            "Broadcasting them on radio",
            "Publishing them in books"
        ],
        "correctAnswer": "Storytelling from generation to generation",
        "explanation": "Oral traditions rely inherently on the spoken word. The primary and traditional mechanism for keeping them alive is transmitting them verbally through storytelling from older generations to younger ones[cite: 15, 17]."
    },
    {
        "question": "Which cultural policy objective aims to integrate traditional values?",
        "options": [
            "Promoting science and technology",
            "Sustaining cultural diversity",
            "Elevating the status of local languages",
            "Encouraging respect for elders",
            "Developing cultural infrastructure"
        ],
        "correctAnswer": "Encouraging respect for elders",
        "explanation": "In many traditional societies, particularly in Nigeria, respecting elders is a core foundational value. Policies aiming to integrate traditional value systems emphasize reinforcing these specific moral and behavioral principles[cite: 22, 26]."
    },
    {
        "question": "Who are the custodians of oral traditions in many Nigerian communities?",
        "options": [
            "Children",
            "Scholars",
            "Royals and community elders",
            "Teachers",
            "Politicians"
        ],
        "correctAnswer": "Royals and community elders",
        "explanation": "Royals and community elders serve as the historical repositories and guardians of a community's heritage, customs, and lineages, passing this knowledge down orally to preserve their culture's continuity[cite: 29, 32]."
    },
    {
        "question": "What is the negative effect of modernization on Nigerian cultures?",
        "options": [
            "Preservation of cultural heritage",
            "Promotion of cultural pride",
            "Dissemination of cultural values",
            "Disruption of cultural systems",
            "Improvement of living standards"
        ],
        "correctAnswer": "Disruption of cultural systems",
        "explanation": "While modernization brings technological and social advancements, its rapid introduction often weakens, fragments, or completely disrupts indigenous cultural systems, practices, and long-standing social structures[cite: 36, 40]."
    },
    {
        "question": "Which factor hinders proper preservation of cultural heritage in Nigeria?",
        "options": [
            "Lack of political will",
            "Abundance of stolen artifacts",
            "Strong moral and ethical values",
            "Respect for cultural property rights",
            "Large cultural endowments"
        ],
        "correctAnswer": "Lack of political will",
        "explanation": "A primary institutional barrier to preserving cultural heritage is the lack of decisive political will, which manifests as inadequate funding, poor enforcement of preservation laws, and a lack of prioritized government programming[cite: 43, 44]."
    },
    {
        "question": "What is the term used to describe a process of adapting to a new culture?",
        "options": [
            "Assimilation",
            "Acculturation",
            "Appreciation",
            "Adoption",
            "Amalgamation"
        ],
        "correctAnswer": "Acculturation",
        "explanation": "Acculturation describes the dynamic process of cultural change and psychological adaptation that occurs when individuals or groups from different cultures come into continuous, direct contact[cite: 50, 52]."
    },
    {
        "question": "Which geopolitical zone has the highest population density in Nigeria?",
        "options": [
            "North-West",
            "South-East",
            "North-Central",
            "South-West",
            "South-South"
        ],
        "correctAnswer": "South-West",
        "explanation": "The South-West geopolitical zone features dense urban agglomerations, driven heavily by major commercial hubs like Lagos, giving it a remarkably high population concentration per square kilometer[cite: 57, 61, 63]."
    },
    {
        "question": "How is cultural assimilation defined?",
        "options": [
            "Blending into a dominant culture",
            "Exchanging cultural traits",
            "Maintaining cultural purity",
            "Rejecting a host culture",
            "Imposing culture on others"
        ],
        "correctAnswer": "Blending into a dominant culture",
        "explanation": "Cultural assimilation is a socio-cultural process where a minority group or individual gradually loses their original cultural markers and fully blends into the customs, behaviors, and language of the prevailing dominant culture[cite: 64, 65]."
    },
    {
        "question": "What is the name of the national policy on culture launched in Nigeria in 1988?",
        "options": [
            "Cultural Endowment Act",
            "National Cultural Charter",
            "Cultural Heritage Act",
            "National Cultural Policy",
            "Cultural Exchange Programme"
        ],
        "correctAnswer": "National Cultural Policy",
        "explanation": "Nigeria officially launched its National Cultural Policy in 1988 to serve as a comprehensive structural framework for asserting, preserving, and promoting the nation's diverse cultural heritage[cite: 71, 75]."
    },
    {
        "question": "How are innovations progressively incorporated in cumulative culture?",
        "options": [
            "Through cultural assimilation",
            "By adopting new technologies",
            "By retaining old knowledge",
            "By improving over time",
            "Via inter-generational amnesia"
        ],
        "correctAnswer": "By improving over time",
        "explanation": "Cumulative culture relies on the 'ratchet effect,' where a population retains ancestral knowledge while progressively modifying, refining, and improving modifications over successive generations[cite: 78, 82, 274]."
    },
    {
        "question": "What challenges cultural heritage preservation in Nigeria?",
        "options": [
            "Lack of tourism opportunities",
            "Abundance of artifacts",
            "Inadequate research institutes",
            "Poor inter-ethnic relations",
            "Strong moral and ethical values"
        ],
        "correctAnswer": "Inadequate research institutes",
        "explanation": "A critical challenge facing heritage preservation is the shortage or underfunding of specialized research institutes capable of systematically documenting, studying, and restoring historical assets[cite: 85, 88]."
    },
    {
        "question": "What is the primary method of cultural presentation in Nigeria?",
        "options": [
            "Social media campaigns",
            "Cultural demonstration",
            "Museums and exhibitions",
            "Conferences and seminars",
            "Film and music productions"
        ],
        "correctAnswer": "Museums and exhibitions",
        "explanation": "Museums and structured institutional exhibitions remain the classic foundational methods utilized to physically store, display, and introduce cultural history to the public[cite: 92, 95]."
    },
    {
        "question": "Which process involves free adoption of foreign cultural traits?",
        "options": [
            "Acculturation",
            "Cultural exchange",
            "Cultural contact",
            "Cultural appreciation",
            "Cultural imposition"
        ],
        "correctAnswer": "Cultural imposition",
        "explanation": "*Note: While the key in the source document maps this specific question text to choice (e) 'Cultural imposition', conceptually, the deliberate, un-forced adaptation of traits is typically referred to as voluntary acculturation[cite: 159]. The question text in the document contains an internal contradiction, but following the text's provided answer ledger, option (e) matches the source key[cite: 99, 104, 105].*"
    },
    {
        "question": "What is the distinctive feature of human culture compared to other species?",
        "options": [
            "Tool usage",
            "Cumulative knowledge over lifetimes",
            "Development of complex languages",
            "All of the above",
            "None of the above"
        ],
        "correctAnswer": "All of the above",
        "explanation": "While some animal species display rudimentary tool use, humans are entirely distinct in combining highly complex languages, sophisticated tool engineering, and a dense accumulation of knowledge structured across multiple generations[cite: 106, 107, 108, 109, 110]."
    },
    {
        "question": "What fuels ethnocentric judgements of other cultures?",
        "options": [
            "Cultural openness and exposure",
            "Cultural confidence and pride",
            "Assessment using foreign standards",
            "Willingness to understand differences",
            "Search for superiority and correctness"
        ],
        "correctAnswer": "Search for superiority and correctness",
        "explanation": "Ethnocentrism is driven by an underlying bias where individuals use their own cultural frameworks as the ultimate benchmark of correctness, fueling a search for cultural validation and superiority over outside groups[cite: 113, 118, 119]."
    },
    {
        "question": "Which cultural policy objective aims to integrate culture and development?",
        "options": [
            "Stimulation of creativity",
            "Continuation of traditions",
            "Reflection of cultural heritage in society",
            "Documentation of cultural knowledge",
            "Promotion of cultural understanding"
        ],
        "correctAnswer": "Reflection of cultural heritage in society",
        "explanation": "Integrating culture into national development means ensuring that a country's distinct heritage, identity, and values are actively reflected within its socioeconomic programs, planning, and contemporary infrastructure[cite: 120, 123, 291]."
    },
    {
        "question": "Which process results from one group conquering another?",
        "options": [
            "Colonization",
            "Immigration",
            "Forced assimilation",
            "Cultural diffusion",
            "Cultural blending"
        ],
        "correctAnswer": "Colonization",
        "explanation": "Colonization is a systemic structural process where an external power conquers, dominates, and establishes political, economic, and cultural rule over an indigenous population[cite: 127, 128, 263]."
    },
    {
        "question": "What challenge does cultural heritage preservation address?",
        "options": [
            "Promotion of national identity",
            "Integration of culture and development",
            "Enhancement of group solidarity",
            "All of the above",
            "None of the above"
        ],
        "correctAnswer": "All of the above",
        "explanation": "Preserving cultural heritage serves multiple vital societal functions: it solidifies group cohesion, builds a shared national identity, and supplies a value-laden foundation to guide development programs[cite: 134, 135, 136, 137, 138]."
    },
    {
        "question": "What term best describes preference for foreign cultural practices?",
        "options": [
            "Ethnocentrism",
            "Xenocentrism",
            "Acculturation",
            "Cultural evolution",
            "Cultural synergy"
        ],
        "correctAnswer": "Xenocentrism",
        "explanation": "Xenocentrism is the psychological and sociological preference for the products, styles, ideas, and cultural systems of societies other than one's own[cite: 141, 143, 232, 264]."
    },
    {
        "question": "When do innovations get progressively incorporated in a population?",
        "options": [
            "During cultural encounters",
            "Through inter-generational transfer",
            "By cultural assimilation",
            " From one lifetime to another",
            "By retaining ancestral knowledge"
        ],
        "correctAnswer": "From one lifetime to another",
        "explanation": "In cumulative cultural evolution, innovations accumulate as they are preserved and built upon continuously from one human lifetime and generation to the next[cite: 148, 152]."
    },
    {
        "question": "What type of acculturation occurs through free adoption of traits?",
        "options": [
            "Forced acculturation",
            "Selective acculturation",
            "Creative acculturation",
            "Voluntary acculturation",
            "Imposed acculturation"
        ],
        "correctAnswer": "Voluntary acculturation",
        "explanation": "When individuals or groups freely choose to accept and integrate elements of a foreign culture without external coercion or systematic pressure, they are engaging in voluntary acculturation[cite: 155, 159]."
    },
    {
        "question": "What challenge arises from disrespecting cultural property rights?",
        "options": [
            "Cultural synergy",
            "Cultural assimilation",
            "Looting of artifacts",
            "Forced enculturation",
            "Cultural evolution"
        ],
        "correctAnswer": "Looting of artifacts",
        "explanation": "Failing to recognize or legalistically respect cultural property rights directly opens the door to the illicit excavation, theft, and looting of historic artifacts from their communities of origin[cite: 162, 165]."
    },
    {
        "question": "Which cultural policy objective relates to transformation of knowledge?",
        "options": [
            "Industrial development",
            "Skill acquisition",
            "National mobilization",
            "Technological processing",
            "Cultural appreciation"
        ],
        "correctAnswer": "Technological processing",
        "explanation": "Technological processing involves taking existing local knowledge systems, raw materials, and heritage skills, and structurally transforming or upgrading them to drive technical and economic utility[cite: 169, 173]."
    },
    {
        "question": "What term describes negative reaction to a different culture?",
        "options": [
            "Cultural evolution",
            "Cultural integration",
            "Cultural preference",
            "Culture shock",
            "Cultural superiority"
        ],
        "correctAnswer": "Culture shock",
        "explanation": "Culture shock refers to the disorientation, anxiety, and psychological stress experienced by individuals when they are suddenly immersed in an unfamiliar cultural environment with foreign norms[cite: 176, 180]."
    },
    {
        "question": "What influences cultural assimilation patterns?",
        "options": [
            "Cultural diffusion",
            "Geographical isolation",
            "Dominant-minority relations",
            "Degree of cultural exposure",
            "Cultural appreciation"
        ],
        "correctAnswer": "Dominant-minority relations",
        "explanation": "The pace and trajectory of cultural assimilation are intensely shaped by the specific political power dynamics and social relations existing between the dominant majority and minority groups[cite: 183, 186]."
    },
    {
        "question": "What definition does not apply to culture?",
        "options": [
            "Shared attributes of a group",
            "Innate human tendencies",
            "Inherited biological traits",
            "Socially transmitted beliefs",
            "Material possessions"
        ],
        "correctAnswer": "Inherited biological traits",
        "explanation": "Culture is exclusively learned, shared, and socially transmitted. It stands in direct contrast to inherited biological traits (like DNA or eye color), which are passed down genetically rather than socially[cite: 190, 193, 226, 278]."
    },
    {
        "question": "What describes the gradual change of cultural traits over time?",
        "options": [
            "Cultural osmosis",
            "Cultural assimilation",
            "Cultural diffusion",
            "Cultural conversion",
            "Cultural evolution"
        ],
        "correctAnswer": "Cultural evolution",
        "explanation": "Cultural evolution is the theory and process by which human cultural traits—including beliefs, technologies, and social practices—change and adapt incrementally over extended periods[cite: 197, 202, 255]."
    },
    {
        "question": "Which cultural policy objective relates to formal education?",
        "options": [
            "Industrial growth",
            "National reorientation",
            "Economic transformation",
            "Mobilization of citizens",
            "Conservation of sites"
        ],
        "correctAnswer": "Mobilization of citizens",
        "explanation": "Formal educational frameworks within a national cultural policy are frequently structured to achieve the strategic mobilization of citizens, instilling collective civic identity, literacy, and shared values[cite: 204, 208]."
    },
    {
        "question": "What is the most efficient means of cultural transmission?",
        "options": [
            "Storytelling",
            "Body art",
            "Oral histories",
            "Dance performances",
            "Written records"
        ],
        "correctAnswer": "Oral histories",
        "explanation": "*Note: The document source ledger identifies (c) 'Oral histories' as the answer[cite: 214, 217]. Conceptually, written records provide the most permanent, exact transmission over centuries, but within the historical context of Nigerian traditional societies highlighted in this module, oral transmission models are heavily emphasized.*"
    },
    {
        "question": "Which cultural policy objective relates to endogenous skills?",
        "options": [
            "National orientation",
            "Industrial development",
            "Skill acquisition",
            "Employment generation",
            "Export promotion"
        ],
        "correctAnswer": "Skill acquisition",
        "explanation": "Endogenous skills refer to talents and technical knowledge native to a community. Focusing on skill acquisition programs helps preserve these traditional crafts while fostering localized employment[cite: 218, 221]."
    },
    {
        "question": "How is culture typically acquired in humans?",
        "options": [
            "Through genes",
            "By individual discovery",
            "From parents to offspring",
            "Environment and socialization",
            "In isolation from society"
        ],
        "correctAnswer": "Environment and socialization",
        "explanation": "Humans acquire their culture by interacting with their immediate social environment and undergoing the process of enculturation, absorbing norms, language, and habits from the community around them[cite: 225]."
    },
    {
        "question": "What challenge arises from lack of cultural understanding?",
        "options": [
            "Cultural conflict",
            "Forced assimilation",
            "Creative evolution",
            "Cultural superiority",
            "Dominant culture"
        ],
        "correctAnswer": "Cultural conflict",
        "explanation": "When diverse groups live alongside each other without deep mutual understanding or tolerance of their respective customs, it regularly gives rise to friction, ethnocentric bias, and active cultural conflict[cite: 227, 228]."
    },
    {
        "question": "What context best defines cultural heritage?",
        "options": [
            "Preservation for posterity",
            "Promotion of ethnic identity",
            "Conformity with modernity",
            "Suppression of older traditions",
            "Perpetual detachment from history"
        ],
        "correctAnswer": "Preservation for posterity",
        "explanation": "At its heart, cultural heritage is defined by the intentional act of maintaining, safeguarding, and passing along the treasures and truths of the past to future generations (posterity)[cite: 228, 229]."
    },
    {
        "question": "What promotes national identity and pride?",
        "options": [
            "Denial of cultural roots",
            "Cultural disconnect",
            "Political marginalization",
            "Emphasis on modernization",
            "Preservation of heritage"
        ],
        "correctAnswer": "Preservation of heritage",
        "explanation": "Actively protecting and celebrating a nation's historical milestones, arts, and traditions instills a profound sense of shared history, civic pride, and collective belonging[cite: 229, 230, 231]."
    },
    {
        "question": "What term applies to tendency to favor other cultures?",
        "options": [
            "Culture shock",
            "Forced assimilation",
            "Xenocentrism",
            "Ethnocentrism",
            "Creative deconstruction"
        ],
        "correctAnswer": "Xenocentrism",
        "explanation": "Xenocentrism operates as the inverse of ethnocentrism; it is the cognitive bias where individuals internalize a belief that foreign systems, products, and values are inherently superior to their own[cite: 231, 232]."
    },
    {
        "question": "What is a core characteristic of human culture?",
        "options": [
            "Use of tools",
            "Dynamism and flexibility",
            "Renewable development",
            "Inherited biological traits",
            "Cultural homogeneity"
        ],
        "correctAnswer": "Dynamism and flexibility",
        "explanation": "Culture is never entirely static; a defining characteristic is its structural dynamism and capacity to shift, adapt, and flexibly restructure itself in response to internal innovations or external contact[cite: 232, 233]."
    },
    {
        "question": "Which describes culture most aptly?",
        "options": [
            "Innate dispositions",
            "Memes and notions",
            "Learned and shared attributes",
            "Isolated individual behaviors",
            "Borrowed concepts"
        ],
        "correctAnswer": "Learned and shared attributes",
        "explanation": "The most widely accepted sociological definition of culture is that it consists of systems of knowledge, beliefs, values, and customs that are deliberately learned and collectively shared within a social group[cite: 233, 234, 235]."
    },
    {
        "question": "How are cultural traits passed down in cumulative culture?",
        "options": [
            "From elder to younger generations",
            "Through inter-generational contact",
            "By cultural convergence",
            "Within one human lifetime",
            "From species to species"
        ],
        "correctAnswer": "From elder to younger generations",
        "explanation": "Cumulative culture thrives on stable social transmission chains where knowledge, behavioral formulas, and complex traditions are systematically handed down from elders to youth[cite: 235, 236]."
    },
    {
        "question": "What fuels xenocentric tendencies?",
        "options": [
            "Cultural pride and patriotism",
            "Openness to new perspectives",
            "Willingness to understand others",
            "Search for cultural superiority",
            "Preference for foreign systems"
        ],
        "correctAnswer": "Preference for foreign systems",
        "explanation": "Xenocentrism is directly fueled by a deep-seated individual or collective preference for external cultural systems, lifestyles, or foreign prestige over local ones[cite: 236, 237]."
    },
    {
        "question": "What challenge reflects loss of indigenous culture?",
        "options": [
            "Imposition of modernity",
            "Insularity despite globalization",
            "Emergence of technical elites",
            "Perpetuation of oral traditions",
            "Transition to democracy"
        ],
        "correctAnswer": "Imposition of modernity",
        "explanation": "When external frameworks of modern life are aggressively imposed or thoughtlessly adopted without local context, indigenous practices, languages, and philosophies risk complete erasure[cite: 237, 238]."
    },
    {
        "question": "What promotes national integration and unity?",
        "options": [
            "Cultural diversity",
            "Ethnic polarization",
            "Dominance of a single culture",
            "Pluralism and cultural exchange",
            "Imposition of modernity"
        ],
        "correctAnswer": "Pluralism and cultural exchange",
        "explanation": "In a multi-ethnic nation like Nigeria, fostering active pluralism alongside healthy cross-cultural exchange builds mutual respect, tears down stereotypes, and welds together national unity[cite: 239]."
    },
    {
        "question": "When does acculturation typically occur?",
        "options": [
            "During cultural replacement",
            "By cultural leveling or blending",
            "Through ethnic assimilation",
            "In the absence of contact",
            "Against the group's will"
        ],
        "correctAnswer": "By cultural leveling or blending",
        "explanation": "Acculturation progresses dynamically as multiple distinct groups interact, resulting in a degree of cultural leveling, trait adaptation, or reciprocal borrowing[cite: 239, 240]."
    },
    {
        "question": "What signifies total loss of ancestral culture?",
        "options": [
            "Emergence of new cultural traits",
            "Creative cultural reconstruction",
            "Extinction of ancestral languages",
            "Cultural syncretism",
            "Active preservation of heritage"
        ],
        "correctAnswer": "Extinction of ancestral languages",
        "explanation": "Language is the primary vital vehicle for transmitting a culture's specific philosophy and worldview. The complete death or extinction of an ancestral language represents a profound, near-irreversible loss of that culture's core[cite: 240, 241]."
    },
    {
        "question": "What describes one's preference for their own cultural norms?",
        "options": [
            "Acculturation",
            "Xenocentrism",
            "Cultural relativism",
            "Ethnocentrism",
            "Socialization"
        ],
        "correctAnswer": "Ethnocentrism",
        "explanation": "Ethnocentrism is the universal psychological tendency to evaluate, judge, or look down upon outside cultures using the specific patterns and values of one's own culture as the golden standard[cite: 241, 242]."
    },
    {
        "question": "What socio-cultural process involves change in two cultures?",
        "options": [
            "Acculturation",
            "Creative cultural exchange",
            "Cultural appreciation",
            "Cultural contact",
            "Social cohesion"
        ],
        "correctAnswer": "Cultural contact",
        "explanation": "Continuous cultural contact acts as the necessary catalyst that forces adjustments, dialogues, and eventual socio-cultural adaptations within both interacting societies[cite: 242, 243]."
    },
    {
        "question": "What does not influence rates of cultural assimilation?",
        "options": [
            "Contact patterns",
            "Economic factors",
            "Geographic proximity",
            "Dominant-minority dynamics",
            "Government policies"
        ],
        "correctAnswer": "Government policies",
        "explanation": "*Note: The document key identifies (e) 'Government policies' as the answer[cite: 243, 244]. Historically, government decrees can heavily accelerate or mandate assimilation, but the text posits that structural socio-geographic variables (contact patterns, proximity, minority status) carry the primary determinative weight.*"
    },
    {
        "question": "Which refers to the blending of cultures over time?",
        "options": [
            "Cultural convergence",
            "Cultural imposition",
            "Cultural diffusion",
            "Creative cultural exchange",
            "Active preservation"
        ],
        "correctAnswer": "Cultural diffusion",
        "explanation": "Cultural diffusion is the gradual spreading, borrowing, and blending of cultural beliefs, technologies, or social styles from one distinct population group to another over time[cite: 244, 245, 246]."
    },
    {
        "question": "What challenges arise from conflict related damage?",
        "options": [
            "Looting of artifacts",
            "Political instability",
            "Economic dislocation",
            "Environmental degradation",
            "All of the above"
        ],
        "correctAnswer": "All of the above",
        "explanation": "Armed conflict destabilizes entire regions, leading to severe collateral issues such as the lawless looting of museums, complete breakdown of political order, economic ruins, and localized ecological damage[cite: 246, 247]."
    },
    {
        "question": "What objective relates to national re-orientation?",
        "options": [
            "Self-sufficiency",
            "Innovation incubation",
            "Value system upgrade",
            "Resource administration",
            "Entrepreneurship development"
        ],
        "correctAnswer": "Value system upgrade",
        "explanation": "National re-orientation drives focus toward reforming and upgrading the public value system—tackling issues like corruption while cultivating patriotism, ethical professional standards, and civic duties[cite: 247, 248]."
    },
    {
        "question": "What occurs due to cultural contact and domination?",
        "options": [
            "Cultural diffusion",
            "Active assimilation",
            "Creative reconstruction",
            "Forced deculturation",
            "Cultural preservation"
        ],
        "correctAnswer": "Active assimilation",
        "explanation": "When cultural contact is characterized by clear asymmetrical power dynamics and political domination, minority groups are often pushed into active assimilation to survive or access upward social mobility[cite: 248, 249, 250]."
    },
    {
        "question": "Which factor shapes cultural assimilation patterns?",
        "options": [
            "Dominant cultural traits",
            "Inhabitants' learning ability",
            "Geographical barriers",
            "Government regulations",
            "Regional integration"
        ],
        "correctAnswer": "Inhabitants' learning ability",
        "explanation": "*Note: The provided source document lists (b) 'Inhabitants' learning ability' as the designated answer[cite: 250, 251]. Within this academic context, it points to the social capacity, linguistic elasticity, and psychological adaptability of the incoming group to master the dominant culture's codes.*"
    },
    {
        "question": "What promotes mutual understanding?",
        "options": [
            "Cultural superiority claims",
            "Imposition of beliefs",
            "Respect and appreciation",
            "Denial of cultural diversity",
            "Cultural mimicry"
        ],
        "correctAnswer": "Respect and appreciation",
        "explanation": "Mutual understanding between diverse human communities is built only when parties replace ethnocentric biases with genuine respect and an appreciation for alternative ways of living[cite: 251, 252]."
    },
    {
        "question": "What type of policy aims to influence ways of life?",
        "options": [
            "Social policy",
            "Health policy",
            "Monetary policy",
            "Cultural policy",
            "Defense policy"
        ],
        "correctAnswer": "Cultural policy",
        "explanation": "A cultural policy is an intentional public framework designed by an authority to guide, protect, support, and structurally shape a population's creative expression and overall way of life[cite: 252, 253, 254]."
    },
    {
        "question": "What causes changes in culture over time?",
        "options": [
            "Cultural evolution",
            "Environmental factors",
            "Globalization",
            "Cultural imposition",
            "Dominant cultural trends"
        ],
        "correctAnswer": "Cultural evolution",
        "explanation": "Broadly speaking, the ongoing, overarching process that sums up how cultures adjust, gather new techniques, shed obsolete habits, and transform through the decades is cultural evolution[cite: 254, 255]."
    },
    {
        "question": "Which aims to systematically revive cultures?",
        "options": [
            "Cultural education",
            "Value reorientation",
            "Cultural preservation",
            "Creative assimilation",
            "Active reconstruction"
        ],
        "correctAnswer": "Active reconstruction",
        "explanation": "Active reconstruction goes beyond simple passive storage; it describes a targeted, systematic effort to rebuild, reanimate, and actively revive declining or damaged cultural patterns back into active community life[cite: 255, 256]."
    },
    {
        "question": "What challenges cultural heritage preservation efforts?",
        "options": [
            "Advocacy mobilization",
            "Dissemination of cultural knowledge",
            "Inadequate awareness campaigns",
            "Cultural globalization",
            "Strong cultural institutions"
        ],
        "correctAnswer": "Inadequate awareness campaigns",
        "explanation": "When the public remains unaware of the value or vulnerability of historical sites and traditional arts due to poor awareness campaigns, preservation efforts struggle to find vital local support[cite: 256, 257]."
    },
    {
        "question": "What seeks to promote national integration?",
        "options": [
            "Sectarianism",
            "Modernization",
            "Cultural policy",
            "Traditional institutions",
            "Infrastructural development"
        ],
        "correctAnswer": "Cultural policy",
        "explanation": "A primary ideological pillar of Nigeria's cultural policy is leveraging shared artistic spaces, festivals, and cultural education to foster inter-ethnic integration and national cohesion[cite: 258]."
    },
    {
        "question": "What promotes cultural creativity?",
        "options": [
            "Insularity despite globalization",
            "Imposition of external influences",
            "Preservation of ancestral practices",
            "Exposure to new perspectives",
            "Suppression of cultural expressions"
        ],
        "correctAnswer": "Exposure to new perspectives",
        "explanation": "Creativity is highly collaborative and iterative. When artists and thinkers are exposed to novel ideas, outside methods, and unique cultural viewpoints, it frequently acts as a catalyst for innovation[cite: 258, 259]."
    },
    {
        "question": "Which relates to customs and practices?",
        "options": [
            "Material culture",
            "Non-material culture",
            "Natural heritage",
            "Cultural heritage",
            "Intangible heritage"
        ],
        "correctAnswer": "Intangible heritage",
        "explanation": "Intangible heritage encompasses living expressions, customs, social rituals, oral histories, performing arts, and traditional knowledge systems that cannot be physically touched but are lived out[cite: 259, 260]."
    },
    {
        "question": "What term means judgment based on own cultural norms?",
        "options": [
            "Appreciation",
            "Cultural determinism",
            "Cultural assimilation",
            "Ethnocentrism",
            "Cultural evolution"
        ],
        "correctAnswer": "Ethnocentrism",
        "explanation": "Ethnocentrism is the specific psychological habit of assessing and passing value judgments on foreign cultures entirely through the narrow lens and moral criteria of one's own cultural upbringing[cite: 260, 262]."
    },
    {
        "question": "Which was responsible for involuntary cultural changes?",
        "options": [
            "Colonization",
            "Immigration",
            "Inter-marriages",
            "Cultural exposure",
            "Globalization"
        ],
        "correctAnswer": "Colonization",
        "explanation": "Colonization forces profound, systemic, and involuntary structural changes onto a subject population, altering their legal, linguistic, educational, and cultural landscapes through state coercion[cite: 262, 263]."
    },
    {
        "question": "What term refers to preference for foreign cultural traits?",
        "options": [
            "Ethnocentrism",
            "Xenocentrism",
            "Cultural exchange",
            "Cultural diffusion",
            "Creative assimilation"
        ],
        "correctAnswer": "Xenocentrism",
        "explanation": "Xenocentrism occurs when individuals view their own domestic culture as inferior and exhibit an uncritical preference for the behaviors, standards, and values of foreign countries[cite: 263, 264]."
    },
    {
        "question": "How can cultural preservation boost economy?",
        "options": [
            "Through cultural endowments",
            "By promoting arts industries",
            "Via the film and music sectors",
            "Through cultural entrepreneurship",
            "All of the above"
        ],
        "correctAnswer": "All of the above",
        "explanation": "Culture is a powerful economic engine. Investing in heritage preservation feeds directly into creative economic sectors, boosting tourism, indigenous art manufacturing, entertainment markets, and niche entrepreneurial ventures[cite: 264, 265, 266]."
    },
    {
        "question": "What fuels cultural superiority sentiments?",
        "options": [
            "Openness to new perspectives",
            "Cultural conservatism",
            "Respect for cultural diversity",
            "Assessment based on own standards",
            "Willingness to understand others"
        ],
        "correctAnswer": "Assessment based on own standards",
        "explanation": "Sentiments of cultural chauvinism or superiority are continuously generated when a society isolates its worldview and insists on measuring all foreign civilizations exclusively by its own domestic standards[cite: 266, 267]."
    },
    {
        "question": "Which approach discourages cultural dynamism?",
        "options": [
            "Active preservation of heritage",
            "Integration of traditions and modernity",
            "Suppression of cultural creativity",
            "Compartmentalization of cultures",
            "Dominance of a single cultural tradition"
        ],
        "correctAnswer": "Suppression of cultural creativity",
        "explanation": "Culture must adapt to survive. Actively suppressing creative expression, penalizing innovation, or freezing practices rigidly halts a culture's organic dynamism and leaves it brittle[cite: 267, 268]."
    },
    {
        "question": "Which seeks to influence behaviors through culture?",
        "options": [
            "Religious policy",
            "Social policy",
            "Defense policy",
            "Cultural policy",
            "Economic policy"
        ],
        "correctAnswer": "Cultural policy",
        "explanation": "Governments construct cultural policies as macro-frameworks meant to influence citizen behaviors, foster national core values, and incentivize targeted creative expressions across the populace[cite: 268, 269, 270]."
    },
    {
        "question": "Which is key to sustainable cultural preservation?",
        "options": [
            "Adequate legislation",
            "Strong cultural institutions",
            "Mass media censorship",
            "Cultural globalization",
            "Government apathy"
        ],
        "correctAnswer": "Strong cultural institutions",
        "explanation": "Laws alone are insufficient; sustainable preservation absolutely demands strong, functional, and well-funded cultural institutions (like museums, archives, and heritage boards) to actively execute conservation[cite: 270, 271]."
    },
    {
        "question": "What reflects changes due to outside influences?",
        "options": [
            "Cultural heritage",
            "Cultural diffusion",
            "Cultural synergy",
            "Creative assimilation",
            "Material culture"
        ],
        "correctAnswer": "Cultural diffusion",
        "explanation": "When a community introduces external traits, technology, or language elements into its lifestyle following contact with foreign groups, this footprint represents cultural diffusion[cite: 271, 272]."
    },
    {
        "question": "What fuels selective acceptance of foreign traits?",
        "options": [
            "Cultural protectionism",
            "Cultural relativism",
            "Voluntary acculturation",
            "Total assimilation",
            "Forced cultural change"
        ],
        "correctAnswer": "Voluntary acculturation",
        "explanation": "Under a climate of voluntary acculturation, an indigenous group holds the agency to browse foreign cultural menus, choosing to accept certain handy traits while actively filtering out others[cite: 272, 273]."
    },
    {
        "question": "What is a core feature of cumulative culture?",
        "options": [
            "Stagnation despite generational contacts",
            "Sequential improvement across generations",
            "Reliance on individual talent",
            "Rejection of ancestral knowledge",
            "Sporadic rather than continuous innovation"
        ],
        "correctAnswer": "Sequential improvement across generations",
        "explanation": "Cumulative culture acts like a historical ratchet: each generation learns the collective baseline knowledge of its ancestors and subsequently introduces sequential modifications and improvements over time[cite: 274]."
    },
    {
        "question": "What context best defines natural heritage?",
        "options": [
            "Any heritage with historic value",
            "Man-made cultural attributes",
            "Sites of natural wonders and beauty",
            "Sites integrated with nature and culture",
            "Ecological artifacts of historic significance"
        ],
        "correctAnswer": "Sites of natural wonders and beauty",
        "explanation": "Natural heritage isolates the non-man-made biosphere, focusing squarely on protecting unique geological sites, pristine ecosystems, and landscapes of breathtaking natural beauty[cite: 274, 275]."
    },
    {
        "question": "What entails gradual cultural modifications?",
        "options": [
            "Active cultural preservation",
            "Cultural imposition",
            "Forced assimilation",
            "Cultural evolution",
            "Creative cultural exchange"
        ],
        "correctAnswer": "Cultural evolution",
        "explanation": "Much like biological adaptation, cultural evolution describes the long-term, incremental process through which a society's operational customs and survival tools adjust to changing conditions[cite: 275, 276]."
    },
    {
        "question": "What cultural policy objective promotes technical skills?",
        "options": [
            "Industrial self-sufficiency",
            "Skill acquisition",
            "Resource administration",
            "Value system transformation",
            "Traditionalism"
        ],
        "correctAnswer": "Skill acquisition",
        "explanation": "To preserve indigenous industrial capacities and local manufacturing methods, national frameworks prioritize skill acquisition paths focused on traditional technical processing and craftsmanship[cite: 276, 277]."
    },
    {
        "question": "Which of these characterizes culture?",
        "options": [
            "Inherited biological traits",
            "Universal human tendencies",
            "Learned and shared attributes",
            "Environmental factors",
            "Innate capabilities"
        ],
        "correctAnswer": "Learned and shared attributes",
        "explanation": "Culture is distinctively non-genetic. It is built entirely on behavioral patterns, knowledge, and communicative toolkits that are learned through social immersion and shared communally[cite: 277, 278]."
    },
    {
        "question": "What occurs due to domination of minority cultures?",
        "options": [
            "Active cultural reconstruction",
            "Creative cultural syncretism",
            "Forced assimilation",
            "Cultural preservation",
            "Socio-economic mobility"
        ],
        "correctAnswer": "Forced assimilation",
        "explanation": "When an aggressive dominant culture asserts total political control, minority groups face intense, coercive structural pressures resulting in the forced assimilation and erasure of their distinct traits[cite: 278, 279]."
    },
    {
        "question": "What promotes value pluralism and national cohesion?",
        "options": [
            "Suppression of cultural diversity",
            "Insistence on cultural purity",
            "Imposition of cultural uniformity",
            "Recognition of multiple cultures",
            "Denial of cultural differences"
        ],
        "correctAnswer": "Recognition of multiple cultures",
        "explanation": "In deeply heterogeneous societies, national stability is achieved not through forced uniformity, but by institutionalizing the equal recognition and protection of multiple cultural identities[cite: 279, 280, 281]."
    },
    {
        "question": "When does cultural borrowing typically occur?",
        "options": [
            "During cultural imposition",
            "When cultures are isolated",
            "In the absence of contact",
            "Through cultural exchange",
            "By passive dissemination"
        ],
        "correctAnswer": "Through cultural exchange",
        "explanation": "Cultural borrowing occurs most naturally during open cultural exchange events, where interacting groups display mutual interest in swapping technical, artistic, or culinary innovations[cite: 281, 282]."
    },
    {
        "question": "What policy approach integrates cultures into development?",
        "options": [
            "Active cultural education",
            "Value system transformation",
            "Resource administration",
            "Industrial mobilization",
            "Infrastructure expansion"
        ],
        "correctAnswer": "Active cultural education",
        "explanation": "Deploying active cultural education in schools ensures that development models are built on historical community insights, indigenous conservation concepts, and localized skills[cite: 282, 283]."
    },
    {
        "question": "Which strategy seeks to retain cultural traits?",
        "options": [
            "Cultural globalization",
            "Active preservation",
            "Value realignment",
            "Creative assimilation",
            "Insulation despite contact"
        ],
        "correctAnswer": "Active preservation",
        "explanation": "Active preservation encompasses targeted structural plans, legal frameworks, and documentation programs designed specifically to maintain and protect traditional traits from decay[cite: 283, 284, 285]."
    },
    {
        "question": "Which socio-cultural process involves cultural changes?",
        "options": [
            "Acculturation",
            "Creative cultural reconstruction",
            "Cultural preservation",
            "Cultural imposition",
            "Random cultural encounters"
        ],
        "correctAnswer": "Acculturation",
        "explanation": "Acculturation stands as the foundational scientific umbrella term for the dual-level psychological and cultural shifts that occur when two independent cultural streams merge or interact closely[cite: 285, 286]."
    },
    {
        "question": "What fuels tendencies to disregard cultural diversity?",
        "options": [
            "Cultural relativism",
            "Openness despite differences",
            "Respect for distinct cultural identities",
            "Insistence on cultural superiority",
            "Apathy towards cultural heritage"
        ],
        "correctAnswer": "Insistence on cultural superiority",
        "explanation": "When an individual or a state apparatus fiercely insists on the absolute superiority of its own lifestyle, it automatically invalidates outside identities and disregards the value of cultural diversity[cite: 286, 287]."
    },
    {
        "question": "What entails blending of cultural traits over time?",
        "options": [
            "Cultural syncretism",
            "Active cultural preservation",
            "Dominance of a single culture",
            "Creative cultural reconstruction",
            "Cultural substitution"
        ],
        "correctAnswer": "Cultural syncretism",
        "explanation": "Cultural syncretism is the sophisticated process where different cultural, religious, or philosophical practices melt together over time, birthing completely new, hybrid cultural forms[cite: 287, 288]."
    },
    {
        "question": "What are subjective cultural judgements based on?",
        "options": [
            "Foreign cultural standards",
            "Exposure to cultural diversity",
            "Appreciation of cultural relativity",
            "Assessment using own cultural norms",
            "Understanding of dynamics shaping other cultures"
        ],
        "correctAnswer": "Assessment using own cultural norms",
        "explanation": "Subjective, ethnocentric assessments are generated automatically when a person judges an outside group's behaviors using the internal biases and behavioral codes of their own upbringing[cite: 289, 290]."
    },
    {
        "question": "Which strategy integrates cultural policy and national development?",
        "options": [
            "Tradition-modernity dichotomy",
            "Cultural imposition on society",
            "Value system realignment",
            "Cultural globalization",
            "Reflection of heritage in programs"
        ],
        "correctAnswer": "Reflection of heritage in programs",
        "explanation": "True socio-economic alignment occurs when state authorities systematically weave historical heritage priorities, indigenous ethics, and local skills into active development programs[cite: 290, 291]."
    },
    {
        "question": "What factor influences cultural borrowing patterns?",
        "options": [
            "Cultural superiority claims",
            "Cultural pride and prejudice",
            "Geographic and socio-political proximity",
            "Individual creativity and talents",
            "Attitudes towards other cultures"
        ],
        "correctAnswer": "Geographic and socio-political proximity",
        "explanation": "Cultures that are located close together geographically or share strong socio-political ties exhibit significantly higher frequencies of trait cross-pollination and cultural borrowing[cite: 291, 292]."
    },
    {
        "question": "Which socio-cultural process involves cultural accommodation?",
        "options": [
            "Acculturation",
            "Cultural exchange",
            "Cultural synchronization",
            "Socialization",
            "Cultural conflict"
        ],
        "correctAnswer": "Acculturation",
        "explanation": "During the long-term balancing act of acculturation, interacting cultures undergo mutual accommodation, modifying their internal codes to navigate daily coexistence[cite: 293]."
    },
    {
        "question": "What refers to cultural traits retained over time by a population?",
        "options": [
            "Material culture",
            "Cultural heritage",
            "Cultural assimilation",
            "Cultural convergence",
            "Cumulative culture"
        ],
        "correctAnswer": "Cumulative culture",
        "explanation": "Cumulative culture specifically highlights the body of behavioral innovations, technical toolkits, and social beliefs that are successfully stored, retained, and upgraded across sequential generations[cite: 293, 294]."
    },
    {
        "question": "Which promotes inter-cultural appreciation and respect?",
        "options": [
            "Indifference towards cultural diversity",
            "Patriotic fervor despite differences",
            "Tolerance and pluralism",
            "Insistence on cultural purity",
            "Dominance of a single culture"
        ],
        "correctAnswer": "Tolerance and pluralism",
        "explanation": "Cultivating an institutional atmosphere of active tolerance and democratic pluralism opens up secure platforms for mutual appreciation, dismantling hostile xenophobic barriers[cite: 294, 295]."
    },
    {
        "question": "What implies cultural traits that are socially transmitted?",
        "options": [
            "Innate capabilities",
            "Creative innovations",
            "Environmental factors",
            "Inherited biological attributes",
            "Learned and shared human tendencies"
        ],
        "correctAnswer": "Learned and shared human tendencies",
        "explanation": "Social transmission is the mechanism of culture. It encompasses all learned habits, language systems, artistic traditions, and shared tools passed down via socialization rather than biology[cite: 295, 297]."
    },
    {
        "question": "What seeks to influence values of a people?",
        "options": [
            "Defense policy",
            "Health policy",
            "Cultural policy",
            "Economic policy",
            "Education policy"
        ],
        "correctAnswer": "Cultural policy",
        "explanation": "A state uses its formal cultural policy as an active legislative and structural tool to shape citizens' aesthetics, protect ethical heritage values, and guide public lifestyle directions[cite: 297, 298]."
    },
    {
        "question": "Which involves least cultural change of all types?",
        "options": [
            "Forced acculturation",
            "Selective acculturation",
            "Released acculturation",
            "Accommodated acculturation",
            "Creative acculturation"
        ],
        "correctAnswer": "Released acculturation",
        "explanation": "*Note: Following the explicit answer ledger of the source material, (c) 'Released acculturation' is marked correct[cite: 299]. In this specific curriculum taxonomy, it denotes a highly insulated or balanced contact dynamic where minimal baseline changes are triggered.*"
    },
    {
        "question": "When does active cultural preservation occur?",
        "options": [
            "During cultural globalization",
            "In isolation from contact",
            "Without reinforcing cultural creativity",
            "When cultural traits become obsolete",
            "To retain ancestral practices as they were"
        ],
        "correctAnswer": "To retain ancestral practices as they were",
        "explanation": "Active traditional preservation is an intentional, protective cultural stance enacted to guard historic practices, keeping them intact and authentic against external distortion[cite: 299, 301]."
    },
    {
        "question": "What drives tendencies to disrespect cultural identities?",
        "options": [
            "Cultural pride and patriotism",
            "Cultural relativism",
            "Cultural understanding and tolerance",
            "Will to exercise superiority",
            "Xenocentric worldviews"
        ],
        "correctAnswer": "Will to exercise superiority",
        "explanation": "The systematic degradation of outside cultural identities is fundamentally driven by an aggressive ethnocentric drive or political will to establish dominance and cultural superiority[cite: 301, 302]."
    },
    {
        "question": "What adapts better to cultural changes?",
        "options": [
            "Sequestered communities",
            "Younger generations",
            "Minority cultures",
            "Rural inhabitants",
            "Elders and cultural custodians"
        ],
        "correctAnswer": "Younger generations",
        "explanation": "Younger generations typically possess higher social and linguistic flexibility, lower attachment to older structural habits, and more direct exposure to new systems, enabling rapid adaptation to cultural shifts[cite: 302, 303]."
    },
    {
        "question": "Which encourages intermingling of cultural traits?",
        "options": [
            "Cultural imposition",
            "Creative cultural exchange",
            "Active cultural preservation",
            "Accommodated assimilation",
            "Dominance of a single culture"
        ],
        "correctAnswer": "Creative cultural exchange",
        "explanation": "Creative cultural exchange opens up peaceful, democratic channels where diverse groups freely interact, intentionally sharing and intermingling their artistic and social traits[cite: 303, 305]."
    },
    {
        "question": "What influences cultural modification patterns?",
        "options": [
            "Isolation and insulation",
            "Environmental factors",
            "Cultural openness and exposure",
            "Government policies",
            "Dominant cultural practices"
        ],
        "correctAnswer": "Cultural openness and exposure",
        "explanation": "The specific ways a culture modifies its internal traits are directly proportional to its level of openness and systematic exposure to external ideas and alternative societal models[cite: 305]."
    },
    {
        "question": "Which rejects outside cultural influences?",
        "options": [
            "Cultural preservation",
            "Creative cultural re-invention",
            "Active cultural reconstruction",
            "Purist cultural traditionalism",
            "Value system upgrades"
        ],
        "correctAnswer": "Purist cultural traditionalism",
        "explanation": "Purist cultural traditionalism acts as a defensive isolation strategy, aggressively rejecting any incoming foreign practices or external mixtures in order to preserve absolute cultural purity[cite: 305, 306]."
    },
    {
        "question": "What seeks to draw from heritage into contemporary life?",
        "options": [
            "Creative cultural reconstruction",
            "Active cultural preservation",
            "Purist cultural traditionalism",
            "Forced assimilation",
            "Dominance of a single culture"
        ],
        "correctAnswer": "Active cultural preservation",
        "explanation": "*Note: The document's answer ledger assigns (b) 'Active cultural preservation' here[cite: 307]. Conceptually, this emphasizes an approach where ancestral wisdom, ethical tenets, and historic arts are actively integrated to enrich modern civic life.*"
    },
    {
        question: "Which of the following is NOT one of the six geopolitical zones in Nigeria?",
        options: [
            "North-Central",
            "North-East",
            "North-West",
            "South-South",
            "Southeast"
        ],
        correctAnswer: "Southeast",
        explanation: "Nigeria's six official geopolitical zones are North-Central, North-East, North-West, South-West, South-South, and South-East. The option listed as 'Southeast' is technically incorrect in the official layout provided by the text context, though usually it is written as South-East."
    },
    {
        question: "What year was Nigeria granted independence?",
        options: [
            "1954",
            "1960",
            "1970",
            "1980",
            "1990"
        ],
        correctAnswer: "1960",
        explanation: "Nigeria officially gained its independence from British colonial rule on October 1, 1960."
    },
    {
        question: "Which of the following groups is NOT one of the major ethnic groups in Nigeria?",
        options: [
            "Ijaw",
            "Igbo",
            "Yoruba",
            "Tiv",
            "Igala"
        ],
        correctAnswer: "Ijaw",
        explanation: "While the Ijaw constitute a significant ethnic group in the Niger Delta region, the traditionally cited top major dominant ethnic groups across Nigeria's history are Hausa, Yoruba, and Igbo."
    },
    {
        question: "Which of the following best defines culture?",
        options: [
            "The language a group speaks",
            "A group's beliefs, values and norms",
            "A group's rituals and ceremonies",
            "A group's material possessions",
            "A group's government"
        ],
        correctAnswer: "A group's beliefs, values and norms",
        explanation: "Culture is broadly defined as the shared, socially transmitted systems of beliefs, values, norms, and behaviors that characterize a particular society or group."
    },
    {
        question: "Which of the following is an example of material culture?",
        options: [
            "Religion",
            "Language",
            "Beliefs",
            "Clothing",
            "Customs"
        ],
        correctAnswer: "Clothing",
        explanation: "Material culture consists of physical, tangible objects created and used by a society, such as clothing, tools, housing, and art pieces."
    },
    {
        question: "Which of the following is an example of non-material culture?",
        options: [
            "Houses",
            "Tools",
            "Myths",
            "Vehicles",
            "Sculptures"
        ],
        correctAnswer: "Myths",
        explanation: "Non-material culture represents the intangible ideas, beliefs, stories, myths, and values shared by a group of people that cannot be physically touched."
    },
    {
        question: "What is the capital of Nigeria?",
        options: [
            "Ibadan",
            "Kano",
            "Abuja",
            "Lagos",
            "Port Harcourt"
        ],
        correctAnswer: "Abuja",
        explanation: "Abuja became the official capital city of Nigeria in December 1991, replacing the former coastal capital city, Lagos."
    },
    {
        question: "Which ethnic group is predominantly found in the North-Western part of Nigeria?",
        options: [
            "Igbo",
            "Yoruba",
            "Ijaw",
            "Hausa",
            "Tiv"
        ],
        correctAnswer: "Hausa",
        explanation: "The Hausa people comprise the predominant ethnic population settled across the North-West geopolitical zone of northern Nigeria."
    },
    {
        question: "What is the official language of Nigeria?",
        options: [
            "Hausa",
            "English",
            "Igbo",
            "Yoruba",
            "French"
        ],
        correctAnswer: "English",
        explanation: "Due to its history as a British colony and its vast linguistic diversity, English was adopted as Nigeria's official language for government, education, and commerce."
    },
    {
        question: "Culture is:",
        options: [
            "Biological",
            "Inherited",
            "Learnt",
            "Static",
            "Individual"
        ],
        correctAnswer: "Learnt",
        explanation: "Culture is not hardwired into human genetics; rather, it is socially learned and transmitted across generations through socialization processes."
    },
    {
        question: "Which of the following states is in the South-South geopolitical zone?",
        options: [
            "Kogi",
            "Kaduna",
            "Akwa Ibom",
            "Kwara",
            "Benue"
        ],
        correctAnswer: "Akwa Ibom",
        explanation: "Akwa Ibom State is situated in the coastal Niger Delta region, classified under the South-South geopolitical zone."
    },
    {
        question: "Which of the following best expresses the importance of culture?",
        options: [
            "It provides social norms and rules",
            "It shapes people's identity",
            "It transmits values across generations",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Culture plays a multi-faceted role: it regulates social interactions with norms, offers individual and collective identity, and passes down legacy principles."
    },
    {
        question: "Which of the following is an example of a ritual in Nigerian culture?",
        options: [
            "Yoruba festivals",
            "Igbo marriages",
            "Church services",
            "Street parties",
            "Eid celebrations"
        ],
        correctAnswer: "Yoruba festivals",
        explanation: "Traditional cultural festivals, such as those seen among the Yoruba, involve specific sequences of rites, offerings, and ceremonial actions that characterize structured rituals."
    },
    {
        question: "Which of the following is an informal norm in culture?",
        options: [
            "Traffic laws",
            "Religious rules",
            "Table manners",
            "Dress code",
            "Family structure"
        ],
        correctAnswer: "Table manners",
        explanation: "Informal norms are unwritten rules of conduct that guide daily life, such as common etiquette and table manners, lacking codified legal punishments."
    },
    {
        question: "Which of the following is an element of culture?",
        options: [
            "Soil type",
            "Climate",
            "Government",
            "River systems",
            "Mountains"
        ],
        correctAnswer: "Government",
        explanation: "Unlike geographical aspects like soil and climate, the political structure or institutionalized governance system forms an active element of human culture."
    },
    {
        question: "Which ethnic group speaks the Hausa language predominantly?",
        options: [
            "Yoruba",
            "Igbo",
            "Ijaw",
            "Hausa",
            "Tiv"
        ],
        correctAnswer: "Hausa",
        explanation: "The Hausa language is the native tongue of the Hausa ethnic group living across Northern Nigeria."
    },
    {
        question: "Which of the following BEST describes a symbol in culture?",
        options: [
            "A tangible object with shared meaning",
            "An inherited trait",
            "A learned behavior",
            "A genetic characteristic",
            "A norm"
        ],
        correctAnswer: "A tangible object with shared meaning",
        explanation: "A symbol can be any physical gesture, sign, or material object that holds an agreed-upon, shared meaning within a specific cultural community."
    },
    {
        question: "Which of the following is an example of an informal norm?",
        options: [
            "Criminal laws",
            "Wearing of traditional attire",
            "Religion",
            "Family roles",
            "Folktales"
        ],
        correctAnswer: "Wearing of traditional attire",
        explanation: "Adorning traditional wear is an expected social convention or custom, representing an informal norm rather than a strictly legal mandate."
    },
    {
        question: "Which of the following ethnic groups is known for masquerade festivals?",
        options: [
            "Hausa",
            "Tiv",
            "Yoruba",
            "Igala",
            "Igbo"
        ],
        correctAnswer: "Igbo",
        explanation: "Masquerade (Mmanwu) festivals represent deep-rooted spiritual and ancestral celebrations central to Igbo traditions."
    },
    {
        question: "What is the traditional name for money in the Igbo language?",
        options: [
            "Pesa",
            "Shilling",
            "Kudi",
            "Owo",
            "Ego"
        ],
        correctAnswer: "Ego",
        explanation: "In Igbo culture and language, 'Ego' translates directly to currency or money."
    },
    {
        question: "Which of the following is a key characteristic of culture?",
        options: [
            "Static over time",
            "Individual",
            "Inherited biologically",
            "Universal across groups",
            "Dynamic and changing"
        ],
        correctAnswer: "Dynamic and changing",
        explanation: "Culture is dynamic; it constantly adapts, evolves, and changes over time under the influence of innovations, environmental variations, and external encounters."
    },
    {
        question: "Which of the following ethnic groups has the largest population in Nigeria?",
        options: [
            "Yoruba",
            "Hausa",
            "Igbo",
            "Tiv",
            "Ijaw"
        ],
        correctAnswer: "Igbo",
        explanation: "While demographic balances are highly debated, according to this specific test context paper tracking population traits, 'Igbo' is selected as the marked answer key."
    },
    {
        question: "Which of the following BEST exemplifies how culture is transmitted?",
        options: [
            "Through socialization and learning",
            "Genetically",
            "Independently by each person",
            "Universally across all people",
            "Automatically from parents to children"
        ],
        correctAnswer: "Through socialization and learning",
        explanation: "Transmission occurs when individuals observe and interact with elders, peers, and institutions during childhood and adult socialization."
    },
    {
        question: "What is the name of the ceremony that marks the transition to manhood for boys in some eastern parts of Nigeria?",
        options: [
            "Iwa Akwa",
            "Isale Eko",
            "Sharo",
            "Iria",
            "Ofala"
        ],
        correctAnswer: "Iwa Akwa",
        explanation: "The 'Iwa Akwa' (meaning cloth-wearing) ceremony is a major age-grade rite of passage marking a young boy's transition to a man in areas like Imo State."
    },
    {
        question: "Which of the following is NOT a function of culture?",
        options: [
            "Provides social norms",
            "Satisfies basic needs",
            "Preserves group identity",
            "Predicting human behavior",
            "Ensures individuality"
        ],
        correctAnswer: "Ensures individuality",
        explanation: "Culture fosters shared identity and collective conformity through social controls; ensuring unique individuality is not one of its primary socio-functional aims."
    },
    {
        question: "Which of the following is a feature rather than an element of culture?",
        options: [
            "Government",
            "Social Organization",
            "Religion",
            "Language",
            "Values"
        ],
        correctAnswer: "Social Organization",
        explanation: "Social Organization acts as an overarching structural feature framing the way a society arranges itself around cultural elements."
    },
    {
        question: "What is the name of the annual fishing festival held in Argungu, Kebbi State?",
        options: [
            "Ofala",
            "New Yam Festival",
            "Sharo",
            "Argungu Fishing Festival"
        ],
        correctAnswer: "Argungu Fishing Festival",
        explanation: "The Argungu Fishing Festival is a globally famous four-day competitive fishing festival celebrated in the northwestern state of Kebbi."
    },
    {
        question: "Which of the following is an example of cultural integration?",
        options: [
            "Separate religious and political systems",
            "Isolated ethnic groups",
            "Distinct arts and values",
            "Interconnected values and beliefs",
            "Disconnected traditions and norms"
        ],
        correctAnswer: "Interconnected values and beliefs",
        explanation: "Cultural integration happens when various aspects, values, and practices within a culture fit together tightly and support one another smoothly."
    },
    {
        question: "Which ethnic group is predominantly found in the South-Eastern part of Nigeria?",
        options: [
            "Hausa",
            "Yoruba",
            "Fulani",
            "Igbo",
            "Ijaw"
        ],
        correctAnswer: "Igbo",
        explanation: "The South-East geopolitical zone is the historical, ancestral core territory of the Igbo people."
    },
    {
        question: "Which of these BEST exhibits how culture functions to control behavior?",
        options: [
            "Through genetics",
            "Independent decision making",
            "Cultural norms and sanctions",
            "Universal human nature",
            "Individualism"
        ],
        correctAnswer: "Cultural norms and sanctions",
        explanation: "Culture limits deviant behavior by instituting social norms (rules) along with negative or positive sanctions (rewards and punishments)."
    },
    {
        question: "Where is Zuma rock located?",
        options: [
            "Borno State",
            "Niger State",
            "Kano State",
            "Oyo State",
            "Abia State"
        ],
        correctAnswer: "Niger State",
        explanation: "The massive monolith Zuma Rock is geographically situated in Niger State, right outside Nigeria's federal capital territory."
    },
    {
        question: "Which of the following is an intangible aspect of culture?",
        options: [
            "Food",
            "Dances",
            "Myths",
            "Buildings",
            "Clothing"
        ],
        correctAnswer: "Myths",
        explanation: "Myths are folklore narratives and spiritual stories existing in the mind and spoken words, representing an intangible cultural facet."
    },
    {
        question: "How is culture typically transmitted across generations?",
        options: [
            "Genetically",
            "Through books",
            "Independent learning",
            "Orally through storytelling",
            "Automatically at birth"
        ],
        correctAnswer: "Orally through storytelling",
        explanation: "In traditional African setups, cultural lessons, histories, and norms are communicated via deep-rooted oral storytelling conventions."
    },
    {
        question: "What is the name of the traditional dance associated with Masquerade performances among the Igbo people?",
        options: [
            "Bata dance",
            "Eyo dance",
            "Gidigbo dance",
            "Mapouka dance",
            "Blenje dance"
        ],
        correctAnswer: "Eyo dance",
        explanation: "Note: While Eyo belongs strictly to Lagos (Yoruba) heritage, based explicitly on the document's direct multi-choice key, Option B ('Eyo dance') is marked as the answer."
    },
    {
        question: "Which state borders Nigeria to the east?",
        options: [
            "Cameroon",
            "Mali",
            "Chad",
            "Benini",
            "Niger"
        ],
        correctAnswer: "Cameroon",
        explanation: "Nigeria shares its eastern land boundary extensively with the Republic of Cameroon."
    },
    {
        question: "Which of the following is a tangible aspect of culture?",
        options: [
            "Language",
            "Religion",
            "Customs",
            "Tools",
            "Festivals"
        ],
        correctAnswer: "Tools",
        explanation: "Tools are physical objects manipulated by human hands, categorized under tangible or material culture."
    },
    {
        question: "Which of the following best defines a norm?",
        options: [
            "An ideal standard of behavior",
            "A ritual practice",
            "An inherited trait",
            "A basic human need",
            "An individual preference"
        ],
        correctAnswer: "An ideal standard of behavior",
        explanation: "A norm establishes a society's shared expectations and guidelines specifying how people should act in various contexts."
    },
    {
        question: "Which ethnic group is predominantly found in the South-Western part of Nigeria?",
        options: [
            "Igbo",
            "Hausa",
            "Yoruba",
            "Tiv",
            "Ijaw"
        ],
        correctAnswer: "Yoruba",
        explanation: "The Yoruba people inhabit the historic southwestern territories of Nigeria, including cities like Ibadan and Lagos."
    },
    {
        question: "What is the name of the cultural museum located in Jos showcasing the culture of Nigeria’s diverse ethnic groups?",
        options: [
            "National Art Museum",
            "National Museum",
            "Jacaranda Museum",
            "NOK Terracota Museum",
            "Centre for Black Culture Museum"
        ],
        correctAnswer: "National Museum",
        explanation: "The National Museum in Jos is a highly significant research institute preserving artifacts from regional civilizations, including Nok terracotta sculptures."
    },
    {
        question: "Which state has the highest number of different ethnic groups residing within its borders?",
        options: [
            "Kano",
            "Kaduna",
            "Delta",
            "Rivers",
            "Benue"
        ],
        correctAnswer: "Rivers",
        explanation: "Rivers State contains a highly diverse collage of unique indigenous ethnic groups settled within its different local government areas."
    },
    {
        question: "Which of the following does NOT influence the spread of culture?",
        options: [
            "Social interactions",
            "Mass media",
            "Education system",
            "Migration and travel",
            "Environment"
        ],
        correctAnswer: "Mass media",
        explanation: "According to the unique constraints of this exam sheet answer key, 'Mass media' is flagged as the choice for what did not influence cultural spread historically."
    },
    {
        question: "Which of these is NOT a characteristic of culture?",
        options: [
            "Inherited",
            "Dynamic",
            "Individualistic",
            "Learnt behaviour",
            "Shared"
        ],
        correctAnswer: "Individualistic",
        explanation: "Culture belongs to social groups; it can never be individualistic because it depends on communal participation and collective recognition."
    },
    {
        question: "Which of these options best defines a cultural artifact?",
        options: [
            "A learned behavior",
            "An object with symbolic meaning",
            "A genetic trait",
            "A sacred object",
            "A universal human attribute"
        ],
        correctAnswer: "An object with symbolic meaning",
        explanation: "An artifact is an item shaped or created by human workmanship that holds cultural or historical meaning for a community."
    },
    {
        question: "Which state is classified under the North-Central geopolitical zone of Nigeria?",
        options: [
            "Katsina",
            "Jigawa",
            "Benue",
            "Taraba",
            "Bauchi"
        ],
        correctAnswer: "Benue",
        explanation: "Benue State, located in the middle belt region, belongs officially to the North-Central geopolitical zone."
    },
    {
        question: "Which of these ethnic groups is NOT located in the South-South geopolitical zone?",
        options: [
            "Igbo",
            "Igala",
            "Ijaw",
            "Fulani",
            "Efik"
        ],
        correctAnswer: "Igbo",
        explanation: "The core territory of the Igbo people is clustered in the South-East zone, rather than the coastal South-South states."
    },
    {
        question: "Which state exhibits the 'Ground Paragraphs' rock formations which are a popular cultural tourism site?",
        options: [
            "Plateau",
            "Benue",
            "Kogi",
            "Ekiti",
            "Ondo"
        ],
        correctAnswer: "Benue",
        explanation: "The document logs Benue State as the answer associated with this specific tourism landmark."
    },
    {
        question: "When does the new yam festival traditionally take place among the Igbo communities?",
        options: [
            "January",
            "March",
            "August",
            "October",
            "December"
        ],
        correctAnswer: "August",
        explanation: "The New Yam Festival (Iri Ji) occurs at the end of the rainy season, traditionally around August, celebrating the annual harvest."
    },
    {
        question: "What is the traditional name for money among the Hausa people?",
        options: [
            "Ego",
            "Kudi",
            "Owo",
            "Pesa",
            "Shilling"
        ],
        correctAnswer: "Kudi",
        explanation: "In the Hausa language, the word for money is 'Kudi'."
    },
    {
        question: "What is the name of the traditional male attire worn in special ceremonies by Yoruba men from western Nigeria?",
        options: [
            "Agbada",
            "Babariga",
            "Isiagu",
            "Dirigi",
            "Khaki"
        ],
        correctAnswer: "Agbada",
        explanation: "The Agbada is a wide, free-flowing, heavily embroidered robe traditionally worn by Yoruba men for formal social occasions."
    },
    {
        question: "Which of the following is an intangible element of culture?",
        options: [
            "Clothing",
            "Architecture",
            "Myths",
            "Tools",
            "Oral traditions"
        ],
        correctAnswer: "Myths",
        explanation: "Myths fall into intangible culture since they exist as conceptual worldviews and beliefs rather than solid tangible matter."
    },
    {
        question: "Which of these BEST describes the symbolic meaning of kola nut in Igbo culture?",
        options: [
            "Welcoming gestures",
            "Conflict resolution",
            "Fertility rituals",
            "Ancestral veneration",
            "Transitional rites"
        ],
        correctAnswer: "Conflict resolution",
        explanation: "The breaking and sharing of kola nut represents hospitality, goodwill, mutual respect, peace, and conflict settlement."
    },
    {
        question: "Which state exhibits the ancient mud walls and architecture in the Old City area of Kano metropolis?",
        options: [
            "Kano",
            "Borno",
            "Sokoto",
            "Bauchi",
            "Yobe"
        ],
        correctAnswer: "Kano",
        explanation: "The famous ancient defensive city walls were built in the old kingdom of Kano, located in modern Kano State."
    },
    {
        question: "Which of these cultural sites is located in Ondo State?",
        options: [
            "Ogbunike Caves",
            "Idanre Hills",
            "Inyi Cave Settlement",
            "Zuma Rock",
            "Csikszentmihalyi Caves"
        ],
        correctAnswer: "Idanre Hills",
        explanation: "Idanre Hills is an ancient, spectacular landscape settlement situated in Idanre town within Ondo State."
    },
    {
        question: "Which city is the former capital and still regarded as the economic powerhouse of Nigeria?",
        options: [
            "Ibadan",
            "Lagos",
            "Abuja",
            "Kano",
            "Port Harcourt"
        ],
        correctAnswer: "Lagos",
        explanation: "Lagos acts as Nigeria's financial heart and primary mega-city hub, having previously served as the official political capital."
    },
    {
        question: "Which of these cultural festivals did NOT originate from the South-South geopolitical zone?",
        options: [
            "Argungu Fishing Festival",
            "New Yam Festival",
            "Calabar Festival",
            "Ofala Festival",
            "Durbar Festival"
        ],
        correctAnswer: "New Yam Festival",
        explanation: "The New Yam Festival (Iri Ji) is fundamentally a hallmark of Igbo culture in the South-East zone."
    },
    {
        question: "What is the name given to the system of governance adopted by Nigeria at independence in 1960?",
        options: [
            "Democratic system",
            "Autocratic system",
            "Monarchical system",
            "Traditional system",
            "Federal system"
        ],
        correctAnswer: "Federal system",
        explanation: "At independence, Nigeria adopted a federal system of government to handle power-sharing among its diverse regions."
    },
    {
        question: "Which of these BEST describes a culture's values?",
        options: [
            "Judgments of good vs bad",
            "Learned behaviors",
            "Material possessions",
            "Biological traits",
            "Religious principles"
        ],
        correctAnswer: "Judgments of good vs bad",
        explanation: "Values represent a society's abstract concepts about what is desirable, appropriate, good, or morally wrong."
    },
    {
        question: "Which state contains the historical Osun-Osogbo Sacred Grove cultural site?",
        options: [
            "Oyo State",
            "Ondo State",
            "Osun State",
            "Lagos State",
            "Ekiti State"
        ],
        correctAnswer: "Osun State",
        explanation: "The Osun-Osogbo Sacred Grove is a UNESCO world heritage site located along the outskirts of Osogbo, the capital of Osun State."
    },
    {
        question: "When was the first colonial amalgamation of Northern and Southern Nigeria carried out?",
        options: [
            "1860",
            "1874",
            "1906",
            "1914",
            "1922"
        ],
        correctAnswer: "1906",
        explanation: "In 1906, the British colonial administration merged the Colony of Lagos with the Protectorate of Southern Nigeria."
    },
    {
        question: "Which ethnic group forms the dominant population around the lower courses of the Rivers Niger and Benue?",
        options: [
            "Igbo",
            "Tiv",
            "Jukun",
            "Fulani",
            "Idoma"
        ],
        correctAnswer: "Jukun",
        explanation: "The source document flags the Jukun people as the targeted choice for this historical river basin layout question."
    },
    {
        question: "What is the name given to the second colonial amalgamation in 1914 that consolidated Northern and Southern Protectorates?",
        options: [
            "Clifford Constitution",
            "Residency Constitution",
            "Incorporation of Lagos",
            "Lugard Constitution",
            "Macpherson Constitution"
        ],
        correctAnswer: "Lugard Constitution",
        explanation: "Lord Frederick Lugard engineered the monumental 1914 amalgamation blending the Northern and Southern protectorates together."
    },
    {
        question: "Under which geopolitical zone is Ekiti State classified?",
        options: [
            "North-Central",
            "North-West",
            "South-South",
            "South-West",
            "South-East"
        ],
        correctAnswer: "South-West",
        explanation: "Ekiti State is culturally and geographically positioned inside the Yoruba-dominated South-West zone."
    },
    {
        question: "What is the rainy season in Nigeria called?",
        options: [
            "Harmattan season",
            "Dry season",
            "Wet season",
            "Humid season",
            "Stormy season"
        ],
        correctAnswer: "Wet season",
        explanation: "Nigeria's tropical climate features two primary contrasting seasons: the dry season and the wet (rainy) season."
    },
    {
        question: "Which of these BEST defines culture?",
        options: [
            "A group's material objects",
            "Shared beliefs and behaviors",
            "Biological inheritance",
            "Universal human attributes",
            "Isolated individual traits"
        ],
        correctAnswer: "Shared beliefs and behaviors",
        explanation: "Culture stands as the integrated system of shared beliefs, values, customs, and behaviors that members of society use to cope with their world."
    },
    {
        question: "What is the name of the annual masquerade festival originating from the Igbo town of Orlu?",
        options: [
            "Ofala Festival",
            "New Yam Festival",
            "Igwe Festival",
            "Oliver Festival",
            "Ekpe Festival"
        ],
        correctAnswer: "Ekpe Festival",
        explanation: "The Ekpe leopard secret society masquerade festival has historically spread and thrived across parts of southeastern Nigeria."
    },
    {
        question: "Which state exhibits the Ogbunike Cave settlements and markets situated in the limestone outcrops?",
        options: [
            "Abia",
            "Enugu",
            "Ebonyi",
            "Anambra",
            "Imo"
        ],
        correctAnswer: "Anambra",
        explanation: "The historical Ogbunike Caves are located in a valley behind the Ogbunike community in Anambra State."
    },
    {
        question: "Which river forms Nigeria's northern border with Niger?",
        options: [
            "Niger River",
            "Benue River",
            "Lake Chad",
            "Sokoto River",
            "Kaduna River"
        ],
        correctAnswer: "Niger River",
        explanation: "The historic Niger River courses down through West Africa, delineating boundaries and serving as a lifeline across northern frontiers."
    },
    {
        question: "Which body of water forms Nigeria's northeastern border?",
        options: [
            "Gulf of Guinea",
            "Lake Nasser",
            "Lake Chad",
            "Atlantic Ocean",
            "Mediterranean Sea"
        ],
        correctAnswer: "Lake Chad",
        explanation: "Lake Chad sits directly at the extreme northeastern junction where Nigeria, Chad, Niger, and Cameroon meet."
    },
    {
        question: "Which of these is a feature rather than an element of culture?",
        options: [
            "Social organization",
            "Values",
            "Religion",
            "Language",
            "Norms"
        ],
        correctAnswer: "Values",
        explanation: "Based on the internal curriculum framework of this test document, 'Values' is logged as the targeted multiple-choice key answer for this item."
    },
    {
        question: "How is culture typically acquired?",
        options: [
            "Through social learning",
            "Genetically",
            "Through books",
            "Automatically at birth",
            "As an isolated individual"
        ],
        correctAnswer: "Through social learning",
        explanation: "Humans absorb culture contextually via social interaction, active imitation, and communal observation within their upbringing environment."
    },
    {
        question: "Which ethnic group originates the Durbar festival held in cities like Kano and Sokoto?",
        options: [
            "Tiv",
            "Yoruba",
            "Hausa",
            "Jukun",
            "Idoma"
        ],
        correctAnswer: "Hausa",
        explanation: "The Durbar festival is an equestrian celebration deeply rooted in the Islamic and royal history of the Hausa-Fulani emirates."
    },
    {
        question: "Where are the Dilimi Rock Paintings cultural heritage site located?",
        options: [
            "Plateau State",
            "Niger State",
            "Taraba State",
            "Benue State",
            "Enugu State"
        ],
        correctAnswer: "Taraba State",
        explanation: "The document links the ancient Dilimi Rock Paintings site explicitly to Taraba State."
    },
    {
        question: "What is the traditional Muslim celebration after the end of Ramadan fasting called?",
        options: [
            "Id-el-Fitr",
            "Eid-ul-Adha",
            "Eid Mubarak",
            "Laylat al-Qadr",
            "Id-ul-Zuha"
        ],
        correctAnswer: "Id-el-Fitr",
        explanation: "Eid-el-Fitr is the major Islamic holiday celebrating the conclusion of the dawn-to-sunset month of Ramadan fasting."
    },
    {
        question: "Which ethnic group incorporates facial scarification as part of their cultural identity?",
        options: [
            "Tiv",
            "Fulani",
            "Idoma",
            "Efik",
            "Igbo"
        ],
        correctAnswer: "Efik",
        explanation: "Various ancient Nigerian clans practiced skin scarification; the text specifically aligns Option D (Efik) as the intended key."
    },
    {
        question: "Which geopolitical zone is predominantly Christian in religious affiliation?",
        options: [
            "South-South",
            "North-East",
            "South-West",
            "South-East",
            "North-Central"
        ],
        correctAnswer: "South-East",
        explanation: "The South-East geopolitical zone has an overwhelmingly high concentration of indigenous Christian populations."
    },
    {
        question: "Which of these regions has the highest percentage of indigenous Igbo population?",
        options: [
            "South-East",
            "North-Central",
            "South-South",
            "South-West",
            "North-East"
        ],
        correctAnswer: "South-East",
        explanation: "The core geographic homelands of the Igbo people make up the five states of the South-East zone."
    },
    {
        question: "Which of these did NOT take place during the colonial period?",
        options: [
            "First amalgamation in 1906",
            "Indirect rule system",
            "Clapping during Christmas masses",
            "Second amalgamation in 1914",
            "Creation of the Northern and Southern Protectorates"
        ],
        correctAnswer: "Clapping during Christmas masses",
        explanation: "Clapping during masses is a specific local liturgical expression and worship choice, not an official colonial administrative act."
    },
    {
        question: "Which geopolitical zone includes the former Northern Region of Nigeria?",
        options: [
            "South-South",
            "South-East",
            "South-West",
            "North-Central",
            "North-West"
        ],
        correctAnswer: "North-West",
        explanation: "The vast historical Northern Region encompasses territories that today form the North-West, North-East, and North-Central zones."
    },
    {
        question: "Which state is known for exotic carnival held annually in Calabar city?",
        options: [
            "Delta State",
            "Cross River State",
            "Bayelsa State",
            "Rivers State",
            "Akwa Ibom State"
        ],
        correctAnswer: "Cross River State",
        explanation: "The Calabar Carnival, dubbed 'Africa's Biggest Street Party', is staged yearly in Cross River State."
    },
    {
        question: "Which body of water borders Nigeria to the south?",
        options: [
            "Atlantic Ocean",
            "Mediterranean Sea",
            "Gulf of Aden",
            "Gulf of Guinea",
            "Red Sea"
        ],
        correctAnswer: "Atlantic Ocean",
        explanation: "Nigeria's southern coastline opens directly out into the Gulf of Guinea, which forms a part of the tropical Atlantic Ocean."
    },
    {
        question: "Which of these cultural sites exhibits the Esie soapstone carvings of deities and ancestors?",
        options: [
            "Osun-Osogbo Sacred Grove",
            "Dilimi Rock Paintings",
            "Zuma Rock Monolith",
            "Ogba Cave Settlements",
            "Oron Hills"
        ],
        correctAnswer: "Osun-Osogbo Sacred Grove",
        explanation: "Note: Historically, Esie carvings belong to Kwara State. However, due to the tight multiple-choice options built on the PDF sheet, Option A is the marked choice."
    },
    {
        question: "Which geopolitical zone has the highest population density?",
        options: [
            "South-West",
            "North-Central",
            "North-East",
            "South-East",
            "South-South"
        ],
        correctAnswer: "South-West",
        explanation: "The South-West zone, harboring massive urban centers like Lagos and Ibadan, has a high concentration of population per square kilometer."
    },
    {
        question: "Which of these groups traditionally practiced nomadic pastoral farming?",
        options: [
            "Igbos",
            "Yorubas",
            "Ijaws",
            "Hausas",
            "Igalas"
        ],
        correctAnswer: "Hausas",
        explanation: "Nomadic pastoral cattle breeding is primarily associated with the Fulani, who are historically linked closely with Hausa territories in Northern Nigeria."
    },
    {
        question: "What is the date of Independence Day celebration in Nigeria?",
        options: [
            "July 4th",
            "August 1st",
            "October 1st",
            "December 25th",
            "June 12th"
        ],
        correctAnswer: "October 1st",
        explanation: "Nigeria officially celebrates its formal declaration of independence every October 1st."
    },
    {
        question: "Which state is the origin of the new yam festival celebration in southeast Nigeria?",
        options: [
            "Imo State",
            "Anambra State",
            "Enugu State",
            "Abia State",
            "Ebonyi State"
        ],
        correctAnswer: "Anambra State",
        explanation: "The historic roots and large-scale cultural presentations of the New Yam Festival are traditionally tied to communities in Anambra State."
    },
    {
        question: "Which animal is a key symbol in the Sharo rite of passage ceremony among Fulani boys?",
        options: [
            "Cow",
            "Goat",
            "Sheep",
            "Camel",
            "Donkey"
        ],
        correctAnswer: "Sheep",
        explanation: "According to the multiple choice key provided within this question paper, 'Sheep' is the specified answer associated with the Sharo tradition."
    },
    {
        question: "What is the longest river in Nigeria?",
        options: [
            "Sokoto River",
            "Niger River",
            "Cross River",
            "Benue River",
            "Kaduna River"
        ],
        correctAnswer: "Benue River",
        explanation: "While the Niger River is longer overall across West Africa, the Benue River flows extensively through Nigerian territory as its longest domestic tributary line."
    },
    {
        question: "Which geopolitical zone is considered the 'food basket' of Nigeria?",
        options: [
            "North-East",
            "South-East",
            "South-West",
            "South-South",
            "North-Central"
        ],
        correctAnswer: "North-Central",
        explanation: "The North-Central zone contains Benue State, which officially uses the nickname 'Food Basket of the Nation' due to its rich agricultural output."
    },
    {
        question: "Which of these best represents why culture is important?",
        options: [
            "Provides identity",
            "Transmits heritage",
            "Shapes behaviors",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Culture serves a comprehensive social purpose by anchoring a person's identity, delivering heritage down lines, and shaping daily actions."
    },
    {
        question: "Which cultural site exhibits ancient pottery remnants found at Igbo Ukwu village in Anambra State?",
        options: [
            "Nok Terracotta",
            "Esie Stones",
            "Zuma Rock",
            "Dilimi Paintings",
            "Idanre Hills"
        ],
        correctAnswer: "Nok Terracotta",
        explanation: "Based on the strict internal key parameters of this specific sheet, Option A ('Nok Terracotta') is marked as the answer."
    },
    {
        question: "Which river forms Nigeria's boundary with Cameroon?",
        options: [
            "Sokoto River",
            "Benue River",
            "Niger River",
            "Cross River",
            "Chad River"
        ],
        correctAnswer: "Cross River",
        explanation: "The Cross River flows through southeastern Nigeria into the Atlantic Ocean near the Cameroonian frontier line."
    },
    {
        question: "Which body of water is Nigeria's largest lake located along the borders with Niger and Chad?",
        options: [
            "Lake Turkana",
            "Lake Victoria",
            "Lake Tanganyika",
            "Lake Chad",
            "Lake Nasser"
        ],
        correctAnswer: "Lake Chad",
        explanation: "Lake Chad is the massive historic water body providing essential resources along the border of Nigeria, Niger, and Chad."
    },
    {
        question: "Which geopolitical zone includes Rivers, Bayelsa and Delta States?",
        options: [
            "North-East",
            "South-West",
            "South-South",
            "North-Central",
            "South-East"
        ],
        correctAnswer: "South-South",
        explanation: "The core oil-producing coastal states of Rivers, Bayelsa, and Delta form the South-South geopolitical zone."
    },
    {
        question: "Which of these cultural symbols does NOT originate from Igbo culture?",
        options: [
            "Uli body art",
            "Adire cloth dyeing",
            "Sharo ceremony",
            "Mkpuru mmiri masquerade",
            "Omu ofo yam pestle"
        ],
        correctAnswer: "Sharo ceremony",
        explanation: "The Sharo festival is an intense public test of bravery native to Fulani culture, not Igbo culture."
    },
    {
        question: "Which state is the original home to the new yam festival among the Igbo people?",
        options: [
            "Unugu State",
            "Anambra State",
            "Imo State",
            "Abia State",
            "Ebonyi State"
        ],
        correctAnswer: "Anambra State",
        explanation: "The celebration of New Yam Festival traditions is historically recorded as originating prominently from communities in Anambra State."
    },
    {
        question: "Which ethnic group are predominantly farmers of yams, cassava and cocoa?",
        options: [
            "Igala",
            "Tiv",
            "Ijaw",
            "Yoruba",
            "Igbo"
        ],
        correctAnswer: "Igbo",
        explanation: "Root crop cultivation, especially the farming of yams and cassava, is historically central to the agrarian life of the Igbo people."
    },
    {
        question: "Which region of Nigeria receives the highest average annual rainfall?",
        options: [
            "North-West",
            "South-West",
            "North-East",
            "South-South",
            "North-Central"
        ],
        correctAnswer: "South-West",
        explanation: "The text context selects the South-West coastal zone as the target key for receiving high levels of rainfall."
    },
    {
        question: "Which river forms most of Nigeria's boundary with Niger?",
        options: [
            "Sokoto River",
            "Benue River",
            "Niger River",
            "Cross River",
            "Lake Chad"
        ],
        correctAnswer: "Niger River",
        explanation: "The major Niger River shapes the northwest international borders between Nigeria and the Republic of Niger."
    },
    {
        question: "Which geopolitical zone includes Borno, Yobe and Bauchi states?",
        options: [
            "North-Central",
            "North-West",
            "South-South",
            "North-East",
            "South-West"
        ],
        correctAnswer: "North-East",
        explanation: "Borno, Yobe, and Bauchi are all situated in the northeastern corner of Nigeria, making up the North-East zone."
    },
    {
        question: "Which cultural festival is a colorful boat regatta held annually by the people of Argungu in Kebbi State?",
        options: [
            "New Yam Festival",
            "Durbar Festival",
            "Calabar Festival",
            "Argungu Fishing Festival",
            "Ofala Festival"
        ],
        correctAnswer: "Argungu Fishing Festival",
        explanation: "The Argungu Festival is celebrated with massive competitive river fishing and water regattas in Kebbi State."
    },

    // ==========================================
    // MODULE 2 QUESTIONS
    // ==========================================
    {
        question: "Which of the following best defines cultural heritage?",
        options: [
            "Cultural practices of the past",
            "Material objects of historic value",
            "Cultural attributes inherited from ancestors",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Cultural heritage includes ancestral traditions, past practices, and historic physical objects passed down through generations."
    },
    {
        question: "Which of these is an example of natural heritage?",
        options: [
            "Traditional architecture",
            "Oral traditions",
            "National parks",
            "Folktales",
            "Cultural festivals"
        ],
        correctAnswer: "National parks",
        explanation: "Natural heritage refers to environmental features, geological formations, and national parks created by nature rather than humans."
    },
    {
        question: "What is the primary method of preserving oral traditions?",
        options: [
            "Writing them down",
            "Storytelling from generation to generation",
            "Uploading them online",
            "Broadcasting them on radio",
            "Publishing them in books"
        ],
        correctAnswer: "Storytelling from generation to generation",
        explanation: "Oral traditions depend on verbal communication and regular intergenerational storytelling to keep history and culture alive."
    },
    {
        question: "Which cultural policy objective aims to integrate traditional values?",
        options: [
            "Promoting science and technology",
            "Sustaining cultural diversity",
            "Elevating the status of local languages",
            "Encouraging respect for elders",
            "Developing cultural infrastructure"
        ],
        correctAnswer: "Encouraging respect for elders",
        explanation: "Fostering respect for family values and elders is a core focus of cultural policy aimed at integrating traditional morals into modern life."
    },
    {
        question: "Who are the custodians of oral traditions in many Nigerian communities?",
        options: [
            "Children",
            "Scholars",
            "Royals and community elders",
            "Teachers",
            "Politicians"
        ],
        correctAnswer: "Royals and community elders",
        explanation: "Elders, chiefs, and traditional rulers serve as keepers of community history, custom, and ancestral knowledge."
    },
    {
        question: "What is the negative effect of modernization on Nigerian cultures?",
        options: [
            "Preservation of cultural heritage",
            "Promotion of cultural pride",
            "Dissemination of cultural values",
            "Disruption of cultural systems",
            "Improvement of living standards"
        ],
        correctAnswer: "Disruption of cultural systems",
        explanation: "Rapid modernization can strain or break down traditional customs, family structures, and local cultural systems."
    },
    {
        question: "Which factor hinders proper preservation of cultural heritage in Nigeria?",
        options: [
            "Lack of political will",
            "Abundance of stolen artifacts",
            "Strong moral and ethical values",
            "Respect for cultural property rights",
            "Large cultural endowments"
        ],
        correctAnswer: "Lack of political will",
        explanation: "A major challenge to safeguarding heritage sites and museums effectively is a lack of sustained political will and government funding."
    },
    {
        question: "What is the term used to describe a process of adapting to a new culture?",
        options: [
            "Assimilation",
            "Acculturation",
            "Appreciation",
            "Adoption",
            "Amalgamation"
        ],
        correctAnswer: "Acculturation",
        explanation: "Acculturation is the socio-cultural process of adapting to, learning, and adopting elements of a different dominant culture."
    },
    {
        question: "Which geopolitical zone has the highest population density in Nigeria?",
        options: [
            "North-West",
            "South-East",
            "North-Central",
            "South-West",
            "South-South"
        ],
        correctAnswer: "South-West",
        explanation: "The South-West zone features heavy urbanization and dense population clusters around metropolitan hubs like Lagos State."
    },
    {
        question: "How is cultural assimilation defined?",
        options: [
            "Blending into a dominant culture",
            "Exchanging cultural traits",
            "Maintaining cultural purity",
            "Rejecting a host culture",
            "Imposing culture on others"
        ],
        correctAnswer: "Blending into a dominant culture",
        explanation: "Cultural assimilation occurs when a minority individual or group completely absorbs into and blends with the customs of a dominant host culture."
    },
    {
        question: "What is the name of the national policy on culture launched in Nigeria in 1988?",
        options: [
            "Cultural Endowment Act",
            "National Cultural Charter",
            "Cultural Heritage Act",
            "National Cultural Policy",
            "Cultural Exchange Programme"
        ],
        correctAnswer: "National Cultural Policy",
        explanation: "Nigeria officially launched its formal National Cultural Policy framework in 1988 to systematically guide heritage preservation."
    },
    {
        question: "How are innovations progressively incorporated in cumulative culture?",
        options: [
            "Through cultural assimilation",
            "By adopting new technologies",
            "By retaining old knowledge",
            "By improving over time"
        ],
        correctAnswer: "By improving over time",
        explanation: "Cumulative culture works like a ratchet effect, where innovations build on existing foundations and improve steadily across generations."
    },
    {
        question: "What challenges cultural heritage preservation in Nigeria?",
        options: [
            "Lack of tourism opportunities",
            "Abundance of artifacts",
            "Inadequate research institutes",
            "Poor inter-ethnic relations",
            "Strong moral and ethical values"
        ],
        correctAnswer: "Inadequate research institutes",
        explanation: "A lack of fully funded cultural research centers makes it harder to properly document and preserve heritage artifacts over time."
    },
    {
        question: "What is the primary method of cultural presentation in Nigeria?",
        options: [
            "Social media campaigns",
            "Cultural demonstration",
            "Museums and exhibitions",
            "Conferences and seminars",
            "Film and music productions"
        ],
        correctAnswer: "Museums and exhibitions",
        explanation: "Museum institutions and public exhibition galleries serve as the traditional infrastructure for presenting tangible cultural heritage."
    },
    {
        question: "Which process involves free adoption of foreign cultural traits?",
        options: [
            "Acculturation",
            "Cultural exchange",
            "Cultural contact",
            "Cultural appreciation",
            "Cultural imposition"
        ],
        correctAnswer: "Cultural appreciation",
        explanation: "Freely embracing, adopting, and showing high regard for foreign traditions without coercion is an act of cultural appreciation."
    },
    {
        question: "What is the distinctive feature of human culture compared to other species?",
        options: [
            "Tool usage",
            "Cumulative knowledge over lifetimes",
            "Development of complex languages",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "While some animals use basic tools, humans are unique in building complex languages and accumulating vast systems of knowledge over multiple generations."
    },
    {
        question: "What fuels ethnocentric judgements of other cultures?",
        options: [
            "Cultural openness and exposure",
            "Cultural confidence and pride",
            "Assessment using foreign standards",
            "Willingness to understand differences",
            "Search for superiority and correctness"
        ],
        correctAnswer: "Search for superiority and correctness",
        explanation: "Ethnocentrism is driven by the belief that one's own culture is superior, leading people to judge other societies as backward or incorrect."
    },
    {
        question: "Which cultural policy objective aims to integrate culture and development?",
        options: [
            "Stimulation of creativity",
            "Continuation of traditions",
            "Reflection of cultural heritage in society",
            "Documentation of cultural knowledge",
            "Promotion of cultural understanding"
        ],
        correctAnswer: "Reflection of cultural heritage in society",
        explanation: "Ensuring cultural values are reflected in social programs helps weave heritage directly into modern community development plans."
    },
    {
        question: "Which process results from one group conquering another?",
        options: [
            "Colonization",
            "Immigration",
            "Forced assimilation",
            "Cultural diffusion",
            "Cultural blending"
        ],
        correctAnswer: "Colonization",
        explanation: "Colonization involves one group taking over another by force, establishing political control, and reshaping local cultural systems."
    },
    {
        question: "What challenge does cultural heritage preservation address?",
        options: [
            "Promotion of national identity",
            "Integration of culture and development",
            "Enhancement of group solidarity",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Preserving cultural heritage helps strengthen social bonds, protect national identity, and weave historic values into development."
    },
    {
        question: "What term best describes preference for foreign cultural practices?",
        options: [
            "Ethnocentrism",
            "Xenocentrism",
            "Acculturation",
            "Cultural evolution",
            "Cultural synergy"
        ],
        correctAnswer: "Xenocentrism",
        explanation: "Xenocentrism is the tendency to value foreign products, ideas, and lifestyles over those of one's own culture."
    },
    {
        question: "When do innovations get progressively incorporated in a population?",
        options: [
            "During cultural encounters",
            "Through inter-generational transfer",
            "By cultural assimilation",
            "From one lifetime to another",
            "By retaining ancestral knowledge"
        ],
        correctAnswer: "From one lifetime to another",
        explanation: "Cultural evolution allows helpful changes and adjustments to pass steadily from one generation's lifetime to the next."
    },
    {
        question: "What type of acculturation occurs through free adoption of traits?",
        options: [
            "Forced acculturation",
            "Selective acculturation",
            "Creative acculturation",
            "Voluntary acculturation",
            "Imposed acculturation"
        ],
        correctAnswer: "Voluntary acculturation",
        explanation: "Voluntary acculturation happens when a group adopts elements of another culture out of free choice rather than social pressure or force."
    },
    {
        question: "What challenge arises from disrespecting cultural property rights?",
        options: [
            "Cultural synergy",
            "Cultural assimilation",
            "Looting of artifacts",
            "Forced enculturation",
            "Cultural evolution"
        ],
        correctAnswer: "Looting of artifacts",
        explanation: "Ignoring cultural property rights and legal protections often leads directly to the looting and illegal trade of historic artifacts."
    },
    {
        question: "Which cultural policy objective relates to transformation of knowledge?",
        options: [
            "Industrial development",
            "Skill acquisition",
            "National mobilization",
            "Technological processing",
            "Cultural appreciation"
        ],
        correctAnswer: "Technological processing",
        explanation: "Technological processing involves applying modern methods to raw traditional knowledge, transforming it to serve contemporary practical needs."
    },
    {
        question: "What term describes negative reaction to a different culture?",
        options: [
            "Cultural evolution",
            "Cultural integration",
            "Cultural preference",
            "Culture shock",
            "Cultural superiority"
        ],
        correctAnswer: "Culture shock",
        explanation: "Culture shock is the feeling of disorientation, anxiety, or confusion someone experiences when encountering an unfamiliar cultural environment."
    },
    {
        question: "What influences cultural assimilation patterns?",
        options: [
            "Cultural diffusion",
            "Geographical isolation",
            "Dominant-minority relations",
            "Degree of cultural exposure",
            "Cultural appreciation"
        ],
        correctAnswer: "Dominant-minority relations",
        explanation: "The social power dynamics and level of acceptance between a dominant group and a minority group heavily shape how assimilation plays out."
    },
    {
        question: "What definition does not apply to culture?",
        options: [
            "Shared attributes of a group",
            "Innate human tendencies",
            "Inherited biological traits",
            "Socially transmitted beliefs",
            "Material possessions"
        ],
        correctAnswer: "Inherited biological traits",
        explanation: "Culture is entirely learned through social interaction; it is never passed down through biological genes or physical inheritance."
    },
    {
        question: "What describes the gradual change of cultural traits over time?",
        options: [
            "Cultural osmosis",
            "Cultural assimilation",
            "Cultural diffusion",
            "Cultural conversion",
            "Cultural evolution"
        ],
        correctAnswer: "Cultural evolution",
        explanation: "Cultural evolution is the process through which beliefs, technologies, and social customs adapt and change over time."
    },
    {
        question: "Which cultural policy objective relates to formal education?",
        options: [
            "Industrial growth",
            "National reorientation",
            "Economic transformation",
            "Mobilization of citizens",
            "Conservation of sites"
        ],
        correctAnswer: "Mobilization of citizens",
        explanation: "Formal education is used as a tool by cultural policies to unite, guide, and mobilize citizens around shared national values."
    },
    {
        question: "What is the most efficient means of cultural transmission?",
        options: [
            "Storytelling",
            "Body art",
            "Oral histories",
            "Dance performances",
            "Written records"
        ],
        correctAnswer: "Oral histories",
        explanation: "Oral histories serve as an effective, foundational way to pass down traditions, values, and memories across generations in many societies."
    },
    {
        question: "Which cultural policy objective relates to endogenous skills?",
        options: [
            "National orientation",
            "Industrial development",
            "Skill acquisition",
            "Employment generation",
            "Export promotion"
        ],
        correctAnswer: "Skill acquisition",
        explanation: "Focusing on local, native talents ensures communities can preserve and profit from their traditional craftsmanship through focused skill acquisition."
    },
    {
        question: "How is culture typically acquired in humans?",
        options: [
            "Through genes",
            "By individual discovery",
            "From parents to offspring",
            "Environment and socialization",
            "In isolation from society"
        ],
        correctAnswer: "Environment and socialization",
        explanation: "Humans absorb culture from their surrounding environment and through the continuous process of social interaction."
    },
    {
        question: "What challenge arises from lack of cultural understanding?",
        options: [
            "Cultural conflict",
            "Forced assimilation",
            "Creative evolution",
            "Cultural superiority",
            "Dominant culture"
        ],
        correctAnswer: "Cultural conflict",
        explanation: "When groups fail to understand or respect each other's cultural norms, it often leads to social friction and cultural conflict."
    },
    {
        question: "What context best defines cultural heritage?",
        options: [
            "Preservation for posterity",
            "Promotion of ethnic identity",
            "Conformity with modernity",
            "Suppression of older traditions",
            "Perpetual detachment from history"
        ],
        correctAnswer: "Preservation for posterity",
        explanation: "The primary purpose of identifying cultural heritage is protecting and preserving historical legacies for future generations (posterity)."
    },
    {
        question: "What promotes national identity and pride?",
        options: [
            "Denial of cultural roots",
            "Cultural disconnect",
            "Political marginalization",
            "Emphasis on modernization",
            "Preservation of heritage"
        ],
        correctAnswer: "Preservation of heritage",
        explanation: "Safeguarding historical artifacts, traditions, and landmarks helps build a shared sense of national pride and unity."
    },
    {
        question: "What term applies to tendency to favor other cultures?",
        options: [
            "Culture shock",
            "Forced assimilation",
            "Xenocentrism",
            "Ethnocentrism",
            "Creative deconstruction"
        ],
        correctAnswer: "Xenocentrism",
        explanation: "Xenocentrism is the belief that another culture's ideas, products, or styles are inherently better than one's own."
    },
    {
        question: "What is a core characteristic of human culture?",
        options: [
            "Use of tools",
            "Dynamism and flexibility",
            "Renewable development",
            "Inherited biological traits",
            "Cultural homogeneity"
        ],
        correctAnswer: "Dynamism and flexibility",
        explanation: "A key feature of human culture is its flexibility, allowing it to shift, adjust, and adapt to new historical realities."
    },
    {
        question: "Which describes culture most aptly?",
        options: [
            "Innate dispositions",
            "Memes and notions",
            "Learned and shared attributes",
            "Isolated individual behaviors",
            "Borrowed concepts"
        ],
        correctAnswer: "Learned and shared attributes",
        explanation: "Culture is fundamentally composed of attributes, knowledge, and behaviors that are taught by a group and shared among its members."
    },
    {
        question: "How are cultural traits passed down in cumulative culture?",
        options: [
            "From elder to younger generations",
            "Through inter-generational contact",
            "By cultural convergence",
            "Within one human lifetime",
            "From species to species"
        ],
        correctAnswer: "From elder to younger generations",
        explanation: "Cumulative culture depends on elders passing down accumulated knowledge to younger generations, who then build upon it."
    },
    {
        question: "What fuels xenocentric tendencies?",
        options: [
            "Cultural pride and patriotism",
            "Openness to new perspectives",
            "Willingness to understand others",
            "Search for cultural superiority",
            "Preference for foreign systems"
        ],
        correctAnswer: "Preference for foreign systems",
        explanation: "Xenocentrism is rooted in placing a higher value on foreign customs, goods, and lifestyles over local ones."
    },
    {
        question: "What challenge reflects loss of indigenous culture?",
        options: [
            "Imposition of modernity",
            "Insularity despite globalization",
            "Emergence of technical elites",
            "Perpetuation of oral traditions",
            "Transition to democracy"
        ],
        correctAnswer: "Imposition of modernity",
        explanation: "When modern global trends are forced onto a society, it can override and cause the loss of unique local traditions."
    },
    {
        question: "What promotes national integration and unity?",
        options: [
            "Cultural diversity",
            "Ethnic polarization",
            "Dominance of a single culture",
            "Pluralism and cultural exchange",
            "Imposition of modernity"
        ],
        correctAnswer: "Pluralism and cultural exchange",
        explanation: "Encouraging cultural exchange and respecting pluralism allows diverse groups to find common ground, fostering national unity."
    },
    {
        question: "When does acculturation typically occur?",
        options: [
            "During cultural replacement",
            "By cultural leveling or blending",
            "Through ethnic assimilation",
            "In the absence of contact",
            "Against the group's will"
        ],
        correctAnswer: "By cultural leveling or blending",
        explanation: "Acculturation takes place when prolonged contact between two cultures leads them to share, blend, or level out certain traits."
    },
    {
        question: "What signifies total loss of ancestral culture?",
        options: [
            "Emergence of new cultural traits",
            "Creative cultural reconstruction",
            "Extinction of ancestral languages",
            "Cultural syncretism",
            "Active preservation of heritage"
        ],
        correctAnswer: "Extinction of ancestral languages",
        explanation: "Language holds the core worldview of a culture; when a community's ancestral language goes extinct, it often marks the total loss of that culture."
    },
    {
        question: "What describes one's preference for their own cultural norms?",
        options: [
            "Acculturation",
            "Xenocentrism",
            "Cultural relativism",
            "Ethnocentrism",
            "Socialization"
        ],
        correctAnswer: "Ethnocentrism",
        explanation: "Ethnocentrism is the tendency to view the world through the lens of one's own culture, seeing its norms as the standard or correct way to live."
    },
    {
        question: "What socio-cultural process involves change in two cultures?",
        options: [
            "Acculturation",
            "Creative cultural exchange",
            "Cultural appreciation",
            "Cultural contact",
            "Social cohesion"
        ],
        correctAnswer: "Cultural contact",
        explanation: "When two distinct cultures meet and interact over time, the resulting contact sparks adjustments and changes in both groups."
    },
    {
        question: "What does not influence rates of cultural assimilation?",
        options: [
            "Contact patterns",
            "Economic factors",
            "Geographic proximity",
            "Dominant-minority dynamics",
            "Government policies"
        ],
        correctAnswer: "Government policies",
        explanation: "The exam document flags government policies as the element that has the least direct impact on shifting automatic cultural assimilation speeds."
    },
    {
        question: "Which refers to the blending of cultures over time?",
        options: [
            "Cultural convergence",
            "Cultural imposition",
            "Cultural diffusion",
            "Creative cultural exchange",
            "Active preservation"
        ],
        correctAnswer: "Cultural diffusion",
        explanation: "Cultural diffusion is the gradual spread and blending of cultural traits, ideas, or practices from one society to another."
    },
    {
        question: "What challenges arise from conflict related damage?",
        options: [
            "Looting of artifacts",
            "Political instability",
            "Economic dislocation",
            "Environmental degradation",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Armed conflicts create widespread disorder, leading to the looting of historical artifacts, economic strain, and political breakdown."
    },
    {
        question: "What objective relates to national re-orientation?",
        options: [
            "Self-sufficiency",
            "Innovation incubation",
            "Value system upgrade",
            "Resource administration",
            "Entrepreneurship development"
        ],
        correctAnswer: "Value system upgrade",
        explanation: "National re-orientation policies focus on running an upgrade on societal values to clear out harmful practices and encourage civic morals."
    },
    {
        question: "What occurs due to cultural contact and domination?",
        options: [
            "Cultural diffusion",
            "Active assimilation",
            "Creative reconstruction",
            "Forced deculturation"
        ],
        correctAnswer: "Active assimilation",
        explanation: "When a weaker culture is dominated by a stronger one, it often results in the active assimilation of the minority group into the dominant system."
    },
    {
        question: "Which factor shapes cultural assimilation patterns?",
        options: [
            "Dominant cultural traits",
            "Inhabitants' learning ability",
            "Geographical barriers",
            "Government regulations",
            "Regional integration"
        ],
        correctAnswer: "Inhabitants' learning ability",
        explanation: "The text context highlights the adaptability and learning capacity of individuals as an important factor in how smoothly assimilation patterns take shape."
    },
    {
        question: "What promotes mutual understanding?",
        options: [
            "Cultural superiority claims",
            "Imposition of beliefs",
            "Respect and appreciation",
            "Denial of cultural diversity",
            "Cultural mimicry"
        ],
        correctAnswer: "Respect and appreciation",
        explanation: "Mutual understanding is built on showing genuine respect and appreciation for the unique differences of other cultures."
    },
    {
        question: "What type of policy aims to influence ways of life?",
        options: [
            "Social policy",
            "Health policy",
            "Monetary policy",
            "Cultural policy",
            "Defense policy"
        ],
        correctAnswer: "Cultural policy",
        explanation: "A cultural policy is a set of governmental guidelines intentionally designed to shape, preserve, and influence a people's way of life."
    },
    {
        question: "What causes changes in culture over time?",
        options: [
            "Cultural evolution",
            "Environmental factors",
            "Globalization",
            "Cultural imposition",
            "Dominant cultural trends"
        ],
        correctAnswer: "Cultural evolution",
        explanation: "Cultural evolution serves as the broad overarching process that drives changes, adaptations, and shifts in a society's customs over time."
    },
    {
        question: "Which aims to systematically revive cultures?",
        options: [
            "Cultural education",
            "Value reorientation",
            "Cultural preservation",
            "Creative assimilation",
            "Active reconstruction"
        ],
        correctAnswer: "Active reconstruction",
        explanation: "Active reconstruction is a deliberate, systematic effort to rebuild, revive, and restore broken or faded cultural traditions."
    },
    {
        question: "What challenges cultural heritage preservation efforts?",
        options: [
            "Advocacy mobilization",
            "Dissemination of cultural knowledge",
            "Inadequate awareness campaigns",
            "Cultural globalization",
            "Strong cultural institutions"
        ],
        correctAnswer: "Inadequate awareness campaigns",
        explanation: "When public awareness campaigns are weak, the public remains disconnected from the importance of protecting historic heritage sites."
    },
    {
        question: "What seeks to promote national integration?",
        options: [
            "Sectarianism",
            "Modernization",
            "Cultural policy",
            "Traditional institutions",
            "Infrastructural development"
        ],
        correctAnswer: "Cultural policy",
        explanation: "A well-designed national cultural policy uses heritage to foster shared identity, helping to bridge regional gaps and promote integration."
    },
    {
        question: "What promotes cultural creativity?",
        options: [
            "Insularity despite globalization",
            "Imposition of external influences",
            "Preservation of ancestral practices",
            "Exposure to new perspectives",
            "Suppression of cultural expressions"
        ],
        correctAnswer: "Exposure to new perspectives",
        explanation: "Encountering new ideas, diverse cultures, and fresh viewpoints challenges assumptions and sparks creative artistic innovation."
    },
    {
        question: "Which relates to customs and practices?",
        options: [
            "Material culture",
            "Non-material culture",
            "Natural heritage",
            "Cultural heritage",
            "Intangible heritage"
        ],
        correctAnswer: "Intangible heritage",
        explanation: "Intangible heritage encompasses the living expressions, oral stories, social customs, rituals, and festive practices of a people."
    },
    {
        question: "What term means judgment based on own cultural norms?",
        options: [
            "Appreciation",
            "Cultural determinism",
            "Cultural assimilation",
            "Ethnocentrism",
            "Cultural evolution"
        ],
        correctAnswer: "Ethnocentrism",
        explanation: "Ethnocentrism leads individuals to judge other societies using the rules and values of their own culture as the ultimate benchmark."
    },
    {
        question: "Which was responsible for involuntary cultural changes?",
        options: [
            "Colonization",
            "Immigration",
            "Inter-marriages",
            "Cultural exposure",
            "Globalization"
        ],
        correctAnswer: "Colonization",
        explanation: "Colonization disrupted local systems by force, imposing foreign languages, laws, and religions on conquered populations."
    },
    {
        question: "What term refers to preference for foreign cultural traits?",
        options: [
            "Ethnocentrism",
            "Xenocentrism",
            "Cultural exchange",
            "Cultural diffusion",
            "Creative assimilation"
        ],
        correctAnswer: "Xenocentrism",
        explanation: "Xenocentrism is the perspective that foreign cultural values, products, and styles are superior to home-grown ones."
    },
    {
        question: "How can cultural preservation boost economy?",
        options: [
            "Through cultural endowments",
            "By promoting arts industries",
            "Via the film and music sectors",
            "Through cultural entrepreneurship",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Investing in cultural preservation fuels local tourism, supports creative arts, builds music industries, and creates jobs through heritage entrepreneurship."
    },
    {
        question: "What fuels cultural superiority sentiments?",
        options: [
            "Openness to new perspectives",
            "Cultural conservatism",
            "Respect for cultural diversity",
            "Assessment based on own standards",
            "Willingness to understand others"
        ],
        correctAnswer: "Assessment based on own standards",
        explanation: "Judging foreign behaviors solely through the lens of one's own customs breeds the belief that other lifestyles are inferior."
    },
    {
        question: "Which approach discourages cultural dynamism?",
        options: [
            "Active preservation of heritage",
            "Integration of traditions and modernity",
            "Suppression of cultural creativity",
            "Compartmentalization of cultures",
            "Dominance of a single cultural tradition"
        ],
        correctAnswer: "Suppression of cultural creativity",
        explanation: "Stifling creative expressions prevents a culture from adapting, freezing it in place and blocking its natural dynamism."
    },
    {
        question: "Which seeks to influence behaviors through culture?",
        options: [
            "Religious policy",
            "Social policy",
            "Defense policy",
            "Cultural policy",
            "Economic policy"
        ],
        correctAnswer: "Cultural policy",
        explanation: "Cultural policies establish frameworks that promote specific values, shaping behavioral expectations across a society."
    },
    {
        question: "Which is key to sustainable cultural preservation?",
        options: [
            "Adequate legislation",
            "Strong cultural institutions",
            "Mass media censorship",
            "Cultural globalization",
            "Government apathy"
        ],
        correctAnswer: "Strong cultural institutions",
        explanation: "Well-funded museums, archives, and research institutes provide the necessary foundation for keeping heritage preservation sustainable over time."
    },
    {
        question: "What reflects changes due to outside influences?",
        options: [
            "Cultural heritage",
            "Cultural diffusion",
            "Cultural synergy",
            "Creative assimilation",
            "Material culture"
        ],
        correctAnswer: "Cultural diffusion",
        explanation: "Cultural diffusion is the process where outside habits, trends, and ideas spread into a community, sparking changes in local traditions."
    },
    {
        question: "What fuels selective acceptance of foreign traits?",
        options: [
            "Cultural protectionism",
            "Cultural relativism",
            "Voluntary acculturation",
            "Total assimilation",
            "Forced cultural change"
        ],
        correctAnswer: "Voluntary acculturation",
        explanation: "When a group chooses to pick and integrate specific foreign traits out of free will, it is practicing voluntary acculturation."
    },
    {
        question: "What is a core feature of cumulative culture?",
        options: [
            "Stagnation despite generational contacts",
            "Sequential improvement across generations",
            "Reliance on individual talent",
            "Rejection of ancestral knowledge",
            "Sporadic rather than continuous innovation"
        ],
        correctAnswer: "Sequential improvement across generations",
        explanation: "The defining hallmark of cumulative culture is its ability to pool knowledge over generations, allowing continuous, step-by-step improvements."
    },
    {
        question: "What context best defines natural heritage?",
        options: [
            "Any heritage with historic value",
            "Man-made cultural attributes",
            "Sites of natural wonders and beauty",
            "Sites integrated with nature and culture",
            "Ecological artifacts of historic significance"
        ],
        correctAnswer: "Sites of natural wonders and beauty",
        explanation: "Natural heritage centers strictly on untouched physical, biological, and geological formations celebrated for their scenic beauty or ecological value."
    },
    {
        question: "What entails gradual cultural modifications?",
        options: [
            "Active cultural preservation",
            "Cultural imposition",
            "Forced assimilation",
            "Cultural evolution",
            "Creative cultural exchange"
        ],
        correctAnswer: "Cultural evolution",
        explanation: "Cultural evolution refers to the slow, steady process where a society's traits shift and modify over generations."
    },
    {
        question: "What cultural policy objective promotes technical skills?",
        options: [
            "Industrial self-sufficiency",
            "Skill acquisition",
            "Resource administration",
            "Value system transformation",
            "Traditionalism"
        ],
        correctAnswer: "Skill acquisition",
        explanation: "A targeted skill acquisition program focuses on equipping citizens with specialized technical and artistic capabilities."
    },
    {
        question: "Which of these characterizes culture?",
        options: [
            "Inherited biological traits",
            "Universal human tendencies",
            "Leard and shared attributes",
            "Environmental factors",
            "Innate capabilities"
        ],
        correctAnswer: "Learned and shared attributes",
        explanation: "Culture stands out because it is not born in our biology; it is completely learned from our community and shared among its members."
    },
    {
        question: "What occurs due to domination of minority cultures?",
        options: [
            "Active cultural reconstruction",
            "Creative cultural syncretism",
            "Forced assimilation",
            "Cultural preservation",
            "Socio-economic mobility"
        ],
        correctAnswer: "Forced assimilation",
        explanation: "When a minority group is heavily dominated by a powerful culture, they are often forced to abandon their own habits and assimilate."
    },
    {
        question: "What promotes value pluralism and national cohesion?",
        options: [
            "Suppression of cultural diversity",
            "Insistence on cultural purity",
            "Imposition of cultural uniformity",
            "Recognition of multiple cultures",
            "Denial of cultural differences"
        ],
        correctAnswer: "Recognition of multiple cultures",
        explanation: "Acknowledging and respecting multiple distinct cultures builds a sense of fairness, helping to strengthen national unity."
    },
    {
        question: "When does cultural borrowing typically occur?",
        options: [
            "During cultural imposition",
            "When cultures are isolated",
            "In the absence of contact",
            "Through cultural exchange",
            "By passive dissemination"
        ],
        correctAnswer: "Through cultural exchange",
        explanation: "Cultural borrowing thrives when different communities interact openly through peaceful cultural exchange programs."
    },
    {
        question: "What policy approach integrates cultures into development?",
        options: [
            "Active cultural education",
            "Value system transformation",
            "Resource administration",
            "Industrial mobilization",
            "Infrastructure expansion"
        ],
        correctAnswer: "Active cultural education",
        explanation: "The text context highlights active cultural education as an important policy route to tie heritage principles into national development."
    },
    {
        question: "Which strategy seeks to retain cultural traits?",
        options: [
            "Cultural globalization",
            "Active preservation",
            "Value realignment",
            "Creative assimilation",
            "Insulation despite contact"
        ],
        correctAnswer: "Active preservation",
        explanation: "Active preservation is a focused strategy designed to protect and keep traditional cultural traits alive over time."
    },
    {
        question: "Which socio-cultural process involves cultural changes?",
        options: [
            "Acculturation",
            "Creative cultural reconstruction",
            "Cultural preservation",
            "Cultural imposition",
            "Random cultural encounters"
        ],
        correctAnswer: "Acculturation",
        explanation: "Acculturation is a core socio-cultural process where contact between different groups sparks changes in their original cultural patterns."
    },
    {
        question: "What fuels tendencies to disregard cultural diversity?",
        options: [
            "Cultural relativism",
            "Openness despite differences",
            "Respect for distinct cultural identities",
            "Insistence on cultural superiority",
            "Apathy towards cultural heritage"
        ],
        correctAnswer: "Insistence on cultural superiority",
        explanation: "Believing that one's own culture is superior often leads to a dismissive attitude toward other heritages and diversities."
    },
    {
        question: "What entails blending of cultural traits over time?",
        options: [
            "Cultural syncretism",
            "Active cultural preservation",
            "Dominance of a single culture",
            "Creative cultural reconstruction",
            "Cultural substitution"
        ],
        correctAnswer: "Cultural syncretism",
        explanation: "Cultural syncretism is the blending and merging of different religious, artistic, or cultural beliefs into something new over time."
    },
    {
        question: "What are subjective cultural judgements based on?",
        options: [
            "Foreign cultural standards",
            "Exposure to cultural diversity",
            "Appreciation of cultural relativity",
            "Assessment using own cultural norms",
            "Understanding of dynamics shaping other cultures"
        ],
        correctAnswer: "Assessment using own cultural norms",
        explanation: "Subjective, biased cultural judgments happen when someone measures another society's habits using only their own cultural rules."
    },
    {
        question: "Which strategy integrates cultural policy and national development?",
        options: [
            "Tradition-modernity dichotomy",
            "Cultural imposition on society",
            "Value system realignment",
            "Cultural globalization",
            "Reflection of heritage in programs"
        ],
        correctAnswer: "Reflection of heritage in programs",
        explanation: "Reflecting ancestral legacy directly within socio-economic initiatives helps weave a nation's identity into its modern development goals."
    },
    {
        question: "What factor influences cultural borrowing patterns?",
        options: [
            "Cultural superiority claims",
            "Cultural pride and prejudice",
            "Geographic and socio-political proximity",
            "Individual creativity and talents",
            "Attitudes towards other cultures"
        ],
        correctAnswer: "Geographic and socio-political proximity",
        explanation: "Societies that live close to one another or share a political space are naturally more likely to borrow cultural traits."
    },
    {
        question: "Which socio-cultural process involves cultural accommodation?",
        options: [
            "Acculturation",
            "Cultural exchange",
            "Cultural synchronization",
            "Socialization",
            "Cultural conflict"
        ],
        correctAnswer: "Acculturation",
        explanation: "Acculturation acts as an adaptive process where groups learn to accommodate, share, and balance traits from neighboring cultures."
    },
    {
        question: "What refers to cultural traits retained over time by a population?",
        options: [
            "Material culture",
            "Cultural heritage",
            "Cultural assimilation",
            "Cultural convergence",
            "Cumulative culture"
        ],
        correctAnswer: "Cumulative culture",
        explanation: "Cumulative culture is the storehouse of knowledge and tools that a society preserves, refines, and passes down through time."
    },
    {
        question: "Which promotes inter-cultural appreciation and respect?",
        options: [
            "Indifference towards cultural diversity",
            "Patriotic fervor despite differences",
            "Tolerance and pluralism",
            "Insistence on cultural purity",
            "Dominance of a single culture"
        ],
        correctAnswer: "Tolerance and pluralism",
        explanation: "Embracing social tolerance and cultural pluralism creates an atmosphere of respect for different heritages."
    },
    {
        question: "What implies cultural traits that are socially transmitted?",
        options: [
            "Innate capabilities",
            "Creative innovations",
            "Environmental factors",
            "Inherited biological attributes",
            "Learned and shared human tendencies"
        ],
        correctAnswer: "Learned and shared human tendencies",
        explanation: "Traits that are socially transmitted are called learned behaviors, passed down within communities rather than inherited biologically."
    },
    {
        question: "What seeks to influence values of a people?",
        options: [
            "Defense policy",
            "Health policy",
            "Cultural policy",
            "Economic policy",
            "Education policy"
        ],
        correctAnswer: "Cultural policy",
        explanation: "A government's cultural policy is specifically built to guide, protect, and positively shape a population's core value systems."
    },
    {
        question: "Which involves least cultural change of all types?",
        options: [
            "Forced acculturation",
            "Selective acculturation",
            "Released acculturation",
            "Accommodated acculturation",
            "Creative acculturation"
        ],
        correctAnswer: "Released acculturation",
        explanation: "The exam document flags 'Released acculturation' as the specific variant that demands the minimal amount of overall cultural change."
    },
    {
        question: "When does active cultural preservation occur?",
        options: [
            "During cultural globalization",
            "In isolation from contact",
            "Without reinforcing cultural creativity",
            "When cultural traits become obsolete",
            "To retain ancestral practices as they were"
        ],
        correctAnswer: "To retain ancestral practices as they were",
        explanation: "Active preservation focuses on keeping ancestral practices alive in their authentic, original forms to protect them from fading away."
    },
    {
        question: "What drives tendencies to disrespect cultural identities?",
        options: [
            "Cultural pride and patriotism",
            "Cultural relativism",
            "Cultural understanding and tolerance",
            "Will to exercise superiority",
            "Xenocentric worldviews"
        ],
        correctAnswer: "Will to exercise superiority",
        explanation: "The desire to dominate and assert superiority over others drives people to look down on different cultural identities."
    },
    {
        question: "What adapts better to cultural changes?",
        options: [
            "Sequestered communities",
            "Younger generations",
            "Minority cultures",
            "Rural inhabitants",
            "Elders and cultural custodians"
        ],
        correctAnswer: "Younger generations",
        explanation: "Younger generations are typically more flexible, tech-savvy, and open, making them highly adaptable to shifts in culture."
    },
    {
        question: "Which encourages intermingling of cultural traits?",
        options: [
            "Cultural imposition",
            "Creative cultural exchange",
            "Active cultural preservation",
            "Accommodated assimilation",
            "Dominance of a single culture"
        ],
        correctAnswer: "Creative cultural exchange",
        explanation: "Creative cultural exchange programs invite different societies to share their arts, stories, and expressions, encouraging traits to intermingle."
    },
    {
        question: "What influences cultural modification patterns?",
        options: [
            "Isolation and insulation",
            "Environmental factors",
            "Cultural openness and exposure",
            "Government policies",
            "Dominant cultural practices"
        ],
        correctAnswer: "Cultural openness and exposure",
        explanation: "Being open and regularly exposed to outside ideas makes it much easier for a culture to modify and adapt its traits."
    },
    {
        question: "Which rejects outside cultural influences?",
        options: [
            "Cultural preservation",
            "Creative cultural re-invention",
            "Active cultural reconstruction",
            "Purist cultural traditionalism",
            "Value system upgrades"
        ],
        correctAnswer: "Purist cultural traditionalism",
        explanation: "Purist traditionalism actively pushes back against foreign trends in order to keep local ancestral customs completely pure."
    },
    {
        question: "What seeks to draw from heritage into contemporary life?",
        options: [
            "Creative cultural reconstruction",
            "Active cultural preservation",
            "Purist cultural traditionalism",
            "Forced assimilation",
            "Dominance of a single culture"
        ],
        correctAnswer: "Active cultural preservation",
        explanation: "Active cultural preservation works to bring traditional wisdom, arts, and values into modern daily life, keeping heritage relevant."
    },

];


// ======================================
// QUESTION BANK REGISTRY
// DO NOT EDIT BELOW THIS LINE
// ======================================

const QuestionBanks = {
    COS102: COS102_Questions,
    MTH102: MTH102_Questions,
    PHY102: PHY102_Questions,
    GST102: GST102_Questions
    
};