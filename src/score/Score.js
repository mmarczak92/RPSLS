import "./score.css";
import {useEffect, useState} from 'react';

const Score = () => {
    // const [scoreTable, setScoreTable] = useState([])


// // 
//     useEffect(() => {
//         fetch('http://localhost:8000/Wyniki')
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             setScoreTable(data)
//         })
//     },[])


    return (  
    <div className="scoreBody">
        <h1 className="scoreHeader">Tablica wyników TBC</h1>
        <div>
<table>
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    )
}


export default Score