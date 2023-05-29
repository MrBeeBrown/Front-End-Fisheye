//Création de la galerie d'images
export function createLightbox() {
  const body = document.querySelector("body");
  const box = document.createElement("div");
  box.setAttribute("class", "lightBox_container");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-labelledby", "LightBox");
  box.setAttribute("aria-describedby", "Galerie d'images");
  box.setAttribute("aria-hidden", "true");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("tabindex", "-1");
  box.innerHTML = `
  <div class="lightBox_background" role="document">
    <div class="lightBox">
      <a><i class="fa-solid fa-chevron-left" title="previous image"></i></a>
      <div class="lightBox_data"></div>
      <a><i class="fa-solid fa-chevron-right" title="next image"></i></a>
      <a><i class="fa-solid fa-square-xmark close_lightBox" title="Close dialog"></i></a>
    </div>
  </div>`
  body.appendChild(box);

  //Icône de fermeture de la lightBox
  const close = document.querySelector(".close_lightBox");
  close.addEventListener("click", closeLightBox);

  //Detection de la touche Escape
  const escapeKey = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      closeLightBox();
    }
  });

  //Ajout eventListener pour media suivant
  const next = document.querySelector(".fa-chevron-right");
  next.addEventListener("click", nextImage);

  //Detection de la touche fleche droite
  const nextKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextImage();
    }
  });

  //Ajout eventListener pour media précédent
  const prev = document.querySelector(".fa-chevron-left");
  prev.addEventListener("click", prevImage);

  //Detection de la touche fleche gauche
  const prevKey = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    }
  });

  //Afficher média suivante
  function nextImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i++;
        if (i == media.length) {
          i = 0
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  //Afficher média précédente
  function prevImage() {
    let media = [];
    media = document.querySelectorAll(".media_filter");
    for (let i = 0; i < media.length; i++) {
      if (!media[i].hasAttribute("hidden")) {
        media[i].toggleAttribute("hidden");
        i--;
        if (i < 0) {
          i = media.length - 1;
        }
        media[i].toggleAttribute("hidden");
      }
    }
  }

  function closeLightBox() {
    const main = document.querySelector("main");
    main.style.display = "block";
    const lightBox = document.querySelector(".lightBox_container");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", "true");
    hideMedia();
  }


  function hideMedia() {
    const hideAllMedia = document.querySelectorAll(".media_filter");
    hideAllMedia.forEach((e) => {
      e.setAttribute("hidden", "");
    })
  }

  //Selection des éléments focusable
  let focusableItems = [];
  const lightBox = document.querySelector(".lightBox");
  const left = lightBox.querySelector(".fa-chevron-left");
  focusableItems.push(left);
  const right = lightBox.querySelector(".fa-chevron-right");
  focusableItems.push(right);
  const closeBtn = lightBox.querySelector(".close_lightBox");
  focusableItems.push(closeBtn);

  //Detection Echap et tabulation
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      focusInLightbox(e);
    }
  });

  function focusInLightbox(e) {
    let index = focusableItems.findIndex(f => f === lightBox.querySelector(`:focus`));
    if (e.shiftKey === true) {
      index--;
    } else {
      index++;
    }
    if (index >= focusableItems.length) {
      index = 0;
    }
    if (index < 0) {
      index = focusableItems.length - 1;
    }
    focusableItems[index].focus();
  }
}

export function openLightBox() {
  const main = document.querySelector("main");
  main.style.display = "none";
  const lightBox = document.querySelector(".lightBox_container");
  lightBox.style.display = "block";
  lightBox.setAttribute("aria-hidden", "false");
}
