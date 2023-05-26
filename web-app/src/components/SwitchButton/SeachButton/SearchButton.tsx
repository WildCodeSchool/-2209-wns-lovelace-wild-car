import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../pages/paths';
import { Button } from './SearchButton.styled';

const SearchButton = () => {
  return (
    <Button>
      {' '}
      <Link to={HOME_PATH} style={{ textDecoration: 'none' }}>
        je cherche
      </Link>{' '}
    </Button>
  );
};

export default SearchButton;
