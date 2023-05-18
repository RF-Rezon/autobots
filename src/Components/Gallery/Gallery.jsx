import React from "react";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://i.ibb.co/sJwM7GQ/1.png", width: 600, height: 800 },
  { src: "https://i.ibb.co/wgxyHLm/2.png", width: 1600, height: 1600 },
  { src: "https://i.ibb.co/TtfrN2G/4.png", width: 700, height: 1600 },
  { src: "https://i.ibb.co/2gZn4DF/5.png", width: 900, height: 1600 },
  { src: "https://i.ibb.co/vmQP0BW/6.png", width: 1600, height: 1600 },
  { src: "https://i.ibb.co/VSrxmvL/7.png", width: 1800, height: 2000 },
  { src: "https://i.ibb.co/XF33v74/8.png", width: 900, height: 1600 },
];

const Gallery = () => {
  return <PhotoAlbum layout="masonry" columns={3} photos={photos} padding={20} />;
};

export default Gallery;
