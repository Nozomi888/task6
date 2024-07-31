import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <h1 className="gallery-heading">Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <Image key={index} src={image} onClick={() => openModal(image)} />
        ))}
      </div>
      {selectedImage && (
        <Modal src={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
