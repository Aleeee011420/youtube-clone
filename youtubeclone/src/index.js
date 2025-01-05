import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Body  from './components/Body';
import {MainContainer} from './components/MainContainer';
import { Provider } from 'react-redux';
import {store} from './utils/store';
import {WatchPage} from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: "watch",
        element:<WatchPage/>
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  </Provider>
);
