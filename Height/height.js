/*28BlackNinja*/

document.getElementById("submit").addEventListener("click", predictHeight);

function predictHeight() {
  var fatherHeight = parseFloat(document.getElementById("father-height").value);
  var motherHeight = parseFloat(document.getElementById("mother-height").value);
  var x = document.getElementById("male").checked; // Check if male radio button is checked
  var y = document.getElementById("female").checked; // Check if female radio button is checked

  if (isNaN(fatherHeight) || isNaN(motherHeight) || fatherHeight <= 0 || motherHeight <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid heights.";
    return;
  }

  if (fatherHeight >= 260 || motherHeight >= 220) {
    document.getElementById("result").innerHTML = "Please enter valid heights.";
    return;
  }

  var height;
  
  if (x) {
    height = ((fatherHeight + motherHeight) / 2) + 6;
  } else if (y) {
    height = ((fatherHeight + motherHeight) / 2) - 6;
  } else {
    document.getElementById("result").innerHTML = "Please select gender.";
    return;
  }

  var resultText = "Predicted Height: " + height.toFixed(2) + "cm";
  document.getElementById("result").innerHTML = resultText;
}
