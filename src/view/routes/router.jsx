import { createHashRouter } from 'react-router-dom'
import Nav from '../nav/Nav.jsx'
import Landing from '../Landing/Landing.jsx'
import Catalogo from '../Catalogo/Catalogo.jsx'
import Login from '../Login/Login.jsx'

export const router = createHashRouter([
  {
    path: '/',
    Component: Nav,
    children: [
      {
        path: '',
        Component: Landing
      },
      {
        path: '/Catalogo',
        Component: Catalogo
      },
      {
        path: '/Login',
        Component: Login
      }
    ]
  }
])
