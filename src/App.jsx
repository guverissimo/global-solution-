import {} from 'react'
import Navegacao from './components/Navegacao'
import { Outlet } from 'react-router-dom'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
     <Navegacao />
     <Outlet />
     <Rodape />
    </>
  )
}

export default App
