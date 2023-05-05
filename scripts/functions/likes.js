//Mise à jour des likes pour les médias
export function likes() {
  const liked = document.querySelectorAll("#heart");
  let mediaArray = [];
  liked.forEach((e) => {
    e.addEventListener("click", () => {
      if (!mediaArray.includes(e.parentElement.parentElement.childNodes[1].textContent)) {
        let update = parseInt(e.parentElement.childNodes[1].textContent) + 1;
        const totalLikes = document.querySelector(".total_likes");
        totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
        e.parentElement.childNodes[1].textContent = update.toString();
        mediaArray.push(e.parentElement.parentElement.childNodes[1].textContent);
      }
    });
  });
};