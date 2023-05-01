export class afficherVideo {
  constructor(data) {
    this.date = data.date,
      this.id = data.id,
      this.likes = data.likes,
      this.photographerId = data.photographerId,
      this.price = data.price,
      this.title = data.title,
      this.video = data.video
  }

  printVideo() {
    const div_content = document.querySelector(".content");
    const content = document.createElement("div");
    content.setAttribute("class", "media");
    content.innerHTML = `
	  <video controls="">
		  <source src="/assets/images/${this.video}" type="video/mp4">
	  </video>
	  <div class="media_infos">
		  <div class="header_title">${this.title}</div>
		  <div class="header_like">
			  <p class="number_likes">${this.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
    div_content.appendChild(content);
  }

  printLightBox() {
    const lightbox = document.querySelector(".lightBox_data");
    const content = document.createElement("div");
    content.setAttribute("class", "media");
    content.innerHTML = `
	  <img src="/assets/images/${this.image}" alt="${this.title}">
	  <div class="media_infos">
		  <div class="header_title">${this.title}</div>
		  <div class="header_like">
			  <p class="number_likes">${this.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
    lightbox.appendChild(content);
  }
}