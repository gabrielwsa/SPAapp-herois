import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRouters } from './HeroesRouters'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        {/* QUALQUER ROTA QUE NÃO FOR LOGIN, VAI SER REDIRECIONADO PARA O HEROESROUTERS */}
        {/* <Route path="/*" element={<HeroesRouters />} /> */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRouters />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}