# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any dependencies
RUN npm install

# Change ownership of node_modules to node user and ensure executables are runnable
RUN chown -R node:node /app/node_modules && chmod -R 755 /app/node_modules/.bin

# Copy the rest of your project into the working directory
COPY . .

# You can use a simple server like serve or http-server to serve static files 
RUN npm install -g http-server

# Expose a port that the server will listen on 
EXPOSE 8080

# Switch to non-root user for better security
USER node

# Run the server 
CMD ["http-server", ".", "-p 8080"]


