const express = require("express");
const app = express();
const PORT = 3001 || process.env.PORT; 
const database = require('./config/database');
const routes = require('./routes');
const cors = require('cors');

try {
    app.use(express.json());

    app.use(routes);

    app.use(cors({origin: 'http://localhost:3000'}));

    app.listen(PORT, () =>{
        console.log(`Server up on http://localhost:${PORT}`);
    });
}catch(err){
    throw err;
};
