import * as React from "react"
import { type PokemonType } from "types/pokemon"
import { AnvilIcon, BiohazardIcon, BrainIcon, BugIcon, CircleIcon, CloudSunIcon, FlameIcon, GhostIcon, GlassWaterIcon, GrabIcon, GrapeIcon, IceCreamConeIcon, Layers2Icon, LeafIcon, MountainSnowIcon, OrigamiIcon, PlaneIcon, WandSparklesIcon, ZapIcon } from "lucide-react";

export interface Props {
  type: PokemonType,
}

function TypeIcon({ type }: Props) {
  switch (type) {
    case "normal": return <CircleIcon className="h-5 w-5 text-gray-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="normal" />
    case "grass": return <LeafIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="grass" />
    case "fire": return <FlameIcon className="h-5 w-5 text-red-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="fire" />
    case "water": return <GlassWaterIcon className="h-5 w-5 text-blue-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="water" />
    case "electric": return <ZapIcon className="h-5 w-5 text-yellow-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="electric" />
    case "ice": return <IceCreamConeIcon className="h-5 w-5 text-cyan-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="ice" />
    case "fighting": return <GrabIcon className="h-5 w-5 text-green-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="fighting" />
    case "poison": return <BiohazardIcon className="h-5 w-5 text-purple-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="poison" />
    case "ground": return <Layers2Icon className="h-5 w-5 text-yellow-900" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="ground" />
    case "flying": return <PlaneIcon className="h-5 w-5 text-blue-600" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="flying" />
    case "psychic": return <BrainIcon className="h-5 w-5 text-amber-600" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="psychic" />
    case "bug": return <BugIcon className="h-5 w-5 text-fuchsia-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="bug" />
    case "rock": return <MountainSnowIcon className="h-5 w-5 text-stone-500" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="rock" />
    case "ghost": return <GhostIcon className="h-5 w-5 text-cyan-400" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="ghost" />
    case "dragon": return <OrigamiIcon className="h-5 w-5 text-blue-700" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="dragon" />
    case "dark": return <CloudSunIcon className="h-5 w-5 text-gray-900" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="dark" />
    case "steel": return <AnvilIcon className="h-5 w-5 text-slate-600" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="steel" />
    case "fairy": return <WandSparklesIcon className="h-5 w-5 text-purple-700" data-tooltip-id={`tooltip-type-normal`} data-tooltip-content="fairy" />
    default: return null;

  }
}

export { TypeIcon }
