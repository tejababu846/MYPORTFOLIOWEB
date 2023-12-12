import React, {useState} from 'react';
import './index.css';

const CommentItem = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FRCHYDBOCXN.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FDDQRDCKDYP.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FXGJZFYLNMR.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FHVDENHEGSD.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FEVYSUEIQZA.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FOHOXHZPRYV.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FVNELUPGWJB.png',
    'https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FNHWSDXKNWA.png',
  ];

  const handleNextButtonClick = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <>
      <h1 className="headintop">Achievements</h1>
      <div className="image-slider">
        <div className="image-container">
          <img
            className="slider-image"
            src={images[currentImageIndex]}
            alt={`Achievement ${currentImageIndex + 1}`}
          />
        </div>
        <div className="button-container">
          <button onClick={handlePrevButtonClick} className="prymary">
            Previous
          </button>
          <button onClick={handleNextButtonClick} className="prymary">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentItem;