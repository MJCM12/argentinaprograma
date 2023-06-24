
 function formula(farenheit) {
   return farenheit * 9/5 + 32
}

let farenheit = 50;

let celcius = formula(farenheit)

console.log(celcius)

farenheit = 75;

celcius = formula(farenheit)

console.log(celcius)

/*
Se que la formula en el practico es celcius = (farenheit - 32) * 5/9 
pero no me daba el resultado que debería ser

 */