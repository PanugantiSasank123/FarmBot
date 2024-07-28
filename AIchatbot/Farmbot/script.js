const signUpPage = document.getElementById('sign-up-page');
const loginPage = document.getElementById('login-page');
const chatbotPage = document.getElementById('chatbot-page');

const showLogin = document.getElementById('show-login');
const showSignUp = document.getElementById('show-sign-up');
const signUpButton = document.getElementById('sign-up-button');
const loginButton = document.getElementById('login-button');

showLogin.addEventListener('click', () => {
    signUpPage.style.display = 'none';
    loginPage.style.display = 'block';
});

showSignUp.addEventListener('click', () => {
    loginPage.style.display = 'none';
    signUpPage.style.display = 'block';
});

signUpButton.addEventListener('click', () => {
    const username = document.getElementById('sign-up-username').value.trim();
    const password = document.getElementById('sign-up-password').value.trim();
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign Up Successful! Please log in.');
        signUpPage.style.display = 'none';
        loginPage.style.display = 'block';
    } else {
        alert('Please enter a valid username and password.');
    }
});

loginButton.addEventListener('click', () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        alert('Login Successful!');
        loginPage.style.display = 'none';
        chatbotPage.style.display = 'flex';
    } else {
        alert('Invalid username or password.');
    }
});

const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const questions = [
    // ... (include all the question-answer pairs here)
];

const sendMessage = (message) => {
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(userMessage);
};

const receiveMessage = (message) => {
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot-message');
    botMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(botMessage);
};

const handleUserInput = () => {
    const input = userInput.value.trim();
    if (input) {
        sendMessage(input);
        const question = questions.find(q => input.toLowerCase().includes(q.question.toLowerCase()));
        if (question) {
            receiveMessage(question.answer);
        } else {
            receiveMessage("Sorry, I don't understand your question.");
        }
        userInput.value = '';
    }
};

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});