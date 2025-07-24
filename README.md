# ACME Website

## Running with Docker

### Build the Docker image
```bash
docker build -t acme-website .
```

### Run the container
```bash
docker run -p 8080:8080 acme-website
```

The application will be available at http://localhost:8080

### Alternative: One-line build and run
```bash
docker build -t acme-website . && docker run -p 8080:8080 acme-website
```

### Stop the container
```bash
# Find the container ID
docker ps

# Stop the container
docker stop <CONTAINER ID>
```

Or use Ctrl+C if running in foreground mode.