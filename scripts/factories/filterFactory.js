import { afficherImage } from "./imagesFactory.js";
import { afficherVideo } from "./videoFactory.js";

export function photographerMedia(medias, id, price) {

  //Récupération des images du photographe en fonction de l'id
  let userPhotos = [];
  medias.forEach((photos) => {
    if (photos.photographerId == id) {
      userPhotos.push(photos);
    }
  })

  //Ajout d'un event listener pour la gestion du tri
  const selection = document.querySelector("select");
  selection.addEventListener("change", () => {
    if (selection.value == "Popularité") {
      let populaire = userPhotos.sort(filtrePopulaire);
      printMedia(populaire);
    } else if (selection.value == "Date") {
      let date = userPhotos.sort(filtreDate);
      printMedia(date);
    } else {
      let titre = userPhotos.sort(filtreTitre);
      printMedia(titre);
    };
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

  //Affichage par défaut par Popularité
  let defaultPrint = userPhotos.sort(filtrePopulaire);
  printMedia(defaultPrint);

  //Affichage de l'encart total likes et prix
  const main = document.querySelector("main");
  const encart = document.createElement("div");
  encart.setAttribute("class", "like_price");
  let totalLikes = 0;
  userPhotos.forEach((e) => {
    totalLikes = totalLikes + parseInt(e.likes);
  })
  encart.innerHTML = `
  <div class="likes">
    <p class="total_likes">${totalLikes}</p>
    <i class="fa-sharp fa-solid fa-heart"></i>
  </div>
  <div class="user__price">
  <p>${price}€ / jour</p>
  </div>`
  main.appendChild(encart);
}

//Affichage des média
function printMedia(data) {
  const div_content = document.querySelector(".content");
  div_content.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    if (data[i].image) {
      let image = new afficherImage(data[i]);
      image.printImage();
    } else {
      let video = new afficherVideo(data[i]);
      video.printVideo();
    }
  }
}


/* let nbrLike = 0;
for (let i = 0; i < data.length; i++) {
nbrLike += data[i].likes;
} */