import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './Pages/AboutUs';
import Page404 from './Pages/Page404';
import Generate from './Pages/Generate';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RecipeDetail from './Pages/RecipeDetail';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/generate" element={<Generate darkMode={darkMode} />} />
            <Route path="/about" element={<AboutUs darkMode={darkMode} />}/>
            <Route path="/recipe/:id" element={<RecipeDetail darkMode={darkMode} />} />
            <Route path="*" element={<Page404 darkMode={darkMode} />} />
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}


export default App;
