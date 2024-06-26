import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define routes for other components/pages */}
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/roster" element={<div>Roster Page</div>} />
          <Route path="/schedule" element={<div>Schedule Page</div>} />
          <Route path="/interest" element={<div>Interest Page</div>} />
          <Route path="/news" element={<div>News Page</div>} />
          <Route path="/gallery" element={<div>Gallery Page</div>} />
          <Route path="/merch" element={<div>Merch Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
