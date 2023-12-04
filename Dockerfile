FROM node:20.9.0 AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Use a smaller base image for the final image
FROM node:20.9.0-alpine

WORKDIR /usr/src/app

# Copy only necessary files from the builder stage
COPY --from=builder . .

# Install only production dependencies
RUN yarn install --production

EXPOSE 8000

ENV PORT=8000
ENV HOST=0.0.0.0

# HEALTHCHECK --interval=10s --timeout=3s CMD curl -f http://localhost:8000/api/healthcheck || exit 1

CMD ["yarn", "start"]