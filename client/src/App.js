import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App/>
  </Router>
);


export default App;
