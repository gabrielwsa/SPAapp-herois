import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRouters } from './HeroesRouters'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        {/* QUALQUER ROTA QUE NÃO FOR LOGIN, VAI SER REDIRECIONADO PARA O HEROESROUTERS */}
        <Route path="/*" element={<HeroesRouters />} />

      </Routes>
    </>
  )
}