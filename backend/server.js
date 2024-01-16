require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api', weatherRoutes);


app.listen(port, () => {
    //(`Server running on port ${port}`);
});