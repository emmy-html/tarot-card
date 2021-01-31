const button = document.getElementById("card-pull");
const cardBg = document.getElementById("card-color");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardPantone = document.getElementById("card-pantone");
const cardDescription = document.getElementById("card-desc");
const cardContainer = document.getElementById("tarot-card-container");
function cardDisplay() {
    cardContainer.classList.remove("hide-card");
  var tarotCards = [
    {
      card: "00",
      name: "The Fool",
      color: "#FFCD00",
      pantone: "116 C",
      desc: "Eternal optimist, going on a new journey, ready for anything."
    },
    {
      card: "01",
      name: "The Magician",
      color: "#6638B6",
      pantone: "2090 C",
      desc: "Ability to manifest, goal setting, conscious awareness."
    },
    {
      card: "02",
      name: "The High Priestess",
      color: "#DEA8DD",
      pantone: "2065 C",
      desc: "Trust your intuition, see beyond what is obvious."
    }
  ];
  var randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  cardBg.style.backgroundColor = randomCard.color;
  cardNumber.innerHTML = randomCard.card;
  cardName.innerHTML = randomCard.name;
  cardPantone.innerHTML = "Pantone " + randomCard.pantone;
  cardDescription.innerHTML = randomCard.desc;
  cardContainer.style.borderColor = randomCard.color;
  button.innerHTML = "Pull Again";
}
button.addEventListener("click", cardDisplay);