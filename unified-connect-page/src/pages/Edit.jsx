import { useNavigate, redirect, useLoaderData, Form } from 'react-router-dom';
import Banner from '../components/Banner';
import { createUser, updateUser } from '../data/users';

export async function loader({ params }) {
  const user = await createUser(params.userId);
  if (Object.keys(user).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'El user no fue encontrado'
    });
  }
  return user;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await updateUser(params.userId, data);
  return redirect('/apirest');
}

const Edit = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="columns p-5">
        <div className="column is-half">
          <button className="button is-info mb-5" onClick={() => navigate(-1)}>
            ← Regresar
          </button>
          <Form method="post">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" name="name" defaultValue={user?.name} />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" name="email" defaultValue={user?.email}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" name="password" defaultValue={user?.password} />
              </div>
            </div>
            <input type="submit" value="Edit" className="button" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
