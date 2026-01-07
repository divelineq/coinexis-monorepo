FROM oven/bun:1 AS build

WORKDIR /client
COPY package.json ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:stable-alpine AS production
COPY --from=build /client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g", "daemon off;"]


