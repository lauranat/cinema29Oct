// JavaScript del proyecto CINEMA -VIP Zone

const box2= document.getElementsByClassName("box2");
const caja= document.getElementsByClassName("caja");

for (let i=0; i< box2.length; i++) {
    //Añades un evento a cada elemento
    box2[i].addEventListener("mouseenter",()=>{
    box2[i].classList.replace("hover_play", "box2background");//primer parametro el que se va a borrar y el segundo el que voy a aplicar
    caja[i].classList.replace("boximg", "boxh");
    });
    
    box2[i].addEventListener("mouseleave",()=>{
        box2[i].classList.replace("box2background", "hover_play");
        caja[i].classList.replace("boxh", "boximg");
    });
}

for (let i=0; i< caja.length; i++) {
    //Añades un evento a cada elemento
    caja[i].addEventListener("mouseenter",()=>{
    box2[i].classList.replace("hover_play", "box2background");
    caja[i].classList.replace("boximg", "boxh");
    });
    
    caja[i].addEventListener("mouseleave",()=>{
        box2[i].classList.replace("box2background", "hover_play");
        caja[i].classList.replace("boxh", "boximg");
    });
}

//--------------------------AQUÍ VA LA PARTE DEL MODAL DE YOUTUBE---------------------

// Toma el modal
var modal = document.getElementById("myModal");
//var modal = document.getElementsByClassName("myModal")[0];

//Toma el botòn que va a abrir el modal
var btn = document.getElementById("myBtn");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[0];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn.onclick = function() {
  modal.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* -----------------------------------imagen 2 modal */

// Toma el modal
var modal2 = document.getElementById("myModal2");
//var modal = document.getElementsByClassName("myModal")[0];

//Toma el botòn que va a abrir el modal
var btn2 = document.getElementById("myBtn2");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[1];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn2.onclick = function() {
  modal2.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/* -----------------------------------imagen 3 modal */

// Toma el modal
var modal3 = document.getElementById("myModal3");
//var modal = document.getElementsByClassName("myModal")[0];
//document.getElementById("myBtn").onclick = function()

//Toma el botòn que va a abrir el modal
var btn3 = document.getElementById("myBtn3");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[2];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn3.onclick = function() {
  modal3.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal3.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

/* -----------------------------------imagen 4 modal */

// Toma el modal
var modal4 = document.getElementById("myModal4");
//var modal = document.getElementsByClassName("myModal")[0];
//document.getElementById("myBtn").onclick = function()
//Toma el botòn que va a abrir el modal
var btn4 = document.getElementById("myBtn4");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[3];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn4.onclick = function() {
  modal4.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal4.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

/* -----------------------------------imagen 5 modal */

// Toma el modal
var modal5 = document.getElementById("myModal5");
//var modal = document.getElementsByClassName("myModal")[0];
//document.getElementById("myBtn").onclick = function()
//Toma el botòn que va a abrir el modal
var btn5 = document.getElementById("myBtn5");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[4];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn5.onclick = function() {
  modal5.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal5.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}


/* -----------------------------------imagen 6 modal */

// Toma el modal
var modal6 = document.getElementById("myModal6");
//var modal = document.getElementsByClassName("myModal")[0];
//document.getElementById("myBtn").onclick = function()
//Toma el botòn que va a abrir el modal
var btn6 = document.getElementById("myBtn6");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[5];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn6.onclick = function() {
  modal6.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal6.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
