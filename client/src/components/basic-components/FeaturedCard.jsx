import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const FeaturedContainer = styled(motion.div)`
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border: 1px solid #4299e1;
  position: relative;
  overflow: hidden;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #4299e1;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Description = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeaturedCard = ({ title, description, children }) => {
  return (
    <FeaturedContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FeaturedBadge>
        <FaStar />
        Featured
      </FeaturedBadge>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </FeaturedContainer>
  );
};

export default FeaturedCard; 