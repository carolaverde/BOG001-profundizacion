/*Escribir el código de una función a la que sea pasa como parámetro un número y devuelve como resultado una cadena de texto que indica si el número es par o impar.*/
//para saber si un número es par el modulo debe arrojar 0

function pareimpar(num){
if (num % 2 === 0) {
    return 'par';
}

    return 'impar';
}

export default pareimpar;
