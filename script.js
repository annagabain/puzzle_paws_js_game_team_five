const CARD_NAMES = [
  "bear",
  "elephant",
  "fox",
  "zebra",
  "lion",
  "penguin",
  "rabbit",
  "turtle",
];

const IMAGE_PATH = "temp-images";
const FLIP_BACK_DELAY_MS = 600;
const CORRECT_DELAY_MS = 1000;
const STORAGE_KEY = "memoryBest";

const gameState = {
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  moves: 0,
  time: 0,
  startTime: null,
  timerId: null,
  flipBackTimeoutId: null,
  hideTimeoutIds: [],
};

const bestRecords = {
  moves: null,
  time: null,
};

const board = document.getElementById("board");
const successBlock = document.getElementById("success");
const restartButton = document.getElementById("restart-button");
const movesEl = document.getElementById("moves");
const timeEl = document.getElementById("time");
const bestMovesEl = document.getElementById("best-moves");
const bestTimeEl = document.getElementById("best-time");

// ## Game setup

function startGame() {
  // Start a new game or restart the current one.
  // Reset game state and cancel pending timers.
  // Create, shuffle and render a new deck.
  // Keep the saved best records.
}

function createDeck(names) {
  // Create two cards for each name.
  // Give every card a unique ID and initial state.
}

function shuffle(array) {
  // Randomize the array in place.
}

// ## Cards and rendering

function renderCards(cards) {
  // Render the cards on the board.
}

function createCard(card) {
  // Create a card element with its image and back.
  // Set its ID and initial appearance.
  // Return the element.
}

function updateCardElement(cardEl, card) {
  // Update the card's CSS classes based on its state.
}

function refreshCard(card) {
  // Find the corresponding DOM element and update it.
}

// ## Game logic

function handleCardClick(cardEl) {
  // Handle a player's click on a card.
  // Follow the game rules and check pairs when appropriate.
}

function flipBackWrongCards() {
  // Turn the unmatched cards face down.
  // Clear the relevant timeout and update the state.
}

function checkPairs() {
  // Count the move and compare the selected cards.
  // Handle matching and nonmatching pairs.
  // Hide matched pairs after a delay.
  // Finish the game when all pairs are found.
}

function updateMoves() {
  // Update the moves display.
}

// ## Timer

function startTimer() {
  // Start tracking elapsed time from the first move.
  // Update the displayed time periodically.
}

function stopTimer() {
  // Stop the timer.
}

function formatTime(totalSeconds) {
  // Return the time in mm:ss format.
}

function updateTime() {
  // Update the time display.
}

// ## Best records

function loadBest() {
  // Load saved records from localStorage.
  // Handle missing or invalid saved data.
}

function handleNewRecord() {
  // Update and save records when a better result is achieved.
}

function updateBest() {
  // Display the best moves and time, or "-" if no record exists.
}

// ## Game completion and initialization

function finishGame() {
  // Stop the timer and finalize elapsed time.
  // Display the success message and handle the final records.
}

function init() {
  // Load saved records.
  // Register event listeners.
  // Start the game.
}

init();
