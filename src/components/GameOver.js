import React, { Fragment } from 'react'

export default function GameOver(props) {
    
    return (
        props.gameOver ?
            <div id='gameOverScreen'>
                <h2 id='gameOverMessage'>{props.endGameMessage}</h2>
                <button id='playAgainButton' onClick={()=>{props.restartGame()}}>Jogar Novamente</button>
            </div>
            :
            <Fragment />
    )
}
