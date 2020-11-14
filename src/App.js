import './App.css';
import {useState, useEffect} from 'react'
import Board from './Components/Board'




function App() {

  const [score, setScore] = useState(0);
  const [hiscore, setHiscore] = useState(0);

  useEffect (() => {
    if (score > hiscore) {
      setHiscore(score);
    }
  }, [score, hiscore]);

  return (
    <div className="App">
      <div>{score}</div>
      <div>{hiscore}</div>
      <Board handler={setScore}/>
    </div>
  );
}

export default App;
