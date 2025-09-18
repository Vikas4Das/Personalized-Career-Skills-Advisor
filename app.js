// Application Data
const appData = {
    careers: [
        {
            id: 1,
            title: "Data Scientist",
            description: "Analyze complex data to help businesses make decisions",
            required_skills: ["Python", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
            salary_range: "₹8-25 LPA",
            growth_outlook: "High demand, 25% growth expected",
            learning_path: ["Statistics Fundamentals", "Python Programming", "Machine Learning", "Deep Learning", "Big Data Tools"]
        },
        {
            id: 2,
            title: "UX Designer",
            description: "Design user-friendly interfaces and experiences",
            required_skills: ["Figma", "User Research", "Prototyping", "Wireframing", "Design Thinking"],
            salary_range: "₹6-20 LPA",
            growth_outlook: "Growing field, focus on digital experiences",
            learning_path: ["Design Fundamentals", "User Research Methods", "Prototyping Tools", "Interaction Design", "Design Systems"]
        },
        {
            id: 3,
            title: "Software Engineer",
            description: "Develop and maintain software applications",
            required_skills: ["Programming", "Problem Solving", "System Design", "Database Management", "Testing"],
            salary_range: "₹5-30 LPA",
            growth_outlook: "Excellent prospects across all industries",
            learning_path: ["Programming Basics", "Data Structures", "Web Development", "System Design", "Software Architecture"]
        },
        {
            id: 4,
            title: "Digital Marketing Specialist",
            description: "Promote brands and products through digital channels",
            required_skills: ["SEO/SEM", "Social Media Marketing", "Content Creation", "Analytics", "Email Marketing"],
            salary_range: "₹4-15 LPA",
            growth_outlook: "Rapid growth with digital transformation",
            learning_path: ["Marketing Fundamentals", "SEO Optimization", "Social Media Strategy", "Content Marketing", "Marketing Analytics"]
        },
        {
            id: 5,
            title: "Cloud Architect",
            description: "Design and manage cloud computing strategies",
            required_skills: ["AWS/Azure", "DevOps", "Security", "Networking", "Architecture Design"],
            salary_range: "₹12-40 LPA",
            growth_outlook: "Extremely high demand with cloud adoption",
            learning_path: ["Cloud Fundamentals", "Platform Certification", "DevOps Tools", "Security Best Practices", "Advanced Architecture"]
        }
    ],
    assessmentQuestions: [
        {
            id: 1,
            question: "Which activity interests you the most?",
            options: ["Analyzing data patterns", "Creating visual designs", "Solving coding problems", "Developing marketing campaigns"],
            category: "interests"
        },
        {
            id: 2,
            question: "What is your current programming skill level?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"],
            category: "skills"
        },
        {
            id: 3,
            question: "Which work environment appeals to you?",
            options: ["Research-focused", "Creative studio", "Tech startup", "Corporate marketing"],
            category: "personality"
        },
        {
            id: 4,
            question: "How do you prefer to learn new skills?",
            options: ["Hands-on projects", "Visual tutorials", "Reading documentation", "Interactive courses"],
            category: "learning_style"
        },
        {
            id: 5,
            question: "What motivates you most in your career?",
            options: ["Financial growth", "Creative expression", "Problem solving", "Helping others"],
            category: "motivation"
        },
        {
            id: 6,
            question: "Which technical area interests you most?",
            options: ["Data analysis", "User experience", "Software development", "Digital marketing"],
            category: "technical"
        },
        {
            id: 7,
            question: "How do you handle complex problems?",
            options: ["Break into smaller parts", "Research extensively", "Collaborate with others", "Try different approaches"],
            category: "problem_solving"
        },
        {
            id: 8,
            question: "What type of projects excite you?",
            options: ["Data-driven insights", "User-centered design", "Technical solutions", "Marketing campaigns"],
            category: "project_type"
        },
        {
            id: 9,
            question: "How important is work-life balance?",
            options: ["Very important", "Somewhat important", "Not very important", "Depends on the role"],
            category: "lifestyle"
        },
        {
            id: 10,
            question: "Which skill would you like to develop first?",
            options: ["Statistical analysis", "Design thinking", "Programming logic", "Content creation"],
            category: "skill_priority"
        }
    ],
    courses: [
        {
            id: 1,
            title: "Complete Python Bootcamp",
            provider: "Udemy",
            duration: "40 hours",
            price: "Free",
            skill_level: "Beginner",
            domain: "Programming"
        },
        {
            id: 2,
            title: "UX Design Certificate",
            provider: "Google",
            duration: "6 months",
            price: "₹4,999/month",
            skill_level: "Beginner",
            domain: "Design"
        },
        {
            id: 3,
            title: "Machine Learning Specialization",
            provider: "Coursera",
            duration: "3 months",
            price: "₹3,500/month",
            skill_level: "Intermediate",
            domain: "Data Science"
        },
        {
            id: 4,
            title: "Digital Marketing Masterclass",
            provider: "Udemy",
            duration: "25 hours",
            price: "₹1,299",
            skill_level: "Beginner",
            domain: "Marketing"
        },
        {
            id: 5,
            title: "AWS Cloud Practitioner",
            provider: "AWS",
            duration: "2 months",
            price: "Free",
            skill_level: "Beginner",
            domain: "Cloud Computing"
        },
        {
            id: 6,
            title: "Advanced React Development",
            provider: "Frontend Masters",
            duration: "35 hours",
            price: "₹2,500/month",
            skill_level: "Advanced",
            domain: "Programming"
        }
    ]
};

