/* 

DOM

Organiza los elementos del documento en "nodos" en un arbol jerárquico.

Nodo -> Todo elemento individual de nuestro deocumento.

TIpos de nodo

1.Nodo de documento
2.Nodo de elemento
3.Nodo de atributo
4.Nodo de texto
5.Nodo de comentarios

*/

/* 
Nodo de Documento

Este nodo reprersenta el docmento completo de html. Inscluye el contenido desde la "raiz" -root, hasta los elementos hijos.

Para acceder usamos document

->document

*/
/* console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL); */

/* 

NOdo Elemento

PAra  seleccionar nods de elementos, usamos

getElementsByTagName
("Etiqueta")

Se escribe después del nodo

*/

/* let title=document.getElementsByTagName ("h1");

console.log(title);
 */
/* 

Nodos de Atributos

Sonlos nodos que accedemos a través de su clase o de su ID

getElementById("nombreId")
getElementByClassName ("nombreClase")

querySelector ("nombreSelector") El primer elemento que encuentre con ese selector.

querySelectorAll("nombreSelector") seleccionar todos los elementos con el mismo selector.

*/

/* 
let title = document.getElementById("title");

console.log(title.inertText)
console.log(title.id);
console.log(title);

let=texts = document.getElementsByClassName ("paragraph")

console.log(texts)
console.log(texts[0].textContent);
console.log(texts[1].textContent); */


/* let titulo= document.querySelector ("h1"); */ //Tag
 let titulo= document.querySelector ("#title");  //Id
/* let titulo= document.querySelector (".title");  *///Class
console.log(titulo);

/* let parrafos= document.querySelectorAll("p") */ //Tag
/* let parrafos= document.querySelectorAll("#paragraph") */ // Id
let parrafos= document.querySelectorAll(".paragraph") //class
console.log(parrafos)

/* 

Nodo de Texto

Son los elementos contenidos en las etquetas de HTML.

.inerText
.textConent

*/

let subtitle= document.querySelector(".subtitle");
console.log(subtitle.inerText)
console.log(sutitle.textContent)

 /* 
 
 Nodo de Comentarios
 
 Tienen un valor de 8 dentro del Dom

 */

 let comentario = document.COMMENT_NODE;

 console.log(comentario)