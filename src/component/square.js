import "./Square.css";
import React from 'react'

//props는 매개변수로 props를 넣고 this를 삭제하는 방법
//디스트럭쳐링
const Square = ({onClick, value}) => {
    return(
        <button className="square" onClick= { onClick }>
            {value}
        </button>
    )
};

export default Square;