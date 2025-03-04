import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactConfetti from 'react-confetti';
import { Board } from './components/Board';
import { Status } from './components/Status';
import { ResetButton } from './components/ResetButton';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const GameContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

type Player = 'X' | 'O';
type BoardState = (Player | null)[];

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateWinner = (squares: BoardState): Player | 'draw' | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (!squares.includes(null)) {
      return 'draw';
    }

    return null;
  };

  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    setWinner(newWinner);

    if (newWinner && newWinner !== 'draw') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setShowConfetti(false);
  };

  return (
    <AppContainer>
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <Title>Tic Tac Toe</Title>
      <GameContainer>
        <Status winner={winner} currentPlayer={currentPlayer} />
        <Board squares={board} onSquareClick={handleSquareClick} />
        <ResetButton onReset={handleReset} />
      </GameContainer>
    </AppContainer>
  );
}

export default App;
