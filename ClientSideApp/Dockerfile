FROM node:16.17.0

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest

COPY . /usr/src/app/

CMD ["ng" ,"serve"]
