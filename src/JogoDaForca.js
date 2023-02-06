import React, { useEffect, useState } from 'react';
import data from './data';
import game from './game';
import GameOver from './components/GameOver';
import Score from './components/Score';
import Forca from './components/Forca';
import WordLetters from './components/WordLetters';
import Category from './components/Category';
import Keyboard from './components/Keyboard';

export default function JogoDaForca() {

    const [gameOver, setGameOver] = useState(false);
    const [remainingAttempts, setRemainingAttempts] = useState(6);
    const [forca, setForca] = useState(0);
    const [word, setWord] = useState('');
    const [category, setCategory] = useState('');
    const [letterClicked, setLetterClicked] = useState('');
    const [allLettersClicked, setAllLettersClicked] = useState([]);
    const [rightLetters, setRightLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [endGameMessage, setEndGameMessage] = useState(['']);
    const [click, setClick] = useState(0);
    const wordInArray = word.split('');

    //Iniciate game (Select word on database)
    function iniciateGame() {
        let index = Math.floor(Math.random() * data.words.length);
        setWord(data.words[index].name);
        setCategory(data.words[index].category);
        setLetterClicked('');
        setAllLettersClicked([]);
        setRightLetters([]);
        setWrongLetters([]);
        setForca(0);
        setRemainingAttempts(6);
        setClick(0);
    }
    useEffect(() => {
        setTimeout(() => {
            setGameOver(false);
        }, 0.5);
        iniciateGame();
    }, [])

    //Handle Click
    function handleClick(event) {
        let element = event.target;
        setLetterClicked(element.innerHTML);
        element.style.backgroundColor = 'gray';
        element.style.color = 'black';
        setClick((previousValue) => (previousValue + 1))
        setTimeout(() => {
            setClick((previousValue) => (previousValue + 1))
        }, 1);
    }

    //Checking for a Match
    useEffect(() => {
        let arraySearch = allLettersClicked.includes(letterClicked);
        if (!arraySearch) {
            setAllLettersClicked([...allLettersClicked, letterClicked])
            let checkMatch = game.checkForAMatch(wordInArray, letterClicked);
            if (checkMatch !== undefined) {
                setRightLetters([...rightLetters, letterClicked]);
            } else {
                if (letterClicked !== '') {
                    setWrongLetters([...wrongLetters, letterClicked]);
                    setForca((previousValue) => (previousValue + 1))
                    setRemainingAttempts((previousValue) => (previousValue - 1))
                }
            }
        }
    }, [click])

    //Checking Game Over
    useEffect(() => {
        if (game.organizeLetters(wordInArray) === game.organizeLetters(rightLetters)) {
            setEndGameMessage('Parabéns, você venceu!')
            setGameOver(true);
        }
        if (remainingAttempts === 0) {
            setEndGameMessage('Que pena, você perdeu!')
            setGameOver(true);
        }
    }, [click])

    //Restart Game
    function restartGame() {
        iniciateGame();
        setGameOver(false);
    }

    return (
        <div id='pageContainer'>
            <Score remainingAttempts={remainingAttempts}></Score>
            <Forca forca={forca}></Forca>
            <WordLetters word={wordInArray} letters={rightLetters}></WordLetters>
            <Keyboard restartGame={restartGame} gameOver={gameOver} setGameOver={setGameOver} handleClick={handleClick}></Keyboard>
            <Category category={category}></Category>
            <GameOver gameOver={gameOver} endGameMessage={endGameMessage} restartGame={restartGame}></GameOver>
        </div>
    )
}
