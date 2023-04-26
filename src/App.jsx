import { Route, Routes } from 'react-router-dom'

import Analytic from './pages/dashboard/Analytic'

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Analytic />} />
      </Routes>
    </>
  )
}
