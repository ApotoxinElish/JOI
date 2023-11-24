// Route configuration

import Layout from '@/pages/Layout' // src/pages/layout
import Login from '@/pages/Login'

import { createBrowserRouter } from 'react-router-dom'

// Configuring a route instance

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
