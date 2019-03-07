//import { createCipher } from "crypto";

/* Acá va tu código */
/* DECLARAR Variables*/
const entry = document.getElementById('entrada');
const output = document.getElementById('mensajeConvertido');
const encryptButton = document.getElementById('button1');
const decryptButton = document.getElementById('button2');
const desplazamiento = document.getElementById('offset1');

function encryptMessage() {
  let receiveMessage = entry.value;
  let letterSCode = parseInt(desplazamiento.value);
  let changedMessage = cipher.encode(letterSCode, receiveMessage);
  output.innerHTML = changedMessage;
}

encryptButton.addEventListener("click", encryptMessage);

function decryptMessage() {
  let receiveMessage = entry.value;
  let letterSCode = parseInt(desplazamiento.value);
  let changedMessage = cipher.decode(letterSCode, receiveMessage);
  output.innerHTML = changedMessage;
}

decryptButton.addEventListener("click", decryptMessage);