import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AvatarWrapper,
  FollowButton,
  InfoText,
  InfoWrapper,
  Item,
  Logo,
} from './UserListItem.styled';
import logo from '../../images/logo.png';
import image from '../../images/bg-img.png';
import { addCommasToNumber } from 'utils/addCommasToNumber';
import { TailSpin } from 'react-loader-spinner';

export function UsersListItem({ twiUser, handleFollowClick }) {
  const { followers, user, tweets, avatar, isFollowed } = twiUser;
  const followersString = addCommasToNumber(followers);
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const updatedUser = {
      ...twiUser,
      followers: isFollowed ? followers - 1 : followers + 1,
      isFollowed: !isFollowed,
    };

    try {
      await handleFollowClick(updatedUser);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Item>
      <Logo src={logo} alt="logo" width="76" />
      <img src={image} alt="bg-img" width="308" />
      <AvatarWrapper>
        <img src={avatar} alt={user} width="62" />
      </AvatarWrapper>
      <InfoWrapper>
        <InfoText> {tweets} tweets</InfoText>
        <InfoText> {followersString} followers</InfoText>
      </InfoWrapper>
      <FollowButton
        type="button"
        disabled={isLoading}
        name="follow"
        onClick={handleClick}
        isFollowing={isFollowed}
      >
        {isLoading ? (
          <TailSpin
            height={24}
            width={24}
            color="#110202"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#3b763a"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <> {error ? 'Error' : isFollowed ? 'Following' : 'Follow'}</>
        )}
      </FollowButton>
    </Item>
  );
}

UsersListItem.propTypes = {
  twiUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isFollowed: PropTypes.bool.isRequired,
  }).isRequired,
};
