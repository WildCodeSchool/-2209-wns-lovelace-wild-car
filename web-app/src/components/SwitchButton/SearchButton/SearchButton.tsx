import { Link } from 'react-router-dom';
import { Button } from './SearchButton.styled';
import { HOME_PATH } from '../../../pages/paths';

const SearchButton = () => {
  return (
    <Button>
      <Link to={HOME_PATH}>je cherche</Link>
    </Button>
  );
};

export default SearchButton;
