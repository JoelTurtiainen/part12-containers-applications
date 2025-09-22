from node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev
ENV MONGO_URL=${MONGO_URL}
ENV REDIS_URL=${REDIS_URL}

CMD npm start
