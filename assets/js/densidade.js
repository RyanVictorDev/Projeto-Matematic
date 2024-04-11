function calculate() {
    var mass = parseFloat(document.getElementById("inputMass").value);
    var volume = parseFloat(document.getElementById("inputVolume").value);
    var resultDensity = document.getElementById("resultDensity");
  
    var density = mass / volume;
    resultDensity.textContent = density.toFixed(2);
  }
  