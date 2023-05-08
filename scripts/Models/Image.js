export class Image {
  constructor(data) {
    this.date = data.date
    this.id = data.id
    this.image = data.image
    this.likes = data.likes
    this.photographerId = data.photographerId
    this.price = data.price
    this.title = data.title
    this.liked = false
  }

  print() {
    const div_content = document.querySelector(".content");
    const content = document.createElement("div");
    content.setAttribute("class", "media");
    content.innerHTML = `
	  <img src="/assets/images/${this.image}" alt="${this.title}" class="lightbox_media">
	  <div class="media_infos">
		  <div class="header_title">${this.title}</div>
		  <div class="header_like">
			  <p class="${this.id}">${this.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="${this.id}" aria-label="likes" title="likes"></i>
		  </div>
	  </div>`;
    div_content.appendChild(content);
  }

  lightbox() {
    const lightbox = document.querySelector(".lightBox_data");
    const content = document.createElement("div");
    content.setAttribute("class", "media_filter");
    content.setAttribute("hidden", "");
    content.innerHTML = `
	  <img src="/assets/images/${this.image}" alt="${this.title}" aria-label="image closeup view">
	  <div class="media_infos_lbox">
		  <div class="header_title_lbox">${this.title}</div>
	  </div>`;
    lightbox.appendChild(content);
  }

  like() {
    const liked = document.getElementById(`${this.id}`);
    liked.addEventListener("click", () => {
      if (this.liked == false) {
        this.likes = parseInt(this.likes) + 1;
        const updatedLike = document.getElementsByClassName(`${this.id}`);
        updatedLike[0].innerText = this.likes;
        const totalLikes = document.querySelector(".total_likes");
        totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
        liked.classList.add("red_heart");
        this.liked = true;
      } else {
        this.likes = parseInt(this.likes) - 1;
        const updatedLike = document.getElementsByClassName(`${this.id}`);
        updatedLike[0].innerText = this.likes;
        const totalLikes = document.querySelector(".total_likes");
        totalLikes.textContent = parseInt(totalLikes.textContent) - 1;
        liked.classList.remove("red_heart");
        this.liked = false;
      }
    })
  }
}