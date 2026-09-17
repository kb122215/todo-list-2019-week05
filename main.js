const icons = ["🍒", "🍋", "🍇", "⭐", "💎"];
let balance = 100;
let currentBet = 1;

const minBet = 1;
const maxBet = 10;

// Gets the id elements from html
const balanceDisplay = document.querySelector("#balance");
const betDisplay = document.querySelector("#bet");

const reel1 = document.querySelector("#reel1");
const reel2 = document.querySelector("#reel2");
const reel3 = document.querySelector("#reel3");

const message = document.querySelector("#message");

const minBetButton = document.querySelector("#minBet");
const maxBetButton = document.querySelector("#maxBet");

const spinButton = document.querySelector("#spin");

// this is for the button that will bet the min
minBetButton.addEventListener("click", function () {
  currentBet = minBet;

  betDisplay.textContent = currentBet;
});

// this is for the button that will bet the min

maxBetButton.addEventListener("click", function () {
  currentBet = maxBet;

  betDisplay.textContent = currentBet;
});

// We will use this to spin the slot machine
spinButton.addEventListener("click", function () {
  if (balance < currentBet) {
    message.textContent =
      "You don't have enough money! Please don't bet anymore.";
    return;
  }
  balance = balance - currentBet;

  const icon1 = getRandomIcon();
  const icon2 = getRandomIcon();
  const icon3 = getRandomIcon();

  reel1.textContent = icon1;
  reel2.textContent = icon2;
  reel3.textContent = icon3;
  // Checking for 3 matching symbols so we can win
  if (icon1 === icon2 && icon2 && icon3) {
    const winnings = currentBet * 10;

    balance = balance + winnings;

    message.textContent = `🎉 Jackpot! You won $${winnings}!`;
  } else if (icon1 === icon2 || icon1 === icon3 || icon2 === icon3) {
    const winnings = currentBet * 2;

    balance = balance + winnings;

    message.textContent = `You matched 2! You won $$
    {winnings}`;
    // This is the message that will appear if we have no matching bets
  } else {
    message.textContent = `No match. You lost $${currentBet}`;
  }

  balanceDisplay.textContent = balance;
});

function getRandomIcon() {
  const randomIndex = Math.floor(Math.random() * icons.length);

  return symbols[randomIndex];
}
