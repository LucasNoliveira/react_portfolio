import React from 'react';

const HireMeComponent = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8">Por que me contratar?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 1</h3>
                        <p className="text-gray-600">Descrição da Qualidade 1.</p>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 2</h3>
                        <p className="text-gray-600">Descrição da Qualidade 2.</p>
                    </div>
                    {/* Item 3 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 3</h3>
                        <p className="text-gray-600">Descrição da Qualidade 3.</p>
                    </div>
                    {/* Item 4 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 4</h3>
                        <p className="text-gray-600">Descrição da Qualidade 4.</p>
                    </div>
                    {/* Item 5 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 5</h3>
                        <p className="text-gray-600">Descrição da Qualidade 5.</p>
                    </div>
                    {/* Item 6 */}
                    <div className="bg-transparent rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-4 border-t-2 border-solid border-pink-500 pt-4">Qualidade 6</h3>
                        <p className="text-gray-600">Descrição da Qualidade 6.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMeComponent;
