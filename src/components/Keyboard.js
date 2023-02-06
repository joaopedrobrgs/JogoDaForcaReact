import React from 'react'

export default function Keyboard(props) {

    async function resetGame(){
        await props.setGameOver(true);
        props.restartGame();
    }

    return (
        <div id="keyboardContainer">
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>A</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>B</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>C</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>D</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>E</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>F</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>G</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>H</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>I</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>J</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>K</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>L</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>M</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>N</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>O</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>P</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>Q</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>R</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>S</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>T</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>U</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>V</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>W</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>X</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>Y</div>
            <div style={props.gameOver? {backgroundColor: 'white', color: 'purple'} : {}} className="keyboardLetters" onClick={props.handleClick}>Z</div>
            <div className="keyboardLetters" onClick={() => { resetGame() }}>🎮</div>
        </div>
    )
}
