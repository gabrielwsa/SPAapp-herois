import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRouters } from './HeroesRouters'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } /> */}
        {/* OUTRA FORMA DE FAZER ISSO */}

        {/* COM ISSO PODEMOS DETERMINAR VARIAS ROUTES PUBLICAS */}
        <Route path="login/*" element={
          // SIGNIFICA QUE QUALQUER ROUTE QUE INICIE COM /LOGIN VAI SER RENDERIZADA
          // E AQUI DENTRO PODEMOS TER VARIAS ROUTES PUBLICAS
          <PublicRoute>
            <Routes>
              {/* QUALQUER ROTA QUE NÃO FOR LOGIN, VAI SER REDIRECIONADO PARA O HEROESROUTERS */}
              <Route path="/*" element={<LoginPage />} />
            </Routes>
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