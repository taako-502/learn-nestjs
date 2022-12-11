FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

# curlインストール
RUN apk update
RUN apk add curl

RUN npm i
CMD [ "npm", "run", "start:dev"]