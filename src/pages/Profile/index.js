import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import axios from '../../services/axios';

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
} from './styles';

function Profile(props) {
  const userId = props.match.params.id;
  const userOn = useSelector((state) => state.auth.user);

  const [beats, setBeats] = useState([]);
  const [drops, setDrops] = useState([]);
  const [wishs, setWish] = useState([]);
  const [favs, setFav] = useState([]);
  const [myUser, setMyUser] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/show/${userId}`);
      const user = response.data;
      setBeats(user.beatGame);
      setDrops(user.dropGame);
      setWish(user.wantGame);
      setFav(user.favGame);

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
  }, [isFollow]);

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

  return (
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
            return <p>{fav.game_name}</p>;
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
                  <p>{beat.game_name}</p>
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
                  <p>{drop.game_name}</p>
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
                  <p>{wish.game_name}</p>
                  <hr />
                </>
              );
            })}
          </BeatGames>
        </div>
      </Lists>
    </Main>
  );
}

export default Profile;
