"use client";
import getjobs from "@/server";
import React, { Dispatch, SetStateAction, useState } from "react";

const SearchJobs = ({
  setResults,
}: {
  setResults: Dispatch<SetStateAction<any>>;
}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const { status, data, parameters } = await getjobs(query);
    console.log(status);
    setLoading(false);
    if (status === "OK") {
      setResults(data);
    }
  }
  return (
    <form
      className="w-full md:max-w-5xl shadow-lg shadow-black p-5 bg-zinc-900/40  rounded-lg grid gap-2"
      method="post"
      //   action={handleSubmit}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full p-2 rounded-md bg-slate-700"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search jobs..."
      />{" "}
      <button
        type="submit"
        className="bg-blue-800 p-3 rounded-md bg-gradient-to-r from-black to-transparent hover:bg-gradient-to-l transition-all duration-150 disabled:bg-blue-500 disabled:cursor-not-allowed"
        disabled={loading || !query}
      >
        {loading ? "loading..." : "Search"}
      </button>
    </form>
  );
};

export default SearchJobs;
