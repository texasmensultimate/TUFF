import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestTournament = () => {
  const [schedule, setSchedule] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        console.log('Fetching schedule...');
        const response = await axios.get('http://localhost:5000/api/schedule');
        console.log('Response:', response.data);
        if (response.data && response.data.tournament) {
          setSchedule(response.data.tournament);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
        setError('Failed to load schedule. Please try again later.');
      }
    };

    fetchSchedule();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!schedule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-dark-card p-4 md:p-8 rounded-3xl shadow-md text-light-text w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        <a 
          href={schedule?.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-burnt-orange hover:underline"
        >
          {schedule?.tournament}
        </a>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-secondary-text p-2 text-left">Date</th>
              <th className="border-b-2 border-secondary-text p-2 text-left">Score</th>
              <th className="border-b-2 border-secondary-text p-2 text-left">Opponent</th>
            </tr>
          </thead>
          <tbody>
            {schedule?.games.map((game, index) => (
              <tr key={index} className={`border-b border-secondary-text ${index % 2 === 0 ? 'bg-dark-card' : 'bg-dark-bg'}`}>
                <td className="p-2">{game.date}</td>
                <td className={`p-2 ${game.score.split('-')[0].trim() > game.score.split('-')[1].trim() ? 'bg-green-500' : 'bg-red-500'}`}>{game.score}</td>
                <td className="p-2">
                  <a href={game.opponentHref} target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline">{game.opponentCollege}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestTournament;