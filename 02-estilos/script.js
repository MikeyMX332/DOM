/* 

Seleccionar el elemento de h1 a través de su clase

*/

const titulo = document.querySelector(".titulo");

/* 

Mostramos el nodo seleccionado

-nodo Expandido-> <h1>...</h1>
-nodo abstacto -> h1.title

Algunos navegadores oprimiezan la representación de los nodos en la consola. (chrome)

*/

console.log(titulo);

/* 

Objeto Style

Accedemos a el usuando la notacion de punto (.)

elemento.style

Resultado CSS Style Declaration. Es una lista que representa todas las propiedades de estilos de un elemento.

Unicamente muestra el valor de los etilos en línea declarado directamente en el elemento html.

*/

console.log(titulo.style)

/* 

Propiedades de Estilo

Accedemos a las propiedades usando la notacion de punto (.)

elemento.style.nombrePropiedad

A diferencia de CSS, las propiedades de estilo en JS las escribimos usando el formto camelCase

CCS-> bakcground-color (kebab-case)
JS-> backgroundColor (camelCase)
*/

console.log("Valores en linea. Color: " +  titulo.style.color + " -Fondo"+titulo.style.backgroundColor )