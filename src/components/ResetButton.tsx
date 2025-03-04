import styled from 'styled-components';

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

type ResetButtonProps = {
  onReset: () => void;
};

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  return <Button onClick={onReset}>Reset Game</Button>;
}; 