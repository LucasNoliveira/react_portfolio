import React, { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectsComponent = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Array de projetos (exemplo)
    const projects = [
        {
            id: 1,
            title: "Projeto 1",
            description: "Descrição do Projeto 1.",
            githubLink: "https://github.com/seu-usuario/projeto-1",
            hostedLink: "https://projeto-1.com"
        },
        {
            id: 2,
            title: "Projeto 2",
            description: "Descrição do Projeto 2.",
            githubLink: "https://github.com/seu-usuario/projeto-2",
            hostedLink: "https://projeto-2.com"
        },
        // Adicione mais projetos conforme necessário
    ];

    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8">Meus Projetos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Mapeamento dos projetos */}
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <button
                                    onClick={() => openProjectDetails(project)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300"
                                >
                                    <FaGlobe className="mr-2" />
                                    <span>Detalhes</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Janela flutuante de detalhes do projeto */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-xl w-full">
                        <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                        <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                        <div className="flex justify-between">
                            <a href={selectedProject.githubLink} className="text-blue-500 hover:underline flex items-center">
                                <FaGithub className="mr-2" />
                                <span>GitHub</span>
                            </a>
                            <a href={selectedProject.hostedLink} className="text-blue-500 hover:underline flex items-center">
                                <FaGlobe className="mr-2" />
                                <span>Projeto Hospedado</span>
                            </a>
                        </div>
                        <button
                            onClick={closeProjectDetails}
                            className="mt-8 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsComponent;
