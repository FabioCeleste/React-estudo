import styled from 'styled-components';

export const PaginationItem = styled.div`
  margin: 10px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.isSelect ? 'blue' : 'black')};
  background: #aaa;
  width: 45px;
  height: 30px;
  &:hover {
    background: #888;
  }
`;

export const PaginationButton = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
