"use strict";

function generateJoke() {
  fetch("https://api.icndb.com/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("joke").innerHTML = data.value.joke;
    });
}

document.getElementById("generateJokeBtn").addEventListener("click", generateJoke);

generateJoke();
