const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      status: 404,
      message: 'Not found',
    },
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  if (statusCode === 500) {
    // eslint-disable-next-line no-console
    console.error(req);
  }
  res.status(statusCode).json({
    error: {
      status: statusCode,
      message:
        process.env.NODE_ENV !== 'production'
          ? err.message
          : 'Internal server error',
    },
  });
});

module.exports = app;
