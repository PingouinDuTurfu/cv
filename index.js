const express = require('express');
const path = require('path');
const app = express();

app.use('/cv', express.static(path.join(__dirname, 'public')));

app.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
