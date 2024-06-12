/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function excuseGenerator() {
    let who = ["I", "My sister", "The driver", "The teacher"];
    let action = ["thrown", "kick", "replace", "stole"];
    let what = ["a cat", "my pen", "a cactus"];
    let where = [
      "in class",
      "at my house",
      "in the mall",
      "in the park",
      "in the train"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    let excuse =
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      where[whereIndex];
    return excuse;
  }
  let frase = excuseGenerator();
  document.querySelector("#excuse").innerHTML = frase;
  document.querySelector("#button").addEventListener("click", function(event) {
    event.target.blur();
    frase = excuseGenerator();
    document.querySelector("#excuse").innerHTML = frase;
    console.log("frase");
  });
};
