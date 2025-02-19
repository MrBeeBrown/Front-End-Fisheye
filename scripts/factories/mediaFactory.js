import { Image } from "../Models/Image.js";
import { Video } from "../Models/Video.js";

export const mediaFactory = (media) => {
  if (media.image) {
    return new Image(media);
  } else {
    return new Video(media);
  }
}