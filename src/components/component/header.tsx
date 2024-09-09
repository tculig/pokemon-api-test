import Link from "next/link"
import { Input } from "components/ui/input"
import { SearchIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface Props {
  onSearch: (searchText:string)=>void
}

const Header = ({onSearch}:Props) => {
  const [searchText, setSearchText] = useState("");
  const [searchTextDebounced] = useDebounce(searchText, 500);

  useEffect(()=>{
    onSearch(searchTextDebounced)
  },[onSearch, searchTextDebounced])

  return (
  <header className="bg-[#e3350d] py-4 px-6 shadow-md header z-50">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="text-white font-bold text-2xl" prefetch={false}>
        Pokédex
      </Link>
      <div className="flex flex-grow px-12">
      <Link href="/pokemontable" className="text-white text-l" prefetch={false}>
        Layout 1
      </Link>
      <Link href="/pokemoncards" className="text-white text-l px-8" prefetch={false}>
        Layout 2
      </Link>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search Pokémon..."
          value={searchText}
          onChange={(event)=>{
            setSearchText(event.target.value)
          }}
          className="bg-white rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#e3350d] focus:border-transparent"
        />
        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  </header>)
}

export { Header }