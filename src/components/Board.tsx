import styled from 'styled-components';
import { Square } from './Square';

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 2rem 0;
`;

type Player = 'X' | 'O';
type BoardProps = {
  squares: (Player | null)[];
  onSquareClick: (index: number) => void;
};

export const Board = ({ squares, onSquareClick }: BoardProps) => {
  return (
    <BoardGrid>
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </BoardGrid>
  );
}; 