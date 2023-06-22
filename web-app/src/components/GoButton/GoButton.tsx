import { Button } from './GoButton.styled';

const GoButton = ({ handleClickSearch }: { handleClickSearch: () => void }) => {
  return <Button onClick={() => handleClickSearch()}>Go !</Button>;
};

export default GoButton;
