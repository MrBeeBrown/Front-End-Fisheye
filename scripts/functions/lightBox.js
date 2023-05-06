import { afficherImage } from "../factories/imagesFactory.js";
import { afficherVideo } from "../factories/videoFactory.js";

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
      <i class="fa-solid fa-chevron-left fa-2xl"></i>
      <div class="lightBox_data"></div>
      <i class="fa-solid fa-chevron-right fa-2xl"></i>
      <i class="fa-solid fa-square-xmark fa-2xl close_lightBox" title="Close"></i>
    </div>
  </div>`
  body.appendChild(box);

  const lightBox = document.querySelector(".lightBox_data");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].image) {
      if (medias[i].photographerId == userId) {
        let images = afficherImage(medias[i]);
        images.printLightBox();
      }
    } else {
      if (medias[i].photographerId == userId) {
        let videos = afficherVideo(medias[i]);
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

  //Ajout eventListener sur les images pour ouvrir la lightBox
  const showLightBox = document.querySelectorAll(".lightbox_media");
  showLightBox.forEach((media) => {
    media.addEventListener("click", () => {
      showMedia(media.getAttribute("alt"));
    });
  })

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
        if (i == (media.length - 1)) {
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

  //Affichage du média sélectionné
  function showMedia(media) {
    const allMedia = document.querySelectorAll(".media_filter");
    allMedia.forEach((el) => {
      if (el.firstElementChild.getAttribute("alt") == media) {
        el.removeAttribute("hidden");
        openLightBox();
      }
    })
  }

  function closeLightBox() {
    const lightBox = document.querySelector(".lightBox_container");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", "true");
    hideMedia();
  }

  function openLightBox() {
    const lightBox = document.querySelector(".lightBox_container");
    lightBox.style.display = "block";
    lightBox.setAttribute("aria-hidden", "false");
  }

  function hideMedia() {
    const hideAllMedia = document.querySelectorAll(".media_filter");
    hideAllMedia.forEach((e) => {
      e.setAttribute("hidden", "");
    })
  }
}

