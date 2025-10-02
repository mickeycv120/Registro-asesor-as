import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-7">
      <div className="text-2xl font-bold">
        <Link href="#">LOGO</Link>
      </div>
      <div className="">
        <ul className="flex space-x-7 text-md">
          <li>
            <Link className="hover:text-gray-600" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-600" href="#">
              Alumnos
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-600" href="#">
              Asesores
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
        <ul className="flex space-x-4">
          <li>
            <Link href="#">Agendar</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
