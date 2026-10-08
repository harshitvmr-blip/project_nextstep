# =========================
# Stage 1: Build application
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better Docker layer caching
COPY package*.json ./

RUN npm ci

# Copy application source
COPY . .

# Build Vite application
RUN npm run build


# =========================
# Stage 2: Production server
# =========================
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite production build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


# difference between CMD and Entrypoint