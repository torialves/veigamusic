import pg from 'pg'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config('config')

const { Pool } = pg

let db 

const connectDb = async () => {
    try {
        const pool = new Pool({
            user: "htoopxaw",
            host: "batyr.db.elephantsql.com",
            database: "htoopxaw",
            password: "fq_1H6rEzlymxE7ScPMeQFpyXAilKELh",
            port: 5432,
            // user: process.env.PGUSER,
            // host: process.env.PGHOST,
            // database: process.env.PGDATABASE,
            // password: process.env.PGPASSWORD,
            // port: process.env.PGPORT
        });        
        await pool.connect()
    } catch (error) {
        console.log(error)
    }
}

db = connectDb()
export default db ;
