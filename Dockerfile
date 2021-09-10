FROM docker.io/ppc64le/centos:7
        
#install most up-to-date LTS node for ppc64le
RUN cd /usr/local \
        && curl -sL https://nodejs.org/dist/v14.17.5/node-v14.17.5-linux-ppc64le.tar.gz > node-v14.17.5-linux-ppc64le.tar.gz \
        && tar --strip-components 1 -xf node-v14.17.5-linux-ppc64le.tar.gz

COPY package*.json ./
RUN npm install

COPY server.js .
# COPY .env .

EXPOSE 8080

CMD [ "node", "server.js" ]