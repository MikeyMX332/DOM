/* 

Obtenemos un elmento de referencia.

-Este es el odo de HTML donde vanos a crear un nuevo elemento
*/

const peliculas= document.getElementById ("peliculas");

console.log(peliculas)

/* 

Crear un nuevo elemento usamos createElement

document.createElement(tipoElemento)

-El tipo de elemento pasa string "" o ``
-Se debe guardar en una variable o constante

*/

const newMovie=document.createElement("li")

/* 

Agrergamos elemetos al DOM desde la referencia usamos el método aprend()

elemementoReferencia.append(nuevoElemento)

-El nuevo elemento no pasa como string

*/

peliculas.append(newMovie)

console.log(peliculas)

/* 
Agregamos texto al nuevo elemnto con InnerText

elemento.innertext= valor

-Valor pasa como string " " o ``


*/

newMovie.innerText="Tierra de osos"


/* 

Agregamos las clases al nuevo elemento con elemento add()

elemento.classlist.add(clase)

-La clase pasa como string "" o ``
-El método acepta más de n parametro separandolos con comas ;

*/

newMovie.classList.add ("list-item", "bg-two")

/* 

Agregamos un 5 elemento. 

*/

const nuevaPelicula=document.createElement("li")

peliculas.append(nuevaPelicula)

console.log(peliculas)

nuevaPelicula.innerText="Tiburon"

nuevaPelicula.classList.add("list-item" , "bg-one")