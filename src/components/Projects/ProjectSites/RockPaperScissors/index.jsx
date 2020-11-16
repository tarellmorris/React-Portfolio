import React, {useState} from 'react';
import FixedImgBanner from '../../../Common/FixedImgBanner';
import bgImg from '../../../../assets/backgrounds/web-dev-bg2.webp';
import {FaRegHandRock, FaRegHandPaper, FaRegHandScissors} from 'react-icons/fa';

import {
    RPSContainer, Header,
    GameContainer, ScoreCard,
    User, CPU,
    Score, ResultDisplay,
    ButtonContainer,
    Instructions, ActionMessage,
    GameOver, RestartButton
} from './rockPaperScissorsElements';

const RockPaperScissors = () => {
    var [userScore, setUserScore] = useState(0);
    var [compScore, setCompScore] = useState(0);
    var [result, setResult] = useState('');

    const getCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    }
    const restart = () => {
        setUserScore(0)
        setCompScore(0)
        setResult("")
    }
    const upper = (str) => {
        let newStr = str.toUpperCase()
        return newStr
    }
    const win = (userChoice, compChoice) => {
        setUserScore(userScore + 1)
        setResult(`Your ${upper(userChoice)} beats CPU ${upper(compChoice)}. You win!`)
    }
    const lose = (userChoice, compChoice) => {
        setCompScore(compScore + 1)
        setResult(`CPU ${upper(compChoice)} beats your ${upper(userChoice)}. Too bad.`)
    }
    const draw = (userChoice, compChoice) => {
        setResult(`Your ${upper(userChoice)} matches CPU ${upper(compChoice)}. It's a draw...`)
    }

    const begin = (userChoice) => {
        const compChoice = getCompChoice();
        
        // eslint-disable-next-line default-case
        switch (userChoice + compChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(userChoice, compChoice)
                break
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(userChoice, compChoice)
                break
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                draw(userChoice, compChoice)
                break
        }
    }

    if (userScore < 10 && compScore < 10) {
        return (
            <RPSContainer>
                <FixedImgBanner bgImg={bgImg} height="80px"></FixedImgBanner>
                <Header>
                    <h1>Rock Paper Scissors</h1>
                </Header>
                <GameContainer>
                    <ScoreCard>
                        <User>Player</User>
                        <CPU>Comp</CPU>
                        <Score>
                            <span>{userScore}</span> : <span>{compScore}</span>
                        </Score>
                    </ScoreCard>
                    <ResultDisplay>{result}</ResultDisplay>
                    <br/>
                    <ButtonContainer>
                        <div id="rock" onClick={() => begin("rock")}>
                            <FaRegHandRock />
                        </div>
                        <div id="paper" onClick={() => begin("paper")}>
                            <FaRegHandPaper />
                        </div>
                        <div id="scissors" onClick={() => begin("scissors")}>
                            <FaRegHandScissors />
                        </div>
                    </ButtonContainer>
                    <br/>
                    <Instructions>First to <span>10 POINTS</span> wins</Instructions>
                    <ActionMessage>Make your move</ActionMessage>
                </GameContainer>
                <FixedImgBanner bgImg={bgImg} height="250px"></FixedImgBanner>   
            </RPSContainer>
            )
    } else {
        return (
            <GameOver>
                <FixedImgBanner bgImg={bgImg} height="80px"></FixedImgBanner>
                <Header>
                    <h1>Rock Paper Scissors</h1>
                </Header>
                <GameContainer>
                    <ScoreCard>
                        <User>Player</User>
                        <CPU>Comp</CPU>
                        <Score>
                            <span>{userScore}</span> : <span>{compScore}</span>
                        </Score>
                    </ScoreCard>
                    <ResultDisplay>{result}</ResultDisplay>
                    <RestartButton onClick={restart}>Play again?</RestartButton>
                </GameContainer>
                <FixedImgBanner bgImg={bgImg} height="250px"></FixedImgBanner> 
            </GameOver>
        )
    }
}

export default RockPaperScissors
