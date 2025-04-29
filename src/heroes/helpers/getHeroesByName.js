import { heroes } from "../data/heroes"; // Importar los héroes desde el archivo de datos

export const getHeroesByName = (name = "") => {
    name = name.toLowerCase().trim(); // Normalizar el nombre a minúsculas y eliminar espacios

    if (name.length === 0) return [];

    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
