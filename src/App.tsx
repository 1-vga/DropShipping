import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from './pages/main';
import { Footer } from './components/footer';
import { Header } from './components/header';
import wasScrolled from './utils';

function App() {
  const [elementInView, setElementInView] = useState(false);

  useEffect(() => {
    const domElement = document.getElementById('elementInView') as Element;
    const header = document.getElementById('header') as Element;
    const headerHeight = +window.getComputedStyle(header).height.split('px')[0];

    const handleScroll = () => {
      const isViewed = wasScrolled(domElement, { offset: window.innerHeight - headerHeight });
      setElementInView(isViewed);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header elementInView={elementInView} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
