
import { PokemonDetailsSchema, PokemonResponseSchema, type PokemonDetails, type PokemonResponse } from 'types/pokemon';
import { useInfiniteQuery } from '@tanstack/react-query';
import { promiseAllSettledWithRetry } from 'utils';

const usePokemonList = () =>
    useInfiniteQuery({
        queryKey: ['pokemonList'],
        queryFn: async ({ pageParam: pageUrl }): Promise<PokemonResponse> => {
            const pokemonData = await fetch(pageUrl).then(async (res) =>
                await res.json() as PokemonResponse,
            )
            const pokemonDataParsed = PokemonResponseSchema.parse(pokemonData);

            const detailedData = await promiseAllSettledWithRetry(3, 
                pokemonDataParsed.results.map(async (pokemon) => {
                    const detailsResponse = await fetch(pokemon.url);
                    const details = await detailsResponse.json() as PokemonDetails;
                    const parsedDetails = PokemonDetailsSchema.parse(details);
                    return {
                        name: pokemon.name,
                        details:{
                            id: parsedDetails.id,
                            sprites: {
                                front_default: parsedDetails.sprites.front_default
                            },
                            types: parsedDetails.types,
                            abilities: parsedDetails.abilities,
                            stats: parsedDetails.stats,
                        },
                    };
                })
            )

            const enhancedPokemonData = {
                ...pokemonData,
                results: pokemonData.results.map(el => {
                    const detailsObject = detailedData.find(val => val.name == el.name);
                    return detailsObject ? {
                        ...el,
                        details: detailsObject.details,
                    } : el;
                })
            }
            return enhancedPokemonData;
        },
        initialPageParam: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
        getNextPageParam: (lastPage, _allPages) => lastPage.next,
        getPreviousPageParam: (firstPage, _allPages) => firstPage.previous,
    })

export { usePokemonList };
