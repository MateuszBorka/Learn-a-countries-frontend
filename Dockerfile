# Use a Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install --production

# Copy the application files
COPY . .

# Expose port 8081
EXPOSE 8081

# Start the application
CMD ["npm", "start"]
