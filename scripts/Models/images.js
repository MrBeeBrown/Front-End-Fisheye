export class Image {
  constructor(data) {
    this.date = data.date
    this.id = data.id
    this.image = data.image
    this.likes = data.likes
    this.photographerId = data.photographerId
    this.price = data.price
    this.title = data.title
  }

  printImage() {
    const div_content = document.querySelector(".content");
    const content = document.createElement("div");
    content.setAttribute("class", "media");
    content.innerHTML = `
	  <img src="/assets/images/${this.image}" alt="${this.title}" class="lightbox_media">
	  <div class="media_infos">
		  <div class="header_title">${this.title}</div>
		  <div class="header_like">
			  <p class="number_likes">${this.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"aria-label="likes" title="likes"></i>
		  </div>
	  </div>`;
    div_content.appendChild(content);
  }

  printLightBox() {
    const lightbox = document.querySelector(".lightBox_data");
    const content = document.createElement("div");
    content.setAttribute("class", "media_filter");
    content.setAttribute("hidden", "");
    content.innerHTML = `
	  <img src="/assets/images/${this.image}" alt="${this.title}" aria-label="image closeup view">
	  <div class="media_infos_lbox">
		  <div class="header_title_lbox">${this.title}</div>
		  <div class="header_like_lbox">
			  <p class="number_likes">${this.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart" aria-label="likes" title="likes"></i>
		  </div>
	  </div>`;
    lightbox.appendChild(content);
  }
}