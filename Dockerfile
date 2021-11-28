# This dockerfile uses the ubuntu image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM node:alpine3.14
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com

COPY ./ /usr/src/app
WORKDIR /usr/src/app

RUN \
  npm install && \
  npm run build

# Define default command.
# CMD ["npm install && npm start"]
CMD npm run start:prod

# Expose ports.
# EXPOSE 3000