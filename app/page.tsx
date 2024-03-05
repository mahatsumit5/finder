"use client";
import Header from "@/components/Header";
import Results from "@/components/Results";
import SearchJobs from "@/components/SearchJobs";
import getjobs from "@/server";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState<any>([]);
  console.log(results);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 max-w-5xl rounded-md  mx-auto   ">
      <Header />
      {/* hero */}
      <div className="relative w-full h-[40vh] md:h-[80vh]">
        <Image src={"/hero.png"} alt="hero" fill />
      </div>
      <SearchJobs setResults={setResults} />
      <div className="flex flex-col gap-5 w-full  justify-center overflow-y-auto">
        {results.map((item: any) => {
          return <Results key={item.job_id} items={item} />;
        })}
      </div>
    </main>
  );
}
