export function printVideo(data) {

  const div_content = document.querySelector(".content");
  const content = document.createElement("div");
  content.setAttribute("class", "media");
  content.innerHTML = `
	  <video controls="">
		  <source src="/assets/images/${data.video}" type="video/mp4">
	  </video>
	  <div class="media_infos">
		  <div class="header_title">${data.title}</div>
		  <div class="header_like">
			  <p class="number_likes">${data.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
  div_content.appendChild(content);
}