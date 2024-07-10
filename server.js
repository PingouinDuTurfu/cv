const express = require('express');
const path = require('path');
const app = express();

app.use('/cv', express.static(path.join(__dirname, 'public')));

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/cv`);
});
