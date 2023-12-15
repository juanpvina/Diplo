// Acceder al tercer elemento de un array y asignarle un nuevo valor


let array = ['primer', 'segundo', 'tercer', 'cuarto'];
array[4] = 'quinto'
console.log(array);
//Agregar un nuevo elemento al final del array
array.push('sexto');
// Usar `map` para duplicar todos los elementos en un array de números

let array2 = array.map(function (elem) {
    return elem + 2;
});
console.log(array2);

let array3 = array.map(text => text + 3)


console.log(array3);

// Usar `filter` para obtener solo los números pares de un array

let numeros = [];
for (let i = 0; i <= 20; i++) {
    numeros[i] = i;
}
console.log(numeros);
const pares = numeros.filter(function name(num) {
    return (num % 2) == 0;
}
)
console.log(pares);

// Acceder al segundo y cuarto elemento de un array y combinarlos en una nueva cadena
let nuevacadena = array[1] + array[3];
console.log(nuevacadena);

//Usar `forEach` para calcular la suma de los elementos de un array
let suma = 0;
numeros.forEach(function name(num) {
    suma += num;
})
console.log(suma);
// Usar `filter` para obtener palabras con más de tres letras de un array

array.push('a');
array.push('b');
const tresLetras = array.filter(function name(txt) {
    return txt.length > 3;
}
)
console.log(tresLetras);
//Eliminar elementos específicos de un array usando `splice`
array.splice(1, 2);
console.log(array);



//Escribí un ciclo for que haga que la computadora cuente hacia atrás 
//desde 100 hasta 0 de 5 en 5.
for (let i = 100; i >= 0; i -= 5) {
    //nada
}


//Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado.
function deceroalnumero() {
    const ingreso = document.getElementById("ingreso");
    const salida = document.getElementById("salida");
    let lista = [];
    for (let i = 0; i < ingreso.value; i++) {
        lista.push(i);
    }
    salida.value = lista;
}

function tablamultipl() {
    const ingreso = document.getElementById("ingreso2");
    const salida = document.getElementById("salida2");
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(ingreso.value + "*" + i + " =" + (i * ingreso.value) + "   ;   ");
    }
    salida.value = tabla;

}

function divisores() {
    const ingreso = document.getElementById("ingreso3");
    const salida = document.getElementById("salida3");
    let divs = [];
    for (let i = ingreso.value; i >0; i--) {
        if( ingreso.value%i == 0)divs.push(i);
    }
    salida.value = divs;

}

function separaLetras() {
    const ingreso = document.getElementById("ingreso4");
    const salida = document.getElementById("salida4");
    let letras = [];
    for (let i =0; i <= ingreso.value.length; i++) {
        letras.push(ingreso.value[i])
    }
    salida.value = letras;

}

function mayor() {
    const ingreso1 = document.getElementById("ingreso5");
    const ingreso2 = document.getElementById("ingreso6");
    const salida = document.getElementById("salida5");
    let mayor=0;
    if(ingreso1.value>ingreso2.value){ salida.value = ingreso1.value;}
    else{  salida.value = ingreso2.value;}

}




