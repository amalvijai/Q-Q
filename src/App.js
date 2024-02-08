import React from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
     
      <Nav/>
        <QuoteGenerator />
        <Footer/>
    
    </div>
  );
}

export default App;
