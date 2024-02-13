/*28BlackNinja*/
document.getElementById("submit").addEventListener("click", predictHeight);
function predictHeight() {
  var fatherHeight = parseFloat(document.getElementById("father-height").value);
  var motherHeight = parseFloat(document.getElementById("mother-height").value);
  var x = document.getElementById("male");
  var y = document.getElementById("female");
  if (isNaN(fatherHeight) || isNaN(motherHeight) || fatherHeight <= 0 || motherHeight <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid heights.";
    return;
  }
  if(fatherHeight>=260 || motherHeight>=220){
    document.getElementById("result").innerHTML = "Please enter valid heights.";
    return;
  }  
  if(x){
        var height = ((fatherHeight+motherHeight)/2)+6;
        var resultText = "Predicted Height: " + height.toFixed(2) + "cm";
        document.getElementById("result").innerHTML = resultText;
  } if(y){
        var height = ((fatherHeight+motherHeight)/2)-6;
        var resultText = "Predicted Height: " + height.toFixed(2) + "cm";
        document.getElementById("result").innerHTML = resultText;
  }
  }
