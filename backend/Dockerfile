FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=8080

CMD ["npm", "start"]

EXPOSE 8080
