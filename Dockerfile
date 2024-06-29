FROM node:latest

EXPOSE 3002

WORKDIR /usr/local/app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "server.js"]
