FROM node:lts

ADD src /usr/src/app
WORKDIR /usr/src/app

RUN yarn

CMD ["yarn", "start"]