# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy AWS CA
COPY global-bundle.pem /server/global-bundle.pem

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]