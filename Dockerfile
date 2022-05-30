FROM node:16.15-alpine3.15

RUN npm install -g @nestjs/cli@8.2.6

USER node

WORKDIR /home/node/app