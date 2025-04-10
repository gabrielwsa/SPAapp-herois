import { useState, useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { heroes } from "../data/data";

export const HeroSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const searchText = searchParams.get('searchText') || '';

    const onInputChange = ({target}) => {
        const value = target.value;
        setSearchParams({ searchText: value });
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
    }

    const filteredHeroes = useMemo(() => {
        if (!searchText) return [];
        
        return heroes.filter(hero => 
            hero.superhero.toLowerCase().includes(searchText.toLowerCase()) ||
            hero.alter_ego.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [searchText]);

    return (
        <div className="row">
            <div className="col-5">
                <h4>Pesquisar</h4>
                <form onSubmit={onSearchSubmit}>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="searchText" 
                        placeholder="Buscar heroi"
                        value={searchText}
                        onChange={onInputChange}
                    />
                    <button type="submit" className="btn btn-outline-primary mt-2">Pesquisar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Resultados</h4>
                <hr />
                {!searchText ? (
                    <div className="alert alert-primary">
                        Search a Hero
                    </div>
                ) : filteredHeroes.length === 0 ? (
                    <div className="alert alert-danger">
                        Resultado não encontrado
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {filteredHeroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 