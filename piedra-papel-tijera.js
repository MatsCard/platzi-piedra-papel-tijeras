

function juego() {

  tijera = document.querySelector('.tijera')
  tijera.addEventListener('click', results)

  piedra = document.querySelector('.piedra')
  piedra.addEventListener('click', results)

  papel = document.querySelector('.papel')
  papel.addEventListener('click', results)

}
results

function results(evento) {
  let player = evento.target.className

  var hand = ["piedra", "papel", "tijera"];
  var computer = hand[Math.floor(Math.random() * hand.length)];



  switch (true) {
    case player == "tijera" && computer == "papel":
    case player == "papel" && computer == "piedra":
    case player == "piedra" && computer == "tijera":
    var resultsText = `You win!`;
    break;
  case player == "tijera" && computer == "piedra":
  case player == "papel" && computer == "tijera":
  case player == "piedra" && computer == "papel":
    var resultsText = `You lose!`;
    break;
  default:
    var resultsText = `Draw!`;

  }


  const imgSrc = `images/${computer}.png`;

  const $resultText = document.getElementById("results-text")
  const $resultsImg = document.getElementById("results-img")
  $resultText.innerHTML = resultsText;
  $resultsImg.setAttribute("src", imgSrc);


}

function winnerTemplate(imgSrc, resultsText) {
  return (`
  <img src="${imgSrc}" alt="" class="computer-img">
  <h1 class="show-result">${resultsText}</h1>`
)
}



juego()
