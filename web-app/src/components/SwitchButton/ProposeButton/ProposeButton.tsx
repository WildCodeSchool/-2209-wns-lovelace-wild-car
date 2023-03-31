import { Link } from 'react-router-dom';
import { TRAJECT_SUMMARY } from '../../../pages/paths';
import { Button } from './ProposeButton.styled';

const ProposeButton = () => {
  return <Button> <Link to={TRAJECT_SUMMARY}>Je Propose </Link> </Button>;
};

export default ProposeButton;
