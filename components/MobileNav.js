import React, { Fragment } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu, Transition } from "@headlessui/react";
import Line from "./Line";

export default function MobileNav() {
    const auth = {
        check: true,
        user: {
            name: "Ariyadi Armi",
        },
    };
    return (
        <Menu
            as={"div"}
            className="w-full flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700"
        >
            <a href="#" className="text-white font-medium uppercase ">
                Brand
            </a>
            <Menu.Button className="focus:outline-none">
                {/* prettier-ignore */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
                    className="shadow-sm border bg-white absolute right-0 mr-10 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden"
                >
                    <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
                    <Line />
                    {auth.check ? (
                        <>
                            <ResponsiveNavLink href="#">
                                {auth.name}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                settings
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Horizon
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Account
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                setting
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Change
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                password
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Favorites
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Articles
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">Help</ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Log out
                            </ResponsiveNavLink>
                        </>
                    ) : (
                        <>
                            <ResponsiveNavLink href="#">
                                Sign in
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">
                                Sign up
                            </ResponsiveNavLink>
                        </>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
