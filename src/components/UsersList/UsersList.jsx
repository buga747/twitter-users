import React from 'react';
import PropTypes from 'prop-types';
import { List, LoadMoreBtnStyled, Wrapper } from './UsersList.styled';
import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import { statusFilters } from 'utils/constants';

export const UsersList = ({
  users,
  handleLoadMore,
  isLoading,
  buttonLoading,
  showLoadMore,
  handleFollowClick,
  error,
  filter,
}) => {
  return (
    <Wrapper>
      {users && (
        <List>
          {users.map(user => (
            <UsersListItem
              key={user.id}
              twiUser={user}
              handleFollowClick={handleFollowClick}
              isLoading={isLoading}
              error={error}
              buttonLoading={buttonLoading}
            />
          ))}
        </List>
      )}{' '}
      {showLoadMore && filter === statusFilters.all && (
        <LoadMoreBtnStyled onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more users'}
        </LoadMoreBtnStyled>
      )}{' '}
    </Wrapper>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showLoadMore: PropTypes.bool.isRequired,
};
