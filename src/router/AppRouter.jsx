import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DCPage } from '../heroes'
import { LoginPage } from '../auth'
import { NavBar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/marvel" />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
    </Routes>
    </>
  )
}