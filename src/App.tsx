import './App.css'
import Layout from './shared/Layout/Layout'
import { Routes, Route } from 'react-router'
import Profile from './pages/Profile/Profile'
import Catalogue from './pages/Catalogue/Catalogue'
import Cart from './pages/Cart/Cart'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path='catalogue' element={<Catalogue />} />
          <Route path='cart' element={<Cart />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
