FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install like in dev
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

RUN cat package.json

# Copy the rest of the code
COPY . .

RUN ls -l

RUN npm run build

EXPOSE 80
EXPOSE 3000
# Install serve
RUN npm install -g serve

# Serve the dist directory
CMD ["serve", "-s", "dist"]
