import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar(){
    return(
        <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white-400" size={18} />
        <input
        type="text"
        placeholder="Search Local Decks"
        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
    )
}
        