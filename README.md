# Grafana Plug-ins Statistics

![Stats](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/redis-datasource-stats.png)

[![Grafana 7](https://img.shields.io/badge/Grafana-7-orange)](https://www.grafana.com)
[![Redis Data Source](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Data%20Source&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)
[![Downloaded](https://img.shields.io/badge/dynamic/json?color=blue&label=Downloads&query=%24.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)

## Introduction

This project collects plug-ins statistics from Grafana repository as [RedisTimeSeries](https://oss.redislabs.com/redistimeseries/) and visualizes collected data using [Redis plug-ins for Grafana](https://redisgrafana.github.io/).

![Diagram](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/redis-grafana-stats.png)

Read the full story on Redis Labs blog [How to Use the New Redis Data Source for Grafana Plug-in](https://redislabs.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/).

## Requirements

- [Docker](https://docker.com) to start Redis and Grafana.
- [Node.js](https://nodejs.org) to run scripts.

## Collect statistics

Collect and store statistics for all Grafana plugins using [RedisTimeSeries](https://oss.redislabs.com/redistimeseries/).

```bash
node src/global-stats.ts
```

## Visualize data

To visualize the collected data start Docker containers:

```bash
docker-compose up
```

![Grafana Plugins](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/grafana-plugins.png)

## Learn more

- Redis plug-ins for Grafana [Documentation](https://redisgrafana.github.io/)
- [Real-time observability with Redis and Grafana](https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/)
