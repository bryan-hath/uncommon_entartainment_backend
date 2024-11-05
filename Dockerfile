# Stage 1: Build the application
FROM node:latest AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Stage 2: Run the application in a smaller image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy only the compiled output and node_modules from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["node", "dist/src/server.js"]
