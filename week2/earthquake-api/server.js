import express from 'express'
import earthquakeRoute from './routes/earthquake.route.js';
const app = express()
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json())


app.use('/', earthquakeRoute)



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on ${port}`)
})