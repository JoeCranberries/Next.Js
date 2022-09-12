import React from "react";
import Hero from "../components/Hero";
import App from "../layouts/App";

export default function Articles() {
    return (
        <>
            <Hero>
                <Hero.Body>
                    <header className="text-white py-4 sm:py-8 md:py-16">
                        <Hero.Title>Our Articles</Hero.Title>
                        <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <a
                                href="#"
                                className="underline decoration-sky-500 text-sky-400 font-medium"
                            >
                                Dolorem quam
                            </a>
                            , recusandae quis dolorum veritatis nulla, nemo
                            consequuntur temporibus quisquam expedita libero est
                            facere ipsum laboriosam eveniet itaque. Rem, dicta
                            temporibus?
                        </p>
                        <a
                            href="#"
                            className="bg-white text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400"
                        >
                            Browse
                        </a>
                    </header>
                </Hero.Body>
            </Hero>
            <div className="container">Articles</div>;
        </>
    );
}

Articles.getLayout = (page) => <App title="Our Articles" children={page} />;
