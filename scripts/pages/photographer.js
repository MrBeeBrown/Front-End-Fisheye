import { api } from "../api/api.js";
import { photographerInfo } from "../factories/photographerFactory.js";
import { photographerMedia } from "../factories/mediaFactory.js"
import { getMedias } from "../factories/medias.js";
import { likes } from "../factories/medias.js";
import { galerie } from "../factories/medias.js";

//Récupération de l'id du photographe via l'URL
const id = new URL(location.href).searchParams.get("id");

//Récupération des données
const { media, photographers } = await api();


photographerInfo(photographers, id);
photographerMedia(media, id);
/* getMedias(media, id); */

/* likes();
galerie(media, id); */