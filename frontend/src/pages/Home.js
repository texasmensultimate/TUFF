import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import LatestTournament from '../components/LatestTournament';
import InstagramEmbed from '../components/InstagramEmbed';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100">
      <div className="relative w-full h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/Highlights.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-6xl text-burnt-orange text-center font-anton leading-tight px-4">
            The University of Texas at Austin<br/>Men's Club Ultimate Frisbee
          </h1>
        </div>
      </div>

      <NavBar />

      <main className="relative container mx-auto p-8 flex flex-col items-center mt-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-12">
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <img src="/TUFF.png" alt="Team Logo" className="h-48 mb-8" />
            <Card title="We are Texas TUFF" className="w-full bg-black text-gray-100 shadow-xl border border-gray-600">
              <p className="text-lg">Welcome! We are the University of Texas at Austin's Men's Ultimate Frisbee club team, competing in the South Central region of USA Ultimate's College Series.<br/><br/>Our program has been one of the most consistent nationals-caliber teams with 28 nationals appearances. We have our A and B teams, TUFF and Graze, catered to different levels of experience and commitment.</p>
            </Card>
          </div>
          <LatestTournament />
        </div>

        <Card title="Tryouts/Interest" className="w-full max-w-2xl text-center bg-black text-gray-100 shadow-xl border border-gray-600">
          <p className="text-xl mb-6">Ready to be part of something extraordinary? Want to ask us questions?</p>
          <a href="/interest" className="inline-block px-8 py-3 bg-burnt-orange text-white text-lg font-semibold rounded-lg shadow-md hover:bg-darker-burnt-orange transition-colors duration-300">Learn More</a>
        </Card>
        
        <InstagramEmbed />
      </main>

      <footer className="w-full bg-gray-800 shadow-inner mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Texas TUFF. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
