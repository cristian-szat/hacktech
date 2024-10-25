const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});