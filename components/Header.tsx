import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-2 p-4 w-full bg-black/30 rounded-lg flex justify-between backdrop-blur-lg">
      <div className="">
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />
      </div>
      <div>
        <ul className="flex gap-3">
          <li className="bg-green-700/45 p-2 rounded-xl hover:bg-green-700/80">
            Jobs
          </li>
          <li className="bg-green-700/45 p-2 rounded-xl hover:bg-green-700/80">
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
