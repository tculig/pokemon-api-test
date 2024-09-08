import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "lib/utils"
import { type PokemonType } from "types/pokemon"

type PokemonTypeClasses = {
  [K in PokemonType]: string; // Each intent must have an associated string (class)
};

const typeColors: PokemonTypeClasses = {
  normal: "bg-[#A8A876]",
  grass: "bg-[#81C848]",
  fire: "bg-[#E87F22]",
  water: "bg-[#6F91F3]",
  electric: "bg-[#F4CF0A]",
  ice: "bg-[#A0D8D8]",
  fighting: "bg-[#B82E23]",
  poison: "bg-[#9B40A2]",
  ground: "bg-[#DDC062]",
  flying: "bg-[#A791F3]",
  psychic: "bg-[#EF5688]",
  bug: "bg-[#A9B800]",
  rock: "bg-[#B5A02D]",
  ghost: "bg-[#6F589A]",
  dragon: "bg-[#703BFC]",
  dark: "bg-[#6E5847]",
  steel: "bg-[#B8B8D1]",
  fairy: "bg-[#EBB6BC]"
}

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 mr-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-[#EEEAF8]",
      },
      type: typeColors,
    },
    defaultVariants: {
      variant: "default",
      type: "normal",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }


function Badge({ className, variant, type, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, type }), className)} {...props} >
      {type}
    </div>
  )
}

export { Badge, badgeVariants }
