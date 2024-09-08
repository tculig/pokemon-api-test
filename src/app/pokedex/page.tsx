"use client";

import { useCallback, useEffect, useState } from 'react';
import { FixedSizeList as List, type ListOnScrollProps, type ListChildComponentProps } from 'react-window';
import { SkeletonLoader } from '../../components/skeleton';
import { usePokemonList } from 'data/hooks/use-pokemon-list';
import { PokemonTableV0 } from 'components/component/pokemon-table';
import { Pokedex } from 'components/component/pokedex';

const Row = ({ index, style }: ListChildComponentProps) => (
  <div style={style}>Row {index}</div>
);

export default function PokemonTable() {
  const { data: pokemonData, isLoading, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } = usePokemonList();
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = useCallback(
    (props: ListOnScrollProps) => {
      setScrollPosition(props.scrollOffset);
    },
    [setScrollPosition]
  );

  useEffect(() => {
    //console.log((pokemonData?.pages?.length ?? 0) * 20 * 35 - 70 - 150)
    if (!isLoading && !isFetchingNextPage && !isFetching && hasNextPage && pokemonData?.pages && pokemonData?.pages?.length > 0 && scrollPosition > ((pokemonData?.pages?.length ?? 0) * 20 * 35 - 70 - 150)) {
      console.log("FETCH NEXT PAGE")
      void fetchNextPage();
    }
  }, [fetchNextPage, scrollPosition, isLoading, pokemonData?.pages?.length, isFetchingNextPage, hasNextPage, isFetching, pokemonData?.pages])

  //console.log(scrollPosition + " " + isLoading + " " + isFetching + " " + isFetchingNextPage);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) :
        (
          <Pokedex/>
        )}
    </div>
  );
}
