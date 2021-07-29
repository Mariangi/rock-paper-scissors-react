import React from 'react';
import styled from 'styled-components';

const ScoreStyled = styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    width: 80px;
    small{
        color: #2A45C2;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
    }
    p{
        margin: 0 ;
        color: #565468;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -5px;
        position: relative;
        left: -2px;
    }
`

function Score(){
    return(
        <ScoreStyled>
            <small>Score</small>
            <p>12</p>
        </ScoreStyled>
    );
}

export default Score;