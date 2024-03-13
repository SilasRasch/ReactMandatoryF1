import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store';

import App from './App';
import './styles/styles.css'
import Drivers from './routes/Drivers';
import Champions from './routes/Champions';
import Teams from './routes/Teams';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/drivers",
    element: <Drivers/>,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/champions",
    element: <Champions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} /> 
    </React.StrictMode>
  </Provider>
);