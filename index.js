let input = document.querySelector("input");
let result = document.querySelector("#result");
const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

const mediaQueryList = window.matchMedia("only screen and (max-width: 375px");

document.querySelector("button").addEventListener("click", function () {
  if (!emailRegex.test(input.value)) {
    result.innerHTML = "<em>Please provide a vaild email address</em>";
    result.style.color = "hsl(354, 100%, 66%)";
    input.style.borderColor = "hsl(354, 100%, 66%)";
    result.style.padding = "2% 0 0 15%";
  }

  if (input.value === "") {
    result.innerHTML =
      "<em>Whoops! It looks like you forgot to add your email</em>";
    result.style.color = "hsl(354, 100%, 66%)";
    input.style.borderColor = "hsl(354, 100%, 66%)";
    result.style.padding = "2% 0 0 3%";
  }

  if (mediaQueryList.matches && !emailRegex.test(input.value)) {
    // console.log("It matches!");
    input.style.position = "realtive";
    result.style.position = "absolute";
    result.style.top = "30%";
    document.querySelector("button").style.marginTop = "10%";
  } // else {
  //     console.log("It doesn't match.");
  //  }
});
