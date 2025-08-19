// CSV Question Loader for TSA Tech Bowl
// This file dynamically loads questions from CSV files instead of hard-coded questions

class CSVQuestionLoader {
    constructor() {
        this.questionBank = {};
        this.loaded = false;
    }

    // Load all questions from CSV files
    async loadAllQuestions() {
        try {
            const subjects = ['Science', 'Technology', 'Engineering', 'Mathmatics'];
            const difficulties = ['Easy', 'Medium', 'Hard'];
            
            for (const subject of subjects) {
                this.questionBank[subject.toLowerCase()] = {};
                
                for (const difficulty of difficulties) {
                    const csvPath = `questionBank/${subject}/${subject}_${difficulty}.csv`;
                    const questions = await this.loadCSVQuestions(csvPath);
                    this.questionBank[subject.toLowerCase()][difficulty.toLowerCase()] = questions;
                }
            }
            
            this.loaded = true;
            console.log('All CSV questions loaded successfully:', this.questionBank);
            return this.questionBank;
            
        } catch (error) {
            console.error('Error loading CSV questions:', error);
            // Fallback to hard-coded questions if CSV loading fails
            return this.getFallbackQuestions();
        }
    }

    // Load questions from a specific CSV file
    async loadCSVQuestions(csvPath) {
        try {
            const response = await fetch(csvPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${csvPath}: ${response.status}`);
            }
            
            const csvText = await response.text();
            return this.parseCSV(csvText);
            
        } catch (error) {
            console.error(`Error loading ${csvPath}:`, error);
            return [];
        }
    }

    // Parse CSV text into question objects
    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const questions = [];
        
        // Skip header line (line 0)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            // Handle CSV with potential commas in questions (using quotes)
            const parts = this.parseCSVLine(line);
            
            if (parts.length >= 5) {
                const question = {
                    question: parts[1].trim(),
                    answer: parts[2].trim(),
                    wrongAnswers: [
                        parts[3].trim(),
                        parts[4].trim(),
                        parts[5].trim()
                    ]
                };
                questions.push(question);
            }
        }
        
        return questions;
    }

    // Parse CSV line handling quoted fields with commas
    parseCSVLine(line) {
        const parts = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                parts.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        parts.push(current);
        return parts;
    }

    // Get fallback questions if CSV loading fails
    getFallbackQuestions() {
        return {
            science: {
                easy: [
                    { question: "What is the chemical symbol for gold?", answer: "Au", wrongAnswers: ["Ag", "Fe", "Cu"] },
                    { question: "What planet is known as the Red Planet?", answer: "Mars", wrongAnswers: ["Venus", "Jupiter", "Saturn"] }
                ],
                medium: [
                    { question: "What is the atomic number of carbon?", answer: "6", wrongAnswers: ["12", "14", "8"] }
                ],
                hard: [
                    { question: "What is the Heisenberg Uncertainty Principle?", answer: "It's impossible to simultaneously know both the position and momentum of a particle with absolute certainty", wrongAnswers: ["Particles can exist in multiple states simultaneously", "Energy cannot be created or destroyed", "The speed of light is constant"] }
                ]
            },
            technology: {
                easy: [
                    { question: "What does CPU stand for?", answer: "Central Processing Unit", wrongAnswers: ["Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"] }
                ],
                medium: [
                    { question: "What is the difference between HTTP and HTTPS?", answer: "HTTPS is HTTP with encryption (SSL/TLS)", wrongAnswers: ["HTTPS is faster than HTTP", "HTTPS is a different protocol", "HTTPS is for mobile devices only"] }
                ],
                hard: [
                    { question: "What is quantum computing?", answer: "Computing that uses quantum mechanical phenomena to process information", wrongAnswers: ["Computing using quantum dots", "Computing using quantum sensors", "Computing using quantum materials"] }
                ]
            },
            engineering: {
                easy: [
                    { question: "What is the purpose of a blueprint?", answer: "To show detailed plans for construction or manufacturing", wrongAnswers: ["To show the color of objects", "To show the size of objects", "To show the weight of objects"] }
                ],
                medium: [
                    { question: "What is the difference between AC and DC current?", answer: "AC alternates direction, DC flows in one direction", wrongAnswers: ["AC is faster than DC", "AC is stronger than DC", "AC is cheaper than DC"] }
                ],
                hard: [
                    { question: "What is finite element analysis?", answer: "A numerical method for solving complex engineering problems", wrongAnswers: ["A method for analyzing finite elements", "A method for creating finite elements", "A method for measuring finite elements"] }
                ]
            },
            mathematics: {
                easy: [
                    { question: "What is the square root of 16?", answer: "4", wrongAnswers: ["2", "8", "16"] }
                ],
                medium: [
                    { question: "What is the slope of the line y = 2x + 3?", answer: "2", wrongAnswers: ["3", "1", "4"] }
                ],
                hard: [
                    { question: "What is the fundamental theorem of calculus?", answer: "It connects differentiation and integration, showing they are inverse operations", wrongAnswers: ["It states that derivatives exist for all functions", "It proves the existence of limits", "It establishes the chain rule"] }
                ]
            }
        };
    }

    // Get the loaded question bank
    getQuestionBank() {
        return this.questionBank;
    }

    // Check if questions are loaded
    isLoaded() {
        return this.loaded;
    }
}

// Create global instance
const csvLoader = new CSVQuestionLoader();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = csvLoader;
}
