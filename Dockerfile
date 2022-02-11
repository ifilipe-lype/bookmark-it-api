FROM node:12

WORKDIR /app
ADD . .

RUN yarn

EXPOSE 3000
CMD yarn typeorm migration:run && yarn build && yarn start