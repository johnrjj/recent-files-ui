import styled from 'styled-components';

const GridElement = styled.div`
  grid-column-end: ${props => (props.featured ? 'span 2' : 'span 1')};
  grid-row-end: ${props => (props.featured ? 'span 3' : 'span 2')};
  /* font-size: 14px;
  font-weight: bold;
  color: #929796;
  border-radius: 1rem;
  background-color: #eeeff9; */
`;

export { GridElement };