// Application State
let currentUser = null;
let currentPage = 'home';
let assessmentData = {
    currentQuestion: 0,
    answers: [],
    completed: false
};

// Navigation Functions
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Load page-specific content
        switch(pageName) {
            case 'careers':
                loadCareers();
                break;
            case 'learning':
                loadCourses();
                break;
            case 'dashboard':
                loadDashboard();
                break;
            case 'admin':
                loadAdminPanel();
                break;
            case 'assessment':
                initializeAssessment();
                break;
        }
    }
    
    // Close mobile menu if open
    document.getElementById('nav-menu').classList.remove('active');
}

function toggleMobileMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Authentication Functions
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    
    // Simulate login
    currentUser = {
        name: email.split('@')[0],
        email: email,
        profile_completed: false
    };
    
    showPage('profile');
}

function handleSignup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name') || event.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    
    // Simulate signup
    currentUser = {
        name: name,
        email: email,
        profile_completed: false
    };
    
    showPage('profile');
}

// Profile Setup Functions
function addSkill() {
    const skillsContainer = document.querySelector('.skills-input');
    const newSkillItem = document.createElement('div');
    newSkillItem.className = 'skill-item';
    newSkillItem.innerHTML = `
        <input type="text" placeholder="Skill name" class="form-control">
        <select class="form-control">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
        </select>
        <button type="button" class="btn btn--outline btn--sm" onclick="removeSkill(this)">Remove</button>
    `;
    skillsContainer.appendChild(newSkillItem);
}

function removeSkill(button) {
    button.parentElement.remove();
}

function handleProfileSetup(event) {
    event.preventDefault();
    
    // Collect profile data
    const formData = new FormData(event.target);
    const profileData = {
        age: formData.get('age') || event.target.querySelector('input[type="number"]').value,
        education: formData.get('education') || event.target.querySelector('select').value,
        career_goals: formData.get('career_goals') || event.target.querySelector('textarea').value,
        skills: [],
        interests: []
    };
    
    // Collect skills
    document.querySelectorAll('.skill-item').forEach(item => {
        const skillName = item.querySelector('input').value;
        const skillLevel = item.querySelector('select').value;
        if (skillName) {
            profileData.skills.push({ name: skillName, level: skillLevel });
        }
    });
    
    // Collect interests
    document.querySelectorAll('.interests-grid input[type="checkbox"]:checked').forEach(checkbox => {
        profileData.interests.push(checkbox.value);
    });
    
    // Update user profile
    if (currentUser) {
        currentUser.profile = profileData;
        currentUser.profile_completed = true;
    }
    
    showPage('assessment');
}

// Assessment Functions
function initializeAssessment() {
    assessmentData.currentQuestion = 0;
    assessmentData.answers = [];
    assessmentData.completed = false;
    
    updateAssessmentProgress();
    loadCurrentQuestion();
}

function updateAssessmentProgress() {
    const progress = (assessmentData.currentQuestion / appData.assessmentQuestions.length) * 100;
    document.getElementById('assessment-progress').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = assessmentData.currentQuestion + 1;
    document.getElementById('total-questions').textContent = appData.assessmentQuestions.length;
}

