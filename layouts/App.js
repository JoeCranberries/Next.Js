import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";

export default function app({ title = "Next Tailwind series", children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
}
