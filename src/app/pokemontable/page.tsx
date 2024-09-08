"use client";

import { useCallback, useEffect, useState } from 'react';
import { usePokemonList } from 'data/hooks/use-pokemon-list';
import { PokemonTable } from 'components/component/pokemon-table';
import { Header } from 'components/component/header';
import { type Pokemon } from 'types/pokemon';

export default function PokemonTableView() {
  const { data: pokemonData, isLoading, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } = usePokemonList();
  const [scrollPositionFromBottom, setScrollPositionFromBottom] = useState(999);
  const [filteredResults, setFilteredResults] = useState<Pokemon[]>([]);
  const [searchText, setSearchText] = useState("");

  const onScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      const totalScrollHeight = event.currentTarget?.scrollHeight - event.currentTarget?.clientHeight;
      const scrollPosition = event.currentTarget?.scrollTop;
      setScrollPositionFromBottom(totalScrollHeight - scrollPosition)
    },
    [setScrollPositionFromBottom]
  );

  const onSearch = useCallback((newSearchText: string) => {
    setSearchText(newSearchText)
  }, [])

  useEffect(() => {
    if (!pokemonData || pokemonData?.pages?.length == 0) return;
    const loadedPokemon = pokemonData.pages.map(el => el.results).flat();
    if (searchText != "") {
      setFilteredResults(loadedPokemon.filter(el => el.name.includes(searchText)));
    } else {
      setFilteredResults(loadedPokemon);
    }
  }, [searchText, pokemonData])

  useEffect(() => {
    if (!isLoading && !isFetchingNextPage && !isFetching && hasNextPage && pokemonData?.pages && pokemonData?.pages?.length > 0 && scrollPositionFromBottom < 20) {
      void fetchNextPage();
    }
  }, [fetchNextPage, scrollPositionFromBottom, isLoading, pokemonData?.pages?.length, isFetchingNextPage, hasNextPage, isFetching, pokemonData?.pages])

  return (
    <div className="flex h-96 flex-col min-h-screen bg-[#f0f0f0]">
      <Header onSearch={onSearch} />
      <div className="w-full overflow-auto">
      <main className="container mx-auto py-8">
        <div className='w-full flex flex-col items-center'>
          <PokemonTable
            data={filteredResults}
            isFetching={isFetching}
            onScroll={onScroll}
          />
        </div>
      </main>
      </div>
    </div>
  );
}


