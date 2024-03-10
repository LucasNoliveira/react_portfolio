import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:flex">
        {/* Imagem */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/500"
            alt="Sua imagem"
          />
        </div>
        {/* Texto Sobre Mim */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, turpis vitae imperdiet sagittis, turpis libero vestibulum lorem, vel cursus metus libero vitae lectus. Donec ultricies vitae nisi at pharetra. Nam ultricies vehicula neque, id scelerisque erat maximus in. Nulla facilisi. Vestibulum nec sem vel nulla tempor rhoncus. Aliquam sit amet pharetra lacus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
