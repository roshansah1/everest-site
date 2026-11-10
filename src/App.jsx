import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Rules from './pages/Rules.jsx'
import Team from './pages/Team.jsx'
import Apply from './pages/Apply.jsx'
import Store from './pages/Store.jsx'
import Live from './pages/Live.jsx'
import Guide from './pages/Guide.jsx'
import Privacy from './pages/Privacy.jsx'
import Calculator from './components/Calculator.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rules" element={<Rules />} />
        <Route path="team" element={<Team />} />
        <Route path="apply" element={<Apply />} />
        <Route path="store" element={<Store />} />
        <Route path="live" element={<Live />} />
        <Route path="guide" element={<Guide />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  )
}
