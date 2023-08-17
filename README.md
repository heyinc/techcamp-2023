# STORES Tech camp 2023

## Development (docker)

Require the following:

- Docker

```console
$ docker compose up
...
```

The following services will be started:

- pos/
  - http://localhost:8001
- membership/
  - http://localhost:8002

## Development (local)

Require the following:

- Ruby 3.2
  - Recommend: <https://github.com/rbenv/rbenv>
- Node.js 18

```console
$ ./setup
$ foreman start
...
```

The following services will be started:

- pos/
  - http://localhost:8001
- membership/
  - http://localhost:8002
