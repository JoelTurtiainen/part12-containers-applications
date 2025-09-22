FROM node:20 AS server

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install
ENV MONGO_URL=${MONGO_URL}
ENV REDIS_URL=${REDIS_URL}

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]


