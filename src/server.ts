import app from "./app";
import pool from "./utils/database";
import config from "./config";

const PORT = config.port;

const startServer = async () => {
    try {
        // Check database connection
        await pool.getConnection();
        console.log("Successfully connected to the database.");

        // Start the server only if the database connection is successful
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}...`);
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

startServer();
