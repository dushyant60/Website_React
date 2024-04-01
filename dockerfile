FROM node:alpine
RUN mkdir -p /WEBSITE_REACT
WORKDIR /WEBSITE_REACT
COPY  package.json ./
COPY  package-lock.json ./
COPY ./ ./
RUN npm i -f
EXPOSE 3000
CMD ["npm","start"]
