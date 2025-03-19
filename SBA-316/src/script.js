const quotes = [
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Success is not final, failure is not fatal.",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones."
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const saveQuoteButton = document.getElementById("save-quote");
const savedQuotesList = document.getElementById("saved-quotes");

// Load a random quote
function showNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Save quote to local storage
function saveQuote() {
    const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
if (!savedQuotes.includes(quoteElement.textContent)) {
        savedQuotes.push(quoteElement.textContent);
        localStorage.setItem("quotes", JSON.stringify(savedQuotes));
        displaySavedQuotes();
    }
}

// Display saved quotes
function displaySavedQuotes() {
    savedQuotesList.innerHTML = "";
    const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
savedQuotes.forEach(quote => {
        const li = document.createElement("li");
        li.textContent = quote;
        savedQuotesList.appendChild(li);
    });
}

// Event Listeners
newQuoteButton.addEventListener("click", showNewQuote);
saveQuoteButton.addEventListener("click", saveQuote);

// Initialize
showNewQuote();
displaySavedQuotes();