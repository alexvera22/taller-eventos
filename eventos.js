document.addEventListener("DOMContentLoaded", function(){

const saludodiv= document.querySelector(".saludo");

saludodiv.addEventListener("click", function(){
    alert("Hola! Soy el div");
});
});

/*Realmente no tuve error, pero aconsejaría tener los manejadores de evento separados */