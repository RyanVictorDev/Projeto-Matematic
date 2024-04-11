function calculateIMC() {
    var weight = parseFloat(document.getElementById("inputWeight").value);
    var height = parseFloat(document.getElementById("inputHeight").value);
    var resultIMC = document.getElementById("resultIMC");
    var resultClassification = document.getElementById("resultClassification");
  
    var imc = weight / (height * height);
    var classification = "";
  
    if (imc < 18.5) {
      classification = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      classification = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      classification = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      classification = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
      classification = "Obesidade grau II";
    } else {
      classification = "Obesidade grau III";
    }
  
    resultIMC.textContent = imc.toFixed(2);
    resultClassification.textContent = classification;
  }
  