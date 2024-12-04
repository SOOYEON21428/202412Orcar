import React, { useState } from 'react';
import PageLayout from './PageLayout';
import image15 from '../assets/image15.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: image15,
    alt: '[ERP]',
    description: '요즘 제가 하는 업무에요',
  },
  {
    src: image2,
    alt: '[처음만난 일]',
    description: '제가 와서 처음한 업무이고, 정렬을 적용한거에요',
  },
  {
    src: image3,
    alt: '[제가 주로 하는 일]',
    description: '[ERP]기능개선을 주로 로딩이나, 정렬 , 데이터 불러오기와 같이 기능개선에 집중하고 있어요',
  },
];

const Intro: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <PageLayout className="Intro">
      <h2>Intro</h2>
      <h3>신규입사자의 시선 : 한달여간의 여정</h3>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.src}
              alt={image.alt}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="image-description">
          <h4>{selectedImage.alt}</h4>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </PageLayout>
  );
};

export default Intro;