import React, { useContext } from 'react';
import GamePlayContext from 'components/GamePlay/GamePlay.context';
import GlobalContext from 'global.context';
import UserListStyle from './Userlist.style';

import User from './User/User';

export default function UserList() {
  const { gameSocket } = useContext(GlobalContext);
  const { userList, painter } = useContext(GamePlayContext);
  const UserComponents = userList.map((user, index) => {
    const order = index + 1;
    const className = user.socketId === gameSocket.id ? 'you' : '';
    const drawer = user.socketId === painter;
    return (
      <User
        key={order}
        className={className}
        nickname={user.nickname}
        privileged={user.privileged}
        index={order}
        avatar={user.avatar}
        drawer={drawer}
      />
    );
  });

  return <UserListStyle>{UserComponents}</UserListStyle>;
}
