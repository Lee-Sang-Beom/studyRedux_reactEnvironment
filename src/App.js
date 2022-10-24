import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Content from './Component/Content';
import Header from './Component/Header';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <Header/>
      <Content />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
        h1, h2, h3, h4, h5, h6, 
        p, div, span, strong{
          font-family: 'Jua';
        }
      `}</style>
    </React.Fragment>
  );
}

export default App;
