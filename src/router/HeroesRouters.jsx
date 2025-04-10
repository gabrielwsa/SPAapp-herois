import { NavBar } from "../ui";
import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../heroes";

export const HeroesRouters = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />

                    {/* QUALQUER ROUTE QUE NAO ESTEJA DEFINIDO, VAI SER REDIRECIONADO PARA O MARVEL */}
                    <Route path="/*" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}