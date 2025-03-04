import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;

  &:hover {
    background: #f8f9fa;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Symbol = styled.span<{ $player: 'X' | 'O' }>`
  color: ${props => props.$player === 'X' ? '#e74c3c' : '#3498db'};
  animation: ${fadeIn} 0.3s ease-out;
`;

type Player = 'X' | 'O';
type SquareProps = {
  value: Player | null;
  onClick: () => void;
};

export const Square = ({ value, onClick }: SquareProps) => {
  return (
    <SquareButton onClick={onClick} disabled={value !== null}>
      {value && <Symbol $player={value}>{value}</Symbol>}
    </SquareButton>
  );
}; 