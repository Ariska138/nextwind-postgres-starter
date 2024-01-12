# Documentation

## Getting Started

### menyiapkan .env
ubah `.env.sample` menjadi `.env.development.local`

### Menyiapkan Docker untuk DB

- Instal Docker
- running Docker Desktop on your PC
- run docker-compose on CLI

```bash
docker-compose up
```

## Menyiapkan DB

- download and install https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

- atur path pada Variable Environment 
  C:\Program Files\PostgreSQL\15\bin

- connect dengan CLI

```bash
psql -d postgres -U  postgres -W
```

or

```bash
psql 'postgres://postgres:root@localhost:5432/postgres'
```

## Referensi

- https://www.postgresqltutorial.com/postgresql-administration/psql-commands/
- 
