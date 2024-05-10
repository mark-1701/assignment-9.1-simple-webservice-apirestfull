export async function getUsers() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  console.log(result.data);
  return result.data;
}

export async function createUser(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const result = await response.json();
  return result.data;
}

export async function postUser(data) {
  try {
    const result = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await result.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(id, data) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    });
    await result.json();
  } catch (error) {
    console.log(error);
  }
}