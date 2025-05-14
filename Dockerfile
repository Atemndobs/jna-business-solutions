# # Build stage
# FROM node:20-alpine as build

# WORKDIR /app

# # Copy package files
# COPY package*.json ./
# COPY pnpm-lock.yaml* ./

# # Install dependencies
# RUN npm install -g pnpm && pnpm install --frozen-lockfile

# # Copy source code
# COPY . .

# # Build the application
# RUN pnpm run build

# # Production stage
# FROM nginx:stable-alpine

# # Copy built assets from build stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Copy nginx configuration
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]



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

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

