import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from "@neondatabase/serverless"

const databaseUrl = process.env.DATABASE_URL;

if(!databaseUrl){
    throw new Error(" Db is missing ")
}

const sql = neon(databaseUrl)
export const db = drizzle(sql);
