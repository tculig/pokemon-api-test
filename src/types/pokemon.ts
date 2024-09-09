import { z } from "zod";

const ExtendedPokemonDetailsSchema =
    z.object({
        abilities: z.array(z.object({
            ability: z.object({
                name: z.string(),
            })
        })),
        stats: z.array(z.object({
            base_stat: z.number(),
            effort: z.number(),
            stat: z.object({
                name: z.string(),
                url: z.string(),
            })
        })),
    });
const BasePokemonDetailsSchema =
    z.object({
        id: z.number(),
        sprites: z.object({
            front_default: z.string(),
        }),
        types: z.array(z.object({
            slot: z.number(),
            type: z.object({
                name: z.string(),
            })
        })),
    });
export const PokemonDetailsSchema = BasePokemonDetailsSchema.merge(ExtendedPokemonDetailsSchema);

export const PokemonSchema = z.object({
    name: z.string(),
    url: z.string(),
    details: PokemonDetailsSchema.optional(),
});

export const PokemonResponseSchema = z.object({
    count: z.number(),
    next: z.string().nullable(),
    previous: z.string().nullable(),
    results: z.array(PokemonSchema),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
export type PokemonResponse = z.infer<typeof PokemonResponseSchema>;
export type ExtendedPokemonDetails = z.infer<typeof ExtendedPokemonDetailsSchema>;
export type PokemonDetails = z.infer<typeof PokemonDetailsSchema>;


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
