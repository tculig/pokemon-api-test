"use client";

import { useCallback, useEffect, useState } from 'react';
import { usePokemonList } from 'data/hooks/use-pokemon-list';
import { PokemonTableV0 } from 'components/component/pokemon-table';
import { Header } from 'components/component/header';

export default function PokemonTable() {
  const { data: pokemonData, isLoading, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } = usePokemonList();
  const [scrollPositionFromBottom, setScrollPositionFromBottom] = useState(999);

  const onScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      const totalScrollHeight = event.currentTarget?.scrollHeight - event.currentTarget?.clientHeight;
      const scrollPosition = event.currentTarget?.scrollTop;
      setScrollPositionFromBottom(totalScrollHeight - scrollPosition)
    },
    [setScrollPositionFromBottom]
  );

  useEffect(() => {
    if (!isLoading && !isFetchingNextPage && !isFetching && hasNextPage && pokemonData?.pages && pokemonData?.pages?.length > 0 && scrollPositionFromBottom < 20) {
      void fetchNextPage();
    }
  }, [fetchNextPage, scrollPositionFromBottom, isLoading, pokemonData?.pages?.length, isFetchingNextPage, hasNextPage, isFetching, pokemonData?.pages])

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f0]">
      <Header />
      <main className="container mx-auto py-8">
        <div className='w-full flex flex-col items-center'>
          <PokemonTableV0
            data={pokemonData}
            isFetching={isFetching}
            onScroll={onScroll}
          />
        </div>
      </main>
    </div>
  );
}


