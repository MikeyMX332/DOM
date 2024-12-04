/* 

Accedemos al primer elemento de la lista.

*/

const Botanas= document.getElementsByTagName(`li`);

console.log(Botanas)

/* 

Propiedade classlist

Accedemos a la lista de clases que tiene un elemento.

elemento.classlist

-Devuelve un DOM Token List (Listado de clases en el DOM) en tipo array.

*/

console.log (Botanas [0].classList );
console.log (Botanas [0].classList[0]); //Acceso a clases a través de su  índice

/* 

Para Agregar clases usamos el método add()

elemento.classList.add(clase)

-Nombre de la clase pasa como string entre " " o ``

*/

Botanas[1].classList.add("bg-Lightblue")


/* 

Verificar si existe yba clase en un elemento con el método containss()

elemento.classList.contains(clases)

-devuelve true si existe la clase
-Devuelve false si no existe la clase

*/

console.log(Botanas[2].classList.contains("botana"))
console.log(Botanas[2].classList.contains("bg-lightblue"))

/* 

Para elminitar una clase usamos el método remove()

elmento.classList.remove(clase)

-La clase pasa como un string entre " " o ``

*/

Botanas[3].classList.remove("bg-orangered")
Botanas[3].classList.remove("Botanas")
