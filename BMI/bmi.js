// Calulates BMI by @dang3rsm
document.getElementById("calculateButton").addEventListener("click", calculateBMI);

function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid height and weight.";
    return;
  }

  var bmi = weight / (height * height);
  var bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  var resultText = "BMI: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
  document.getElementById("result").innerHTML = resultText;
}
