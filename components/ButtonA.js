import React from "react";

export default function ButtonA({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`${
                className
                    ? className
                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-700"
            } border border-transparent px-6 py-2.5 text-sm font-semibold transition duration-300 text-white  rounded-xl `}
        >
            {children}
        </button>
    );
}
