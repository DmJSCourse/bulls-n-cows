var secret = Math.round((1000 + Math.random() * 8999));
console.log("secret number is :", secret);

function clickedButton() {
	var userInput = document.getElementById("num").value;
	let checkRes = checkInput(userInput, secret);
	let target = document.getElementById("log");
	let addedElem = document.createElement("p");
	addedElem.innerHTML = checkRes;
	target.appendChild(addedElem);
}

document.getElementById("btn").addEventListener("click", () => clickedButton());

function checkInput (input, base) {
	if (input.length < 4) { return "Нужно ввести 4 цифры"};
	if ( isNaN(parseInt(input,10)) ) { return "Нужно ввести 4 цифры"};
	base = base.toString();
	var bulls = 0;
	var cows = 0;
	for (let i = 0; i < base.length; i++) {
		if ( input[i] === base [i]) {
			bulls++;
			base = base.replace(input[i], "-");
		}
	}
	for (let i = 0; i < base.length; i++) {
		if ( base.includes(input[i]) ) {
			cows++;
			base = base.replace(input[i], "a");
		}
	}
	return "В ответе "+input+" : "+bulls+" быков и "+cows+" коров";
}
