import PropTypes from 'prop-types';
import { Wrap } from '../Filter/Filter.styled';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ handelSearch }) => {
  return (
    <Wrap>
      <Label>Find contacts by name</Label>
      <Input type="text" id="filter" onInput={handelSearch} />
    </Wrap>
  );
};

Filter.propTypes = {
  handelSearch: PropTypes.func.isRequired,
};

export default Filter;
