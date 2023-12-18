import { config } from 'dotenv';
import { connect, connection, Connection } from 'mongoose';
import { error as err, log } from 'console';
import { logger } from './middleware/loggerMiddleware';
import cors from 'cors';
import expresss, { Application, Request, Response, json, urlencoded } from 'express';

// configure environment variables
config()

// setup express application
const app: Application = expresss()

// setup mongoose connection and connect to mongodb
connect(process.env.MONGO_URI as string)
const db: Connection = connection
db.on('error', (error) => err(error))
db.once('open', () => log(`connected to database: mongodb://${connection.name}`))

// middleware
app.use(logger)
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// home routes
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to MFR Rentals from the Backend!' })
})

// start express server and listen for request
const port: string|number = process.env.PORT || 3000
app.listen(port, () => log(`listening for request: http://localhost:${port}/`))