import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table"
import { Badge } from "../ui/badge"
import { type Pokemon } from "types/pokemon"
import { type UIEventHandler, useCallback, useState } from "react"
import Image from "next/image";
import { isValidPokemonType } from "utils"
import { SkeletonTableRow } from "components/ui/skeletons"
import { DetailsModal } from "./details-modal";

interface Props {
  data: Pokemon[],
  isFetching: boolean,
  onScroll?: UIEventHandler<HTMLDivElement>,
}

export const PokemonTable = ({ data, isFetching, onScroll }: Props) => {

  const [open, setOpen] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>()

  const generateRow = useCallback((pokemon: Pokemon) => {
    return (
      <TableRow key={pokemon.name} onClick={()=>{
        setSelectedPokemon(pokemon);
        setOpen(true);
      }}>
        <TableCell className="font-bold">{pokemon.name}</TableCell>
        <TableCell>{
          pokemon.details?.sprites.front_default ? (
            <Image
              src={pokemon.details?.sprites.front_default}
              alt={pokemon.name}
              width={48}
              height={48}
              className="aspect-square object-cover rounded-md"
            />
          ) : null
        }
        </TableCell>
        <TableCell>
          {pokemon.details?.types.map(
            (typeInfo) => typeInfo.type.name).map(
              (type, index) => <Badge variant="outline" type={isValidPokemonType(type) ? type : "normal"} key={index} />
            )}
        </TableCell>
      </TableRow>
    )
  }, []);

  return (
    <div className="border rounded-lg w-1/2 overflow-hidden">
      <div className="overflow-auto max-h-[600px]" onScroll={onScroll}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5">Name</TableHead>
              <TableHead className="w-1/4">Image</TableHead>
              <TableHead >Types</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(res => generateRow(res))}
            {isFetching ? (
                Array.from({ length: 20 }).map((_, index) => (
                  <SkeletonTableRow key={index}/>
                ))
            ) : null}
          </TableBody>
        </Table>
      </div>
      <DetailsModal open={open} setOpen={setOpen} pokemon={selectedPokemon}/>
    </div>
  )
}
