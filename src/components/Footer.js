import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <p className="text-gray-300">© 2024 Seu Nome. Todos os direitos reservados.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                        <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
                        <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
