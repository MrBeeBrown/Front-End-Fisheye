//Icone de fermeture de la lightBox
const close = document.querySelector(".close_lightBox");
close.addEventListener("click", closeLightBox);

//Récupération des images du photographe
export async function getMedias(media, UserId) {
  let UserPhotos = [];
  media.forEach((photos) => {
    if (photos.photographerId == UserId) {
      UserPhotos.push(photos);
    }
  })
  printPhotographerMedias(UserPhotos);
}

//Affichage des médias du photographe
function printPhotographerMedias(data) {
  const { date, id, image, likes, photographerId, price, title, video } = data;

  //Création des sections HTML
  const main = document.getElementById("main");
  const filter = document.createElement('div');
  const sortby = document.createElement('p');
  const select = document.createElement("select");
  const medias_popularity = document.createElement("option");
  const medias_title = document.createElement("option");
  const medias_date = document.createElement("option");
  const div_content = document.createElement("div");
  /* const price_like = document.querySelector(".like_price"); */
  const like_info = document.createElement("div");
  const media_path = "/assets/images/";
  let img;
  let videos;
  let videos_src;
  let div_media;
  let div_header;
  let header_title;
  let header_like;
  let heart;
  heart = document.createElement("i");
  heart.setAttribute("class", "fa-sharp fa-solid fa-heart heart");

  //Ajout de contenu dans les sections HTML
  div_content.setAttribute("class", "content");
  like_info.setAttribute("class", "likes");
  let p = document.createElement("p");
  filter.setAttribute("class", "filter");
  sortby.textContent = "Trier par :"
  medias_popularity.textContent = "Popularité";
  medias_date.textContent = "Date";
  medias_title.textContent = "Titre";
  select.appendChild(medias_popularity);
  select.appendChild(medias_date);
  select.appendChild(medias_title);
  filter.appendChild(sortby);
  filter.appendChild(select);

  let nbrLike = 0;
  for (let i = 0; i < data.length; i++) {
    nbrLike += data[i].likes;
  }
  p.textContent = nbrLike;
  like_info.appendChild(p);
  like_info.appendChild(heart);
  /* price_like.appendChild(like_info); */

  main.appendChild(filter);

  for (let i = 0; i < data.length; i++) {
    if (data[i].image) {
      div_media = document.createElement("div");
      div_media.setAttribute("class", "media");
      div_header = document.createElement("div");
      div_header.setAttribute("class", "media_infos");
      header_title = document.createElement("div");
      header_title.setAttribute("class", "header_title");
      header_title.textContent = data[i].title;
      header_like = document.createElement("div");
      header_like.setAttribute("class", "header_like");
      let p = document.createElement("p");
      p.setAttribute("class", "number_likes");
      p.textContent = data[i].likes;
      header_like.appendChild(p);
      heart = document.createElement("i");
      heart.setAttribute("class", "fa-sharp fa-solid fa-heart");
      heart.setAttribute("id", "heart");
      header_like.appendChild(heart);
      img = document.createElement("img");
      img.setAttribute("src", media_path + data[i].image);
      img.setAttribute("alt", data[i].title);
      img.addEventListener("click", openLightBox);
      div_media.appendChild(img);
      div_header.appendChild(header_title);
      div_header.appendChild(header_like);
      div_media.appendChild(img);
      div_media.appendChild(div_header);
      div_content.appendChild(div_media);
      main.appendChild(div_content);
    } else {
      div_media = document.createElement("div");
      div_media.setAttribute("class", "media");
      div_header = document.createElement("div");
      div_header.setAttribute("class", "media_infos");
      header_title = document.createElement("div");
      header_title.setAttribute("class", "header_title");
      header_title.textContent = data[i].title;
      header_like = document.createElement("div");
      header_like.setAttribute("class", "header_like");
      let p = document.createElement("p");
      p.setAttribute("class", "number_likes");
      p.textContent = data[i].likes;
      heart = document.createElement("i");
      heart.setAttribute("class", "fa-sharp fa-solid fa-heart")
      heart.setAttribute("id", "heart");
      header_like.appendChild(p);
      header_like.appendChild(heart);
      videos = document.createElement("video");
      videos.setAttribute("controls", "");
      videos.addEventListener("click", openLightBox);
      videos_src = document.createElement("source");
      videos_src.setAttribute("src", media_path + data[i].video);
      videos_src.setAttribute("type", "video/mp4");
      videos.appendChild(videos_src);
      div_media.appendChild(videos);
      div_header.appendChild(header_title);
      div_header.appendChild(header_like);
      div_media.appendChild(videos);
      div_media.appendChild(div_header);
      div_content.appendChild(div_media);
      main.appendChild(div_content);
    }
  }
}

//Mise à jour des likes pour les médias
export function likes() {
  const liked = document.querySelectorAll("#heart");
  let mediaArray = [];
  liked.forEach((e) => {
    e.addEventListener("click", () => {
      if (!mediaArray.includes(e.parentElement.parentElement.parentElement.childNodes[0].alt)) {
        let update = parseInt(e.parentElement.textContent) + 1;
        const totalLikes = document.querySelector(".likes");
        totalLikes.childNodes[0].textContent = parseInt(totalLikes.childNodes[0].textContent) + 1;
        e.parentElement.childNodes[0].textContent = update.toString();
        mediaArray.push(e.parentElement.parentElement.parentElement.childNodes[0].alt);
      }
    });
  });
};

//Création de la galerie d'images
export function galerie(medias, userId) {
  const lightBox = document.querySelector(".lightBox_data");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].image) {
      if (medias[i].photographerId == userId) {
        const img = document.createElement("img");
        img.setAttribute("src", "/assets/images/" + medias[i].image);
        img.setAttribute("alt", medias[i].title);
        img.setAttribute("hidden", "");
        img.setAttribute("class", "lightBox_media");
        lightBox.appendChild(img);
      }
    } else {
      if (medias[i].photographerId == userId) {
        const videos = document.createElement("video");
        videos.setAttribute("controls", "");
        videos.setAttribute("hidden", "");
        videos.setAttribute("class", "lightBox_media");
        const videos_src = document.createElement("source");
        videos_src.setAttribute("src", "/assets/images/" + medias[i].video);
        videos_src.setAttribute("type", "video/mp4");
        videos.appendChild(videos_src);
        lightBox.appendChild(videos);
      }
    }
  }
}

function openLightBox() {
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "block";
  /* const media = document.querySelectorAll(".lightBox_media");
  media.forEach((e) => {
    console.log(media);
  }); */
}

function closeLightBox() {
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "none";
}