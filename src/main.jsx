import {} from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Pedido from './pages/Pedido.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children : [
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/dashboard', element: <Dashboard/>},
      {path: '/pedido', element: <Pedido/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>,
)
