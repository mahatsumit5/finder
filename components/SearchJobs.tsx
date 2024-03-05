"use client";
import getjobs from "@/server";
import React, { Dispatch, SetStateAction, useState } from "react";

const SearchJobs = ({
  setResults,
}: {
  setResults: Dispatch<SetStateAction<any>>;
}) => {
  const [query, setQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [page, setpage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const { status, data } = await getjobs(query + " " + city, page);
    setLoading(false);
    if (status === 200) {
      setResults(data.data);
    }
  }
  return (
    <form
      className="w-full md:max-w-5xl shadow-lg shadow-black p-5 bg-zinc-900/40  rounded-lg grid gap-2"
      method="post"
      //   action={handleSubmit}
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2">
        <input
          type="text"
          className="w-full p-2 rounded-md bg-slate-700"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search jobs..."
        />{" "}
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option defaultValue={"Australia"}>Choose a city</option>
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Perth">Perth</option>
          <option value="Adelaide">Adelaide</option>
          <option value="Brisbane">Brisbane</option>
          <option value="Darwin">Darwin</option>
          <option value="Gold Coast">Gold Coast</option>
        </select>
      </div>
      {loading ? (
        <button
          disabled
          type="button"
          className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  w-full justify-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-800 p-3 rounded-md bg-gradient-to-r from-black to-transparent hover:bg-gradient-to-l transition-all duration-150 disabled:bg-blue-500 disabled:cursor-not-allowed"
          disabled={loading || !query}
        >
          Search
        </button>
      )}
    </form>
  );
};

export default SearchJobs;
