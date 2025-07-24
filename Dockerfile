# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve using vite preview
FROM node:20-alpine

WORKDIR /app

# Install only vite for serving
RUN npm install -g vite

# Copy final output only
COPY --from=builder /app/dist ./dist

# Expose port used by `vite preview`
EXPOSE 8080

# Serve the built app
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "8080"]
