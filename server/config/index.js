import * as dotenv from "dotenv"

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default{
    port: parseInt(process.env.PORT, 9527),
    databaseURL: process.env.SQL_URI,
    mysql:{
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'anran'
    }
}