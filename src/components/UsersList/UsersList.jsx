import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import React from 'react';
import { List } from './UsersList.styled';

export function UsersList({ users }) {
  return (
    <List>
      {users.map(user => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </List>
  );
}
