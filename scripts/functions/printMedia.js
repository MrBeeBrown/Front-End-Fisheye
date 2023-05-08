import { openLightBox } from "./lightBox.js";
import { Image } from "../Models/Image.js";
import { Video } from "../Models/Video.js";

export function printPhotographerMedia(medias, photographer) {

  let result;

  //Ajout d'un event listener pour la gestion du tri
  const selection = document.querySelector("select");
  selection.addEventListener("change", () => {
    if (selection.value == "Popularité") {
      result = medias.sort(filtrePopulaire);
    } else if (selection.value == "Date") {
      result = medias.sort(filtreDate);
    } else {
      result = medias.sort(filtreTitre);
    };
    printMedia(result);
  })

  //Tri par popularité
  function filtrePopulaire(a, b) {
    return parseInt(b.likes) - parseInt(a.likes);
  }

  //Tri par date
  function filtreDate(a, b) {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  }

  //Tri par titre
  function filtreTitre(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 0;
    }
  }

  //Affichage par défaut -> Popularité
  result = medias.sort(filtrePopulaire);
  printMedia(result);

  //Affichage de l'encart total de likes et prix par jour
  const main = document.querySelector("main");
  const encart = document.createElement("div");
  encart.setAttribute("class", "like_price");
  let totalLikes = 0;
  medias.forEach((e) => {
    totalLikes = totalLikes + parseInt(e.likes);
  })
  encart.innerHTML = `
  <div class="likes">
    <p class="total_likes">${totalLikes}</p>
    <i class="fa-sharp fa-solid fa-heart"></i>
  </div>
  <div class="user__price">
  <p>${photographer.price}€ / jour</p>
  </div>`
  main.appendChild(encart);
}

//Affichage des média
function printMedia(data) {
  //On vide le contenu de la page avant mise à jour des médias
  const div_content = document.querySelector(".content");
  div_content.innerHTML = ``;

  //On vide le contenu de la lightbox avant mise à jour des médias
  const lighox_content = document.querySelector(".lightBox_data");
  lighox_content.innerHTML = ``;

  //Affichage des médias
  data.forEach(m => {
    if (m.image) {
      let images = new Image(m);
      images.print();
      images.like();
      images.lightbox();
    } else {
      let videos = new Video(m);
      videos.print();
      videos.like();
      videos.lightbox();
    }
  })

  //Ajout eventListener sur les images pour ouvrir la lightBox
  const showLightBox = document.querySelectorAll(".lightbox_media");
  showLightBox.forEach((media) => {
    media.addEventListener("click", () => {
      showMedia(media.getAttribute("alt"));
    });
  })

  //Affichage du média sélectionné pour lightBox
  function showMedia(media) {
    const allMedia = document.querySelectorAll(".media_filter");
    allMedia.forEach((el) => {
      if (el.firstElementChild.getAttribute("alt") == media) {
        el.removeAttribute("hidden");
        openLightBox();
      }
    })
  }
}