import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import NavBar from '../../components/NavBar';

import axios from '../../services/axios';
import history from '../../services/history';

import {
  Main,
  Pic,
  Fav,
  FavGames,
  FavTitle,
  Lists,
  BeatGames,
  Follow,
  UnFollow,
  RemoveFav,
  FollowsList,
  Follower,
} from './styles';

function Profile(props) {
  const userId = props.match.params.id;
  const userOn = useSelector((state) => state.auth.user);

  const [beats, setBeats] = useState([]);
  const [drops, setDrops] = useState([]);
  const [wishs, setWish] = useState([]);
  const [favs, setFav] = useState([]);
  const [follows, setFollows] = useState([]);
  const [following, setFollowing] = useState([]);
  const [myUser, setMyUser] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/show/${userId}`);
      const user = response.data;
      setBeats(user.beatGame);
      setDrops(user.dropGame);
      setWish(user.wantGame);
      setFav(user.favGame);
      setFollowing(user.following);
      setFollows(user.follower);

      if (userOn.id == userId) {
        setMyUser(true);
      }

      user.follower.map((follow) => {
        if (follow.id == userOn.id) {
          setIsFollow(true);
        } else {
          setIsFollow(false);
        }
      });
    }
    getData();
  }, [isFollow, refresh, userId]);

  async function handleFollow() {
    if (!isFollow) {
      await axios.get(`/follow/${userId}`);
      toast.success('Seguindo');
      setIsFollow(true);
    } else {
      await axios.get(`/follow/unfollow/${userId}`);
      toast.success('Paro de Seguir');
      setIsFollow(false);
    }
  }

  async function RemoveFavGame(id) {
    await axios.delete(`/fav/${id}`);
    setRefresh(!refresh);
  }
  async function RemoveBeat(id) {
    await axios.delete(`/beat/${id}`);
    setRefresh(!refresh);
  }
  async function RemoveDrop(id) {
    await axios.delete(`/drop/${id}`);
    setRefresh(!refresh);
  }
  async function RemoveWish(id) {
    await axios.delete(`/want/${id}`);
    setRefresh(!refresh);
  }

  return (
    <>
      <NavBar />
      <Main>
        <Pic />
        {!isFollow && (
          <Follow MyUser={myUser} isFollow={isFollow} onClick={handleFollow}>
            Seguir
          </Follow>
        )}
        {isFollow && (
          <UnFollow MyUser={myUser} isFollow={isFollow} onClick={handleFollow}>
            Seguindo
          </UnFollow>
        )}

        <FavTitle>Favoritos</FavTitle>
        <Fav>
          <FavGames>
            {favs.map((fav) => {
              return (
                <p>
                  {fav.game_name}
                  {myUser && (
                    <>
                      <RemoveFav onClick={() => RemoveFavGame(fav.id)}>
                        remover
                      </RemoveFav>
                    </>
                  )}
                </p>
              );
            })}
          </FavGames>
        </Fav>
        <Lists>
          <div>
            <p>Finalizados</p>
            <BeatGames>
              {beats.map((beat) => {
                return (
                  <>
                    <p>
                      {beat.game_name}
                      {myUser && (
                        <>
                          <RemoveFav onClick={() => RemoveBeat(beat.id)}>
                            remover
                          </RemoveFav>
                        </>
                      )}
                    </p>
                    <hr />
                  </>
                );
              })}
            </BeatGames>
          </div>
          <div>
            <p>Dropados</p>
            <BeatGames>
              {drops.map((drop) => {
                return (
                  <>
                    <p>
                      {drop.game_name}{' '}
                      {myUser && (
                        <>
                          <RemoveFav onClick={() => RemoveDrop(drop.id)}>
                            remover
                          </RemoveFav>
                        </>
                      )}
                    </p>
                    <hr />
                  </>
                );
              })}
            </BeatGames>
          </div>
          <div>
            <p>Desejos</p>
            <BeatGames>
              {wishs.map((wish) => {
                return (
                  <>
                    <p>
                      {wish.game_name}
                      {myUser && (
                        <>
                          <RemoveFav onClick={() => RemoveWish(wish.id)}>
                            remover
                          </RemoveFav>
                        </>
                      )}
                    </p>
                    <hr />
                  </>
                );
              })}
            </BeatGames>
          </div>
        </Lists>

        <FollowsList>
          <BeatGames>
            <h1>Seguindo</h1>
            {following.map((follow) => {
              return (
                <Follower onClick={() => history.push(`/user/${follow.id}`)}>
                  {follow.user_name}
                </Follower>
              );
            })}
          </BeatGames>
          <BeatGames>
            <h1>
              Seguidores
              {follows.map((follow) => {
                return (
                  <Follower onClick={() => history.push(`/user/${follow.id}`)}>
                    {follow.user_name}
                  </Follower>
                );
              })}
            </h1>
          </BeatGames>
        </FollowsList>
      </Main>
    </>
  );
}

export default Profile;
