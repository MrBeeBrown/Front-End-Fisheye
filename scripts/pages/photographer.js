import { api } from "../api/api.js";
import { photographerInfo } from "../functions/photographerInfos.js";
import { photographerMedia } from "../functions/printMedia.js"
import { showForm } from "../functions/form.js";
import { likes } from "../functions/likes.js";
import { lightbox } from "../functions/lightBox.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

//Récupération des données
const { media, photographers } = await api();

//Affichage des infos du photographe
photographerInfo(photographers, id);

//Affichage du filtre de tri
const main = document.getElementById("main");
const filter = document.createElement('div');
filter.setAttribute("class", "filter");
filter.innerHTML = `
<p>Trier par :</p>
<select>
<option>Popularité</option>
<option>Date</option>
<option>Titre</option>
</select>`
main.appendChild(filter);
const div_content = document.createElement("div");
div_content.setAttribute("class", "content");
main.appendChild(div_content);


//Création du formulaire avec selection du photographe
let user;
photographers.forEach(u => {
  if (u.id == id) {
    user = u;
  }
});
showForm(user.name);


//Affichage des médias
photographerMedia(media, id, user.price);

//Activation des likes pour les images
likes();

//Création de la lightBox
lightbox(media, id);