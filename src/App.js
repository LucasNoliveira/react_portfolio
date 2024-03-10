import React from 'react';
import TopNav from './components/Topnav';
import './index.css'; // ou o caminho correto para o arquivo gerado pelo Tailwind CSS
import HeroComponent from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <TopNav />
      
      <HeroComponent />
      <AboutMe />
      <Projects />
      <WhyHireMe />
      <Footer />
    </div>
  );
};

export default App;
