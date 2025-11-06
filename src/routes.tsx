import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

// Componente de rotas principais
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Profile />} />
  </Routes>
)

export default AppRoutes
