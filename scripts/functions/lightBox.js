import { Image } from "../Models/images.js";
import { Video } from "../Models/video.js";

//Création de la galerie d'images
export function lightbox(medias, userId) {
  const body = document.querySelector("body");
  const box = document.createElement("div");
  box.setAttribute("class", "lightBox_container");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-labelledby", "LighBox");
  box.setAttribute("aria-describedby", "Galerie d'images");
  box.setAttribute("aria-hidden", "true");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("tabindex", "-1");
  box.innerHTML = `
  <div class="lightBox_background" role="document">
    <div class="lightBox">
      <i class="fa-solid fa-chevron-left" title="previous image"></i>
      <div class="lightBox_data"></div>
      <i class="fa-solid fa-chevron-right" title="next image"></i>
      <i class="fa-solid fa-square-xmark close_lightBox" title="Close dialog"></i>
    </div>
  </div>`
  body.appendChild(box);

  for (let i = 0; i < medias.length; i++) {
    if (medias[i].image) {
      if (medias[i].photographerId == userId) {
        let images = new Image(medias[i]);
        images.printLightBox();
      }
    } else {
      if (medias[i].photographerId == userId) {
        let videos = new Video(medias[i]);
        videos.printLightBox();
      }
    }
  }

  //Icône de fermeture de la lightBox
  const close = document.querySelector(".close_lightBox");
  close.addEventListener("click", closeLightBox);

  //Detection de la touche Escape
  const escapeKey = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightBox();
    }
  });

  //Ajout eventListener pour media suivant
  const next = document.querySelector(".fa-chevron-right");
  next.addEventListener("click", nextImage);

  //Detection de la touche fleche droite
  const nextKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextImage();
    }
  });

  //Ajout eventListener pour media précédent
  const prev = document.querySelector(".fa-chevron-left");
  prev.addEventListener("click", prevImage);

  //Detection de la touche fleche gauche
  const prevKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    }
  });

  //Afficher média suivante
  function nextImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i++;
        if (i == media.length) {
          i = 0
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  //Afficher média précédente
  function prevImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i--;
        if (i < 0) {
          i = media.length - 1;
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  function closeLightBox() {
    const lightBox = document.querySelector(".lightBox_container");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", "true");
    hideMedia();
  }


  function hideMedia() {
    const hideAllMedia = document.querySelectorAll(".media_filter");
    hideAllMedia.forEach((e) => {
      e.setAttribute("hidden", "");
    })
  }
}

export function openLightBox() {
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "block";
  lightBox.setAttribute("aria-hidden", "false");
}
