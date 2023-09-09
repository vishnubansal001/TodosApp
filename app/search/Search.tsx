"use client";

import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="text"
        value={search}
        placeholder="Enter the Search Term"
        onChange={(e) => setSearch(e.target.value)}
        id=""
      />

      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default Search;
