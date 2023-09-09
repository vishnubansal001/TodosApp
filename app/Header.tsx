import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500">
      {/* <p className="font-bold text-white">I am the header</p> */}
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
    </div>
  );
};

export default Header;
