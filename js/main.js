/* card pull button */
const button = document.getElementById("card-pull");
const cardBg = document.getElementById("card-color");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardPantone = document.getElementById("card-pantone");
const cardDescription = document.getElementById("card-desc");
const cardContainer = document.getElementById("tarot-card-container");
/* function to display a random tarot card */
function cardDisplay() {
    /* toggle opacity for the card */ 
  cardContainer.classList.remove("hide-card");
  /* array of cards */
  var tarotCards = [
    {
      card: "00",
      name: "The Fool",
      color: "#FFCD00",
      pantone: "116 C",
      desc: "Eternal optimist, going on a new journey, ready for anything.",
    },
    {
      card: "01",
      name: "The Magician",
      color: "#6638B6",
      pantone: "2090 C",
      desc: "Ability to manifest, goal setting, conscious awareness.",
    },
    {
      card: "02",
      name: "The High Priestess",
      color: "#DEA8DD",
      pantone: "2065 C",
      desc: "Trust your intuition, see beyond what is obvious.",
    },
    {
      card: "03",
      name: "The Empress",
      color: "#00AB84",
      pantone: "Green C",
      desc: "In harmony with nature, sensual awareness, focusing on beauty and art.",
    },
    {
      card: "04",
      name: "The Emperor",
      color: "#CA3604",
      pantone: "2349 C",
      desc: "Assertive dogmatic thinking, orderly chaos, taking control of a system.",
    },
    {
      card: "05",
      name: "The Hierophrant",
      color: "#6638B6",
      pantone: "2090 C",
      desc: "This is a tarot card",
    },
    {
      card: "06",
      name: "The Lovers",
      color: "#CAA2DD",
      pantone: "529 C",
      desc: "This is a tarot card",
    },
  ];
  /* get a random tarot card */
  var randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  /* change card background & border color */
  cardBg.style.backgroundColor = randomCard.color;
  cardContainer.style.borderColor = randomCard.color;
  /* change card's data using object dot notation */
  cardNumber.innerHTML = randomCard.card;
  cardName.innerHTML = randomCard.name;
  cardPantone.innerHTML = "Pantone " + randomCard.pantone;
  cardDescription.innerHTML = randomCard.desc;
  /* change button wording once you've clicked it at least 1 time */
  button.innerHTML = "Pull Again";
}
button.addEventListener("click", cardDisplay);