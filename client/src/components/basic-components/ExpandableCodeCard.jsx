import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #282c34;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  background-color: #1e222a;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2a2f3a;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  font-size: 24px;
  color: #61dafb;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;


const Description = styled.div`
  background-color: #1e222a;
  color: #a0aec0;
  padding: 16px;
  border-radius: 6px;
  margin: 12px 0;
  font-size: 0.95rem;
  line-height: 1.5;
  border-left: 3px solid #61dafb;
`;

const CodeBlock = styled.pre`
  background-color: #1e222a;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  white-space: pre-wrap;
  position: relative;
  margin-top: 16px;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #61dafb;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(97, 218, 251, 0.1);
  }
`;

const ExpandableCodeCard = ({ title, icon, code, description, language = 'bash' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card>
      <Header onClick={toggleExpand}>
        <TitleContainer>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
        </TitleContainer>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </Header>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description && (
              <Description>
                {description}
              </Description>
            )}
            <CodeBlock>
              <CopyButton onClick={copyToClipboard} title="Copy to clipboard">
                {copySuccess ? 'Copied!' : <FaCopy />}
              </CopyButton>
              {code}
            </CodeBlock>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ExpandableCodeCard; 