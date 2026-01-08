## Описание

Это веб‑приложение для мониторинга криптовалютных данных: можно смотреть рынок в разных режимах, отслеживать котировки/активы и быстро переключаться между представлениями.

Дополнительно доступен просмотр активности по адресу кошелька: по номеру wallet можно находить NFT‑транзакции и связанную историю, чтобы анализировать движения и операции без ручного поиска по блокчейн‑эксплорерам.

## Backend (BFF) и ключи

Backend является BFF с использованием Bybit API и Modula API. Для работы необходимо в `apps/server` создать файл `.env` и указать ключи:

1) [Bybit API](https://www.bybit.com/future-activity/en/developer) Необходим для мониторинга данных по криптовалюте и просмотра графика
```env
BYBIT_API_KEY=key
BYBIT_API_SECRET=secret
```

2) [Modula API](https://docs.mobula.io/rest-api-reference/authentification) Необходим для просмотра информации по кошельку (транзакции, nft, портфолио)
```env
MODULA_API=key
```

## Docker (в процессе)

docker compose up

## Запуск в dev

```env
bun i
```

```env
nx start
```

Можно так же по отдельности запустить client или server

```env
nx start:client
nx start:server
```
