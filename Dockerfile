FROM node:16.15.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install

RUN mkdir src
COPY ./src ./src

EXPOSE 3030

CMD ["npm","start"]
