import {} from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children : [
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>,
)
