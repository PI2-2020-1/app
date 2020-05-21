FROM node:13-alpine
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000