import React from "react";
import { Link } from "react-router-dom";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

const alterEgo = (alter_ego, characters) => {
    if (alter_ego === characters) return <></>;


    return <p className="card-text">{alter_ego}</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {


    const heroImg = `../../public/assets/heroes/${id}.jpg`;

    return(
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImg} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            {/* {alterEgo(alter_ego, characters)} */}
                            {/* {
                                (alter_ego !== characters) && <p className="card-text">{characters}</p>
                            } */}
                            <alterEgo alter_ego={alter_ego} characters={characters} />
                            <p className="card-text">{characters}</p>
                            <p className="card-text text-muted">{first_appearance}</p>
                            <Link to={`/hero/${id}`}>
                                <button className="btn btn-outline-primary">
                                    Mais informacións
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}