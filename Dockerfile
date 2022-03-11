FROM node:14-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
