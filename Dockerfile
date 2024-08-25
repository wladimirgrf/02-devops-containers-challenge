FROM node:20-alpine3.20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate
RUN npm ci --production && npm cache clean --force

FROM node:20-alpine3.20

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/prisma/schema.prisma ./prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
