import React from 'react';

function HeroComponent() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    Seu Nome
                </h1>
                <p className="mt-4 text-lg text-white">Desenvolvedor Web</p>
                <div className="mt-6">
                    <a
                        href="#"
                        className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-lg font-medium text-indigo-600 hover:bg-indigo-50"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
