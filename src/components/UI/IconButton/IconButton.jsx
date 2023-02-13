import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  background-color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const IconButton = ({ children, type = 'button', ...allyProps }) => {
  return (
    <StyledIconButton type={type} {...allyProps}>
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
