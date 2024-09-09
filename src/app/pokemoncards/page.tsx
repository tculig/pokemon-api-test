"use client";

import { useCallback, useEffect, useState } from "react";
import { usePokemonList } from "data/hooks/use-pokemon-list";
import { PokemonCards } from "components/component/pokemon-cards";
import { Header } from "components/component/header";
import { type Pokemon } from "types/pokemon";
import { scrollPosFromBottom } from "utils";

export default function PokemonTable() {
  const {
    data: pokemonData,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = usePokemonList();
  const [filteredResults, setFilteredResults] = useState<Pokemon[]>([]);
  const [searchText, setSearchText] = useState("");
  const [scrollPositionFromBottom, setScrollPositionFromBottom] = useState(999);

  const onSearch = useCallback((newSearchText: string) => {
    setSearchText(newSearchText);
  }, []);

  const onScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      const fromBottom = scrollPosFromBottom(event);
      setScrollPositionFromBottom(fromBottom)
    },
    [setScrollPositionFromBottom]
  );

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

  useEffect(() => {
    if (!isLoading && !isFetching && hasNextPage && pokemonData?.pages && pokemonData?.pages?.length > 0 && scrollPositionFromBottom < 20) {
      void fetchNextPage();
    }
  }, [fetchNextPage, isLoading, pokemonData?.pages?.length, hasNextPage, isFetching, pokemonData?.pages, scrollPositionFromBottom])

  return (
    <div className="flex h-96 min-h-screen flex-col bg-[#f0f0f0]">
      <Header onSearch={onSearch} />
      <div className="w-full overflow-auto" onScroll={onScroll}>
        <main className="container mx-auto py-8">
          <PokemonCards data={filteredResults} isFetching={isFetching} />
        </main>
      </div>
    </div>
  );
}
