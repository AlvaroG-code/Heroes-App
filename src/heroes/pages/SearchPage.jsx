import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
    const navigate = useNavigate();

    // Extraer el query de la URL
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search); // { q: 'batman' }

    const heroes = getHeroesByName(q); // Obtener los héroes filtrados por el query

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return; // Validar el formulario

        navigate(`?q=${searchText}`); // Navegar a la ruta de búsqueda
    };

    return (
        <>
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Busca el Heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />

                    {q === "" ? (
                        <div className="alert alert-primary">
                            Busca un heroe y aparecerá aquí
                        </div>
                    ) : (
                        heroes.length === 0 && (
                            <div className="alert alert-danger animate__animated animate__fadeIn">
                                No hay resultados <b>{q}</b>
                            </div>
                        )
                    )}

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
