/* Referencia*/

const emojiCursor=document.querySelector(".emoji-cursor");

/* Detectamos el evento movimiento del mouse*/

document.addEventListener("mousemove", (e)=>{
/*   console.log(e.clientX)
  console.log(e.clientY) */

let mouseX=e.clientX;
let mouseY=e.clientY;

/* Aplicar las coordenaas al elemento emojiCursor */
emojiCursor.style.left=`${mouseX}px`;
emojiCursor.style.top=`${mouseY}px`;
} );

/* console.log(emojiCursor.style); */

/* Cambiar al emoji al presionar la tecla */

document.addEventListener("keydown", (e)=>{
  /* Utilizamos Swtich para asignar un nuevo emoji */
  switch(e.key) {
    case "1":
      emojiCursor.textContent="👾";
      case "2"
      emojiCursor.textContent="🤬"

  }
})
