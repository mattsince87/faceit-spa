import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Play';
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
  }

  h6 {
    font-size: 1em;
    margin: 0 0 20px 0;
  }

  ul {
    margin: 0 0 10px 0;
    padding: 0;
    list-style-type: none;
  }

  .actionBar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .center {
    text-align: center;
  }
`;

export default GlobalStyle;
