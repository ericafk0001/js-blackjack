document.addEventListener("DOMContentLoaded", function () {
  // const mainMenu = document.getElementById("main-menu");
  // const singleplayerBtn = document.getElementById("singleplayer-btn");
  // function startGame() {
  //   const fadeScreen = document.getElementById("fade-screen");
  //   fadeScreen.style.display = "block";
  //   setTimeout(() => {
  //     fadeScreen.classList.add("fade-in");
  //   }, 8);
  // }
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
  //game variables
  let playerCards = [];
  //game constants
  const drawDeck = document.getElementById("deck");
  const playerHand = document.getElementsByName("player-hand");

  drawDeck.addEventListener("click", function () {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      playerCards.push(drawnCard);
      console.log(playerCards);
    } else {
      alert(" no mo cards ");
    }
  });
});
