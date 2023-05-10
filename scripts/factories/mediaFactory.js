import { Image } from "../Models/Image.js";
import { Video } from "../Models/Video.js";

export function mediaFactory(media) {
  if (media.image) {
    let image = new Image(media);
    return image.printImage();
  } else {
    let video = new Video(media);
    return video.printVideo();
  }
}