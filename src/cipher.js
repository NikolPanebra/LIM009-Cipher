window.cipher = {
    encode: (offset,string) => {
    let changedMessage = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt()<=90){
        let numberAscii = ((string[i].charCodeAt())-65+offset)%26+65;
        let letrasCifradas = String.fromCharCode(numberAscii);
        changedMessage +=  letrasCifradas;
    /*pasar a minúscula, luego revisar spec*/
    } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt()<=122) {
        let numberAscii = ((string[i].charCodeAt())-97+offset)%26+97;
        let letrasCifradas = String.fromCharCode(numberAscii);
        changedMessage +=  letrasCifradas;
    } else {
        changedMessage += string[i];
    }
    }
    
    return changedMessage;
    },
    
    decode: (offset, string) => {
    
        let changedMessage = '';
        for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt()<=90){
            let numberAscii = ((string[i].charCodeAt())-90-offset)%26+90;
            let letrasCifradas = String.fromCharCode(numberAscii);
            changedMessage +=  letrasCifradas;
        /*cambiar a minúsculas*/
        } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt()<=122){
            let numberAscii = ((string[i].charCodeAt())-122+offset)%26+122;
            let letrasCifradas = String.fromCharCode(numberAscii);
            changedMessage +=  letrasCifradas;
        } else {
            changedMessage += string[i];
        }
        }
        return changedMessage;
        },
    } 