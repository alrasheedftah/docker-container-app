FROM node:14

WORKDIR /app-docker

COPY package.json .

RUN  npm i 

COPY . .

EXPOSE 4000

CMD [ "npm","start" ]

