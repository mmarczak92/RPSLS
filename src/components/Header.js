import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="navHeader">Kamień-Papier-Nożyczki-Jaszczurka-Spock</h1>
            <ul className="nav">
                <li className="navLi"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Strona Główna</Link></li>
                <li className="navLi"><Link to="/game" style={{ textDecoration: 'none', color: 'black' }}>Gra</Link></li>
                <li className="navLi"><Link to="/rules" style={{ textDecoration: 'none', color: 'black' }}>Zasady</Link></li>
                <li className="navLi"><Link to="/score" style={{ textDecoration: 'none', color: 'black' }}>Tablica Wyników</Link></li>
            </ul>
        </div>

    )
}
export default Header