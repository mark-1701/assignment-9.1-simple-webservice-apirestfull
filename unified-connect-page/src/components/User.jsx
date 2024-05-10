import { useNavigate, Form, redirect } from 'react-router-dom';
import { deleteUser } from '../data/users';

export async function action({ params }) {
  await deleteUser(params.userId);
  return redirect('/apirest');
}

const User = ({ user }) => {
  const navigate = useNavigate();
  const { id, name, email, password, departament_id } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td>{departament_id?.name}</td>
      <td className="is-flex is-justify-content-center">
        <button
          type="button"
          className="button is-warning js-modal-trigger m-1"
          data-target="modal-js-example"
          onClick={() => {
            navigate(`user/${id}/edit`);
          }}
        >
          Editar
        </button>
        <Form
          method="post"
          action={`user/${id}/delete`}
          onSubmit={e => {
            if (!confirm('Deseas eliminar este registro?')) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="button is-danger m-1">
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default User;
