import { Image } from "../Models/Image.js";
import { Video } from "../Models/Video.js";

export function mediaFactory(media) {
  if (media.image) {
    let images = new Image(media);
    function printImage() {
      //Affichage sur la page du photographe
      const div_content = document.querySelector(".content");
      const photographeContent = document.createElement("div");
      photographeContent.setAttribute("class", "media");
      photographeContent.innerHTML = `
      <img src="/assets/images/${images.image}" alt="${images.title}" class="lightbox_media">
      <div class="media_infos">
        <div class="header_title">${images.title}</div>
        <div class="header_like">
          <p class="${images.id}">${images.likes}</p>
          <i class="fa-sharp fa-solid fa-heart" id="${images.id}" aria-label="likes" title="likes"></i>
        </div>
      </div>`;
      div_content.appendChild(photographeContent);

      //Affichage dans la lightbox
      const lightbox = document.querySelector(".lightBox_data");
      const lightboxContent = document.createElement("div");
      lightboxContent.setAttribute("class", "media_filter");
      lightboxContent.setAttribute("hidden", "");
      lightboxContent.innerHTML = `
      <img src="/assets/images/${images.image}" alt="${images.title}" aria-label="image closeup view">
      <div class="media_infos_lbox">
        <div class="header_title_lbox">${images.title}</div>
      </div>`;
      lightbox.appendChild(lightboxContent);

      //Création des eventListener pour les likes
      const liked = document.getElementById(`${images.id}`);
      liked.addEventListener("click", () => {
        if (images.liked == false) {
          images.likes = parseInt(images.likes) + 1;
          const updatedLike = document.getElementsByClassName(`${images.id}`);
          updatedLike[0].innerText = images.likes;
          const totalLikes = document.querySelector(".total_likes");
          totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
          liked.classList.add("red_heart");
          images.liked = true;
        } else {
          images.likes = parseInt(images.likes) - 1;
          const updatedLike = document.getElementsByClassName(`${images.id}`);
          updatedLike[0].innerText = images.likes;
          const totalLikes = document.querySelector(".total_likes");
          totalLikes.textContent = parseInt(totalLikes.textContent) - 1;
          liked.classList.remove("red_heart");
          images.liked = false;
        }
      })
    }
    return printImage();
  } else {
    let videos = new Video(media);
    function printVideo() {
      //Affichage sur la page du photographe
      const div_content = document.querySelector(".content");
      const photographeContent = document.createElement("div");
      photographeContent.setAttribute("class", "media");
      photographeContent.innerHTML = `
      <video controls="" class="lightbox_media">
        <source src="/assets/images/${videos.video}" type="video/mp4">
      </video>
      <div class="media_infos">
        <div class="header_title">${videos.title}</div>
        <div class="header_like">
          <p class="${videos.id}">${videos.likes}</p>
          <i class="fa-sharp fa-solid fa-heart" id="${videos.id}" aria-label="likes" title="likes"></i>
        </div>
      </div>`;
      div_content.appendChild(photographeContent);

      //Affichage dans la lightbox
      const lightbox = document.querySelector(".lightBox_data");
      const lightboxContent = document.createElement("div");
      lightboxContent.setAttribute("class", "media_filter");
      lightboxContent.setAttribute("hidden", "");
      lightboxContent.innerHTML = `
      <video controls="">
        <source src="/assets/images/${videos.video}" type="video/mp4"  aria-label="video closeup view">
      </video>
      <div class="media_infos_lbox">
        <div class="header_title_lbox">${videos.title}</div>
      </div>`;
      lightbox.appendChild(lightboxContent);

      //Création des eventListener pour les likes
      const liked = document.getElementById(`${videos.id}`);
      liked.addEventListener("click", () => {
        if (videos.liked == false) {
          videos.likes = parseInt(videos.likes) + 1;
          const updatedLike = document.getElementsByClassName(`${videos.id}`);
          updatedLike[0].innerText = videos.likes;
          const totalLikes = document.querySelector(".total_likes");
          totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
          liked.classList.add("red_heart");
          videos.liked = true;
        } else {
          videos.likes = parseInt(videos.likes) - 1;
          const updatedLike = document.getElementsByClassName(`${videos.id}`);
          updatedLike[0].innerText = videos.likes;
          const totalLikes = document.querySelector(".total_likes");
          totalLikes.textContent = parseInt(totalLikes.textContent) - 1;
          liked.classList.remove("red_heart");
          videos.liked = false;
        }
      })
    }
    return printVideo();
  }
}