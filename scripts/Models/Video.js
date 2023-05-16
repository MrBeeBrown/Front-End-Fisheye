import { Media } from "./Media.js"

export class Video extends Media {
  constructor(data) {
    super(data)
    this.video = data.video
  }

  print() {
    //Affichage sur la page du photographe
    const div_content = document.querySelector(".content");
    const photographeContent = document.createElement("div");
    photographeContent.setAttribute("class", "media");
    photographeContent.innerHTML = `
		<video controls="" class="lightbox_media">
			<source src="/assets/images/${this.video}" type="video/mp4">
		</video>
		<div class="media_infos">
			<div class="header_title">${this.title}</div>
			<div class="header_like">
				<p class="${this.id}">${this.likes}</p>
				<i class="fa-sharp fa-solid fa-heart" id="${this.id}" aria-label="likes" title="likes"></i>
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
			<source src="/assets/images/${this.video}" type="video/mp4"  aria-label="video closeup view">
		</video>
		<div class="media_infos_lbox">
			<div class="header_title_lbox">${this.title}</div>
		</div>`;
    lightbox.appendChild(lightboxContent);
  }
}