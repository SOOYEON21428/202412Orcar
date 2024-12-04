import React, { useState, useEffect } from 'react';
import PageLayout from './PageLayout';
import '../styles/HelloOrcarStudio.css';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';

const planets = [
  { 
    name: '내가 들었던 회사란', 
    description: '내가 생각했던 회사란...', 
    content: '엄격한 조직 구조 속에서 자율성이 제한된 채, 교류보다는 주어진 업무에 집중하는 환경',
  },
  { 
    name: '안녕 오르카스튜디오', 
    description: '오르카스튜디오와의 첫 만남...', 
    content: '자유롭고, 구성원 모두가 일을 좋아하며, 열정을 갖고있다. 덤으로, 개개인이 서로와 공간을 좋아하는 나머지 다들 오래 계신다.',
  },
  { 
    name: '사진', 
    description: '오르카스튜디오의 사진', 
    content: '다들 먹을걸 잘 나누시고 지난번 3샷 감사했습니다.',
    images: [
      image9,
      image10,
      image11,
      image12,
      image13
    ] 
  },
];

const HelloOrcarStudio: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<{
    name: string;
    content: string;
    images?: string[];
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // 이미지 자동 변경을 위한 useEffect
  useEffect(() => {
    if (selectedPlanet?.images) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedPlanet.images!.length
        );
      }, 1000);

      // 컴포넌트가 언마운트될 때 interval 정리
      return () => clearInterval(intervalId);
    }
  }, [selectedPlanet]);

  return (
    <PageLayout className="HelloOrcarStudio">
      <h2>Hello OrcarStudio</h2>
      <div className="planet-container">
        {planets.map((planet, index) => (
          <div
            key={index}
            className={`planet planet-${index}`}
            onClick={() => {
              setSelectedPlanet(planet);
              setCurrentImageIndex(0);
            }}
            title={planet.description}
          >
            {planet.name}
          </div>
        ))}
      </div>
      {selectedPlanet && (
        <div className="modal" onClick={() => setSelectedPlanet(null)}>
          <div className="modal-content">
            <h4>{selectedPlanet.name}</h4>
            <p>{selectedPlanet.content}</p>
            {selectedPlanet.images && selectedPlanet.images.length > 0 && (
              <img 
                src={selectedPlanet.images[currentImageIndex]} 
                alt={`${selectedPlanet.name} 이미지`} 
                style={{ cursor: 'pointer', maxWidth: '100%' }}
              />
            )}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default HelloOrcarStudio;