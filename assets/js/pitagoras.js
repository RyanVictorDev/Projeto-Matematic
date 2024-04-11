function calculate() {
    var sideA = parseFloat(document.getElementById("inputSideA").value);
    var sideB = parseFloat(document.getElementById("inputSideB").value);
    var resultHypotenuse = document.getElementById("resultHypotenuse");
  
    var hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB).toFixed(2);
    resultHypotenuse.textContent = hypotenuse;
  }
  