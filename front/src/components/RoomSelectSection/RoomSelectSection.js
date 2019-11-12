import React from 'react';
import RoomSelectSectionStyle from './RoomSelectSection.style';
import PublicRoom from './PublicRoom/PublicRoom';
import PrivateRoom from './PrivateRoom/PrivateRoom';

const RoomSelectSection = () => {
  return (
    <RoomSelectSectionStyle>
      <PublicRoom />
      <PrivateRoom />
    </RoomSelectSectionStyle>
  )
}

export default RoomSelectSection;