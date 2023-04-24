import { useEffect, useState } from 'react';
import { fetchAllUsers, fetchUsers, updateUser } from 'services/TweetsApi';
import { BackButton } from 'components/BackButton/BackButton';
import { UsersList } from 'components/UsersList/UsersList';
import { Skeleton } from 'components/Skeleton/Skeleton';
import { statusFilterOptions, statusFilters } from 'utils/constants';
import { getVisibleUsers } from 'utils/getVisibleUsers';
import { Dropdown } from 'components/DropDownMenu/DropDownMenu';
import { Title, TitleWrapper } from './Tweets.styled';
import { ButtonUp } from 'components/ButtonUp/ButtonUp';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [allUsersLength, setAllUsersLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [filter, setFilter] = useState(statusFilters.all);
  const visibleUsers = getVisibleUsers(users, filter);

  // fetches all data to know all data length
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const users = await fetchAllUsers();
        setAllUsersLength(users.length);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // fetching data on paage change to load more
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page === 1) {
          setIsLoading(true);
        }
        const users = await fetchUsers(page);

        if (page === 1) {
          setUsers([...users]);
          setShowLoadMore(true);

          return;
        }
        setUsers(prev => [...prev, ...users]);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    if (users.length >= allUsersLength) {
      setShowLoadMore(false);
    }
  }, [users.length, allUsersLength]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleFollowClick = async user => {
    try {
      setButtonLoading(true);
      console.log(visibleUsers);
      const updatedUser = await updateUser(user);
      const index = users.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        const updatedUsers = [...users];
        updatedUsers[index] = updatedUser;
        setUsers(updatedUsers);
      }
    } catch (e) {
      setError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  const handleUpButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <BackButton text="Back to Home" />
      <Dropdown
        options={statusFilterOptions}
        value={filter}
        onSelect={handleFilterChange}
      />
      {error && 'Error, please reload the page'}
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {visibleUsers.length === 0 && filter === statusFilters.followed ? (
            <TitleWrapper>
              {' '}
              <Title>Follow more users</Title>
            </TitleWrapper>
          ) : (
            <UsersList
              users={visibleUsers}
              handleLoadMore={handleLoadMore}
              isLoading={isLoading}
              showLoadMore={showLoadMore}
              handleFollowClick={handleFollowClick}
              error={error}
              handleFilterChange={handleFilterChange}
              filter={filter}
              buttonLoading={buttonLoading}
            />
          )}
        </>
      )}

      {showButton && <ButtonUp handleUpButtonClick={handleUpButtonClick} />}
    </>
  );
};

export default Tweets;
