import './App.css';
import Header from './header.js';
import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper.js';
import Table from './table.js';

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  min-height: 100vh;
  padding: 2em;
  body{
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header/>
        <Table/>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
