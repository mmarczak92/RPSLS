import "./score.css";
import { useEffect, useState } from "react";
import SimpleTableComponent from "reactjs-simple-table"
import TBBT from "./tbbt.png"

const Score = () => {
  const url = "http://localhost:8000/Wyniki"
  const [data, setData] = useState([]);

  const getScores = () => {
    fetch(url).then(resp => resp.json()).then(resp => setData(resp))
  }

  useEffect(() => {
    getScores()
  }, [])




  const columns = [
    {
      field: "id",
      headerName: "Gra",
    },
    {
      field: "wynik",
      headerName: "Liczba wygranych",
    },
  ];

  return (
    <div className="scoreBody">
      <h1 className="scoreHeader">Tablica wyników </h1>

      <div className="ScoreTable">
        <SimpleTableComponent
          columns={columns}
          list={data}
        />
      </div>
      <img className="scorePicture" src={TBBT} alt="Ekipa TBBT" />
    </div>
  );
};

export default Score;
