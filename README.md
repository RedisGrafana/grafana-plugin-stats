<h1 align="center">How many times Redis Datasource for Grafana was downloaded?</h1>

<div id="badges" align="center">

[![Grafana 7](https://img.shields.io/badge/Grafana-7-blue)](https://www.grafana.com)
[![RedisTimeSeries](https://img.shields.io/badge/RedisTimeSeries-inspired-yellowgreen)](https://oss.redislabs.com/redistimeseries/)
[![Grafana-Redis-Datasource](https://img.shields.io/badge/GrafanaRedisDatasource-integrated-yellow)](https://github.com/RedisTimeSeries/grafana-redis-datasource)

</div>

![Stats](https://github.com/mikhailredis/grafana-plugin-stats/blob/master/images/redis-datasource-stats.png)

[Redis Datasource](https://github.com/RedisTimeSeries/grafana-redis-datasource) for Grafana was published 10 days ago and I want to see how many times it was downloaded over time. Unfortunately, the Grafana plugin repository does not provide such statistics out of the box.

Please read full LinkedIn Article "[How many times Redis Datasource for Grafana was downloaded?](https://www.linkedin.com/pulse/how-many-times-redis-datasource-grafana-downloaded-mikhail-volkov)" to learn more about the project.

## Requirements

- [Docker](https://docker.com) to start Redis and Grafana.
- [Node.js](https://nodejs.org) to run scripts.

## Datasource configuration

![Stats](https://github.com/mikhailredis/grafana-plugin-stats/blob/master/images/redis-datasource.png)

## Grafana Plugins statistics

Script `src/global-stats.ts` can retrieve and store statistics for all Grafana plugins in [RedisTimeSeries](https://oss.redislabs.com/redistimeseries/) which displayed on Global dashboard.

![Grafana Plugins](https://github.com/mikhailredis/grafana-plugin-stats/blob/master/images/grafana-plugins.png)
