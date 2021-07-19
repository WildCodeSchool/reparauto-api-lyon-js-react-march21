FROM strapi/base:14

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

COPY . /srv/app
WORKDIR /srv/app

RUN rm -rf node_modules
RUN yarn install
RUN yarn run build

CMD ["yarn", "start"]
