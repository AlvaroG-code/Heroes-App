import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id); // find() devuelve el primer elemento que cumple con la condición
    // Si no encuentra el elemento, devuelve undefined
};
