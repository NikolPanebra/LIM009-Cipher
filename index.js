import { createCipher } from "crypto";

/* Acá va tu código */

/* DECLARAR Variables*/
const firstTextBox = document.getElementById('firstTextBox');
const button1 = document.getElementById('button1');
const secondTextBox = document.getElementById('secondTextBox');
const button2 = document.getElementById('button2');

 /* Funciones básicas */
 /*guía de funciones 
cosnt mensaje
const boton
const salida = document.getElemmentBy('salida')
const elemntoP = document.getElemmentBy('elementP')
 button1.addEventListener('click', (evento) => {
     const mensajeCapturado =  mensaje.value
     console.log(mensajeCapturado);
     elementP.innerHTML = mensajeCapturado;
 })

 */
 /*Capturar el mensaje si el usuario decide encriptar*/
  button1.addEventListener('click', capturaParaEncriptar);

    function capturaParaEncriptar () {
    console.log(`${firstTextBox.value}`);
    }

 /*Capturar el mensaje si el usuario decide desencriptar PONER UN IF PARA CONDICIONAR QUÉ ACCION TENDRÁ AL HACER CLICK EN EL BOTÓN*/

    function capturaParaDesencriptar () {
    console.log(`${secondTextBox.value}`);
    //createCipher.decode(wert,2)
    }
    button2.addEventListener('click', capturaParaDesencriptar);
