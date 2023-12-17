import expresss, { Application } from 'express';
import { connect, connection, Connection } from 'mongoose';
import { config } from 'dotenv';

config()

const app: Application = expresss()

connect(process.env.MONGO_URI as string)
const db = connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log(`connected to database: mongodb://${connection.host}`))

const port: string|number = process.env.PORT || 2999
app.listen(port, () => console.log(`listening for request: http://localhost:${port}/`))