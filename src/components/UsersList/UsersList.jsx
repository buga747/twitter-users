import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import React, { useEffect, useState } from 'react';
import { List, LoadMoreBtnStyled, Wrapper } from './UsersList.styled';
import PropTypes from 'prop-types';

export function UsersList({ users }) {
  const [usersToShow, setUsersToShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    setUsersToShow(users.slice(0, 3));
  }, [users]);

  const handleLoadMore = () => {
    setLoading(true);
    const currentUsersToShow = usersToShow.slice();
    const nextUsers = users.slice(
      currentUsersToShow.length,
      currentUsersToShow.length + 3
    );
    setUsersToShow([...currentUsersToShow, ...nextUsers]);
    setLoading(false);
    if (usersToShow.length + 3 >= users.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <Wrapper>
      {usersToShow && (
        <List>
          {usersToShow.map(user => (
            <UsersListItem key={user.id} twiUser={user} />
          ))}
        </List>
      )}
      {showLoadMore && (
        <LoadMoreBtnStyled onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load more users'}{' '}
        </LoadMoreBtnStyled>
      )}
    </Wrapper>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
