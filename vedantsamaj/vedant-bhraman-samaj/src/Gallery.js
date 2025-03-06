import React from 'react';
import './Gallery.css'; // Styling file for gallery

// Import images directly from 'src' folder
// import image1 from './galleryimg/image (1).jpg';

// import image2 from './galleryimg/image(2).jpg';
// import image3 from './galleryimg/image(3).jpg';
// import image4 from './galleryimg/image(4).jpg';
// import image5 from './galleryimg/image(5).jpg';
// import image6 from './galleryimg/image(6).jpg';
// import image7 from './galleryimg/image(7).jpg';
// import image8 from './galleryimg/image(8).jpg';
// import image9 from './galleryimg/image(9).jpg';
// import image10 from './galleryimg/image(10).jpg';
// import image11 from './galleryimg/image(11).jpg';


import  image1 from './galleryimg/image (1).jpg';
import  image2 from './galleryimg/image (2).jpg';
import  image3 from './galleryimg/image (3).jpg';
import  image4 from './galleryimg/image (4).jpg';
import  image5 from './galleryimg/image (5).jpg';
import  image6 from './galleryimg/image (6).jpg';
import  image7 from './galleryimg/image (7).jpg';
import  image8 from './galleryimg/image (8).jpg';
import  image9 from './galleryimg/image (9).jpg';
import  image10 from './galleryimg/image (10).jpg';

const Gallery = () => {
  // Array of imported images
  const images = [
    // img1,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
