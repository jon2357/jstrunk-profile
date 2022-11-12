# syntax=docker/dockerfile:1
# For serving a static file site we can reduce the container size by only serving the
# bundled files to the client. To do this we use a multistage build with a static file 
# server (E.g. NGINX)

# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

#### Build Stage
# For our environment Debian Linux 11.5 (Stable LTS)[Bullseye], Just the pacakges required to run node [slim], and a spesific LTS node version
FROM node:16.18.1-bullseye-slim as Build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build


#### Production Stage 
# nginx uses debian:bullseye-slim (~52MB)
# nginx:alpine uses alpine (~9mb)
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]