import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Pesca from './pages/pesca.jsx'
import Mineria from './pages/mineria.jsx'
import Petroleo from './pages/petroleo.jsx'
import AguaDulce from './pages/aguaDulce.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/pesca" element={<Pesca />} />
      <Route path="/mineria" element={<Mineria />} />
      <Route path="/petroleo" element={<Petroleo />} />
      <Route path="/aguaDulce" element={<AguaDulce />} />
    </Routes>
  )
}

export default App
