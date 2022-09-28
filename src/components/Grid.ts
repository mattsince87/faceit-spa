import styled from 'styled-components';
// import theme from '../theme';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default Grid;
