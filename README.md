# My TypeScript Node.js Application with MySQL and Docker

This project is a TypeScript-based Node.js application with an Express API, connected to a MySQL database. It includes Docker Compose configuration for containerized deployment and uses a migration script and seed data to initialize the database on first startup.

## Features

-   RESTful API using Express with TypeScript
-   MySQL as the database
-   Docker Compose setup for easy deployment
-   Error handling and connection retry mechanism for database initialization
-   Tests using Jest and Supertest
-   Mysql data is stored in `mysql_data` folder, You don't need any migration or seed

## Prerequisites

-   Docker and Docker Compose installed
-   Node.js and npm (for local development)

## Project Structure

```
project/
├── src/
│   ├── controllers/
│   │   └── itemController.ts
│   ├── routes/
│   │   └── itemRoutes.ts
│   ├── models/
│   │   └── Item.ts
│   ├── utils/
│   │   ├── database.ts
│   │   └── errorHandler.ts
│   ├── app.ts
│   ├── server.ts
│   └── config.ts
├── migrations/
│   ├── init.sql
│   └── seed.sql
├── mysql_data/             # MySQL data will be stored here (created on first run)
├── tests/
│   └── itemController.test.ts
├── Dockerfile
├── docker-compose.yml
├── wait-for-it.sh
├── .env
└── README.md
```

## Environment Variables

Create a `.env` file in the project root with the following content:

```env
PORT=3000
DB_HOST=db
DB_USER=root
DB_PASSWORD=my-secret-pw
DB_NAME=items_db
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Run with Docker Compose

To start the application using Docker Compose, run:

```bash
docker-compose up --build
```

This will start the following services:

-   **app**: The Node.js application
-   **db**: The MySQL database
-   **migrate**: A one-time migration service to initialize and seed the database

The API should be available at [http://localhost:3000](http://localhost:3000).

### 3. API Endpoints

-   **GET /items**: Retrieve a list of items.
-   **POST /items**: Add a new item to the list. Requires a JSON payload: `{ "name": "Item Name" }`

### 4. Run Tests

To run tests, execute:

```bash
npm test
```

## Running Tests

The tests are located in the `tests` directory and are written using Jest and Supertest. They validate the API functionality, including retrieving items and adding new items.
