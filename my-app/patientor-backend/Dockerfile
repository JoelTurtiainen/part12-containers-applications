FROM node:20 AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev

CMD [ "npm", "start" ]
