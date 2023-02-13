import PropTypes from 'prop-types';

import { StyledFilterPanel, InputRadio } from './FilterPanel.styled';
import { StyledButton } from '../UI/Button/Button';

const filterValues = ['all', 'movie', 'series', 'episode'];

const FilterPanel = ({ type, onFilterChange }) => {
  return (
    <StyledFilterPanel>
      {filterValues.map(value => (
        <label key={value}>
          <InputRadio
            type='radio'
            name='type'
            value={value}
            checked={type === value}
            onChange={onFilterChange}
          />
          <StyledButton as='span'>{value}</StyledButton>
        </label>
      ))}
    </StyledFilterPanel>
  );
};

FilterPanel.propTypes = {
  type: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterPanel;
