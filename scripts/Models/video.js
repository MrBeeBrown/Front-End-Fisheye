export class Video {
	constructor(data) {
		this.date = data.date
		this.id = data.id
		this.likes = data.likes
		this.photographerId = data.photographerId
		this.price = data.price
		this.title = data.title
		this.video = data.video
		this.liked = false
	}
}