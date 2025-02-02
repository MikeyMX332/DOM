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

console.log("Valores en linea. Color: " +  titulo.style.color + " -Fondo"+titulo.style.backgroundColor );

/* 

Metodo de Propiedad

Asignar el valor de la propiedad de estilo en el elemento seleccionado.

elemento.style.nombrePropiedad = "valor"

-Forma más directa y legible de asignar propiedades.
-Sólo admite asignar propiedades con formato camelCase
*/


titulo.style.color= "green";
titulo.style.backgroundColor="red";

console.log("Valores asignados con JS. Color: " +  titulo.style.color + " -Fondo"+titulo.style.backgroundColor );

/* 

Método setPropety ()

Asignamos una propiedad de estilo al elemento seleccionado.

elemento.style.setPropety(nombrePropiedad, valor, impotant);

-Más flexible y poderoso.
-Las Propiedades se escriben en formato kebab-case
-Parametro "Important" es opcional.

*/


titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "orange", "important");

console.log("Valores asignados con setProperty. Color: " +  titulo.style.color + " -Fondo"+titulo.style.backgroundColor );

/* 

Elminar valores de propiedades.

Usamos el método de propiedad y le definimos una cadena de texto vacia.

elemnto.style.nomrePropiedad=""

Esto elimina los valores previamente definidos en JS y en los estilos en linea

*/

titulo.style.color="";
titulo.style.backgroundColor=""; 

/* 

Metodo removeProperty ()

Elimina la propiedad de estilo.

  elemento.style.removeProperty(nombrePropiedad)

  -Las propiedades se pasan en formato kebab-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color")