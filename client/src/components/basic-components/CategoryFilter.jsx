import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaGit, FaGithub, FaMobile, FaServer, FaToolbox, FaTools } from 'react-icons/fa';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 20px 0;
`;

const CategoryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid ${props => props.active ? '#4299e1' : '#2d3748'};
  background-color: ${props => props.active ? 'rgba(66, 153, 225, 0.1)' : '#1a202c'};
  color: ${props => props.active ? '#4299e1' : '#718096'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4299e1;
    color: #4299e1;
  }
`;

const categories = [
  { id: 'all', label: 'All', icon: <FaCode /> },
  { id: 'mobile', label: 'Mobile', icon: <FaMobile /> },
  { id: 'backend', label: 'Backend', icon: <FaServer /> },
  { id: 'tools', label: 'Tools', icon: <FaTools /> },
  { id: 'git', label: 'Git', icon: <FaGithub /> },
  { id: 'cloud', label: 'Cloud', icon: <FaCloud /> },
  { id: 'debugging', label: 'Debug', icon: <FaToolbox /> },
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          active={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.icon}
          {category.label}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};

export default CategoryFilter; 