import * as React from "react"
import { type PokemonType } from "types/pokemon"
import { GrapeIcon } from "lucide-react";

export interface Props {
  type: PokemonType,
}

function TypeIcon({ type }: Props) {
  switch (type) {
    case "normal": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "grass": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "fire": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "water": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "electric": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "ice": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "fighting": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "poison": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "ground": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "flying": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "psychic": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "bug": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "rock": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "ghost": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "dragon": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "dark": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "steel": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    case "fairy": return <GrapeIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="Hello world!" />
    default: return null;

  }
}

export { TypeIcon }
