import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './components/Home/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blog from './components/Blog/Blog.jsx'
import DetailsJob from './components/Home/DetailsJob/DetailsJob.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'detailsJob/:id',
        element: <DetailsJob />,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
        // loader: () => fetch('jobs.json')
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
