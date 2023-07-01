import config from './config/pg';
import { Pool } from 'pg';

let pgConfig = config(String(process.env.NODE_ENV))

const connection = new Pool(pgConfig)

export {
    connection
}