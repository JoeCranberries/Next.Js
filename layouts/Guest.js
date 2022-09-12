import Head from "next/head";
import React from "react";

export default function Guest({ header, cardClassName, title, children }) {
    return (
        <div className=" flex antialiased tracking-tighter text-gray-800 items-center justify-center min-h-screen bg-gray-100">
            <Head>
                <title>{title}</title>
            </Head>
            <div
                className={`${
                    cardClassName ? cardClassName : "  lg:w-1/3"
                } w-full md:w-2/3`}
            >
                <div className="flex items-center justify-center mb-8">
                    <h1 className="flex items-center">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-indigo-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        September
                    </h1>
                </div>
                <div className="bg-white md:rounded-2xl md:shadow-sm md:border outline-hidden">
                    <div className="px-6 py-3 border-b bg-gray-50/50">
                        <h1 className="font-medium text-xl capitalize">
                            {header}
                        </h1>
                    </div>
                    <div className="px-6 py-3">{children}</div>
                </div>
            </div>
        </div>
    );
}
