import React, { useState } from 'react';
import { Item, Logo } from './UserListItem.styled';
import image from '../../assets/images/bg-img.png';
import logo from '../../assets/images/logo.png';
import { updateUser } from 'services/TweetsApi';

export function UsersListItem({ user }) {
  const [twitterUser, setTwitterUser] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = evt => {
    const button = evt.target;

    if (button.name.toLowerCase() === 'follow') {
      button.name = 'following';
      button.textContent = 'Following';
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers + 1,
      }));
    } else if (button.name.toLowerCase() === 'following') {
      button.name = 'follow';
      button.textContent = 'Follow';
      setTwitterUser(prev => ({
        ...prev,
        followers: prev.followers - 1,
      }));
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
      <p> {twitterUser.name}</p>
      <p> {twitterUser.followers}</p>
      {error ? (
        <p>Error</p>
      ) : (
        <button
          type="button"
          disabled={isLoading}
          name="follow"
          onClick={handleClick}
        >
          Follow
        </button>
      )}
    </Item>
  );
}
