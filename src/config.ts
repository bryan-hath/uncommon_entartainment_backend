import dotenv from "dotenv";

// Load environment variables from .env file, if available
dotenv.config();

interface Config {
    port: number;
    database: {
        host: string;
        user: string;
        password: string;
        name: string;
    };
}

// Extract environment variables with default fallbacks if not set
const config: Config = {
    port: parseInt(process.env.PORT || "3000", 10),
    database: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "password",
        name: process.env.DB_NAME || "items_db",
    },
};

export default config;
