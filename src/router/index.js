// Route configuration

import Home from '@/pages/Home' // src/pages/layout
import Login from '@/pages/Login'
import Chat from '@/pages/Chat'
import Create from '@/pages/Create'

import { createBrowserRouter } from 'react-router-dom'

// Configuring a route instance

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/create',
    element: <Create />,
  },
])

export default router
