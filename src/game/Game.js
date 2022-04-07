import "./game.css";
import { useEffect, useState } from "react";
import Rock from "./rock.png"
import Paper from "./paper.png"
import Scissors from "./scissors.png"
import Lizard from "./lizard.png"
import Spock from "./spock.png"



const Game = () => {
    const url = "http://localhost:8000/Wyniki"
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    let [score, setScore] = useState(0)
    const choices = ["kamień", 'papier', 'nożyczki', 'jaszczurka', 'Spock']
    const choicesPics = [<img src={Rock} alt="kamień" height={100} />, <img src={Paper} alt="papier" height={100} />, <img src={Scissors} alt="nożyczki" height={100} />, <img src={Lizard} alt="jaszczurka" height={100} />, <img src={Spock} alt="spock" height={100} />]


    const handleClick = (value) => {
        setUserChoice(value)
        generateComputerChoice()
        checkResult()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    const pushScore = () => {
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ wynik: score })
        }).then(() => {
            console.log("Dodano nowy wynik");
        })
    }




    useEffect(() => {
        checkResult()
    }, [userChoice, computerChoice])

    const checkResult = () => {
        switch (userChoice + computerChoice) {
            case "kamieńkamień":
            case "jaszczurkajaszczurka":
            case "SpockSpock":
            case "nożyczkinożyczki":
            case "papierpapier":
                setResult("Wynik: Remis")
                break
            case "kamieńnożyczki":
            case "kamieńjaszczurka":
            case "Spockkamień":
            case "Spocknożyczki":
            case "papierSpock":
            case "papierkamień":
            case "jaszczurkaSpock":
            case "jaszczurkapapier":
            case "nożyczkijaszczurka":
            case "nożyczkipapier":
                setResult("Wynik: Wygrałes")
                setScore(score + 1)
                break
            case "kamieńpapier":
            case "kamieńSpock":
            case "spockjaszczurka":
            case "Spockpapier":
            case "papierjaszczurka":
            case "papiernożyczki":
            case "jaszczurnożyczki":
            case "jaszczurkakamień":
            case "nożyczkikamień":
            case "nożyczkiSpock":
                setResult("Wynik: Przegrałeś")
                alert("Koniec Gry")
                pushScore(score)
                setScore(score = 0)
                break
            default:
        }
    }

    return (
        <div className="gameBody">
            <h1> Wybierz swoją rękę!</h1>
            <h2 className="gameUserChoice">Twój wybór to: {userChoice}</h2>
            <h2 className="gameComputerChoice">Wybór komputera to: {computerChoice}</h2>
            <div className="choicesChoices">
                <div>
                    {choices.map((choice, index) =>
                        <button className="gameButton" key={index} onClick={() => handleClick(choice)}>{choice}</button>
                    )}</div>
                <div>
                    {choicesPics.map((choicesPic, index) =>
                        <div className="gameButtonPic" key={index}>{choicesPic}</div>
                    )}</div>
            </div>
            <h2 className="gameResult">{result}</h2>
            <h2 className="gameWins">Wygrane: {score}</h2>
        </div>
    )
}

export default Game