document.addEventListener("DOMContentLoaded", function () {
  // const mainMenu = document.getElementById("main-menu");
  // const singleplayerBtn = document.getElementById("singleplayer-btn");
  // singleplayerBtn.addEventListener("click", function () {
  //   mainMenu.style.display = "none";
  //   startGame();
  // });

  //fisher-yates shuffle algorithm
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  let deck = [
    "2_of_hearts",
    "3_of_hearts",
    "4_of_hearts",
    "5_of_hearts",
    "6_of_hearts",
    "7_of_hearts",
    "8_of_hearts",
    "9_of_hearts",
    "10_of_hearts",
    "jack_of_hearts",
    "queen_of_hearts",
    "king_of_hearts",
    "ace_of_hearts",
    "2_of_diamonds",
    "3_of_diamonds",
    "4_of_diamonds",
    "5_of_diamonds",
    "6_of_diamonds",
    "7_of_diamonds",
    "8_of_diamonds",
    "9_of_diamonds",
    "10_of_diamonds",
    "jack_of_diamonds",
    "queen_of_diamonds",
    "king_of_diamonds",
    "ace_of_diamonds",
    "2_of_clubs",
    "3_of_clubs",
    "4_of_clubs",
    "5_of_clubs",
    "6_of_clubs",
    "7_of_clubs",
    "8_of_clubs",
    "9_of_clubs",
    "10_of_clubs",
    "jack_of_clubs",
    "queen_of_clubs",
    "king_of_clubs",
    "ace_of_clubs",
    "2_of_spades",
    "3_of_spades",
    "4_of_spades",
    "5_of_spades",
    "6_of_spades",
    "7_of_spades",
    "8_of_spades",
    "9_of_spades",
    "10_of_spades",
    "jack_of_spades",
    "queen_of_spades",
    "king_of_spades",
    "ace_of_spades",
  ];
  shuffleDeck(deck);

  let cardValues = {};
  deck.forEach((card) => {
    let cardParts = card.split("_");
    let cardValue = cardParts[0];

    if (cardValue === "jack" || cardValue === "queen" || cardValue === "king") {
      cardValues[card] = 10;
    } else if (cardValue === "ace") {
      cardValues[card] = 11;
    } else {
      cardValues[card] = parseInt(cardValue); // For numbered cards, set their value
    }
  });

  function calculateHandValue(hand) {
    let totalValue = 0;
    let aceCount = 0;

    hand.forEach((card) => {
      totalValue += cardValues[card];
      if (card.includes("ace")) {
        aceCount++;
      }
    });

    while (totalValue > 21 && aceCount > 0) {
      totalValue -= 10;
      aceCount--;
    }

    return totalValue;
  }
  function startGame() {
    // const fadeScreen = document.getElementById("fade-screen");
    // fadeScreen.style.display = "block";
    // setTimeout(() => {
    //   fadeScreen.classList.add("fade-in");
    // }, 8);

    // game logic
    const startingCard = deck.pop();
    const startingCard2 = deck.pop();
    const playerHand = document.getElementById("player-hand");
    const cardImg = document.createElement("img");
    const cardImg2 = document.createElement("img");
    cardImg.src = `cards/${startingCard}.png`;
    cardImg2.src = `cards/${startingCard2}.png`;
    cardImg.classList.add("player-hand-card");
    cardImg2.classList.add("player-hand-card");
    playerHand.appendChild(cardImg);
    playerHand.appendChild(cardImg2);
    playerCards.push(startingCard);
    playerCards.push(startingCard2);

    const botStartingCard = deck.pop();
    const botStartingCard2 = deck.pop();
    const botHand = document.getElementById("bot-hand");
    const botCardImg = document.createElement("img");
    const botCardImg2 = document.createElement("img");
    botCardImg.src = `cards/${botStartingCard}.png`;
    botCardImg2.src = `card back red.png`;
    botCardImg.classList.add("bot-hand-card");
    botCardImg2.classList.add("bot-hand-card");
    botCardImg2.style.borderRadius = "5px";
    botHand.appendChild(botCardImg);
    botHand.appendChild(botCardImg2);
    botCards.push(botStartingCard);
    botCards.push(botStartingCard2);
  }

  //game variables
  let wallet = 100;
  let playerCards = [];
  let botCards = [];
  //game constants
  const drawDeck = document.getElementById("deck");
  //hit
  drawDeck.addEventListener("click", function () {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      const playerHand = document.getElementById("player-hand");
      const botHand = document.getElementById("bot-hand");
      const cardImg = document.createElement("img");
      const totalValue = calculateHandValue(playerCards);
      cardImg.src = `cards/${drawnCard}.png`;
      cardImg.classList.add("player-hand-card");
      playerHand.appendChild(cardImg);
      playerCards.push(drawnCard);
      console.log(totalValue);
    } else {
      drawDeck.style.display = "none";
      alert(" no mo cards ");
    }
  });

  startGame();
});
