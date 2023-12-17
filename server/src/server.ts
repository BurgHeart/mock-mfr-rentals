import { config } from 'dotenv';
import { connect, connection, Connection } from 'mongoose';
import { logger } from './middleware/loggerMiddleware';
import expresss, { Application, Request, Response, json, urlencoded } from 'express';

// configure environment variables
config()

// setup express application
const app: Application = expresss()

// setup mongoose connection and connect to mongodb
connect(process.env.MONGO_URI as string)
const db: Connection = connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log(`connected to database: mongodb://${connection.name}`))

// middleware
app.use(logger)
app.use(json())
app.use(urlencoded({ extended: true }))

// @route   /api
// @desc    home page - welcome message
// @access  Public 
app.get('/api/home', (req: Request, res: Response) => res.json({ message: 'Welcome to MFR Rentals!' }))

// start express server and listen for request
const port: string|number = process.env.PORT || 3000
app.listen(port, () => console.log(`listening for request: http://localhost:${port}/`))