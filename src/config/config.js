import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

export default {
    DB_HOST: process.env.DB_HOST || 'development',
    DB_PORT: process.env.DB_PORT || 'localhost',
    DB_USER: process.env.DB_USER || 3000,
    DB_PASSWOR: process.env.DB_PASSWORD || 'letmein',
    DB_NAME: process.env.DB_NAME || 'patientsdb',
    DB_CONNECTION_LIMIT: process.env.DB_CONNECTION_LIMIT || 20,
    SERVER_PORT: process.env.SERVER_PORT || 3000
}