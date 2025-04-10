import { useParams, Navigate, Link } from "react-router-dom";
import { getHeroById } from "../";

export const HeroPage = () => {
    
    const {heroId} = useParams();

    const hero = getHeroById(heroId);

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h1>{hero.superhero}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b> {hero.alter_ego}
                </li>
                <li className="list-group-item">
                    <b>Publisher:</b> {hero.publisher}
                </li>
                <li className="list-group-item">
                    <b>First Appearance:</b> {hero.first_appearance}
                </li>
                <li className="list-group-item">
                        <b>Characters:</b> {hero.characters}
                    </li>
                </ul>
                <li className="list-group-item">
                    <Link to="/marvel" className="btn btn-outline-primary">
                        Voltar
                    </Link>
                </li>
            </div>

        </div>
    )
}