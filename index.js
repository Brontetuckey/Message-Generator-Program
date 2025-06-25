const messages = [
    "Use others negativity to turn it into positivity.",
    "You are stronger than your excuses and braver than your doubts.",
    "Do things you're not comfortable with and you will forever grow.",
    "Don't wait for motivation. Take action and let it inspire you.",
    "Your future is created by what you do today, not tomorrow."
];

const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};

const displayMessage = () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = getRandomMessage();
};

// Show a message on initial load
displayMessage();

// Add event listener to button for new messages
document.getElementById('newMessageBtn').addEventListener('click', displayMessage);
