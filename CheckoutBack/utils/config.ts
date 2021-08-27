import dotenv from "dotenv";
import assert from "assert"
import { Config } from "../interfaces/config"

dotenv.config();
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env; // destructure and set all hidden values in .env file

//complain if a port or host was not provided
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');


export
const config:Config={
    port: PORT!,
    host: HOST!,
    url: HOST_URL!,
    firebaseConfig: {
        apiKey: API_KEY!,
        authDomain: AUTH_DOMAIN!,
        databaseURL: DATABASE_URL!,
        projectId: PROJECT_ID!,
        storageBucket: STORAGE_BUCKET!,
        messagingSenderId: MESSAGING_SENDER_ID!,
        appId: APP_ID!
    }
}