"use client";

import { usePokemonList } from '#/data/hooks/use-pokemon-list';
import { useCallback, useEffect, useState } from 'react';
import { FixedSizeList as List, type ListOnScrollProps, type ListChildComponentProps } from 'react-window';

const Row = ({ index, style }: ListChildComponentProps) => (
  <div style={style}>Row {index}</div>
);

export default function PokemonTable() {
  const { data : pokemonData, isLoading, fetchNextPage, isFetchingNextPage, isFetching, hasNextPage } = usePokemonList();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const onScroll = useCallback(
    (props: ListOnScrollProps) => {
        setScrollPosition(props.scrollOffset);
    },
    [setScrollPosition]
);

useEffect(()=>{
  console.log((pokemonData?.pages?.length??0)*20*35-70-150)
  if(!isLoading && !isFetchingNextPage && !isFetching && hasNextPage && scrollPosition>((pokemonData?.pages?.length??0)*20*35-70-150)){
    console.log("FETCH NEXT PAGE")
    void fetchNextPage();
  }
},[fetchNextPage, scrollPosition, isLoading, pokemonData?.pages?.length, isFetchingNextPage, hasNextPage, isFetching])

console.log(scrollPosition+ " "+isLoading+ " "+isFetching+ " " + isFetchingNextPage);
  return (
    <div>
      <h1>Pokémon Table</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) :
     /* (
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemonData ? pokemonData.pages?.map((page) => 
            page.results.map((pokemon, index)=>(
                <tr key={index}>
                  <td>{pokemon.name}</td>
                </tr>
            ))):null}
          </tbody>
        </table>
      )
      */
     (
      <List
      height={150}
      itemCount={(pokemonData?.pages?.length??0)*20}
      itemSize={35}
      width={300}
      onScroll={onScroll}
    >
      {Row}
    </List>
     )}
    </div>
  );
}
