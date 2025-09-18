# React application

This application is created with [Vite](https://vitest.dev/).

Install dependencies with `npm install`

You can run the application in development mode with `npm run dev`

You can build static files for production release with `npm run build`

## Environment variables

Use env VITE_BACKEND_URL to set where the backend for this application is


## Docker Example

build: `docker build . -t todo-frontend`

start: `docker run -p 8000:80 todo-frontend`

or alternatively

start dev: `docker compose -f docker-compose.dev.yml up`
