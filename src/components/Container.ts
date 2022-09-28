import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 24px;
  }
`;

export default Container;
