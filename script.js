const quotes = [
  "The only way to do great work is to love what you do.",
  "In the middle of difficulty lies opportunity.",
  "Life is what happens when you're busy making other plans.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The journey of a thousand miles begins with one step.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It always seems impossible until it's done.",
  "You are never too old to set another goal or to dream a new dream.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t wait. The time will never be just right.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Opportunities don't happen, you create them.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The way to get started is to quit talking and begin doing.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "To be the best, you must be able to handle the worst.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "I find that the harder I work, the more luck I seem to have.",
  "The difference between who you are and who you want to be is what you do.",
  "You don’t have to be perfect to be amazing.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Success is not measured by what you accomplish, but by the obstacles you overcome.",
  "Don’t be afraid to give up the good to go for the great.",
  "If you’re not willing to risk the usual, you will have to settle for the ordinary.",
  "The only place where success comes before work is in the dictionary.",
  "To succeed in life, you need two things: ignorance and confidence.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Do what you can with all you have, wherever you are.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you want to achieve greatness stop asking for permission.",
  "Everything you can imagine is real.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "In order to succeed, we must first believe that we can.",
  "It always seems impossible until it's done.",
  "If you can dream it, you can do it.",
  "To be successful, you have to have your heart in your business, and your business in your heart.",
  "The best way to predict the future is to create it.",
  "Success doesn't just find you. You have to go out and get it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Don’t wait. The time will never be just right.",
  "You are never too old to set another goal or to dream a new dream.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t wait. The time will never be just right.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Opportunities don't happen, you create them.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The way to get started is to quit talking and begin doing.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "To be the best, you must be able to handle the worst.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "I find that the harder I work, the more luck I seem to have.",
  "The difference between who you are and who you want to be is what you do.",
  "You don’t have to be perfect to be amazing.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Success is not measured by what you accomplish, but by the obstacles you overcome.",
  "Don’t be afraid to give up the good to go for the great.",
  "If you’re not willing to risk the usual, you will have to settle for the ordinary.",
  "The only place where success comes before work is in the dictionary.",
  "To succeed in life, you need two things: ignorance and confidence.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Do what you can with all you have, wherever you are.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you want to achieve greatness stop asking for permission.",
  "Everything you can imagine is real.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "In order to succeed, we must first believe that we can.",
  "It always seems impossible until it's done.",
  "If you can dream it, you can do it.",
  "To be successful, you have to have your heart in your business, and your business in your heart.",
  "The best way to predict the future is to create it.",
  "Success doesn't just find you. You have to go out and get it."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display the quote
function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById('quoteBody').textContent = `"${quote}"`;
}

// Call the displayQuote function once the page loads
window.onload = displayQuote;



function monthsBetweenDates(startDate, endDate) {
  // Parse the input dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in years and months
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  // Return the total number of months
  return months <= 0 ? 0 : months;  // Ensure non-negative result
}

// Example usage
const startDate = '2025-04-14'; // Format: YYYY-MM-DD
const endDate = '2027-01-01';   // Format: YYYY-MM-DD

document.getElementById('months').textContent =monthsBetweenDates(startDate, endDate);


function daysLeftInMonth() {
  const today = new Date();
  const currentMonth = today.getMonth(); // Current month (0-11)
  const currentYear = today.getFullYear(); // Current year (YYYY)
  
  // Find the first day of the next month
  const nextMonth = new Date(currentYear, currentMonth + 1, 1);
  
  // Calculate the last day of the current month
  const lastDayOfCurrentMonth = new Date(nextMonth - 1);
  
  // Calculate the remaining days
  const remainingDays = lastDayOfCurrentMonth.getDate() - today.getDate();
  
  return remainingDays;
}

// Example usage
document.getElementById('days').textContent =daysLeftInMonth();

function startDecreasingClock() {
  // Get the current date and time
  const now = new Date();

  // Set the time to midnight of the current day (next day at 00:00:00)
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);  // Set the time to 00:00 of the next day

  // Calculate the remaining time in seconds until midnight
  const remainingTime = Math.floor((midnight - now) / 1000);

  // Function to format time in HH:MM:SS
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  }

  // Start the countdown
  let totalSeconds = remainingTime;
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval); // Stop the clock when it reaches 0
      document.getElementById('time').textContent = '00:00:00';
      return;
    }

    // Display the current time
    document.getElementById('time').textContent = formatTime(totalSeconds);

    // Decrease the total seconds by 1
    totalSeconds--;
  }, 1000); // Update every 1 second
}

// Start the decreasing clock
startDecreasingClock();


// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable certain keyboard shortcuts (like F12, Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" || 
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    alert("Dev tools are off-limits, bruh.");
  }
});
