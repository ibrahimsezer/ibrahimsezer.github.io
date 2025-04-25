
import CodeWithToggle from '../components/basic-components/code-block-components/CodeWithToggle';
import Markdown from 'markdown-to-jsx';
import { markdownContent } from '../lib/const';
import styled from 'styled-components';
import { SiFlutter, } from 'react-icons/si';
import ToolCard from './Home'; 
import Section from './Home'; 

// Card Component
const Card = styled.div`
  background-color: #282c34; // Koyu arka plan rengi
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

// Code Block Component
const CodeBlock = styled.pre`
  background-color: #1e222a; // Daha koyu arka plan
  color: #f8f8f2; // Beyaz metin rengi
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  white-space: pre-wrap; /* Metni sarmalar */
`;


function Blog() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
                <div>
                    <h1>HHHH000</h1>
                 
                </div>
        </div>
    );
}

export default Blog;