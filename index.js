const {connection} = require('./database/connection');
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

console.log('App initialized');
connection();

// create server
const app = express();
const port = 3000;

// cors configuration
app.use(cors());

// Routes
routerApi(app);

app.use(express.json());

// Server listening http requests
app.listen(port, () => {
  console.log(`server runnining on ${port}`);
});
