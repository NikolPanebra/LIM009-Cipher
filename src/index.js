/* Acá va tu código */

/* DECLARAR Variables*/
const mensaje2A = document.getElementById('mensaje2A');
const button2A = document.getElementById('button2A');
const mensaje2B = document.getElementById('mensaje2B');
const button2B = document.getElementById('button2B');

 /* Funciones básicas */
 
 /*Capturar el mensaje si el usuario decide encriptar*/
 
 button2A.addEventListener('click', capturaParaEncriptar);
 function capturaParaEncriptar() {

console.log(`${mensaje2A.value}`);
} 


 /*Capturar el mensaje si el usuario decide desencriptar PONER UN IF PARA CONDICIONAR QUÉ ACCION TENDRÁ AL HACER CLICK EN EL BOTÓN*/

 button2B.addEventListener('click',capturaParaDesencriptar);

 function capturaParDesencriptar() {

console.log(`${mensaje2B.value}`);
 }
