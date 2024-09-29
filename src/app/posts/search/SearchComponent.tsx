"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { Button } from "../../_components/ui/button"
import { Input } from "../../_components/ui/input"

export const SearchComponent = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    router.push(`/posts?search=${searchTerm}`)
  }

  return (
    <div className="mb-4 flex items-center gap-6">
      <Input 
        placeholder="Faça sua busca" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </div>
  )
}
