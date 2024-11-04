import mysql from "mysql2/promise";
import config from "../config";

const pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
});

export default pool;
