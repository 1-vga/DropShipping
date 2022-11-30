import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from './pages/main';
import { Footer } from './components/footer';
import { Header } from './components/header';
import isScrolledIntoView from './utils';

function App() {
  const [elementsInView, setElementsInView] = useState<boolean[]>([]);

  useEffect(() => {
    const domElements = document.querySelectorAll('.viewedElement');
    const header = document.getElementById('header') as Element;
    const headerHeight = +window.getComputedStyle(header).height.split('px')[0];

    const handleScroll = () => {
    const mapped = Array.from(domElements).map((element) => isScrolledIntoView(element, {offset: window.innerHeight - headerHeight}));
      setElementsInView(mapped);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header elementsInView={elementsInView} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
