const calculatorContent = document.querySelector("#calculator-content");
const mainInput = document.querySelector("#main-input");
const point = document.querySelector("#point");
const helpInput = document.querySelector("#helpInput");
const resultBtn = document.querySelector("#result");
const sqrt = document.querySelector("#sqrt");
const pow = document.querySelector("#pow");
const percent = document.querySelector("#percent");
const clear = document.querySelector("#clear");
const deleteLastSymbol = document.querySelector("#delete");
const isWork = document.querySelector("#is-work");
let isOn = false;
isWork.addEventListener("click", () => {
  isOn = !isOn;
  if (isOn === true) {
    mainInput.value = "0";
  } else {
    mainInput.value = "";
  }
});
const inputKey = (key) => {
  mainInput.value = mainInput.value + key;
  if (
    mainInput.value === "*" ||
    mainInput.value === "/" ||
    mainInput.value === "+"
  ) {
    mainInput.value = "";
  } else if (mainInput.value === "--") {
    mainInput.value = "";
  } else if (key === "+" || key === "/" || key === "*") {
    helpInput.value += mainInput.value;
    mainInput.value = "";
  } else if (mainInput.value === ".") {
    mainInput.value = "0.";
    point.value = "";
  } else if (mainInput.value === "00") {
    mainInput.value = "0";
  } else if (mainInput.value.includes(".")) {
		point.value = "";
  } else {
    point.value = ".";
  }
  for (let i = 1; i < mainInput.value.length; i++) {
    if (mainInput.value[i] === "-") {
      helpInput.value += mainInput.value;
      mainInput.value = "";
    }
  }
};

calculatorContent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && isOn === true) {
    inputKey(event.target.value);
  }
});

const result = () => {
  let exp = helpInput.value + mainInput.value;
  if (exp) {
    exp = exp.replace("--", "+");
    mainInput.value = eval(exp);
  }
  helpInput.value = "";
};
resultBtn.addEventListener("click", result);

sqrt.addEventListener("click", () => {
  mainInput.value = Math.sqrt(eval(mainInput.value));
});

pow.addEventListener("click", () => {
  mainInput.value = Math.pow(eval(mainInput.value), 2);
});

percent.addEventListener("click", () => {
  mainInput.value = eval(mainInput.value) / 100;
});

clear.addEventListener("click", () => {
  mainInput.value = "";
  helpInput.value = "";
  point.value = ".";
});

const del = () => {
  mainInput.value = mainInput.value.substr(0, mainInput.value.length - 1);
};
deleteLastSymbol.addEventListener("click", del);

document.addEventListener("keydown", (event) => {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "/",
    "+",
    "-",
    ".",
  ];
  if (event.key === "Backspace") {
    del();
  } else if (event.key === "Enter") {
    event.preventDefault();
    result();
	} else if (values.includes(event.key) && isOn === true) {
		inputKey(event.key);
  }
});
