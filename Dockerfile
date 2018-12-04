
# stage: 0 — build
FROM node:10.13.0 as build-stage

# set working directory
RUN mkdir /usr/src/react-app
WORKDIR /usr/src/react-app

COPY package*.json ./
RUN npm install --no-optional

COPY . .
RUN npm run build


# stage: 1 — the production environment
FROM nginx:alpine

COPY --from=build-stage /usr/src/react-app/dist /usr/share/nginx/html
COPY --from=build-stage /usr/src/react-app/nginx/http.conf /etc/nginx/nginx.conf
COPY --from=build-stage /usr/src/react-app/nginx/server.conf /etc/nginx/conf.d/default.conf