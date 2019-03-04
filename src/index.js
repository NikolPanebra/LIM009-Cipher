//import { createCipher } from "crypto";

/* Acá va tu código */
/* DECLARAR Variables*/
const entrada = document.getElementById('entrada');
const salida = document.getElementById('mensajeConvertido');
const buttonEncriptar = document.getElementById('button1');
const buttonDesencriptar = document.getElementById('button2');
const desplazamiento = document.getElementById('offset1');
 
function encriptarMensaje() {
  let capturaMensaje = entrada.value.toUpperCase();
  let codigoDeLetra = parseInt(desplazamiento.value);
  let mensajeMostrado = cipher.encode(codigoDeLetra,capturaMensaje);
  salida.innerHTML = mensajeMostrado;
  } 

buttonEncriptar.addEventListener("click", encriptarMensaje);

function desencriptarMensaje() {
  let capturaMensaje = entrada.value.toUpperCase();
  let codigoDeLetra = parseInt(desplazamiento.value);
  let mensajeMostrado = cipher.decode(codigoDeLetra,capturaMensaje);
  salida.innerHTML = mensajeMostrado;
  } 

buttonDesencriptar.addEventListener("click", desencriptarMensaje);