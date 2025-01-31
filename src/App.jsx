import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from './component/List'
import Layout from './component/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCard from './component/AddCard'
import Detail from './component/Detail'
import PeopleList from './component/PeopleList'

function App() {
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: true,  cacheTime:6000, }, mutations:{}}})
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<List/>
        },
        {
          path:'/People',
          element:<PeopleList/>
        },        
        {
          path:'/Detail/:id',
          element:<Detail/>
        },  
      ]
    }
  ])

  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
        
    </QueryClientProvider>
    </>
  )
}

export default App
