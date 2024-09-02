'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search as SearchIcon } from 'lucide-react'

export function Search() {
  const [value, setValue] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search value:', value)
    // Implement your search logic here
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-8 pr-4"
      />
    </form>
  )
}
