# Specify a base image node alpine
FROM node:alpine

WORKDIR /usr/app

#Only copy package.json so changing a source file we don't have to npm install
COPY ./package.json ./

RUN npm install

#Copy rest of things
COPY ./ ./

CMD ["npm", "run", "start"]