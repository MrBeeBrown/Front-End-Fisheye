import { printPhotographerMedia } from "./printPhotographerMedia.js";

export function filterMedia(medias) {

  let result;

  //Ajout d'un event listener pour la gestion du tri
  const selection = document.querySelector("select");
  selection.addEventListener("change", () => {
    if (selection.value == "Popularité") {
      //Tri par popularité
      result = medias.sort((a, b) => { return parseInt(b.likes) - parseInt(a.likes) });
    } else if (selection.value == "Date") {
      //Tri par date
      result = medias.sort((a, b) => { return new Date(b.date).valueOf() - new Date(a.date).valueOf() });
      result.map(e => console.log(e.date));
    } else {
      //Tri par titre
      result = medias.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
    };
    printPhotographerMedia(result);
  })

  //Affichage par défaut -> Popularité
  result = medias.sort((a, b) => { return parseInt(b.likes) - parseInt(a.likes) });
  printPhotographerMedia(result);
}