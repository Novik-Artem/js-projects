const calculatorContent = document.querySelector("#calculator-content");
let inputValue = document.querySelector("#input");
calculatorContent.addEventListener("click", (event) => {
	inputValue.value = inputValue.value + event.target.value;
});
const result = document.querySelector("#result");
result.addEventListener("click", () => {
	let exp = inputValue.value;
	if (exp) {
		inputValue.value = eval(exp);
	}
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
	inputValue.value = ""
});
const del = document.querySelector("#delete");
del.addEventListener("click", () => {
});	