import { useCallback, useState } from "react";
import { pokemonTypes, type Pokemon } from "types/pokemon";
import Image from "next/image";
import { isValidPokemonType, zeroPad } from "utils";
import { Tooltip } from "react-tooltip";
import { TypeIcon } from "components/ui/type-icon";
import { SkeletonTile } from "components/ui/skeletons";
import { DetailsModal } from "./details-modal";

interface Props {
  data: Pokemon[];
  isFetching: boolean;
}

export const PokemonCards = ({ data, isFetching }: Props) => {

  const [open, setOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>()
  
  const generateItem = useCallback((pokemon: Pokemon, index: number) => {
    return (
      <div
        className="overflow-hidden rounded-lg bg-white shadow-md"
        key={pokemon.name}
      >
        <div className="relative flex items-center justify-center pt-4">
          {pokemon.details?.sprites.front_default ? (
            <Image
              src={pokemon.details?.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="h-48 w-auto"
              priority={index < 10}
            />
          ) : null}
          <div className="absolute left-2 top-2 rounded-full bg-[#e3350d] px-3 py-1 text-xs font-bold text-white">
            #{zeroPad(index, 3)}
          </div>
        </div>
        <div className="px-4 pb-4">
          <h3 className="mb-2 text-lg font-bold text-gray-800">
            {pokemon.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {pokemon.details?.types
                .map((typeInfo) => typeInfo.type.name)
                .map((type, index) => (
                  <TypeIcon
                    type={isValidPokemonType(type) ? type : "normal"}
                    key={index}
                  />
                ))}
            </div>
            <button
              type="button"
              className="rounded-full bg-[#e3350d] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#c02b0a]"
              onClick={
                ()=>{
                  setSelectedPokemon(pokemon)
                  setOpen(true)
                }
              }
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((res, index) => generateItem(res, index))}
      {pokemonTypes.map((type) => (
        <Tooltip id={`tooltip-type-${type}`} key={type} />
      ))}
      {isFetching
        ? Array.from({ length: 20 }).map((_, index) => (
            <SkeletonTile key={index} />
          ))
        : null}
    </div>
      <DetailsModal open={open} setOpen={setOpen} pokemon={selectedPokemon}/>
      </>
  );
};
