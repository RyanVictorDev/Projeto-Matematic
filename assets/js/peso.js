function converterParaOncas() {
  var quilos = parseFloat(document.getElementById("peso-quilos").value);
  var oncas = (quilos * 35.27396);
  document.getElementById("peso-oncas").value = oncas.toFixed(2);

  or

  var libras = parseFloat(document.getElementById("peso-libras").value);
  var oncas = (libras*16);
  document.getElementById("peso-oncas").value = oncas.toFixed(2);
}

function converterParaQuilos() {
  var oncas = parseFloat(document.getElementById("peso-oncas").value);
  var quilos = (oncas / 35.27396);
  document.getElementById("peso-quilos").value = quilos.toFixed(2);

  or

  var libras = parseFloat(document.getElementById("peso-libras").value);
  var quilos = (libras/2.205);
  document.getElementById("peso-quilos").value = quilos.toFixed(2);
}

function converterParaLibras() {
  var quilos = parseFloat(document.getElementById("peso-quilos").value);
  var libras = (quilos*2.205);
  document.getElementById("peso-libras").value = libras.toFixed(2);

  or

  var oncas = parseFloat(document.getElementById("peso-oncas").value);
  var libras = (oncas/16);
  document.getElementById("peso-libras").value = libras.toFixed(2);
}