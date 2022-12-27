FROM alpine
WORKDIR /app

COPY pro.js .

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install express
CMD node pro.js
