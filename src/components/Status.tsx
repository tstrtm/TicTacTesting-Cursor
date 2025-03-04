import styled from 'styled-components';

const StatusContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  min-height: 2.5rem;
`;

type Player = 'X' | 'O';
type StatusProps = {
  winner: Player | 'draw' | null;
  currentPlayer: Player;
};

export const Status = ({ winner, currentPlayer }: StatusProps) => {
  let status: string;

  if (winner) {
    status = winner === 'draw' 
      ? "It's a draw!" 
      : `Player ${winner} wins!`;
  } else {
    status = `Player ${currentPlayer}'s turn`;
  }

  return <StatusContainer>{status}</StatusContainer>;
}; 