import { useEffect, useState } from 'react'
import '../styles/Tictactoe.css'

export const Tictactoe = () => {
  const [board, setBoard] = useState([""]);
  const [turn, setTurn] = useState("O");
  const [gameState, setGameState] = useState("playing");
  const [moves, setMoves] = useState(0); 

  useEffect(() => {
    generateBoard();
  }, []);

  async function generateBoard() {
    let board = [];
    for (let i = 0; i < 10; i++){
      board.push("");
    }
    setMoves(0);
    await setBoard(board);
    // drawBoard();
  };

  function drawBoard() {
    for (let i = 0; i < 10; i++) {
      let element = document.getElementById(i.toString());
      if (element) {
        element.innerHTML = board[i];
      }
    }
  };

  async function handleSquareClick (e: any) {
    let boardCopy = board;
    boardCopy[e.target.id] = turn;
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
    await setBoard(boardCopy);
    drawBoard();
    setMoves(moves + 1);
    checkWinOrDraw();
  };

  async function handleRestartClick() {
    await generateBoard();
    drawBoard();
  };

  function checkWinOrDraw() {
    if (rowMatch() || columnMatch() || diagonalMatch()) {
      setGameState("won");
    }
    else if (moves === 8) {
      setGameState("draw");
    }
    else {
      setGameState("playing");
    }
  };

  function rowMatch() {
    return false;
  }

  function columnMatch() {
    return false;
  }

  function diagonalMatch() {
    return false;
  }

  function gameMessage() {
    if (gameState === "playing") {
      return "Player " + turn + "'s turn";
    } else if (gameState === "won") {
      return "Player " + turn + " won!";
    } else if (gameState === "draw") {
      return "Draw! Please restart game.";
    }
  }

  return (
    <div className='page-container'>
      Tic Tac Toe
      <button onClick={() => handleRestartClick()}>
        Restart Game 
      </button>
      <div className='game-message' id='game-message'>
        {gameMessage()}
      </div>
      <div className='board-container'>
        <div className='square sqaure-one' key="1" id='1' onClick={handleSquareClick}></div>
        <div className='square sqaure-two' key="2" id='2' onClick={handleSquareClick}></div>
        <div className='square sqaure-three' key="3" id='3' onClick={handleSquareClick}></div>
        <div className='square sqaure-four' key="4" id='4' onClick={handleSquareClick}></div>
        <div className='square sqaure-five' key="5" id='5' onClick={handleSquareClick}></div>
        <div className='square sqaure-six' key="6" id='6' onClick={handleSquareClick}></div>
        <div className='square sqaure-seven' key="7" id='7' onClick={handleSquareClick}></div>
        <div className='square sqaure-eight' key="8" id='8' onClick={handleSquareClick}></div>
        <div className='square sqaure-nine' key="9" id='9' onClick={handleSquareClick}></div>
      </div>
    </div>
  )
}
