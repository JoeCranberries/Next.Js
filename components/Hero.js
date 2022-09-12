import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import DropdownLink from "./DropdownLink";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Line from "./Line";
import Link from "next/link";
import Navbar from "./Navbar";
const Title = ({ children }) => (
    <h1 className="text-xl md:text-3xl font-bold">{children}</h1>
);

const Body = ({ children }) => <div>{children}</div>;

const Hero = ({ children }) => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 mb-8">
            <MobileNav />
            <Navbar />
            <div className="container">
                <div className="w-full md:w-2/3">{children}</div>
            </div>
        </div>
    );
};

Hero.Title = Title;

Hero.Body = Body;

export default Hero;
