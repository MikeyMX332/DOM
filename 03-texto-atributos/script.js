/* 

Seleccionamos los eleentos por su id

*/

const titulo = document.getElementById("title");

const lista = document.getElementById("list");
/* 

Los moestramos por consola

*/

console.log("titulo")
console.log("lista")

/* 
InnerText

Devuelve un "string" del conenido visible dentro de un elemento

elemento.innerText

-Excluye los elementos ocultos.
-Excluye los espacios en el documento.
-Excluye las etiquetas html

*/

titulo.innerText

console.log(">>> Con innerText");
console.log(titulo.innerText);
console.log(lista.innerText);

/* 

textContent

Devuelve un string del contenido visible dentro de un elemento.

-Incluye los espacios.
-Incluye el elemento oculto.
-Excluye las etiquetas html.

*/

console.log(">>> Con textContent");
console.log(titulo.textContent);
console.log(lista.textContent);

/* 

innerHTML

Devuelve un "string" con la estructura intwerna  de el elemento seleccionado.

    elemento.innerHTML

*/

console.log(">>> Con innerHTML");
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 

Modificar el contenido con innerText

Asignamos el valor al elemento seleccionado.

  elemento,innerText= "string"

*/

titulo.innerText=":) Personajes amados"
lista.InnerText= "no hay personajes :("

/* 

Modificar el contenido con textContent

Asignamos el valor al elemento seleccionado.

  elemento,textContent= "string"

*/

titulo.textContent ="Mis personajes"
lista.textContent= "Cargando..."

/* 

Modificar el contenido con innerHTML

Asignamos el valor al elemento seleccionado incluyendo las etiquetas html.

  elemento.="<tag>....</tag>"

*/

titulo.innerHTML= "Amigos <span>personajes</span>!"
lista.innerHTML="<li>Lara Croft</li> <li>Doom Slayer</li> <li>Goblin Slayer</li> <li>Kratos</li>"