
export function afficherImage(data) {
  const { date, id, image, likes, photographerId, price, title } = data;

  function printImage() {
    const div_content = document.querySelector(".content");
    const content = document.createElement("div");
    content.setAttribute("class", "media");
    content.innerHTML = `
	  <img src="/assets/images/${image}" alt="${title}" class="lightbox_media">
	  <div class="media_infos">
		  <div class="header_title">${title}</div>
		  <div class="header_like">
			  <p class="number_likes">${likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
    div_content.appendChild(content);
  }

  function printLightBox() {
    const lightbox = document.querySelector(".lightBox_data");
    const content = document.createElement("div");
    content.setAttribute("class", "media_filter");
    content.setAttribute("hidden", "");
    content.innerHTML = `
	  <img src="/assets/images/${image}" alt="${title}">
	  <div class="media_infos">
		  <div class="header_title">${title}</div>
		  <div class="header_like">
			  <p class="number_likes">${likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
    lightbox.appendChild(content);
  }

  return { printImage, printLightBox }
}