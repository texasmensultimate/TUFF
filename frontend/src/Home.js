import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <NavBar />

      <div className="relative w-full h-96 mt-20">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/Highlights.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <main className="relative container mx-auto p-4 flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row md:items-center w-full mb-8 md:px-16">
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:mr-8">
            <img src="/TUFF.png" alt="Team Logo" className="h-32 mb-4" />
            <h1 className="text-4xl font-bold text-orange-600 text-center md:text-left">
              The University of Texas at Austin<br/>Men's Club Ultimate
            </h1>
          </div>
          <Card title="Welcome to Our Team" className="w-full max-w-lg mt-8 md:mt-0">
            <p>We are a passionate sports team dedicated to excellence.</p>
          </Card>
        </div>

        <Card title="Season Record" className="w-full max-w-lg mb-8 text-center">
          <p className="text-2xl font-bold">10 Wins - 2 Losses</p>
        </Card>

        <Card title="Tryouts" className="w-full max-w-lg mb-8 text-center">
          <p>Join our team! Click here to learn more about upcoming tryouts.</p>
          <a href="/interest" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Learn More</a>
        </Card>
      </main>

      <footer className="w-full bg-white shadow mt-4">
        <div className="container mx-auto p-4 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 My Sports Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
