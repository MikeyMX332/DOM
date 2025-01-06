/* 
Handler Funciones

El handler en una evento es una funciíon que se ejecuta cuando el elemento ocurre.

Hay tres formas de escxribir la funcion handler

1.Como una funcion externa
2.Como una funcion anonima
3.Como una funcion flecha

Funcion externa

Esta funcion se escribe por fuera del evento y se pasa como argumento al AddEventListener.

fucntion handler() {
    // Código a ejecutar.
}

elemento.addEventListener (tipoEvento, handler)

Funcion Anonima

Esta funcion se escribe dentro del evento y no tiene nombre.}

elemtno.addEventListener(tipoEvento, function() {//Código a ejecutar})

Funcion Flecha

Se escribe dentro del evento, no tiene nombre pero es más concisa

elemento.addEventListener(tipoEvento,()=>{Código a Ejecutar})

+Cuando el código que se ejecuta tiene más de 1 linera se debe escribir entr las llaves.
+Si el código solo tiene 1 linea, se pueden omitir las llaves.

*/

/* Referencias */
const externa= document.getElementById("externa");
const anonima= document.getElementById("anonima");
const flecha= document.getElementById("flecha");

console.log(externa)

/* Funcion Externa */

function funcionExterna() {
    console.log("Click en el botn externo👽")

}

externa.addEventListener('click', funcionExterna);

/* Funcion anonima */

anonima.addEventListener('click',function(){
    console.log("click en el boton anonima 👤")
} )

/* Función Flecha */

flecha.addEventListener('click',() => {
    console.log("Click en el botn flecha 🏹")
})

/* flecha.addListener(''<click), () => console.log ("click en el boton flecha") */