import { printImage } from "../factories/imagesFactory.js";
import { printVideo } from "../factories/videoFactory.js";

export function photographerMedia(medias, id) {

  //Récupération des images du photographe

  let UserPhotos = [];
  medias.forEach((photos) => {
    if (photos.photographerId == id) {
      UserPhotos.push(photos);
    }
  })
  printMedias(UserPhotos);

  function printMedias(data) {
    const { date, id, image, likes, photographerId, price, title, video } = data;

    //Création des sections HTML
    const main = document.getElementById("main");
    const filter = document.createElement('div');
    filter.setAttribute("class", "filter");
    filter.innerHTML = `
    <div class="filter">
	  <p>Trier par :</p>
	  <select>
		<option>Popularité</option>
		<option>Date</option>
		<option>Titre</option>
	  </select>
    </div>
    `
    const div_content = document.createElement("div");
    div_content.setAttribute("class", "content");
    main.appendChild(div_content);
    /* let nbrLike = 0;
    for (let i = 0; i < data.length; i++) {
      nbrLike += data[i].likes;
    } */

    for (let i = 0; i < data.length; i++) {
      if (data[i].image) {
        printImage(data[i]);
      } else {
        printVideo(data[i]);
      }
    }
  }
}