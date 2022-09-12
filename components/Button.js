import React from "react";

export default function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`${
                className
                    ? className
                    : "bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-700"
            } border border-transparent px-6 py-2.5 text-sm font-semibold transition duration-300 text-white  rounded-xl `}
        >
            {children}
        </button>
    );
}
