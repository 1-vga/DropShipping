import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './pages/main';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
