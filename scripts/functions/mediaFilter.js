import { printPhotographerMedia } from "./printMedia.js";

export function filterMedia(medias, photographer) {

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
    printPhotographerMedia(result);
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
  printPhotographerMedia(result);

  //Affichage de l'encart total de likes et prix par jour
  const main = document.querySelector("main");
  const encart = document.createElement("div");
  encart.setAttribute("class", "like_price");
  let totalLikes = 0;
  medias.map(e => totalLikes = totalLikes + parseInt(e.likes))
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