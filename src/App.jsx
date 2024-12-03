import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layouts/app-layout'
import { Landing } from './pages/Landing'
import { Auth } from './pages/Auth'
import { Dashboard } from './pages/Dashboard'
import { Links } from './pages/Links'
import { RedirectLink } from './pages/Redirect-link'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element: <Landing/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/auth",
        element:<Auth/>
      },
      {
        path:"/link/:id",
        element:<Links/>
      },
      {
        path:"/:id",
        element:<RedirectLink/>
      }
    ]
  }
])
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
