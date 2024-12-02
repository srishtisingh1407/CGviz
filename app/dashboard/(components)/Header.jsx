// components/Header.js

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

function Header() {
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#" },
    { name: "Works", href: "/works" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-white text-[#6c8acc] py-8">
      <div className="max-w-screen-xl gap-16 mx-auto flex justify-between items-center px-6">
        <div className="flex-shrink-0 ">
          <Image src={logo} alt="Logo" width={100} height={50} />
        </div>

        <div className="flex-1 text-center space-x-8 hidden md:flex">
          <ul className="flex justify-center space-x-8 font-semibold">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#5e864b] hover:underline-offset-1">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 hidden md:block">
          <Link
            href="/login"
            className="bg-[#D0E8C5] text-[#432E54] py-2 px-4 rounded-md hover:bg-[#5fa3c5] transition-colors hover:underline-offset-1"
          >
            Log In
          </Link>
        </div>

        {/* Hamburger Icon (visible on small screens only) */}
        <div className="md:hidden flex items-center">
          <button className="text-[#6c8acc] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
