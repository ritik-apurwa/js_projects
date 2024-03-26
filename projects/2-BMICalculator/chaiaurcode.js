const form = document.querySelector("form");
const calculateButton = document.getElementById("result_button");

calculateButton.addEventListener("click", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.innerHTML = "Please enter valid values for height and weight";
  } else if (!document.querySelector("#height").value.trim() || !document.querySelector("#weight").value.trim()) {
    results.innerHTML = "Please enter values for height and weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = "";
    if (bmi < 18.6) {
      message = `Your BMI is ${bmi}, indicating underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = `Your BMI is ${bmi}, indicating normal weight`;
    } else {
      message = `Your BMI is ${bmi}, indicating overweight`;
    }

    results.innerHTML = `<span>${message}</span>`;
  }
});
