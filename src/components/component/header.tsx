import Link from "next/link"
import { Input } from "components/ui/input"
import { SearchIcon } from "lucide-react"

const Header = () =>
(<header className="bg-[#e3350d] py-4 px-6 shadow-md">
  <div className="container mx-auto flex items-center justify-between">
    <Link href="#" className="text-white font-bold text-2xl" prefetch={false}>
      Pokédex
    </Link>
    <div className="relative">
      <Input
        type="text"
        placeholder="Search Pokémon..."
        className="bg-white rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#e3350d] focus:border-transparent"
      />
      <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  </div>
</header>)

export { Header }