import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
    background: white;
    width: 130px;
    height: 125px;
    border: 15px solid ${({color})=> color.base};
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 5px 0 ${(props)=> props.color.border};
    display: flex;
    cursor: pointer;
    position: relative;
    z-index: 2;
    &:active{
        transform: scale(.9);
    }
    .box{
        box-shadow: 0 -4px 0 #babfd4;
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const colors = {
    rock: {
        base: '#de3a5a',
        border: '#980e31',
    },
    paper: {
        base: '#516ef4',
        border: '#2543c3',
    },
    scissors: {
        base: '#eca81e',
        border: '#c76c14',
    }

} 

function Token({ name }){
    return(
        <TokenStyled color={colors[name]}>
            <div className="box">
                <img src={`./images/icon-${name}.svg`} alt=""/>
            </div>
        </TokenStyled>
    );
}

export default Token;