/*

Evento

Un evento es una cción o suceso que ocurre en el navegador o en un elemento DOM .Puede ser iniciado por el usuario o por el sisetma y pueden ser manejado mediante javascript.

+Manejar Eventos

Significa escribir código que "reaccione" de cierta manera cuando algo específico suceda.. PAra manejar eventos es importante conocer a algunos conceptos claves.

1.Target (Blanco)

El elemento Target es el elemento del DOM en el que ocurrio el evento. Este se enceuntra dentro del objeto evento (event) y se accede mediante la propiedad event.target

2. Event Listener (Escuchar)

El event listener es el oido en espera o que esta atento a que ocurra un evento en un elemento especifico, Usamos el método addEventListener para escuchar eventos.

3.Trigger (DIsparador)

Es simplemente eldesencadenante que provoca que un eento ocurra. Es la acción que realiza el usuario o el sistema para activar un evento.

+Hacer click
+Mover elr aton
+Escribir en un input.

4.Event Handler (manejador)

El evento handlers es la funcion que se ejecuta cada vez que ourre el evento. Con código JS le decimos que hace el event handler.

+Mostrar mensaje
+Cambia de coloor
+Lanzar una alerta
+.....

Sintaxis

target.eventListener(trigger , eventHandler )

-target: es el Elemento donde ocurre el evento
-listener: Es quien escucha y detecta el evento
-trigger; la accion que ocrre en el evento.
-hanler. La funcuion que se ejecuta al ocurrir el evento.


*/


/*

Seleccionar el elemento

*/

const button =document.getElementById("button");

/* 

Manejar el evento,

*/

button.addEventListener("click" , mostrarMensaje );

/* 

Definimós la función

*/

function mostrarMensaje () {
  console.log("¡Haz hecho click!")
}



