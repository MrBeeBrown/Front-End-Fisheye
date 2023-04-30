//Icone de fermeture de la lightBox
const close = document.querySelector(".close_lightBox");
close.addEventListener("click", closeLightBox);


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