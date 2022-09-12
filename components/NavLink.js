import React from "react";

export default function NavLink({ className, href, children }) {
    return (
        <div>
            <a
                href={href}
                className={`${
                    className ? className : ""
                }px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 -lg`}
            >
                {children}
            </a>
        </div>
    );
}
