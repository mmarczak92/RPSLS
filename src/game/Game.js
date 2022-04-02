import "./game.css";
import { useState } from "react";
// import Rock from "./rock.png"
// import Paper from "./paper.png"
// import Scissors from "./scissors.png"
// import Lizard from "./lizard.png"
// import Spock from "./spock.png"



const Game = () => {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    let [score, setScore] = useState(0)
    const choices = ["kamień", 'papier', 'nożyczki', 'jaszczurka', 'spock']
    const [data, setData] = useState({Wyniki:[]})

    const addScoreToData = (newScore) => {
        let newScores = data["Wyniki"];

        const postScores = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newScore),
        }
        fetch('http://localhost:8000/Wyniki', postScores);
        
        newScores.push(score);
        setData({Wyniki: newScores});
        console.log(data)
    }
    

    const handleClick = (value) => {
        setUserChoice(value)
        generateComputerChoice()
        checkResult()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

const checkResult = () => {
    switch(userChoice + computerChoice){
        case "kamieńkamień":
        case "jaszczurkajaszczurka":
        case "spockspock":
        case "nożyczkinożyczki":
        case "papierpapier":
            setResult("Wynik: Remis")
            break
        case "kamieńnożyczki":
        case "kamieńjaszczurka":
        case "spockkamień":
        case "spocknożyczki":
        case "papierspock":
        case "papierkamień":
        case "jaszczurkaspock":
        case "jaszczurkapapier":
        case "nożyczkijaszczurka":
        case "nożyczkipapier":
            setResult("Wynik: Wygrałes")
            setScore(score+1)
            break
        case "kamieńpapier":
        case "kamieńspock":
        case "spockjaszczurka":
        case "spockpapier":
        case "papierjaszczurka":
        case "papiernożyczki":
        case "jaszczurnożyczki":
        case "jaszczurkakamień":
        case "nożyczkikamień":
        case "nożyczkispock":
            setResult("Wynik: Przegrałeś")
            alert("Koniec Gry")
            addScoreToData()
            setScore(score = 0)
            break
        default:
    }
}

    return ( 
    <div className="gameBody">

        <h2 className="gameUserChoice">Twój wybór to: {userChoice}</h2>
        <h2 className="gameComputerChoice">Wybór komputera to: {computerChoice}</h2>
        <div>
        {choices.map( (choice, index) => 
        <button className="gameButton" key={index} onClick={() => handleClick(choice)}>{choice}</button>
        )}</div>
        <h2 className="gameResult">{result}</h2>
        <h2 className="gameWins">Wygrane: {score}</h2>
    </div>
    )
}

export default Game