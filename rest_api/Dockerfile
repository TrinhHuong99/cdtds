FROM node:12-alpine as nodebase
LABEL maintainer="thaibn@hocmai.vn"
RUN mkdir -p /usr/local/src
RUN apk add --no-cache tzdata
ENV TZ Asia/Ho_Chi_Minh

FROM nodebase as dev
RUN npm i -g @adonisjs/cli pm2
WORKDIR /usr/local/src
ENTRYPOINT [ "pm2-dev", "ecosystem.config.js" ]