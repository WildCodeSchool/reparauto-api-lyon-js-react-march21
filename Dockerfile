FROM strapi/base:14

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

COPY . /srv/app
WORKDIR /srv/app

RUN rm -rf node_modules
RUN npm install
RUN npm install -g add strapi
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

WORKDIR /srv/app

CMD ["npm", "start"]
