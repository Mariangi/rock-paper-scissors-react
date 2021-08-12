import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './button.js';

const RulesStyled = styled.div`
    text-align: center;
    .rules-overlay{
        background: white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        h2{
            color: #3b4262;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 3em;
        }
    }
`

function Rules(){
    const [visible, setVisible] = useState(false);
    function handleToggleClick(){
        setVisible(!visible)
    }
    return(
        <RulesStyled>
            {
                (visible) && (
                    <div className="rules-overlay">
                        <h2>Rules</h2>
                        <img src="./images/image-rules.svg" alt="Game Rules" />
                        <img onClick={handleToggleClick} src="./images/icon-close.svg" alt="Close the game rules" />
                    </div>
                )
            }
            <Button onClick={handleToggleClick}/>
        </RulesStyled>
    );
}

export default Rules;