function loadCurrentQuestion() {
    const question = appData.assessmentQuestions[assessmentData.currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <h3>${question.question}</h3>
        <div class="answer-options">
            ${question.options.map((option, index) => `
                <div class="answer-option" onclick="selectAnswer(${index})">
                    ${option}
                </div>
            `).join('')}
        </div>
        <div class="assessment-navigation" style="margin-top: 24px; text-align: center;">
            ${assessmentData.currentQuestion > 0 ? 
                '<button class="btn btn--outline" onclick="previousQuestion()">Previous</button>' : ''}
            <button class="btn btn--primary" id="next-btn" onclick="nextQuestion()" disabled>Next</button>
        </div>
    `;
}

function selectAnswer(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select current option
    document.querySelectorAll('.answer-option')[optionIndex].classList.add('selected');
    
    // Store answer
    const question = appData.assessmentQuestions[assessmentData.currentQuestion];
    assessmentData.answers[assessmentData.currentQuestion] = {
        questionId: question.id,
        answer: question.options[optionIndex],
        category: question.category
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function previousQuestion() {
    if (assessmentData.currentQuestion > 0) {
        assessmentData.currentQuestion--;
        updateAssessmentProgress();
        loadCurrentQuestion();
        
        // Restore previous answer if exists
        if (assessmentData.answers[assessmentData.currentQuestion]) {
            const previousAnswer = assessmentData.answers[assessmentData.currentQuestion].answer;
            const options = document.querySelectorAll('.answer-option');
            options.forEach((option, index) => {
                if (option.textContent.trim() === previousAnswer) {
                    option.classList.add('selected');
                    document.getElementById('next-btn').disabled = false;
                }
            });
        }
    }
}

function nextQuestion() {
    if (assessmentData.currentQuestion < appData.assessmentQuestions.length - 1) {
        assessmentData.currentQuestion++;
        updateAssessmentProgress();
        loadCurrentQuestion();
    } else {
        completeAssessment();
    }
}

function completeAssessment() {
    assessmentData.completed = true;
    
    // Calculate career matches based on answers
    const careerMatches = calculateCareerMatches();
    
    // Hide question container and show results
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('assessment-results').classList.remove('hidden');
    
    // Display results
    displayAssessmentResults(careerMatches);
}

function calculateCareerMatches() {
    const matches = appData.careers.map(career => {
        let score = 0;
        
        // Simple scoring algorithm based on answers
        assessmentData.answers.forEach(answer => {
            switch(answer.answer) {
                case 'Analyzing data patterns':
                    if (career.title.includes('Data')) score += 25;
                    break;
                case 'Creating visual designs':
                    if (career.title.includes('UX') || career.title.includes('Design')) score += 25;
                    break;
                case 'Solving coding problems':
                    if (career.title.includes('Software') || career.title.includes('Cloud')) score += 25;
                    break;
                case 'Developing marketing campaigns':
                    if (career.title.includes('Marketing')) score += 25;
                    break;
            }
        });
        
        // Add random variation for demo
        score += Math.floor(Math.random() * 20);
        score = Math.min(score, 95); // Cap at 95%
        
        return { ...career, match_score: score };
    });
    
    // Sort by match score
    return matches.sort((a, b) => b.match_score - a.match_score);
}

function displayAssessmentResults(matches) {
    const container = document.getElementById('career-matches');
    
    container.innerHTML = matches.slice(0, 3).map(career => `
        <div class="career-match">
            <div class="career-match-header">
                <h4>${career.title}</h4>
                <span class="career-match-score">${career.match_score}% Match</span>
            </div>
            <p>${career.description}</p>
            <div class="salary-range">${career.salary_range}</div>
        </div>
    `).join('');
}

// Dashboard Functions
function loadDashboard() {
    if (!currentUser) return;
    
    // Update user name
    document.getElementById('user-name').textContent = currentUser.name;
    
    // Load career recommendations
    loadCareerRecommendations();
    
    // Initialize skill gap chart
    setTimeout(() => {
        initializeSkillGapChart();
    }, 100);
}

function loadCareerRecommendations() {
    const container = document.getElementById('career-recommendations');
    
    // Use assessment results or default recommendations
    const recommendations = assessmentData.completed ? 
        calculateCareerMatches().slice(0, 3) : 
        appData.careers.slice(0, 3);
    
    container.innerHTML = recommendations.map(career => `
        <div class="career-recommendation">
            <h4>${career.title}</h4>
            <p>${career.description}</p>
            <div class="salary-range">${career.salary_range}</div>
        </div>
    `).join('');
}

function initializeSkillGapChart() {
    const ctx = document.getElementById('skillGapChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization'],
            datasets: [{
                label: 'Current Skills',
                data: [75, 45, 60, 80, 30],
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                borderWidth: 2
            }, {
                label: 'Required Skills',
                data: [90, 85, 80, 85, 75],
                backgroundColor: 'rgba(255, 193, 133, 0.2)',
                borderColor: '#FFC185',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Career Exploration Functions
function loadCareers() {
    displayCareers(appData.careers);
}

function displayCareers(careers) {
    const container = document.getElementById('careers-grid');
    
    container.innerHTML = careers.map(career => `
        <div class="career-card" onclick="showCareerDetails(${career.id})">
            <h3>${career.title}</h3>
            <p>${career.description}</p>
            <div class="career-card-info">
                <span class="salary-range">${career.salary_range}</span>
                <button class="btn btn--outline btn--sm">Learn More</button>
            </div>
        </div>
    `).join('');
}

function searchCareers(query) {
    if (!query.trim()) {
        displayCareers(appData.careers);
        return;
    }
    
    const filtered = appData.careers.filter(career => 
        career.title.toLowerCase().includes(query.toLowerCase()) ||
        career.description.toLowerCase().includes(query.toLowerCase()) ||
        career.required_skills.some(skill => 
            skill.toLowerCase().includes(query.toLowerCase())
        )
    );
    
    displayCareers(filtered);
}

function showCareerDetails(careerId) {
    const career = appData.careers.find(c => c.id === careerId);
    if (!career) return;
    
    document.getElementById('modal-career-title').textContent = career.title;
    document.getElementById('career-details').innerHTML = `
        <div class="career-detail-section">
            <h4>Overview</h4>
            <p>${career.description}</p>
        </div>
        
        <div class="career-detail-section">
            <h4>Required Skills</h4>
            <div class="skills-list">
                ${career.required_skills.map(skill => 
                    `<span class="skill-tag">${skill}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="career-detail-section">
            <h4>Salary Range</h4>
            <p class="salary-range">${career.salary_range}</p>
        </div>
        
        <div class="career-detail-section">
            <h4>Future Outlook</h4>
            <p>${career.growth_outlook}</p>
        </div>
        
        <div class="career-detail-section">
            <h4>Learning Path</h4>
            <div class="learning-path">
                ${career.learning_path.map((step, index) => `
                    <div class="learning-step">
                        <div class="step-number-small">${index + 1}</div>
                        <span>${step}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('career-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('career-modal').classList.add('hidden');
}

// Learning Hub Functions
function loadCourses() {
    displayCourses(appData.courses);
}

function displayCourses(courses) {
    const container = document.getElementById('courses-grid');
    
    container.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-header">
                <h3>${course.title}</h3>
                <span class="course-price ${course.price === 'Free' ? 'free' : ''}">${course.price}</span>
            </div>
            <p>by ${course.provider}</p>
            <div class="course-meta">
                <span>📚 ${course.skill_level}</span>
                <span>⏱️ ${course.duration}</span>
                <span>🏷️ ${course.domain}</span>
            </div>
        </div>
    `).join('');
}

function filterCourses(filterType, value) {
    if (!value) {
        displayCourses(appData.courses);
        return;
    }
    
    const filtered = appData.courses.filter(course => {
        switch(filterType) {
            case 'level':
                return course.skill_level === value;
            case 'domain':
                return course.domain === value;
            case 'price':
                return value === 'Free' ? course.price === 'Free' : course.price !== 'Free';
            default:
                return true;
        }
    });
    
    displayCourses(filtered);
}

// Resume Builder Functions
function generateResume(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const summary = formData.get('summary') || event.target.querySelector('textarea[placeholder*="summary"]').value;
    const experience = formData.get('experience') || event.target.querySelector('textarea[placeholder*="experience"]').value;
    const skills = formData.get('skills') || event.target.querySelector('input[placeholder*="skills"]').value;
    
    const resumeHTML = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #1FB8CD; border-bottom: 2px solid #1FB8CD; padding-bottom: 10px;">
                ${currentUser ? currentUser.name : 'Your Name'}
            </h2>
            
            <h3 style="color: #555; margin-top: 20px;">Professional Summary</h3>
            <p>${summary || 'Please add your professional summary...'}</p>
            
            <h3 style="color: #555; margin-top: 20px;">Work Experience</h3>
            <p>${experience || 'Please add your work experience...'}</p>
            
            <h3 style="color: #555; margin-top: 20px;">Skills</h3>
            <p>${skills || 'Please add your skills...'}</p>
            
            <div style="margin-top: 30px; padding: 15px; background: #f0f8ff; border-left: 4px solid #1FB8CD;">
                <strong>AI Suggestion:</strong> Consider adding quantifiable achievements and specific technologies you've worked with to make your resume more impactful.
            </div>
        </div>
    `;
    
    document.getElementById('resume-preview').innerHTML = resumeHTML;
}

// Admin Panel Functions
function loadAdminPanel() {
    setTimeout(() => {
        initializeAdminCharts();
    }, 100);
}

function initializeAdminCharts() {
    // User Analytics Chart
    const userCtx = document.getElementById('userAnalyticsChart');
    if (userCtx) {
        new Chart(userCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Users',
                    data: [65, 89, 102, 145, 178, 234],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Career Trends Chart
    const careerCtx = document.getElementById('careerTrendsChart');
    if (careerCtx) {
        new Chart(careerCtx, {
            type: 'doughnut',
            data: {
                labels: ['Data Science', 'UX Design', 'Software Engineering', 'Digital Marketing', 'Cloud Architecture'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}
// Chatbot Functions
let userData = {
    name: null,
    educationOrRole: null,
    interests: null,
    experience: null,
    domain: null,
    location: null
};

let chatStep = 0;

function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.classList.toggle('hidden');
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.querySelector('.chatbot-input input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Handle conversation flow
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
    }, 800);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
    switch(chatStep) {
        case 0:
            chatStep++;
            return "Hello! I am your Personalized Career and Skills Advisor. Let’s start simple. May I know your name? (Optional)";
        
        case 1:
            userData.name = userMessage || "User";
            chatStep++;
            return `Nice to meet you, ${userData.name}! Could you share your current education level or job role?`;
        
        case 2:
            userData.educationOrRole = userMessage;
            chatStep++;
            return "Great! What are your primary interests or your target career goals?";
        
        case 3:
            userData.interests = userMessage;
            chatStep++;
            return "Got it. How would you describe your experience level? (Fresher, 1–2 yrs, mid-level, etc.)";
        
        case 4:
            userData.experience = userMessage;
            chatStep++;
            return "Excellent. Do you have a preferred domain like IT, finance, design, management, or something else?";
        
        case 5:
            userData.domain = userMessage;
            chatStep++;
            return "Noted. Do you have any specific location preference for your career? (Optional)";
        
        case 6:
            userData.location = userMessage || "No Preference";
            chatStep++;
            return generatePersonalizedGuidance();
        
        default:
            return "I already have your profile. Would you like me to suggest career paths, upskilling plans, or resume/interview tips?";
    }
}

function generatePersonalizedGuidance() {
    return `Here’s your personalized career profile:

Name: ${userData.name}  
Current Education/Role: ${userData.educationOrRole}  
Interests/Target Career: ${userData.interests}  
Experience Level: ${userData.experience}  
Preferred Domain: ${userData.domain}  
Location Preference: ${userData.location}  

Based on this, I can recommend:
- Career paths that align with your interests and domain.  
- In-demand skills and certifications you should focus on.  
- Job opportunities suited to your location and profile.  

Would you like me to create a step-by-step roadmap with courses, skills, and career moves tailored to you?`;
}


// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Set initial page
    showPage('home');
    
    // Add event listeners for modal backdrop clicks
    document.getElementById('career-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Initialize charts when needed
    if (typeof Chart !== 'undefined') {
        Chart.defaults.font.family = "'FKGroteskNeue', 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
        Chart.defaults.color = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced search for careers
const debouncedSearch = debounce(searchCareers, 300);

// Export functions for global access
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.showLogin = showLogin;
window.showSignup = showSignup;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.addSkill = addSkill;
window.removeSkill = removeSkill;
window.handleProfileSetup = handleProfileSetup;
window.selectAnswer = selectAnswer;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.searchCareers = debouncedSearch;
window.showCareerDetails = showCareerDetails;
window.closeModal = closeModal;
window.filterCourses = filterCourses;
window.generateResume = generateResume;
window.toggleChatbot = toggleChatbot;
window.handleChatInput = handleChatInput;
window.sendChatMessage = sendChatMessage;