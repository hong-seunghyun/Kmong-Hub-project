FROM node:20.9.0

WORKDIR /hsb-app/

COPY package.json package-lock.json ./
RUN npm install 
COPY . .
EXPOSE 8000

CMD ["npm", "start"]