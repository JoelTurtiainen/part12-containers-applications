FROM node:20 AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev
ENV MONGO_URL=${MONGO_URL}
ENV REDIS_URL=${REDIS_URL}

CMD [ "npm", "start" ]
