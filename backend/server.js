require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/cors');
const router = require('./routes');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
