FROM node:22-slim AS build

WORKDIR /app

ARG REACT_APP_APARTMENTS_URL
ENV REACT_APP_APARTMENTS_URL=$REACT_APP_APARTMENTS_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
