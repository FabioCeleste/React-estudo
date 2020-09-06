import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Profile = styled.div`
  flex: 1 1 400px;
  height: 100vh;
  width: 30%;
  background: blue;
  color: white;
`;
export const Main = styled.div`
  flex: 2 1 400px;
  height: 100vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  padding: 35px 0;
`;

export const Letters = styled.ul`
  display: flex;
`;

export const Letter = styled.li`
  padding: 0 15px;
  font-size: 25px;
  cursor: pointer;

  &:hover{
    color: #777;
    font-size: 35px;
  }
[`;

export const GamesMenuList = styled.ul`
  display: flex;
`;
export const GameMenuItem = styled.li`
  padding-right: 15px;
`;

export const GameItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
`;

export const GameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
`;

export const GameName = styled.p`
  padding-right: 180px;
  padding-bottom: 15px;
`;

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
