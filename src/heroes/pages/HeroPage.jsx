import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHerobyId";
import { useMemo } from "react";

export const HeroPage = () => {
    const { id } = useParams();

    const hero = useMemo(() => getHeroById(id), [id]); // Memoriza el resultado de getHeroById para evitar

    const navigate = useNavigate();

    const onNavegateBack = () => {
        navigate(-1); // Navega hacia atrás en el historial
    };

    if (!hero) {
        return <Navigate to="/marvel" />; // Redirige a la página de Marvel si no se encuentra el héroe
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>Primera aparición:</b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={onNavegateBack}
                >
                    Volver
                </button>
            </div>
        </div>
    );
};
