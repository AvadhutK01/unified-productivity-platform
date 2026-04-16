FROM node:20-alpine

WORKDIR /app

# Install dependencies needed for node-gyp and Prisma
RUN apk add --no-cache openssl python3 make g++

COPY package.json package-lock.json* ./

RUN npm ci

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

# In development mode via compose, volume mounts override the source files,
# but we still build it so it's ready.
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]
