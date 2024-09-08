"use client";

import { useCallback, useEffect, useState } from "react";
import { usePokemonList } from "data/hooks/use-pokemon-list";
import { Pokedex } from "components/component/pokedex";
import { Header } from "components/component/header";
import { type Pokemon } from "types/pokemon";

export default function PokemonTable() {
  const {
    data: pokemonData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
  } = usePokemonList();
  const [filteredResults, setFilteredResults] = useState<Pokemon[]>([]);
  const [searchText, setSearchText] = useState("");

  const onSearch = useCallback((newSearchText: string) => {
    setSearchText(newSearchText);
  }, []);

  useEffect(() => {
    if (!pokemonData || pokemonData?.pages?.length == 0) return;
    const loadedPokemon = pokemonData.pages.map((el) => el.results).flat();
    if (searchText != "") {
      setFilteredResults(
        loadedPokemon.filter((el) => el.name.includes(searchText)),
      );
    } else {
      setFilteredResults(loadedPokemon);
    }
  }, [searchText, pokemonData]);
  /*
  useEffect(() => {
    //console.log((pokemonData?.pages?.length ?? 0) * 20 * 35 - 70 - 150)
    if (!isLoading && !isFetchingNextPage && !isFetching && hasNextPage && pokemonData?.pages && pokemonData?.pages?.length > 0 ) {
      console.log("FETCH NEXT PAGE")
      void fetchNextPage();
    }
  }, [fetchNextPage, isLoading, pokemonData?.pages?.length, isFetchingNextPage, hasNextPage, isFetching, pokemonData?.pages])
*/
  //console.log(scrollPosition + " " + isLoading + " " + isFetching + " " + isFetchingNextPage);
  return (
    <div className="flex h-96 min-h-screen flex-col bg-[#f0f0f0]">
      <Header onSearch={onSearch} />
      <div className="w-full overflow-auto">
        <main className="container mx-auto py-8">
          <Pokedex data={filteredResults} isFetching={isFetching} />
        </main>
      </div>
    </div>
  );
}
