FROM node:16.19.0
RUN yarn add global npm@9.4.0
RUN yarn add global @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

# curlインストール
RUN apt-get update
RUN apt-get install -y curl

RUN yarn
CMD [ "yarn", "start:dev"]