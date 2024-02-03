import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/contacts/operations';
import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { selectIsLoading } from '../redux/contacts/selector';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Form />
      <h2 style={{ color: 'pink' }}>Contacts</h2>
      <Filter />
      <div>{isLoggedIn && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
