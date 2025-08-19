// Global variables
let currentUser = null;
let practiceCards = [];
let currentCardIndex = 0;
let quizQuestions = [];
let currentQuizQuestion = 0;
let quizScore = 0;
let quizStartTime = 0;
let quizTimer = null;

// BTS TSA variables
let btsQuestions = [];
let currentBTSQuestion = 0;
let btsScore = 0;
let btsStartTime = 0;
let btsTimer = null;

// Question bank will be loaded from external file
// The questionBank variable is available from questionBank.js

// Page navigation functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    document.getElementById(pageId).classList.add('active');
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    if (password === 'M0n7R0ckTSAT3c#B0wl') {
        currentUser = username;
        errorDiv.textContent = '';
        showPage('mainMenuPage');
    } else {
        errorDiv.textContent = 'Invalid password. Please try again.';
        document.getElementById('password').value = '';
    }
}

// Logout function
function logout() {
    currentUser = null;
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginError').textContent = '';
    showPage('loginPage');
}

// Show main menu
function showMainMenu() {
    showPage('mainMenuPage');
}

// Show practice mode setup
function showPracticeMode() {
    showPage('practiceSetupPage');
}

// Show BTS TSA mode
function showBTSTSA() {
    // Generate BTS TSA questions
    generateBTSQuestions();
    
    // Reset BTS state
    currentBTSQuestion = 0;
    btsScore = 0;
    btsStartTime = Date.now();
    
    // Start timer
    startBTSTimer();
    
    // Show first question
    showBTSQuestion();
    showPage('btsTSAPage');
}

// Generate BTS TSA questions (1 from each discipline, first 2 easy, third medium)
function generateBTSQuestions() {
    btsQuestions = [];
    const subjects = ['science', 'technology', 'engineering', 'mathematics'];
    
    // Shuffle subjects to randomize order
    const shuffledSubjects = shuffleArray([...subjects]);
    
    // First two questions: easy from first two subjects
    for (let i = 0; i < 2; i++) {
        const subject = shuffledSubjects[i];
        const easyQuestions = questionBank[subject].easy;
        const randomQuestion = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
        btsQuestions.push({
            ...randomQuestion,
            subject: subject,
            difficulty: 'easy'
        });
    }
    
    // Third question: medium from third subject
    const thirdSubject = shuffledSubjects[2];
    const mediumQuestions = questionBank[thirdSubject].medium;
    const randomMediumQuestion = mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
    btsQuestions.push({
        ...randomMediumQuestion,
        subject: thirdSubject,
        difficulty: 'medium'
    });
}

// Show BTS TSA question
function showBTSQuestion() {
    if (currentBTSQuestion < btsQuestions.length) {
        const question = btsQuestions[currentBTSQuestion];
        document.getElementById('btsQuestionText').textContent = question.question;
        document.getElementById('btsQuestionNumber').textContent = currentBTSQuestion + 1;
        document.getElementById('btsSubject').textContent = question.subject.charAt(0).toUpperCase() + question.subject.slice(1);
        document.getElementById('btsDifficulty').textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
        
        // Generate multiple choice options with randomized positions
        const options = generateMultipleChoiceOptions(question.answer, question.wrongAnswers);
        
        // Update option buttons
        const optionBtns = document.querySelectorAll('.bts-option-btn');
        optionBtns.forEach((btn, index) => {
            btn.textContent = options[index];
            btn.className = 'bts-option-btn';
            btn.onclick = () => selectBTSAnswer(index);
        });
        
        // Update progress bar
        const progress = ((currentBTSQuestion + 1) / btsQuestions.length) * 100;
        updateBTSProgressBar(progress);
    }
}

// Generate multiple choice options with randomized positions
function generateMultipleChoiceOptions(correctAnswer, wrongAnswers) {
    const options = [correctAnswer];
    
    // Add the actual wrong answers if they exist
    if (wrongAnswers && wrongAnswers.length >= 3) {
        options.push(...wrongAnswers.slice(0, 3));
    } else {
        // Fallback: generate some reasonable wrong answers
        const fallbackWrong = [
            correctAnswer + ' (incorrect)',
            'Not ' + correctAnswer,
            'Maybe ' + correctAnswer
        ];
        options.push(...fallbackWrong);
    }
    
    // Shuffle options to randomize positions
    return shuffleArray(options);
}

// Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Select BTS answer
function selectBTSAnswer(selectedIndex) {
    const question = btsQuestions[currentBTSQuestion];
    const optionBtns = document.querySelectorAll('.bts-option-btn');
    const correctAnswer = question.answer;
    
    // Find the correct answer index
    let correctIndex = -1;
    optionBtns.forEach((btn, index) => {
        if (btn.textContent === correctAnswer) {
            correctIndex = index;
        }
    });
    
    // Mark correct and incorrect answers
    optionBtns.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== correctIndex) {
            btn.classList.add('incorrect');
        }
        btn.onclick = null; // Disable further clicks
    });
    
    // Update score
    if (selectedIndex === correctIndex) {
        btsScore++;
    }
    
    // Update score display immediately
    document.getElementById('btsScore').textContent = btsScore;
    
    // Wait a moment then move to next question
    setTimeout(() => {
        currentBTSQuestion++;
        if (currentBTSQuestion < btsQuestions.length) {
            showBTSQuestion();
        } else {
            // BTS TSA complete
            showBTSResults();
        }
    }, 1500);
}

// Update BTS progress bar
function updateBTSProgressBar(progress) {
    const progressFill = document.getElementById('btsProgressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
        
        // Change color based on progress
        progressFill.className = 'progress-fill';
        if (progress >= 80) {
            progressFill.classList.add('warning');
        }
        if (progress >= 100) {
            progressFill.classList.add('danger');
        }
    }
}

// Start BTS timer
function startBTSTimer() {
    btsTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - btsStartTime) / 1000);
        document.getElementById('btsTimer').textContent = elapsed;
        
        // Change outline color based on time
        const btsContainer = document.querySelector('.bts-container');
        if (elapsed > 10) {
            btsContainer.style.outline = '3px solid #e74c3c';
        } else {
            btsContainer.style.outline = '3px solid #27ae60';
        }
    }, 1000);
}

// Show BTS results
function showBTSResults() {
    clearInterval(btsTimer);
    
    const totalTime = Math.floor((Date.now() - btsStartTime) / 1000);
    const percentage = (btsScore / 3) * 100;
    
    // Determine performance
    let performance = 'Poor';
    if (percentage >= 80) performance = 'Excellent';
    else if (percentage >= 60) performance = 'Good';
    else if (percentage >= 40) performance = 'Fair';
    
    // Update results
    document.getElementById('btsFinalScore').textContent = btsScore + '/3';
    document.getElementById('btsFinalTime').textContent = totalTime + 's';
    document.getElementById('btsPerformance').textContent = performance;
    
    showPage('btsResultsPage');
}

// Retake BTS TSA
function retakeBTSTSA() {
    showBTSTSA();
}

// Start practice mode
function startPractice() {
    const subject = document.getElementById('subjectSelect').value;
    const difficulty = document.getElementById('difficultySelect').value;
    
    // Get questions for selected subject and difficulty
    practiceCards = questionBank[subject][difficulty];
    currentCardIndex = 0;
    
    // Update practice page info
    document.getElementById('practiceSubject').textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    document.getElementById('practiceDifficulty').textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    document.getElementById('currentCardNumber').textContent = '1';
    document.getElementById('totalCards').textContent = practiceCards.length;
    
    // Show first card
    showPracticeCard();
    showPage('practicePage');
}

// Show practice card
function showPracticeCard() {
    if (currentCardIndex < practiceCards.length) {
        const card = practiceCards[currentCardIndex];
        document.getElementById('questionText').textContent = card.question;
        document.getElementById('answerText').textContent = card.answer;
        document.getElementById('answerText').classList.add('hidden');
        document.getElementById('showAnswerBtn').classList.remove('hidden');
        document.getElementById('nextCardBtn').classList.add('hidden');
        document.getElementById('currentCardNumber').textContent = currentCardIndex + 1;
    }
}

// Toggle answer visibility
function toggleAnswer() {
    const answerText = document.getElementById('answerText');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const nextCardBtn = document.getElementById('nextCardBtn');
    
    if (answerText.classList.contains('hidden')) {
        answerText.classList.remove('hidden');
        showAnswerBtn.classList.add('hidden');
        nextCardBtn.classList.remove('hidden');
    }
}

// Next card
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex < practiceCards.length) {
        showPracticeCard();
    } else {
        // Practice complete
        alert('Practice complete! You have reviewed all cards.');
        showMainMenu();
    }
}

