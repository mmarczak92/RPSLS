import "./rules.css";
import Diagram from "./diagram.png"

const Rules = () => {
    return ( 
    <div className="rulesBody">
        <div className="rulesHeader"><h1 className="rulesHeaderH">Zasady</h1></div>
        <div className="rulesMain">
        <iframe width="560" height="340" src="https://www.youtube.com/embed/00xkjjHql4Y?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen="allowFullScreen" title="rules"/>
        <p className="rulesPl">"Nożyczki tną papier,<br/>Papier okrywa kamień,<br/>Kamień miażdży jaszczurkę,<br/>Jaszczurka zatruwa Spocka,<br/>Spock niszczy nożyczki,<br/>Nożyczki dekapitują jaszczurkę,<br/>Jaszczurka zjada papier,<br/>Papier obala Spocka,<br/>Spock wyparowuje kamień,<br/>I jak zwykle - kamień łamie nożyczki."
        </p>
        </div>
        <img className="rulesDiagram" src={Diagram} alt="handsign diagram"/>
    </div>
    )
}
export default Rules