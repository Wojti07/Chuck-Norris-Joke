# Chuck-Norris-Joke

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Contact](#contact)

## General info

Zadanie wykonane w ramamch bootcampu Kodilla - "Web developer"
Opis: Przećwiczenie wykorzystania technologii AJAX.
Aplikacja pobiera losowy dowcip o Chucku Norrisie z API http://api.icndb.com .

## Screenshots

![Example screenshot](./src/images/project_1.jpg)

## Technologies

- HTML 5
- CSS 3
- RWD
- Sass
- JavaScript
- AJAX
- API

## Code Examples

"use strict";

function generateJoke() {
fetch("https://api.icndb.com/jokes/random")
.then((response) => response.json())
.then((data) => {
document.getElementById("joke").innerHTML = data.value.joke;
});
}

document
.getElementById("generateJokeBtn")
.addEventListener("click", generateJoke);

generateJoke();

## Contact

Created by me - feel free to contact me!
