window.cipher = {
encode: (offset,string) => {
let mensajeMostrado = '';
for (let i = 0; i < string.length; i++) {
if (string[i].charCodeAt() >= 65 && string[i].charCodeAt()<=90){
let numberAscii = ((string[i].charCodeAt())-65+offset)%26+65;
let letrasCifradas = String.fromCharCode(numberAscii);
mensajeMostrado = mensajeMostrado + letrasCifradas;
} else {
mensajeMostrado = mensajeMostrado+string[i];
}
}
return mensajeMostrado;
},

decode: (offset, string) => {

    let mensajeMostrado = '';
    for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() >= 65 && string[i].charCodeAt()<=90){
    let numberAscii = ((string[i].charCodeAt())-90-offset)%26+90;
    let letrasCifradas = String.fromCharCode(numberAscii);
    mensajeMostrado = mensajeMostrado + letrasCifradas;
    } else {
mensajeMostrado = mensajeMostrado+string[i];
    }
    }
    return mensajeMostrado;
    },
} 