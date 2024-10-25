const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./router');  // Import centralized router
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});