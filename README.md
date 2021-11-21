# Collecting Grafana Plugins Statistics as RedisTimeSeries and visualizing time series using Redis plugins for Grafana

![Stats](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/redis-datasource-stats.png)

[![Grafana 8](https://img.shields.io/badge/Grafana-8-orange)](https://www.grafana.com)
[![Redis Data Source](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Data%20Source&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)
[![Downloaded](https://img.shields.io/badge/dynamic/json?color=blue&label=Downloads&query=%24.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)
[![Docker](https://github.com/RedisGrafana/grafana-plugin-stats/actions/workflows/docker.yml/badge.svg)](https://github.com/RedisGrafana/grafana-plugin-stats/actions/workflows/docker.yml)

## Introduction

This project collects plugins statistics from Grafana repository as [RedisTimeSeries](https://oss.redis.com/redistimeseries/) and [RedisJSON](https://oss.redis.com/redisjson/) and visualizes collected data using [Redis plugins for Grafana](https://redisgrafana.github.io/).

![Diagram](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/redis-grafana-stats.png)

Read the full story on Redis Labs blog [How to Use the New Redis Data Source for Grafana Plugin](https://redis.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/).

## Demo

Demo is available on [demo.volkovlabs.io](https://demo.volkovlabs.io):

- [Redis Overview dashboard](https://demo.volkovlabs.io/d/TgibHBv7z/redis-overview?orgId=1&refresh=1h)
- [Grafana Plugins dashboard](https://demo.volkovlabs.io/d/hHK1qmpnk/grafana-plugins?orgId=1)
- [Grafana Plugins Downloads dashboard](https://demo.volkovlabs.io/d/C1NCSr3Gk/grafana-plugins?orgId=1)

## Requirements

- [Docker](https://docker.com) to start Redis and Grafana.
- [Node.js](https://nodejs.org) to run scripts.

## Redis with RedisJSON2, RedisSearch2 and RedisGraph Docker image

This project provides Docker image with the latest version of Redis, RedisJSON2, RedisSearch2, RedisGraph and RedisGears modules.

```bash
docker run -p 6379:6379 --name=redis-jsg ghcr.io/redisgrafana/redis-jsg:latest
```

## Collect statistics

Collect and store statistics for all Grafana plugins using [RedisTimeSeries](https://oss.redis.com/redistimeseries/).

```bash
node src/stats.ts
```

## Visualize data

To visualize the collected data start Docker containers:

```bash
docker-compose up
```

![Grafana Plugins](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/grafana-plugins.png)

## Learn more

- Redis plugins for Grafana [Documentation](https://redisgrafana.github.io/)
- [Elevate your Redis experience with Redis plugins for Grafana](https://www.youtube.com/watch?v=LquDQyEncLE)
- [Real-time observability with Redis and Grafana](https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/)

## Contributing

- Fork the repository.
- Find an issue to work on and submit a pull request.
- Could not find an issue? Look for documentation, bugs, typos, and missing features.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/RedisGrafana/grafana-plugin-stats/blob/master/LICENSE).
