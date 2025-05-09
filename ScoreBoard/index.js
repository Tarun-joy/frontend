let homeScore = 0;
let guestScore = 0;

function addPoints(points, team) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("homescore").textContent = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    document.getElementById("guestscore").textContent = guestScore;
  }
}

function reset(){
    homeScore = 0;
    guestScore = 0;

    document.getElementById("homescore").textContent = homeScore;
    document.getElementById("guestscore").textContent = guestScore;
}