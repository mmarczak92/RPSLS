import "./home.css";
import Logo from "./logo.png"
import Sheldon from "./sheldon.png"
import Leonard from "./leonard.png"


const Home = () => {
    return ( 
    <div className="homeBody">
        <div className="homePictures">
            <div className="homeLeonard">
                <img className="homeLeonardPic" src={Leonard} alt="Leonard"/>
            </div>
            <img className="homeLogo" src={Logo} alt="TBBT logo"/>
            <div className="homeSheldon">
                <img className="homeSheldonPic" src={Sheldon} alt="Sheldon"/>
            </div>
        </div>
    </div>
    )
}

export default Home