import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Pesca from './pages/pesca.jsx'
import Mineria from './pages/mineria.jsx'
import Petroleo from './pages/petroleo.jsx'
import AguaDulce from './pages/aguaDulce.jsx'

function App() {
  return (
    <Routes>
      <Route path="/MalvinasArgentinas" element={<MainPage />} />
      <Route path="/MalvinasArgentinas/pesca" element={<Pesca />} />
      <Route path="/MalvinasArgentinas/mineria" element={<Mineria />} />
      <Route path="/MalvinasArgentinas/petroleo" element={<Petroleo />} />
      <Route path="/MalvinasArgentinas/aguaDulce" element={<AguaDulce />} />
    </Routes>
  )
}

export default App
