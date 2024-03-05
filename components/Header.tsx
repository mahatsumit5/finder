import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 md:top-2 p-4 w-full bg-blue-30000/25 md:rounded-lg flex justify-between backdrop-blur-2xl">
      <div className="">
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />
      </div>
      <div>
        <ul className="flex gap-3">
          <Link href={"/my-jobs"}>
            <li className="bg-green-700/45 p-2 rounded-xl hover:bg-green-700/80 px-5 text-center">
              Saved Jobs
            </li>
          </Link>
          <Link href={"/login"}>
            <li className="bg-green-700/45 p-2 rounded-xl hover:bg-green-700/80 w-24 text-center">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
