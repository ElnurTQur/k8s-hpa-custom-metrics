FROM node:lts-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY server.js .

CMD [ "node", "server.js" ]