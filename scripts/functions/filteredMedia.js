import { printPhotographerMedia } from "./printPhotographerMedia.js";

export function filterMedia(medias) {

  let result;

  //Ajout d'un event listener pour le clic du bouton de tri
  const filterList = document.querySelector(".bloc-links");
  const btnFilter = document.querySelector(".button-top");
  btnFilter.addEventListener("click", () => {
    btnFilter.style.display = "none";
    filterList.removeAttribute("style");
    filterList.classList.add("visible");
  })

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      btnFilter.style.display = "flex";
      filterList.style.display = "none";
    }
  })

  document.addEventListener("keydown", (e) => {
    if ((e.key === "Escape" || e.key === "Esc") && filterList.classList.contains("visible")) {
      btnFilter.style.display = "flex";
      filterList.style.display = "none";
    }
  })


  //Ajout d'un event listener pour la liste de tri
  const filterValue = document.querySelectorAll(".media-filter");
  const btnContent = document.querySelector(".active-filter");
  filterValue.forEach(value => value.addEventListener("click", () => {
    btnContent.innerHTML = ``;
    btnContent.innerHTML = value.innerHTML;
    filterList.style.display = "none";
    filterList.classList.remove("visible");
    btnFilter.style.display = "flex";
    if (value.innerHTML == "Popularité") {
      //Tri par popularité
      result = medias.sort((a, b) => { return parseInt(b.likes) - parseInt(a.likes) });
    } else if (value.innerHTML == "Date") {
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
  }))

  //Affichage par défaut -> Popularité
  result = medias.sort((a, b) => { return parseInt(b.likes) - parseInt(a.likes) });
  printPhotographerMedia(result);
}