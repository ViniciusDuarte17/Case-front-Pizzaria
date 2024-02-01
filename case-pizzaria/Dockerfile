FROM node:18.017.1

WORKDIR /App

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]