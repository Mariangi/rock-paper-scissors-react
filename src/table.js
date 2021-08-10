import React from 'react';
import styled from 'styled-components';
import Token from './token.js';

const TableStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

function Table(){
    return(
        <TableStyled>
            <Token name="rock" />
            <Token name="paper" />
            <Token name="scissors" />
        </TableStyled>
    );
}

export default Table;