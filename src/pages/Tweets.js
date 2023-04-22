import { useEffect, useState } from 'react';
import { getUsers } from 'services/TweetsApi';
import { BackButton } from 'components/BackButton/BackButton';
import { UsersList } from 'components/UsersList/UsersList';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const users = await getUsers();
        setUsers(users);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <BackButton text="Back to Home" />{' '}
      {error && 'Error, please reload the page'}
      {isLoading && 'Loading, please wait'}
      <UsersList users={users} />
    </>
  );
};
