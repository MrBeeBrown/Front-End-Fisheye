import { openLightBox } from "./createLightBox.js";

export const printPhotographerMedia = (medias) => {

  //On vide le contenu de la page avant mise à jour des médias
  const div_content = document.querySelector(".content");
  div_content.innerHTML = ``;

  //On vide le contenu de la lightbox avant mise à jour des médias
  const lighox_content = document.querySelector(".lightBox_data");
  lighox_content.innerHTML = ``;

  //Affichage des médias sur page + lightbox + activation likes
  medias.forEach(e => {
    e.print();
    e.like();
  });

  //Ajout eventListener sur les images pour ouvrir la lightBox
  const showLightBox = document.querySelectorAll(".lightbox_link");
  showLightBox.forEach((m) => {
    m.addEventListener("click", () => {
      showMedia(m.getAttribute("data-title"));
    });
  })

  //Affichage du média sélectionné pour lightBox
  const showMedia = (media) => {
    const allMedia = document.querySelectorAll(".media_filter");
    allMedia.forEach((el) => {
      if (el.firstElementChild.getAttribute("alt") == media) {
        el.removeAttribute("hidden");
        openLightBox();
      }
    })
  }
}