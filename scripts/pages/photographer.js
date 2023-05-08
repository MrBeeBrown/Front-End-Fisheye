import { api } from "../api/api.js";
import { showPhotographerInfo } from "../functions/showPhotographerInfo.js";
import { printPhotographerMedia } from "../functions/printMedia.js"
import { createForm } from "../functions/form.js";
import { likes } from "../functions/likes.js";
import { lightbox } from "../functions/lightBox.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

//Récupération des données
const { media, photographers } = await api();

//Sélection du photographe
const photographer = photographers.find(p => p.id == id);

//Sélection des médias du photographe
const medias = media.filter(m => m.photographerId == id);

//Affichage des infos du photographe
showPhotographerInfo(photographer);

//Création du formulaire avec selection du photographe
createForm(photographer);

//Création de la lightBox
lightbox();

//Affichage des médias du photographe
printPhotographerMedia(medias, photographer);

//Activation des likes pour les images
/* like() {
  const liked = document.querySelectorAll("#heart");
  
  
  
  liked.forEach((e) => {
    e.addEventListener("click", () => {
      if (this.liked == false) {
        this.liked = true;
        this.likes = this.likes + 1;
        const totalLikes = document.querySelector(".total_likes");
        totalLikes.textContent = parseInt(totalLikes.textContent) + 1;


        let update = parseInt(e.parentElement.childNodes[1].textContent) + 1;
        e.parentElement.childNodes[1].textContent = update.toString();
        mediaArray.push(e.parentElement.parentElement.childNodes[1].textContent);
      }
    });
  });
}; */