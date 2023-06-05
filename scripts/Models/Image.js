import { Media } from "./Media.js"

export class Image extends Media {
  constructor(data) {
    super(data)
    this.image = data.image
  }

  print() {
    //Affichage sur la page du photographe
    const div_content = document.querySelector(".content");
    const photographeContent = document.createElement("div");
    photographeContent.setAttribute("class", "media");
    photographeContent.innerHTML = `
    <img src="/assets/images/${this.image}" alt="${this.title}" class="lightbox_media" tabindex="0">
    <div class="media_infos">
      <div class="header_title">${this.title}</div>
      <div class="header_like">
        <p class="${this.id}">${this.likes}</p>
        <i class="fa-sharp fa-solid fa-heart" id="${this.id}" aria-label="likes" title="likes" tabindex="0"></i>
      </div>
    </div>`;
    div_content.appendChild(photographeContent);

    //Affichage dans la lightbox
    const lightbox = document.querySelector(".lightBox_data");
    const lightboxContent = document.createElement("div");
    lightboxContent.setAttribute("class", "media_filter");
    lightboxContent.setAttribute("hidden", "");
    lightboxContent.innerHTML = `
    <img src="/assets/images/${this.image}" alt="${this.title}" aria-label="image closeup view">
    <div class="media_infos_lbox">
      <div class="header_title_lbox">${this.title}</div>
    </div>`;
    lightbox.appendChild(lightboxContent);
  }
}