# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
RUN npm install -g nodemon
CMD ["nodemon", "server.js"]

