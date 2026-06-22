# stage 1: build
FROM node:24-alpine AS builder

WORKDIR /app

# install dependencies first for layer caching.
COPY package*.json ./
RUN npm ci

# declare build-time arguments.
ARG BASE_URL
ARG API_BASE_URL
ARG GOOGLE_ANALYTICS_ID
ARG GOOGLE_RECAPTCHA_SITE_KEY
ARG MIXPANEL_TOKEN
ARG CODECOV_TOKEN

# expose build args as env vars for nuxt build.
ENV BASE_URL=$BASE_URL
ENV API_BASE_URL=$API_BASE_URL
ENV GOOGLE_ANALYTICS_ID=$GOOGLE_ANALYTICS_ID
ENV GOOGLE_RECAPTCHA_SITE_KEY=$GOOGLE_RECAPTCHA_SITE_KEY
ENV MIXPANEL_TOKEN=$MIXPANEL_TOKEN
ENV CODECOV_TOKEN=$CODECOV_TOKEN

COPY . .
RUN npm run build

# stage 2: runtime
FROM node:24-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
