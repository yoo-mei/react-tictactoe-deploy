import { useState } from "react";
import "./App.css"
import Board from "./component/Board";
function App() {

  //state설정 constructor없이 getter / setter순서로 작성 후 useState(초기값값)
  // 사용할때는 this.state없이 그냥 호출
  const [history, setHistory] = useState([{squares:Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) =>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let idx = 0; idx < lines.length; idx++) {
        const [a,b,c] = lines[idx];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        };
    };
    return null;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;

  if(winner){
      status = 'Winner ' + winner;
  }else{
      status = `Next Player ${xIsNext ? "X" : "O"}`;
  };

  const handleClick = (i) => {
    const newHistoy = history.slice(0, stepNumber + 1);
    const newCurrent = newHistoy[newHistoy.length - 1];
    const newSquares = newCurrent.squares.slice();

    //winner가 있거나 이미 클릭한 box일 경우 
    if(calculateWinner(newSquares) || newSquares[i]){
        return;
    };
    
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistoy,{squares : newSquares}]);
    setXIsNext(previouseState => !previouseState) //setXIsNext(!xIsNext)로 사용하면 해당 함수 다 끝나기 전에는 안바뀌고 연산 역시 한번 들어온 값이 텀 끝날때 까지 유지됨 추가연산x;

    setStepNumber(newHistoy.length);
  };

  const moves = history.map((step, move) => {
    const desc = move ? 'Go To Move #' + move : 'Go To Game Start';

    return (
      <li key={move}>
        <button type="button" className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  });

  const jumpTo = (step) => {
    console.log(step)
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <h1>Tic Tac Toe</h1>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
      <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
