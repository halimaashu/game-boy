"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Button } from "@heroui/react";
// Assuming you use Gravity UI icons via their standard package
import { Magnifier, BroomMotionFill } from "@gravity-ui/icons"; 

export default function SearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state with the current URL search param so it doesn't clear on page refresh
  const [query, setQuery] = useState(searchParams.get("search") || "");

  // Optional: Debounce or handle form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (query.trim()) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    
    // Pushes the new query param to the URL, which triggers the server component to re-run
    router.push(`?${params.toString()}`);
  };

  const handleClear = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8 px-4">
      <Input
        type="text"
        
        placeholder="Type a game title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // startContent={<Magnifier className="text-default-400 text-xl" />}
        className="w-full text-white"
        // classNames={{
        //   inputWrapper: "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 focus-within:!bg-zinc-850",
        //   input: "text-white placeholder:text-zinc-500",
        //   label: "text-zinc-400"
        // }}
      />
      <div className="flex gap-2 justify-end">
        <Button 
          type="submit" 
        
          className="font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20"
        >
          Search
        </Button>
        {searchParams.get("search") && (
          <Button 
            isIconOnly 
           
            onClick={handleClear} 
            className="text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
            aria-label="Clear search"
          >
            <BroomMotionFill />
          </Button>
        )}
      </div>
    </form>
  );
}