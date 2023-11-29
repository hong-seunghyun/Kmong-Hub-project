FROM node:20.9.0

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8000

RUN yarn build
ENV PORT=8000
ENV HOST=0.0.0.0

#HEALTHCHECK --interval=10s --timeout=3s CMD curl -f http://localhost:8000/api/healthcheck || exit 1

CMD ["yarn", "start"]
