import { NavBar } from "../ui";
import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DCPage } from "../heroes";

export const HeroesRouters = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/marvel" />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />
            </Routes>
        </>
    )
}