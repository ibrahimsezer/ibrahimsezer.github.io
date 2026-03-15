import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import ScrollToTop from './helper/scroll-to-top/scroll-to-top.tsx'
import CustomCursor from './components/basic-components/CustomCursor.js';

function App() {
  return (<>
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    <ScrollToTop />
  </>
  );
}

export default App;
