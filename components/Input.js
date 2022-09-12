import React from "react";

export default function Input({ type = "text", ...props }) {
    return (
        <input
            type={type}
            {...props}
            className="w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-100 focus:border-blue-400 transition duration-300 "
        ></input>
    );
}
