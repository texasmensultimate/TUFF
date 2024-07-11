const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const yourRoutes = require('./routes/yourRoutes');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(express.json());

const mongoURI = process.env.MONGO_URI;9
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', yourRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
