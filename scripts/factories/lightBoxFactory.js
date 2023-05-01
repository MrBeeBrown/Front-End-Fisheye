import { afficherImage } from "./imagesFactory.js";
import { afficherVideo } from "./videoFactory.js";

//Création de la galerie d'images
export function lightbox(medias, userId) {
  const main = document.querySelector("main");
  const box = document.createElement("div");
  box.setAttribute("class", "lightBox_container");
  box.innerHTML = `
  <div class="lightBox_background">
  <div class="lightBox">
  <i class="fa-solid fa-chevron-left fa-2xl"></i>
  <div class="lightBox_data"></div>
      <i class="fa-solid fa-chevron-right fa-2xl"></i>
      <i class="fa-solid fa-square-xmark fa-2xl close_lightBox"></i>
    </div>
    </div>`
  main.appendChild(box);

  const lightBox = document.querySelector(".lightBox_data");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].image) {
      if (medias[i].photographerId == userId) {
        let image = new afficherImage(medias[i]);
        image.printLightBox();
      }
    } else {
      if (medias[i].photographerId == userId) {
        let video = new afficherVideo(medias[i]);
        video.printLightBox();
      }
    }
  }
}

/* //Icone de fermeture de la lightBox
const close = document.querySelector(".close_lightBox");
close.addEventListener("click", closeLightBox); */

function openLightBox() {
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "block";
  /* const media = document.querySelectorAll(".lightBox_media");
  media.forEach((e) => {
    console.log(media);
  }); */
}

function closeLightBox() {
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "none";
}