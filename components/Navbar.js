import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import NavLink from "./NavLink";
import DropdownLink from "./DropdownLink";

export default function Navbar() {
    const auth = {
        check: false,
        user: {
            name: "Ariyadi Armi",
        },
    };
    return (
        <div>
            <div className="hidden md:block border-b border-white/10 py-4">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <a
                                href="/"
                                className="text-white font-medium uppercase mr-6"
                            >
                                Brand
                            </a>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/articles">Articles</NavLink>
                            <NavLink href="#">Gallery</NavLink>
                            <NavLink href="#">About</NavLink>
                            <NavLink href="#">Contact</NavLink>
                        </div>
                        {auth.check ? (
                            <div className="flex items-center gap-x-2">
                                <NavLink href="#"></NavLink>
                                <Menu className="relative" as={"div"}>
                                    <Menu.Button
                                        className="flex text-white items-center
                                    hover:bg-transparent gap-x-2"
                                    >
                                        {auth.user.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Menu.Items
                                            as="div"
                                            className="shadow-sm border bg-white absolute right-0 mt-8 top-0  py-1 rounded-lg w-56 overflow-hidden"
                                        >
                                            <DropdownLink href="#">
                                                Dashboard
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Horizon
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                <Line />
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Account setting
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Change password
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Favorites Articles
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Help
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                <Line />
                                            </DropdownLink>
                                            <DropdownLink href="#">
                                                Log out
                                            </DropdownLink>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        ) : (
                            <div className="text-white flex items-center gap-x-2">
                                <Link href="/login">Sign in</Link>
                                <NavLink href="/register">Sign up</NavLink>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}
