let input = document.getElementById("inputbox");

let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("triggerred click button" + e.target.innerHtml);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
