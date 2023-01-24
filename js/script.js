function cambiarImagenPerfil(){
    let img = document.getElementById("mugshot");
    if (img.src.match("imagenes/frente.jpg")) {
        img.src = "imagenes/medio-perfil.jpg";
    }
    else if (img.src.match("imagenes/medio-perfil.jpg")){
        img.src = "imagenes/perfil.jpg";

    }
    else {
        img.src = "imagenes/frente.jpg";
    }
}

//ANIMACION RESEÑAS
let i = 0;
let imagenes = [];
const espera = 3000;

//Lista de imagenes
imagenes[0] = "imagenes/reseña1.jpg"
imagenes[1] = "imagenes/reseña2.jpg"
imagenes[2] = "imagenes/reseña3.jpg"
	
//Funcion para cambiar imagenes
function cambiarReseña(){
  document.slide.src = imagenes[i];
	if(i < imagenes.length - 1){
	  i++;
} 
  else {
	  i = 0;
}
setTimeout("cambiarReseña()", espera);
}

window.onload = cambiarReseña;

//ZOOM WEBS
document.querySelectorAll(".image-container img").forEach(image =>{
  image.onclick = () =>{
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  }
})

document.querySelector(".popup-image span").onclick = () =>{
  document.querySelector(".popup-image").style.display = "none";
}