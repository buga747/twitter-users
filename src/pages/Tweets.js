import { useEffect, useState } from 'react';
import { getUsers } from 'services/TweetsApi';
import { BackButton } from 'components/BackButton/BackButton';
import { UsersList } from 'components/UsersList/UsersList';
import Skeleton from 'components/Skeleton/Skeleton';

// const statusFilters = {
//   all: 'all',
//   followed: 'followed',
//   notFollowed: 'notFollowed',
// };

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setShowSkeleton(true);
        const users = await getUsers();
        setUsers(users);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
        setShowSkeleton(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BackButton text="Back to Home" />{' '}
      {error && 'Error, please reload the page'}
      {isLoading || showSkeleton ? <Skeleton /> : <UsersList users={users} />}
    </>
  );
};

export default Tweets;
