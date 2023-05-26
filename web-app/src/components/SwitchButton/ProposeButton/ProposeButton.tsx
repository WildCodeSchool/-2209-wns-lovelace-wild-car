import { Link } from 'react-router-dom';
import { Button } from './ProposeButton.styled';
import { TRAJECT_SUMMARY } from '../../../pages/paths';

const ProposeButton = () => {
  return (
    <Button>
      <Link to={TRAJECT_SUMMARY} style={{ textDecoration: 'none' }}>
        Je Propose
      </Link>
    </Button>
  );
};

export default ProposeButton;
