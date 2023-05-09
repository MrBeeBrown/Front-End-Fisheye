import { api } from "../api/api.js";
import { showPhotographerInfo } from "../functions/showPhotographerInfo.js";
import { printPhotographerMedia } from "../functions/printPhotographerMedia.js"
import { createForm } from "../functions/createForm.js";
import { createLightbox } from "../functions/createLightBox.js";
import { filteredMedia } from "../functions/filteredMedia.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

//Récupération des données
const { media, photographers } = await api();

//Sélection du photographe
const photographer = photographers.find(p => p.id == id);

//Sélection des médias du photographe
const medias = media.filter(m => m.photographerId == id);

//Affichage des infos du photographe
showPhotographerInfo(photographer);

//Création du formulaire avec selection du photographe
createForm(photographer);

//Création de la lightBox
createLightbox();

//Affichage en fonction de la sélection du filtre de tri
filteredMedia(medias, photographer);

//Affichage des médias du photographe
printPhotographerMedia(medias, photographer);