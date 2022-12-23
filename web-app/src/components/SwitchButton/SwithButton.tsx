import ProposeButton from './ProposeButton/ProposeButton';
import SearchButton from './SearchButton/SearchButton';
import { Centered } from './SwitchButton.styled';

const SwitchButton = () => {
  return (
    <Centered>
      <ProposeButton />
      <SearchButton />
    </Centered>
  );
};

export default SwitchButton;
