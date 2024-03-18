// src/index.ts
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDB from './db'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8080

// You don't need body-parser if you're using Express 4.16.0 and above
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

// app.use("/api/v1/users", userAuthenticationRouter);
// app.use("/api/v1/products", productRouter);

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL || '')

        app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
    } catch (error) {
        console.error(error)
    }
}

startServer()
