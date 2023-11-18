FROM node:20.9.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json docker
RUN npm install 
RUN npm install react-scripts@3.0.1 -g


CMD ["npm", "start"]