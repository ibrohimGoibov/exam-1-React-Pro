import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/layout'
import Home from './components/home/home'
import Zustand from './components/zustand/zustand'
import ById from './components/zustand/byId'
import Jotai from './components/jotai/jotai'
import Mobx from './mobx/mobx'
import JotaiById from './components/jotai/jotaiById'
import About from './components/about/about'
import AboutById from './components/about/aboutById'
import Sync from './components/zustand/sync'
import SyncById from './components/zustand/syncById'
import SyncJotai from './components/jotai/syncJotai'
import Counter from './features/counter/Counter'
import Id from './features/counter/id'
import Todo from './features/counter/todo'
import TodoInfo from './features/counter/todoInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/zustand', element: <Zustand /> },
      { path: '/byId/:id', element: <ById /> },
      { path: '/jotai', element: <Jotai /> },
      { path: '/mobx', element: <Mobx /> },
      { path: '/jotaiById/:id', element: <JotaiById /> },
      { path: '/about', element: <About /> },
      { path: '/aboutById/:id', element: <AboutById /> },
      { path: '/sync', element: <Sync /> },
      { path: '/syncById/:id', element: <SyncById /> },
      { path: '/syncJotai', element: <SyncJotai /> },
      { path: '/counter', element: <Counter/> },
      { path: '/id/:id', element: <Id/> },
      { path: '/todo', element: <Todo /> },
      { path: '/todoInfo/:id', element: <TodoInfo /> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
