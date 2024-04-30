import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from "./features/About/About";
import Chairs from './features/Chair/Chair';
import store from './store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {   
    path: "/",
    element:  
      <Provider store={store}>
        <App/>
      </Provider>,
    children: [
      {   
        path: "/About",
        element: <About/>
      },
      {   
        path: "/Chair",
        element: <Chairs/>
      },
    ],
  },
]);


const root = ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()



