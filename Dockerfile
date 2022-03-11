FROM node:14-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]%    