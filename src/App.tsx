import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'

const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/quiz/:category", element: <Quiz /> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App
