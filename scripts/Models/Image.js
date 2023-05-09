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
}