import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  background: ${theme.palette.background.base};
  padding: ${theme.spacing(2)};
  border: none;
  color: ${theme.palette.text.primary};

  &[type='search'] {
    appearance: none;
    border: 1px solid ${theme.palette.background.base};
    outline: none;
    min-width: 180px;

    &:focus {
      border: 1px solid ${theme.palette.background.alt1};
    }

    @media screen and (max-width: 768px) {
      min-width: auto;
      max-width: 150px;
    }
  }
`;

export default Input;
