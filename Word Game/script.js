const wordList = [
  "nokia",
  "nepal",
  "game",
  "squad",
  "orange",
  "visual",
  "javascript",
  "youtube",
  "metaphor",
  "rubik",
  "cube",
  " allergy",
  "hydrolysis",
  "amplification",
  "words",
  "buttefly",
  "nodejs",
  "javascript",
];

setInterval(dropWord, 1000);

function dropWord() {
  let position = 30;
  let randomIndex = Math.floor(Math.random() * (wordList.length - 1));
  let span = createSpan(wordList[randomIndex]);
  document.body.appendChild(span);

  let intervalID = setInterval(drop, 50);

  function drop() {
    position++;
    span.style.top = position + "px";

    if (position >= window.innerHeight - 50) {
      span.remove();
      clearInterval(intervalID);
      alert("Game over , your score is : " + score);
    }
  }
}

function createSpan(word) {
  let span = document.createElement("span");
  span.style.color = "green";
  span.style.position = "absolute";
  span.id = word;
  span.innerText = word;

  span.style.right = Math.random() * (window.innerWidth - 50);
  return span;
}

let typedWord = "";
let score = 0;

document.onkeydown = function (e) {
  if (
    e.key != "Alt" &&
    e.key != "Control" &&
    e.key != "Shift" &&
    e.key != "CapsLock" &&
    e.key != "Tab"
  ) {
    if (e.key == " " || e.key == "Enter") {
      if (document.getElementById(typedWord) != null) {
        document.getElementById(typedWord).remove();
        score++;
      }

      typedWord = "";
    } else if (e.key == "Backspace") {
      typedWord = typedWord.substr(0, typedWord.length - 1);
    } else typedWord += e.key;

    document.getElementById("__score").innerText = score;
    document.getElementById("__typedWord").innerText = typedWord;
  }
};
