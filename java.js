window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	let height = parseInt(document.querySelector("#height").value);

	
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");


	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(1);

		
		if (bmi < 18.6) result.innerHTML =
			`Annorixic , just orders water : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Fit,usually orders one big mac : <span>${bmi}</span>`;

		else result.innerHTML =
			`Obese,usually orders 5 big macs : <span>${bmi}</span>`;
	}
}
