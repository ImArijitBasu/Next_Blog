// "use server"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from "next/link";
import React from "react";

const Header = async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <div className=" bg-slate-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="btn btn-sm" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="btn btn-sm" href={"/profile"}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NEXT.BLOG</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 ">
            <li>
              <Link className="btn btn-sm" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="btn btn-sm" href={"/profile"}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link
                className="btn border-2 border-gray-500 rounded-md px-2 py-1"
                href="/api/auth/logout" prefetch={false}
              >
                logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn border-2 border-gray-500 rounded-md px-2 py-1 mr-2"
                href="/api/auth/register"
              >
                Sign UP
              </Link>
              <Link
                className="btn border-2 border-gray-500 rounded-md px-2 py-1"
                href="/api/auth/login"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
