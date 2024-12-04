import React, { useState, useEffect } from 'react';
import PageLayout from './PageLayout';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import '../styles/Page1111.css';

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const images: ImageData[] = [
  { src: image4, alt: '11/11', description: '이땐 가을,,' },
  { src: image5, alt: '자리 착석', description: '자리를 탐색해보아요' },
  { src: image6, alt: '그린!', description: '11/11일 그린 탄생' },
  { src: image7, alt: '우당탕탕', description: '코드를 읽어보아요. 살짝 어지러웠습니다.' },
  { src: image8, alt: '번외', description: '빼빼로와 사탕을 받았어요. 그러고보니 빼빼로데이였어요. 의미있는(?)날' },
];

const Page1111: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedIndex !== null) {
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((prevIndex) => (prevIndex! > 0 ? prevIndex! - 1 : images.length - 1));
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prevIndex) => (prevIndex! < images.length - 1 ? prevIndex! + 1 : 0));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <PageLayout className="Page1111">
      <h2>11/11</h2>
      <p>어떻게 왔는지 생각도 안나요</p>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.src}
              alt={image.alt}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div className="modal" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content">
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            <h4>{images[selectedIndex].alt}</h4>
            <p>{images[selectedIndex].description}</p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Page1111;