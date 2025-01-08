/* 

Objeto Event

En el objeto event representa un suceso que ocurre en el navegador, como un click, pulsar la tecla o el movimiento del mouse y proporciona indofmacion sobre las propiedades y métodos para manejarlo.

Para acceder al objeto event (E) se pasa automaticamente como un argumento a la funcion manejadora.

Sintaxis

function funcionManejadora (event) {
    //codigo a ejecutar...
    console.log(event) //Muestra la lista de propiedades y métodos

    Propiedades del objeto event

    -type:devuelve el tipo de evento.
    -taget:devuelve el elementon donde ocurre el evento
    -timeStamp:Devuelve la marca de tiempo en milisxegundos desde la cartga de la pagina.

    -code:Devuelve el codigo de la tecla presionada.
    -key:Devuelve el valor de la teclas presionada
    
    clientX:Deuelve la posición horizontal de puntero del mouse en relacion a la ventana del navegador.
    ClientY:Devuelve la psocion vertical del puntero del mouse en relacion con la ventana del nageador.

} 

*/

const button= document.getElementsByClassName("button");

/* console.log(button[0]) */

button[0].addEventListener("click", mostrarObjetoEvento);

/* Accedemos al objeto evento */

function mostrarObjetoEvento(event) {
    /* Código que se ejecuta */
    console.log(event)
    console.log(event.type);
    console.log(event.target);
    console.log(event.timeStamp);
    console.log(event.target.innerText)    
}

document.addEventListener("keydown", function(e){
console.log(e);
console.log(e.type);
console.log(e.code)
console.log(e,key)
} )

document.addEventListener('mousemove', (e) => {
    console.log(e);
    console.log("Cord X: " + e.clientX + "Cord Y: " + e.clientY);
});


