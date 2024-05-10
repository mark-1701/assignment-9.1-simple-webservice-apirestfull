import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../data/users';
import User from './User';

export function loader() {
  return getUsers();
}

const Table = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Password</th>
          <th>Departamento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