// Show quiz mode
function showQuizMode() {
    // Generate random quiz questions
    generateQuizQuestions();
    
    // Reset quiz state
    currentQuizQuestion = 0;
    quizScore = 0;
    quizStartTime = Date.now();
    
    // Start timer
    startQuizTimer();
    
    // Show first question
    showQuizQuestion();
    showPage('quizPage');
}

// Generate random quiz questions
function generateQuizQuestions() {
    quizQuestions = [];
    const allQuestions = [];
    
    // Collect all questions from all subjects and difficulties
    Object.keys(questionBank).forEach(subject => {
        Object.keys(questionBank[subject]).forEach(difficulty => {
            questionBank[subject][difficulty].forEach(question => {
                allQuestions.push({
                    ...question,
                    subject: subject,
                    difficulty: difficulty
                });
            });
        });
    });
    
    // Randomly select 20 questions
    for (let i = 0; i < 20 && i < allQuestions.length; i++) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        quizQuestions.push(allQuestions[randomIndex]);
        allQuestions.splice(randomIndex, 1);
    }
}

// Show quiz question
function showQuizQuestion() {
    if (currentQuizQuestion < quizQuestions.length) {
        const question = quizQuestions[currentQuizQuestion];
        document.getElementById('quizQuestionText').textContent = question.question;
        document.getElementById('quizQuestionNumber').textContent = currentQuizQuestion + 1;
        
        // Generate multiple choice options using actual wrong answers with randomization
        const options = generateMultipleChoiceOptions(question.answer, question.wrongAnswers);
        
        // Update option buttons
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, index) => {
            btn.textContent = options[index];
            btn.className = 'option-btn';
            btn.onclick = () => selectAnswer(index);
        });
        
        // Update progress bar
        const progress = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
        updateProgressBar(progress);
    }
}

// Select answer
function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuizQuestion];
    const optionBtns = document.querySelectorAll('.option-btn');
    const correctAnswer = question.answer;
    
    // Find the correct answer index
    let correctIndex = -1;
    optionBtns.forEach((btn, index) => {
        if (btn.textContent === correctAnswer) {
            correctIndex = index;
        }
    });
    
    // Mark correct and incorrect answers
    optionBtns.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== correctIndex) {
            btn.classList.add('incorrect');
        }
        btn.onclick = null; // Disable further clicks
    });
    
    // Update score
    if (selectedIndex === correctIndex) {
        quizScore++;
    }
    
    // Update score display immediately
    document.getElementById('quizScore').textContent = quizScore;
    
    // Wait a moment then move to next question
    setTimeout(() => {
        currentQuizQuestion++;
        if (currentQuizQuestion < quizQuestions.length) {
            showQuizQuestion();
        } else {
            // Quiz complete
            showQuizResults();
        }
    }, 1500);
}

// Update progress bar
function updateProgressBar(progress) {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = progress + '%';
    
    // Change color based on progress
    progressFill.className = 'progress-fill';
    if (progress >= 80) {
        progressFill.classList.add('warning');
    }
    if (progress >= 100) {
        progressFill.classList.add('danger');
    }
}

// Start quiz timer
function startQuizTimer() {
    quizTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
        document.getElementById('quizTimer').textContent = elapsed;
        
        // Change outline color based on time
        const quizContainer = document.querySelector('.quiz-container');
        if (elapsed > 10) {
            quizContainer.style.outline = '3px solid #e74c3c';
        } else {
            quizContainer.style.outline = '3px solid #27ae60';
        }
    }, 1000);
}

// Show quiz results
function showQuizResults() {
    clearInterval(quizTimer);
    
    const totalTime = Math.floor((Date.now() - quizStartTime) / 1000);
    const percentage = (quizScore / 20) * 100;
    
    // Determine performance
    let performance = 'Poor';
    if (percentage >= 80) performance = 'Excellent';
    else if (percentage >= 60) performance = 'Good';
    else if (percentage >= 40) performance = 'Fair';
    
    // Update results
    document.getElementById('finalScore').textContent = quizScore + '/20';
    document.getElementById('finalTime').textContent = totalTime + 's';
    document.getElementById('performance').textContent = performance;
    
    showPage('quizResultsPage');
}

// Retake quiz
function retakeQuiz() {
    showQuizMode();
}

// Handle Enter key in login form and load question bank
document.addEventListener('DOMContentLoaded', function() {
    // Load the question bank from external file
    // The questionBank variable is already available from questionBank.js
    
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('password').focus();
        }
    });
});
