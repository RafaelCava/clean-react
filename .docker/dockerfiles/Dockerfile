FROM node:16

RUN apt-get update && apt-get install -y \
    git \
    bash

WORKDIR /usr/clean-react/app

USER node

EXPOSE 8080

CMD [ "tail", "-f", "/dev/null" ]