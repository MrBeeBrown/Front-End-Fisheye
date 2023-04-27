export function printImage(data) {

  const div_content = document.querySelector(".content");
  const content = document.createElement("div");
  content.setAttribute("class", "media");
  content.innerHTML = `
	  <img src="/assets/images/${data.image}" alt="${data.title}">
	  <div class="media_infos">
		  <div class="header_title">${data.title}</div>
		  <div class="header_like">
			  <p class="number_likes">${data.likes}</p>
			  <i class="fa-sharp fa-solid fa-heart" id="heart"></i>
		  </div>
	  </div>`;
  div_content.appendChild(content);
}