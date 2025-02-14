import "./Board.css";
import React from 'react'
import Square from './square';

const Board = ({squares, onClick}) => {

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i) } />;
    };

    //함수형컴포넌트에서는 render는 별도 표기 없이 바로 리턴해서 사용함.
    return (
    <div className="board-wrapper">
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
    )
};

//export default class Board extends Component 대신
export default Board;

