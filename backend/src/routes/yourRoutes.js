const path = require('path');
const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const fs = require('fs');

router.get('/schedule', (req, res) => {
  // Log the current working directory
  console.log('Current working directory:', process.cwd());

  // Construct the path to the Python script
  const pythonScript = path.join(process.cwd(), 'src', 'usau_script.py');
  
  // Log the full path of the Python script
  console.log('Full path of Python script:', pythonScript);

  // Check if the file exists
  if (!fs.existsSync(pythonScript)) {
    console.error('Python script not found at:', pythonScript);
    return res.status(500).json({ error: 'Python script not found' });
  }

  const python = spawn('python3', [pythonScript]);
  let dataString = '';
  let errorString = '';

  python.stdout.on('data', (data) => {
    dataString += data.toString();
  });

  python.stderr.on('data', (data) => {
    errorString += data.toString();
  });

  python.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
    console.log('Raw output:', dataString);
    console.log('Error output:', errorString);

    if (code !== 0 || errorString) {
      return res.status(500).json({ 
        error: 'Python script error',
        details: errorString || 'Unknown error'
      });
    }

    try {
      const jsonData = JSON.parse(dataString);
      res.json({ tournament: jsonData });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({ 
        error: 'Failed to parse scraped data',
        details: error.message,
        rawData: dataString
      });
    }
  });

  python.on('error', (error) => {
    console.error(`Error spawning Python script: ${error}`);
    res.status(500).json({ error: 'Failed to run script', details: error.message });
  });
});

module.exports = router;