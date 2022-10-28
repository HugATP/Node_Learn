import express from 'express';
import initWebRoute from './route/web';
import configViewEngine from './configs/viewEngine';
import connection from './configs/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//set up views engine
configViewEngine(app);

//init Web Route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

