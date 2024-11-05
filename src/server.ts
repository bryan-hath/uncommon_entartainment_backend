import app from "./app";
import pool from "./utils/database";
import config from "./config";

const PORT = config.port;

// Connect to the database and start the server
const connectWithRetry = async (retries: number = 5, delay: number = 2000) => {
    while (retries) {
        try {
            // Check database connection
            await pool.getConnection();
            console.log("Successfully connected to the database.");

            // Start the server only if the database connection is successful
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
            break;
        } catch (error) {
            console.error(`Database connection failed: ${error}`);
            retries -= 1;
            console.log(`Retries left: ${retries}`);

            // Exit if no retries left
            if (retries === 0) {
                console.error("Could not connect to the database. Exiting...");
                process.exit(1);
            }

            // Wait for the specified delay before the next retry
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
};

const startServer = async () => {
    try {
        // Check database connection
        await connectWithRetry();
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
