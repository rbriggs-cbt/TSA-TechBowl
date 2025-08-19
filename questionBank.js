// TSA Tech Bowl Question Bank - Expandable to 2400 questions
// Current: 120 questions (30 per subject, 10 per difficulty)
// Target: 2400 questions (600 per subject, 200 per difficulty)

const questionBank = {
    science: {
        easy: [
            { question: "What is the chemical symbol for gold?", answer: "Au", wrongAnswers: ["Ag", "Fe", "Cu"] },
            { question: "What planet is known as the Red Planet?", answer: "Mars", wrongAnswers: ["Venus", "Jupiter", "Saturn"] },
            { question: "What is the hardest natural substance on Earth?", answer: "Diamond", wrongAnswers: ["Granite", "Steel", "Quartz"] },
            { question: "What gas do plants absorb from the air?", answer: "Carbon dioxide", wrongAnswers: ["Oxygen", "Nitrogen", "Hydrogen"] },
            { question: "What is the largest organ in the human body?", answer: "Skin", wrongAnswers: ["Heart", "Liver", "Brain"] },
            { question: "What is the chemical symbol for oxygen?", answer: "O", wrongAnswers: ["Ox", "O2", "Ox2"] },
            { question: "What is the closest star to Earth?", answer: "Sun", wrongAnswers: ["Alpha Centauri", "Polaris", "Sirius"] },
            { question: "What is the main component of air?", answer: "Nitrogen", wrongAnswers: ["Oxygen", "Carbon dioxide", "Argon"] },
            { question: "What is the chemical symbol for water?", answer: "H2O", wrongAnswers: ["H2O2", "CO2", "NaCl"] },
            { question: "What is the study of fossils called?", answer: "Paleontology", wrongAnswers: ["Archaeology", "Geology", "Biology"] }
        ],
        medium: [
            { question: "What is the atomic number of carbon?", answer: "6", wrongAnswers: ["12", "14", "8"] },
            { question: "What type of energy does a stretched rubber band have?", answer: "Elastic potential energy", wrongAnswers: ["Kinetic energy", "Thermal energy", "Chemical energy"] },
            { question: "What is the process by which plants make their own food?", answer: "Photosynthesis", wrongAnswers: ["Respiration", "Fermentation", "Digestion"] },
            { question: "What is the SI unit of force?", answer: "Newton", wrongAnswers: ["Joule", "Watt", "Pascal"] },
            { question: "What is the chemical formula for water?", answer: "H2O", wrongAnswers: ["CO2", "NaCl", "H2O2"] },
            { question: "What is the atomic number of hydrogen?", answer: "1", wrongAnswers: ["2", "0", "3"] },
            { question: "What is the study of weather called?", answer: "Meteorology", wrongAnswers: ["Climatology", "Atmospheric science", "Weather science"] },
            { question: "What is the chemical symbol for iron?", answer: "Fe", wrongAnswers: ["Ir", "Fe2", "Iron"] },
            { question: "What is the process of cell division called?", answer: "Mitosis", wrongAnswers: ["Meiosis", "Fission", "Fusion"] },
            { question: "What is the SI unit of temperature?", answer: "Kelvin", wrongAnswers: ["Celsius", "Fahrenheit", "Rankine"] }
        ],
        hard: [
            { question: "What is the Heisenberg Uncertainty Principle?", answer: "It's impossible to simultaneously know both the position and momentum of a particle with absolute certainty", wrongAnswers: ["Particles can exist in multiple states simultaneously", "Energy cannot be created or destroyed", "The speed of light is constant"] },
            { question: "What is the process of nuclear fusion?", answer: "The combining of two light atomic nuclei to form a heavier nucleus, releasing energy", wrongAnswers: ["The splitting of heavy atomic nuclei", "The decay of radioactive elements", "The formation of chemical bonds"] },
            { question: "What is quantum entanglement?", answer: "A phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently", wrongAnswers: ["The superposition of quantum states", "The tunneling effect in quantum mechanics", "The wave-particle duality"] },
            { question: "What is the theory of relativity?", answer: "Einstein's theory that space and time are relative and not absolute", wrongAnswers: ["Newton's laws of motion", "The theory of evolution", "The big bang theory"] },
            { question: "What is dark matter?", answer: "A form of matter that doesn't emit, absorb, or reflect light, but exerts gravitational force", wrongAnswers: ["Matter that absorbs all light", "Antimatter", "Neutron stars"] },
            { question: "What is the Higgs boson?", answer: "A fundamental particle that gives mass to other particles", wrongAnswers: ["A type of quark", "A force carrier particle", "A dark matter particle"] },
            { question: "What is string theory?", answer: "A theoretical framework that attempts to reconcile quantum mechanics and general relativity", wrongAnswers: ["A theory about musical instruments", "A theory about DNA structure", "A theory about black holes"] },
            { question: "What is the multiverse theory?", answer: "The hypothesis that there are multiple universes beyond our own", wrongAnswers: ["The theory of multiple dimensions", "The theory of parallel timelines", "The theory of quantum mechanics"] },
            { question: "What is the anthropic principle?", answer: "The principle that observations of the universe must be compatible with the conscious life that observes it", wrongAnswers: ["The principle of natural selection", "The principle of conservation of energy", "The principle of relativity"] },
            { question: "What is the holographic principle?", answer: "The idea that the information in a volume of space can be represented as encoded on a boundary of that space", wrongAnswers: ["The principle of holographic displays", "The principle of 3D imaging", "The principle of light diffraction"] }
        ]
    },
    technology: {
        easy: [
            { question: "What does CPU stand for?", answer: "Central Processing Unit", wrongAnswers: ["Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"] },
            { question: "What is the main function of RAM?", answer: "Temporary storage for running programs", wrongAnswers: ["Permanent storage for files", "Processing calculations", "Displaying graphics"] },
            { question: "What does USB stand for?", answer: "Universal Serial Bus", wrongAnswers: ["Universal System Bus", "United Serial Bus", "Universal Software Bus"] },
            { question: "What is the most common programming language for web development?", answer: "JavaScript", wrongAnswers: ["Python", "Java", "C++"] },
            { question: "What does HTML stand for?", answer: "HyperText Markup Language", wrongAnswers: ["High Tech Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"] },
            { question: "What is the main function of a web browser?", answer: "To display web pages", wrongAnswers: ["To create web pages", "To store web pages", "To process web pages"] },
            { question: "What does Wi-Fi stand for?", answer: "Wireless Fidelity", wrongAnswers: ["Wireless Internet", "Wireless Network", "Wireless Connection"] },
            { question: "What is the purpose of a firewall?", answer: "To protect against unauthorized access", wrongAnswers: ["To speed up internet connection", "To store data", "To process information"] },
            { question: "What does URL stand for?", answer: "Uniform Resource Locator", wrongAnswers: ["Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"] },
            { question: "What is the main function of an operating system?", answer: "To manage computer hardware and software", wrongAnswers: ["To connect to the internet", "To create documents", "To play games"] }
        ],
        medium: [
            { question: "What is the difference between HTTP and HTTPS?", answer: "HTTPS is HTTP with encryption (SSL/TLS)", wrongAnswers: ["HTTPS is faster than HTTP", "HTTPS is a different protocol", "HTTPS is for mobile devices only"] },
            { question: "What is cloud computing?", answer: "Computing services delivered over the internet", wrongAnswers: ["Computing using physical servers only", "Computing using quantum computers", "Computing using blockchain"] },
            { question: "What is machine learning?", answer: "A subset of AI that enables computers to learn without being explicitly programmed", wrongAnswers: ["A type of computer hardware", "A programming language", "A database system"] },
            { question: "What is blockchain?", answer: "A distributed ledger technology that records transactions securely", wrongAnswers: ["A type of cryptocurrency", "A computer network", "A software application"] },
            { question: "What is the purpose of DNS?", answer: "To translate domain names to IP addresses", wrongAnswers: ["To encrypt data", "To store websites", "To process payments"] },
            { question: "What is virtualization?", answer: "Creating virtual versions of computing resources", wrongAnswers: ["Making computers faster", "Connecting computers together", "Storing data online"] },
            { question: "What is the Internet of Things (IoT)?", answer: "A network of interconnected devices that can collect and share data", wrongAnswers: ["The internet itself", "Social media platforms", "Cloud storage services"] },
            { question: "What is the purpose of a VPN?", answer: "To create a secure, private network connection", wrongAnswers: ["To speed up internet connection", "To store files online", "To create websites"] },
            { question: "What is the difference between RAM and ROM?", answer: "RAM is volatile memory, ROM is non-volatile", wrongAnswers: ["RAM is faster than ROM", "RAM is cheaper than ROM", "RAM is larger than ROM"] },
            { question: "What is the purpose of an API?", answer: "To allow different software applications to communicate", wrongAnswers: ["To store data", "To process information", "To display graphics"] }
        ],
        hard: [
            { question: "What is quantum computing?", answer: "Computing that uses quantum mechanical phenomena to process information", wrongAnswers: ["Computing using quantum dots", "Computing using quantum sensors", "Computing using quantum materials"] },
            { question: "What is neural network architecture?", answer: "A computing system modeled after biological neural networks", wrongAnswers: ["A type of computer hardware", "A programming paradigm", "A database design"] },
            { question: "What is edge computing?", answer: "Computing that brings computation and data storage closer to the data source", wrongAnswers: ["Computing at the edge of networks", "Computing using edge devices", "Computing at network boundaries"] },
            { question: "What is 5G technology?", answer: "Fifth generation mobile network technology with higher speeds and lower latency", wrongAnswers: ["Fifth generation computer technology", "Fifth generation internet technology", "Fifth generation software technology"] },
            { question: "What is the purpose of a CDN?", answer: "To distribute content across multiple servers for faster delivery", wrongAnswers: ["To store content centrally", "To process content locally", "To encrypt content securely"] },
            { question: "What is the difference between TCP and UDP?", answer: "TCP is connection-oriented, UDP is connectionless", wrongAnswers: ["TCP is faster than UDP", "TCP is more secure than UDP", "TCP is newer than UDP"] },
            { question: "What is the purpose of load balancing?", answer: "To distribute network traffic across multiple servers", wrongAnswers: ["To balance power consumption", "To balance storage usage", "To balance processing speed"] },
            { question: "What is the purpose of a reverse proxy?", answer: "To act as an intermediary for requests from clients", wrongAnswers: ["To reverse network traffic", "To proxy server requests", "To act as a client"] },
            { question: "What is the purpose of rate limiting?", answer: "To control the rate of requests to a service", wrongAnswers: ["To limit data transfer speed", "To limit storage usage", "To limit processing power"] },
            { question: "What is the purpose of circuit breaking?", answer: "To prevent cascading failures in distributed systems", wrongAnswers: ["To break electrical circuits", "To break network connections", "To break data flows"] }
        ]
    },
    engineering: {
        easy: [
            { question: "What is the purpose of a blueprint?", answer: "To show detailed plans for construction or manufacturing", wrongAnswers: ["To show the color of objects", "To show the size of objects", "To show the weight of objects"] },
            { question: "What is the basic unit of electrical resistance?", answer: "Ohm", wrongAnswers: ["Volt", "Ampere", "Watt"] },
            { question: "What does CAD stand for?", answer: "Computer-Aided Design", wrongAnswers: ["Computer-Aided Drawing", "Computer-Aided Drafting", "Computer-Aided Development"] },
            { question: "What is the purpose of a circuit breaker?", answer: "To protect electrical circuits from damage", wrongAnswers: ["To break circuits permanently", "To slow down electrical flow", "To increase electrical flow"] },
            { question: "What is the main function of a gear?", answer: "To transmit power and change speed or direction", wrongAnswers: ["To store energy", "To generate electricity", "To measure speed"] },
            { question: "What is the purpose of a bearing?", answer: "To reduce friction between moving parts", wrongAnswers: ["To increase friction", "To store energy", "To generate power"] },
            { question: "What is the purpose of a valve?", answer: "To control the flow of fluids", wrongAnswers: ["To store fluids", "To measure fluids", "To heat fluids"] },
            { question: "What is the purpose of a pump?", answer: "To move fluids from one place to another", wrongAnswers: ["To store fluids", "To measure fluids", "To heat fluids"] },
            { question: "What is the purpose of a motor?", answer: "To convert electrical energy to mechanical energy", wrongAnswers: ["To convert mechanical energy to electrical energy", "To store energy", "To measure energy"] },
            { question: "What is the purpose of a generator?", answer: "To convert mechanical energy to electrical energy", wrongAnswers: ["To convert electrical energy to mechanical energy", "To store energy", "To measure energy"] }
        ],
        medium: [
            { question: "What is the difference between AC and DC current?", answer: "AC alternates direction, DC flows in one direction", wrongAnswers: ["AC is faster than DC", "AC is stronger than DC", "AC is cheaper than DC"] },
            { question: "What is the purpose of a heat exchanger?", answer: "To transfer heat between two or more fluids", wrongAnswers: ["To generate heat", "To store heat", "To measure heat"] },
            { question: "What is stress in engineering?", answer: "Force per unit area applied to a material", wrongAnswers: ["The weight of a material", "The size of a material", "The color of a material"] },
            { question: "What is the principle of conservation of energy?", answer: "Energy cannot be created or destroyed, only transformed", wrongAnswers: ["Energy can be created and destroyed", "Energy always increases", "Energy always decreases"] },
            { question: "What is the purpose of a damper?", answer: "To reduce vibration or oscillation", wrongAnswers: ["To increase vibration", "To store energy", "To generate power"] },
            { question: "What is the purpose of a clutch?", answer: "To engage and disengage power transmission", wrongAnswers: ["To store energy", "To generate power", "To measure speed"] },
            { question: "What is the purpose of a brake?", answer: "To slow down or stop moving parts", wrongAnswers: ["To speed up parts", "To store energy", "To generate power"] },
            { question: "What is the purpose of a filter?", answer: "To remove unwanted particles from fluids", wrongAnswers: ["To add particles to fluids", "To measure fluids", "To heat fluids"] },
            { question: "What is the purpose of a sensor?", answer: "To detect and measure physical properties", wrongAnswers: ["To control systems", "To store data", "To process information"] },
            { question: "What is the purpose of an actuator?", answer: "To convert energy into motion", wrongAnswers: ["To store energy", "To measure energy", "To generate energy"] }
        ],
        hard: [
            { question: "What is finite element analysis?", answer: "A numerical method for solving complex engineering problems", wrongAnswers: ["A method for analyzing finite elements", "A method for creating finite elements", "A method for measuring finite elements"] },
            { question: "What is the concept of fatigue in materials?", answer: "Progressive structural damage under repeated loading", wrongAnswers: ["The weight of materials", "The strength of materials", "The flexibility of materials"] },
            { question: "What is computational fluid dynamics?", answer: "A branch of fluid mechanics that uses numerical analysis to solve fluid flow problems", wrongAnswers: ["A method for measuring fluid flow", "A method for controlling fluid flow", "A method for storing fluid flow data"] },
            { question: "What is the principle of superposition?", answer: "The response of a linear system to multiple inputs is the sum of responses to individual inputs", wrongAnswers: ["The principle of adding forces", "The principle of energy conservation", "The principle of momentum conservation"] },
            { question: "What is the concept of resonance in engineering?", answer: "The tendency of a system to oscillate at maximum amplitude at certain frequencies", wrongAnswers: ["The tendency of a system to vibrate", "The tendency of a system to move", "The tendency of a system to stop"] },
            { question: "What is the concept of buckling in structural engineering?", answer: "Sudden failure of a structural member under compressive load", wrongAnswers: ["Gradual failure under tension", "Failure under shear", "Failure under torsion"] },
            { question: "What is the concept of creep in materials?", answer: "Time-dependent deformation under constant stress", wrongAnswers: ["Instantaneous deformation", "Elastic deformation", "Plastic deformation"] },
            { question: "What is the concept of fracture mechanics?", answer: "The study of crack propagation in materials", wrongAnswers: ["The study of material strength", "The study of material properties", "The study of material behavior"] },
            { question: "What is the concept of stress concentration?", answer: "Localized increase in stress around discontinuities", wrongAnswers: ["Overall increase in stress", "Decrease in stress", "Uniform stress distribution"] },
            { question: "What is the concept of strain hardening?", answer: "Increase in strength and hardness due to plastic deformation", wrongAnswers: ["Decrease in strength", "Increase in flexibility", "Decrease in hardness"] }
        ]
    },
    mathematics: {
        easy: [
            { question: "What is the square root of 16?", answer: "4", wrongAnswers: ["2", "8", "16"] },
            { question: "What is 7 x 8?", answer: "56", wrongAnswers: ["54", "58", "64"] },
            { question: "What is the perimeter of a square with sides of length 5?", answer: "20", wrongAnswers: ["15", "25", "10"] },
            { question: "What is the area of a rectangle with length 6 and width 4?", answer: "24", wrongAnswers: ["20", "28", "10"] },
            { question: "What is the value of pi (π) to two decimal places?", answer: "3.14", wrongAnswers: ["3.12", "3.16", "3.18"] },
            { question: "What is 15 + 27?", answer: "42", wrongAnswers: ["40", "44", "38"] },
            { question: "What is 100 ÷ 4?", answer: "25", wrongAnswers: ["20", "30", "15"] },
            { question: "What is the next number in the sequence: 2, 4, 6, 8, ?", answer: "10", wrongAnswers: ["9", "11", "12"] },
            { question: "What is 3² (3 squared)?", answer: "9", wrongAnswers: ["6", "12", "27"] },
            { question: "What is the sum of angles in a triangle?", answer: "180 degrees", wrongAnswers: ["90 degrees", "270 degrees", "360 degrees"] }
        ],
        medium: [
            { question: "What is the slope of the line y = 2x + 3?", answer: "2", wrongAnswers: ["3", "1", "4"] },
            { question: "What is the quadratic formula?", answer: "x = (-b ± √(b² - 4ac)) / 2a", wrongAnswers: ["x = -b ± √(b² - 4ac)", "x = (-b ± √(b² - 4ac)) / a", "x = (-b ± √(b² - 4ac)) / 4a"] },
            { question: "What is the derivative of x²?", answer: "2x", wrongAnswers: ["x", "x²", "2x²"] },
            { question: "What is the Pythagorean theorem?", answer: "a² + b² = c²", wrongAnswers: ["a + b = c", "a² + b² = c", "a + b = c²"] },
            { question: "What is the formula for the area of a circle?", answer: "πr²", wrongAnswers: ["2πr", "πr", "2πr²"] },
            { question: "What is the formula for the volume of a sphere?", answer: "(4/3)πr³", wrongAnswers: ["4πr²", "πr³", "2πr³"] },
            { question: "What is the formula for the slope between two points?", answer: "(y₂ - y₁) / (x₂ - x₁)", wrongAnswers: ["(x₂ - x₁) / (y₂ - y₁)", "(y₂ + y₁) / (x₂ + x₁)", "(y₂ - y₁) / (x₂ + x₁)"] },
            { question: "What is the formula for the distance between two points?", answer: "√[(x₂ - x₁)² + (y₂ - y₁)²]", wrongAnswers: ["(x₂ - x₁) + (y₂ - y₁)", "√(x₂ - x₁) + √(y₂ - y₁)", "(x₂ - x₁)² + (y₂ - y₁)²"] },
            { question: "What is the formula for the midpoint between two points?", answer: "((x₁ + x₂)/2, (y₁ + y₂)/2)", wrongAnswers: ["(x₁ + x₂, y₁ + y₂)", "((x₁ - x₂)/2, (y₁ - y₂)/2)", "((x₁ + x₂)/2, (y₁ - y₂)/2)"] },
            { question: "What is the formula for the circumference of a circle?", answer: "2πr", wrongAnswers: ["πr", "πr²", "4πr"] }
        ],
        hard: [
            { question: "What is the fundamental theorem of calculus?", answer: "It connects differentiation and integration, showing they are inverse operations", wrongAnswers: ["It states that derivatives exist for all functions", "It proves the existence of limits", "It establishes the chain rule"] },
            { question: "What is Euler's identity?", answer: "e^(iπ) + 1 = 0", wrongAnswers: ["e^(iπ) = 1", "e^(iπ) = -1", "e^(iπ) = i"] },
            { question: "What is the concept of limits in calculus?", answer: "The value that a function approaches as the input approaches a certain value", wrongAnswers: ["The maximum value of a function", "The minimum value of a function", "The average value of a function"] },
            { question: "What is the concept of infinity in mathematics?", answer: "A concept representing something without any bound or larger than any real number", wrongAnswers: ["The largest real number", "A very large number", "The number zero"] },
            { question: "What is the concept of imaginary numbers?", answer: "Numbers that when squared give a negative result, represented by 'i' where i² = -1", wrongAnswers: ["Numbers that don't exist", "Negative numbers", "Fractional numbers"] },
            { question: "What is the concept of complex numbers?", answer: "Numbers in the form a + bi where a and b are real numbers and i is the imaginary unit", wrongAnswers: ["Numbers with decimal parts", "Numbers greater than zero", "Numbers less than zero"] },
            { question: "What is the concept of matrices in mathematics?", answer: "Rectangular arrays of numbers, symbols, or expressions arranged in rows and columns", wrongAnswers: ["Square arrays only", "Lists of numbers", "Geometric shapes"] },
            { question: "What is the concept of eigenvalues?", answer: "Scalars that when multiplied by a vector give the same result as multiplying the vector by a matrix", wrongAnswers: ["The dimensions of a matrix", "The determinant of a matrix", "The trace of a matrix"] },
            { question: "What is the concept of eigenvectors?", answer: "Non-zero vectors that when multiplied by a matrix result in a scalar multiple of the original vector", wrongAnswers: ["The rows of a matrix", "The columns of a matrix", "The diagonal elements of a matrix"] },
            { question: "What is the concept of linear independence?", answer: "A set of vectors where no vector can be written as a linear combination of the others", wrongAnswers: ["A set of vectors that are parallel", "A set of vectors that are perpendicular", "A set of vectors with the same magnitude"] }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
