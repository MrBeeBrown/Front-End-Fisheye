export function afficherVideo(data) {
	const { date, id, likes, photographerId, price, title, video } = data;

	function printVideo() {
		const div_content = document.querySelector(".content");
		const content = document.createElement("div");
		content.setAttribute("class", "media");
		content.innerHTML = `
	  <video controls="" class="lightbox_media">
		  <source src="/assets/images/${video}" type="video/mp4">
	  </video>
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
	  <video controls="">
		  <source src="/assets/images/${video}" type="video/mp4">
	  </video>
	  <div class="media_infos">
		  <div class="header_title">${title}</div>
		  <div class="header_like">
			  <p class="number_likes">${likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
		lightbox.appendChild(content);
	}

	return { printVideo, printLightBox }
}