import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import APIRest from './pages/APIRest.jsx';
import Create from './pages/Create.jsx';
import Edit from './pages/Edit.jsx';
import 'bulma/css/bulma.min.css';
import './index.css';
import './styles.css';
import { loader as usersLoader } from './components/Table';
import { action as createUserAction } from './pages/Create';
import { action as deleteUserAction } from './components/User';
import { loader as createUserLoader } from './pages/Edit';
import { action as updateUserAction } from './pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />
        // loader: clientesLoader,
        // error boundaries
        // errorElement: <ErrorPage />
      },
      {
        path: '/apirest',
        element: <APIRest />,
        loader: usersLoader
        // errorElement: <ErrorPage />
      },
      {
        path: '/apirest/create',
        element: <Create />,
        loader: usersLoader,
        action: createUserAction
        // errorElement: <ErrorPage />
      },
      {
        path: '/apirest/user/:userId/edit',
        element: <Edit />,
        loader: createUserLoader,
        action: updateUserAction,
      },
      {
        path: '/apirest/user/:userId/delete',
        action: deleteUserAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
