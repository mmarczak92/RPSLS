import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./home/Home";
import Game from "./game/Game";
import Rules from "./rules/Rules";
import Score from "./score/Score";



const App = () => {

  return (
  <BrowserRouter>
    <div className="App">
      <Header />
    </div>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/game" element={<Game />}></Route>
    <Route path="/rules" element={<Rules />}></Route>
    <Route path="/score" element={<Score />}></Route>
    </Routes>
  </BrowserRouter>
  );
}



export default App;
