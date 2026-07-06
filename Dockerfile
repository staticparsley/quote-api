FROM node:22-alpine

ARG APP_VERSION=development

ARG GIT_SHA=development

ARG BUILD_DATE=development

ENV APP_VERSION=$APP_VERSION

ENV GIT_SHA=$GIT_SHA

ENV BUILD_DATE=$BUILD_DATE

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]