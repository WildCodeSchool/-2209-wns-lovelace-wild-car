import ProposeButton from './SeachButton/SearchButton';
import SearchButton from './ProposeButton/ProposeButton';
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
