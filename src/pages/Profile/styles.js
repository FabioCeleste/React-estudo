import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Main = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 75px;
`;
export const Pic = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: black;
`;
export const Fav = styled.div`
  padding-top: 35px;
`;
export const FavGames = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  font-size: 20px;
`;
export const FavTitle = styled.h1`
  padding-top: 35px;
  font-size: 35px;
`;

export const Lists = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  padding-top: 75px;
  font-size: 35px;
`;

export const BeatGames = styled.div`
  font-size: 15px;
  max-width: 300px;
`;

export const Follow = styled.button`
  display: ${(props) => (props.MyUser ? 'none' : 'block')};
  margin-top: 45px;
  height: 35px;
  width: 115px;
  text-align: center;
  &:hover {
    background: ${colors.primaryDarkColor};
  }
`;
export const UnFollow = styled.button`
  display: ${(props) => (props.MyUser ? 'none' : 'block')};
  margin-top: 45px;
  background: ${colors.primaryDarkColor};
  height: 35px;
  width: 115px;
  text-align: center;
  &:hover {
    background: ${colors.errorColor};
  }
`;

export const RemoveFav = styled.span`
  font-size: 15px;
  color: ${colors.errorColor};
  cursor: pointer;
`;

export const FollowsList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  padding-top: 75px;
  font-size: 35px;
`;
export const Follower = styled.p`
  cursor: pointer;
  font-size: 20px;
`;
