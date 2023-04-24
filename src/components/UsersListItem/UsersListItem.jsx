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
import logo from '../../assets/images/logo.png';
import image from '../../assets/images/bg-img.png';
import { updateUser } from 'services/TweetsApi';
import { addCommasToNumber } from 'utils/addCommasToNumber';
import { TailSpin } from 'react-loader-spinner';

export function UsersListItem({ twiUser }) {
  const [twitterUser, setTwitterUser] = useState(twiUser);
  const { followers, user, tweets, avatar, isFollowed } = twitterUser;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const followersString = addCommasToNumber(followers);

  const handleFollowClick = async () => {
    const updatedUser = {
      ...twitterUser,
      followers: isFollowed ? followers - 1 : followers + 1,
      isFollowed: !isFollowed,
    };
    setIsLoading(true);
    try {
      await updateUser(updatedUser);
      setTwitterUser(updatedUser);
    } catch (e) {
      setError(true);
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
        onClick={handleFollowClick}
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
