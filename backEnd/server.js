const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});