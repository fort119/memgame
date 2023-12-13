let arrOfLetters = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "i", "i", "j", "j", "k", "k", "q", "q"];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffle(arrOfLetters);
console.log(arrOfLetters);

for (let i = 0; i < arrOfLetters.length; i++) {
  let item = document.createElement("div");
  item.classList.add("card-memory-game__item");

  let itemFront = document.createElement("div");
  itemFront.classList.add("card-memory-game__item-front");
  item.appendChild(itemFront);

  let itemBack = document.createElement("div");
  itemBack.classList.add("card-memory-game__item-back");
  item.appendChild(itemBack);

  itemBack.innerHTML = arrOfLetters[i];

  item.onclick = function () {
    this.classList.add('boxOpen')
    itemBack.setAttribute("style", "transform: rotateY(360deg)");
    itemFront.setAttribute("style", "transform: rotateY(180deg)");
    setTimeout(function () {

      let arrOfOpenedBoxes = document.querySelectorAll(".boxOpen")
      if (arrOfOpenedBoxes.length > 1) {
        if (arrOfOpenedBoxes[0].innerHTML == arrOfOpenedBoxes[1].innerHTML) {
          arrOfOpenedBoxes[0].classList.add("match");
          arrOfOpenedBoxes[1].classList.add("match");

          arrOfOpenedBoxes[0].classList.remove("boxOpen");
          arrOfOpenedBoxes[1].classList.remove("boxOpen");

          if (document.querySelectorAll(".match").length == arrOfLetters.length) {
            alert("...молодец. Жми restart (или что там на кнопке внизу написано)");
          }
        } else {
          arrOfOpenedBoxes[0].classList.remove("boxOpen");
          arrOfOpenedBoxes[1].classList.remove("boxOpen");

          arrOfOpenedBoxes[0].children[0].setAttribute("style", "");
          arrOfOpenedBoxes[0].children[1].setAttribute("style", "");

          arrOfOpenedBoxes[1].children[0].setAttribute("style", "");
          arrOfOpenedBoxes[1].children[1].setAttribute("style", "");
        }
      }


    }, 2000)
  }

  if (document.querySelectorAll(".match") == arrOfLetters) {
    alert("you won");
  }

  let gameBoard = document.querySelector(".card-memory-game__pads");
  gameBoard.appendChild(item);
}