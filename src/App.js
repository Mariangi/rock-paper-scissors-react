import './App.css';
import Header from './header.js';
import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper.js';
import Table from './table.js';
import Rules from './rules.js';

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  body{
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  .app-content{
    min-height: 100vh;
    width: 100%;
    padding: 2em;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header/>
          <Table/>
          <Rules/>
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
