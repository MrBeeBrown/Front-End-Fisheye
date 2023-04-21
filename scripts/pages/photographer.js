import { api } from "../api/api.js";
import { getPhotographer } from "../factories/medias.js";
import { getMedias } from "../factories/medias.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

const { media, photographers } = await api();

getPhotographer(photographers, id);
getMedias(media, id);