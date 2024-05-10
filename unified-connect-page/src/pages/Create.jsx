import { useNavigate, redirect, Form } from 'react-router-dom';
import Banner from '../components/Banner';
import { postUser } from '../data/users';

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  await postUser(data);
  return redirect('/apirest');
}

const Create = () => {
  const navigate = useNavigate();
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
                <input className="input" type="text" name="name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" name="email" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" name="password" />
              </div>
            </div>
            <input type="submit" value="Create" className="button" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Create;
