FROM oven/bun:1-alpine

WORKDIR /server

COPY package.json bun.lock ./

RUN bun install

COPY . .

ENV PORT=4200
EXPOSE 4200

CMD ["bun", "run", "server"]

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4200/healthcheck || exit

