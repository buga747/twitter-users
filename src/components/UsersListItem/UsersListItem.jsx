import React, { useState, useEffect } from 'react';
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

export function UsersListItem({ twiUser }) {
  const [twitterUser, setTwitterUser] = useState(twiUser);
  const { id, followers, name, tweets, avatar } = twitterUser;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`isFollowing-${id}`)) || false
  );
  const followersString = addCommasToNumber(followers);

  useEffect(() => {
    localStorage.setItem(`isFollowing-${id}`, JSON.stringify(isFollowing));
  }, [id, isFollowing]);

  const handleFollowClick = () => {
    if (!isFollowing) {
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers + 1,
      }));
      setIsFollowing(true);
    } else {
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers - 1,
      }));
      setIsFollowing(false);
    }

    const updateData = async () => {
      try {
        setIsLoading(true);
        await updateUser(twitterUser);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    updateData();
  };

  return (
    <Item>
      <Logo src={logo} alt="logo" width="76" />
      <img src={image} alt="bg-img" width="308" />
      <AvatarWrapper>
        <img src={avatar} alt={name} width="62" />
      </AvatarWrapper>
      <InfoWrapper>
        <InfoText> {tweets} tweets</InfoText>
        <InfoText> {followersString} followers</InfoText>
      </InfoWrapper>{' '}
      {error ? (
        <p>Error</p>
      ) : (
        <FollowButton
          type="button"
          disabled={isLoading}
          name="follow"
          onClick={handleFollowClick}
          isFollowing={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowButton>
      )}
    </Item>
  );
}
