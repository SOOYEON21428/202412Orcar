import React, { useState, useEffect } from 'react';
import PageLayout from './PageLayout';
import '../styles/Challenge.css';

const personalGoals = [
  {
    title: '프로덕트를 이해하여 업무의 집중도를 높이자',
    description: '프로덕트의 전반적인 흐름과 목표를 이해함으로써, 내가 맡은 업무의 중요성과 방향성을 명확히 하고 더 높은 집중도를 발휘하고 싶다.',
  },
  {
    title: '다양한 분야에서 고루 경험을 쌓고 싶다',
    description: '다양한 프로젝트와 분야에 참여하여 폭넓은 경험을 쌓고, 그 과정에서 자신의 강점과 관심사를 발견하고 발전시키고 싶다.',
  },
  {
    title: '재밌게 일하고 싶다',
    description: '협업을 통해 긍정적인 에너지를 주고받으며 성과를 창출하고 싶습니다.',
  },
];

const Challenge: React.FC = () => {
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGoalIndex((prevIndex) => (prevIndex + 1) % personalGoals.length);
    }, 12000); // 10초마다 목표 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <PageLayout className="Challenge">
      <h2>Green Challenge</h2>
      <div className="goals-container">
        <div className="goal">
          <h3>{personalGoals[currentGoalIndex].title}</h3>
          <p>{personalGoals[currentGoalIndex].description}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Challenge;