import './App.css';
import {useState, useEffect} from 'react'
import Board from './Components/Board'




function App() {

  const [score, setScore] = useState(0);

  useEffect (() => console.log(score));

  return (
    <div className="App">
      <div>{score}</div>
      <Board handler={setScore}/>
    </div>
  );
}

export default App;
