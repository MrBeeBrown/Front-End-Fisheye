export class Media {
  constructor(data) {
    this.date = data.date
    this.id = data.id
    this.likes = data.likes
    this.photographerId = data.photographerId
    this.price = data.price
    this.title = data.title
    this.liked = false
  }

  like() {
    //Création des eventListener pour les likes
    const liked = document.getElementById(`${this.id}`);

    if (this.liked) {
      liked.classList.toggle("red_heart");
    }

    liked.addEventListener("click", (e) => {
      e.preventDefault();
      const updatedLike = document.getElementsByClassName(`${this.id}`);
      const totalLikes = document.querySelector(".total_likes");
      if (!this.liked) {
        this.likes = parseInt(this.likes) + 1;
        totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
        this.liked = true;
      } else {
        this.likes = parseInt(this.likes) - 1;
        totalLikes.textContent = parseInt(totalLikes.textContent) - 1;
        this.liked = false;
      }
      updatedLike[0].innerText = this.likes;
      liked.classList.toggle("red_heart");
    })
  }
}