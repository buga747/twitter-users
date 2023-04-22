import React, { useState } from 'react';
import { Item, Logo } from './UserListItem.styled';
import image from '../../assets/images/bg-img.png';
import logo from '../../assets/images/logo.png';
import { updateUser } from 'services/TweetsApi';

export function UsersListItem({ user }) {
  const [twitterUser, setTwitterUser] = useState(user);
  const { id, followers, name, tweets, avatar } = twitterUser;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`isFollowing-${id}`)) || false
  );

  const handleFollowClick = () => {
    if (!isFollowing) {
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers + 1,
      }));
      setIsFollowing(true);
      localStorage.setItem(
        `isFollowing-${twitterUser.id}`,
        JSON.stringify(true)
      );
    } else {
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers - 1,
      }));
      setIsFollowing(false);
      localStorage.setItem(
        `isFollowing-${twitterUser.id}`,
        JSON.stringify(false)
      );
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
      <p> {name}</p>
      <p> {followers}</p>
      <p> {tweets}</p>
      <img src={avatar} alt={name} />
      {error ? (
        <p>Error</p>
      ) : (
        <button
          type="button"
          disabled={isLoading}
          name="follow"
          onClick={handleFollowClick}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      )}
    </Item>
  );
}
