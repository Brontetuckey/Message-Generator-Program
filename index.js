// Inspirational messages.
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
}; // Gives one random message from my list

const displayMessage = () => {
    const title = "I think you need to hear this...\n";
    const message = getRandomMessage();
    console.log(title + message);
}; // Puts everything together to display the message.

displayMessage();
// Runs the program.
