FROM node:22

RUN apt update && \
    apt install openssl procps -y && \
    npm install -g @nestjs/cli@10.4.8

USER node

WORKDIR /var/www/html

CMD [ "tail", "-f", "/dev/null" ]
