export interface Pokemon {
    name: string;
    url: string;
    details?: PokemonDetails
}

export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export interface PokemonDetails {
    id: number;
    sprites: {
        front_default: string;
    };
    types: Array<{
        slot: number;
        type: {
            name: string;
        };
    }>;
}

export const pokemonTypes = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"] as const;
export type PokemonType = (typeof pokemonTypes)[number];
