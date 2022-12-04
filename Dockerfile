FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli
WORKDIR /learn-nestjs

FROM mariadb:latest
# COPY ./init.sql /docker-entrypoint-initdb.d/
VOLUME [ "/var/lib/mysql" ]