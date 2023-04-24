import { statusFilters } from './constants';

export const getVisibleUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.notFollowed:
      return users.filter(user => user.isFollowed === false);
    case statusFilters.followed:
      return users.filter(user => user.isFollowed === true);
    default:
      return users;
  }
};
