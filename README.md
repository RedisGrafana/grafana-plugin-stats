<h1 align="center">How many times Redis Data Source for Grafana was downloaded?</h1>

![Stats](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/redis-datasource-stats.png)

[![Grafana 7](https://img.shields.io/badge/Grafana-7-orange)](https://www.grafana.com)
[![Redis Data Source](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Data%20Source&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)
[![Redis Application plug-in](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Application%20plug-in&query=%24.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-app)](https://grafana.com/grafana/plugins/redis-app)
[![Downloaded](https://img.shields.io/badge/dynamic/json?color=blue&label=Redis%20Data%20Source%20downloads&query=%24.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fredis-datasource)](https://grafana.com/grafana/plugins/redis-datasource)

Earlier this month, Redis Labs released the new [Redis Data Source](https://grafana.com/grafana/plugins/redis-datasource) for Grafana plug-in, which connects the widely used open source application monitoring tool to Redis. To give you an idea of how it all works, let’s take a look at a self-referential example: using the plug-in to see how many times it has been downloaded over time. (The Grafana plug-in repository itself does not provide such statistics out of the box.)

## What is the Redis Data Source for Grafana?

If you’re not familiar with Grafana, it’s a very popular tool used to build dashboards to monitor applications, infrastructures, and software components. The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs.

## Learn more

- Redis Labs blog post "[How to Use the New Redis Data Source for Grafana Plug-in](https://redislabs.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/)"
- LinkedIn Article "[How many times Redis Data Source for Grafana was downloaded?](https://www.linkedin.com/pulse/how-many-times-redis-datasource-grafana-downloaded-mikhail-volkov)".

## Requirements

- [Docker](https://docker.com) to start Redis and Grafana.
- [Node.js](https://nodejs.org) to run scripts.

## Data Source configuration

![Data Source](https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/datasource.png)

## Grafana Plugins statistics

Script `src/global-stats.ts` can retrieve and store statistics for all Grafana plugins using [RedisTimeSeries](https://oss.redislabs.com/redistimeseries/). To display the collected data use dashboard `dashboards/grafana-plugins.json`.

![Grafana Plugins](https://raw.githubusercontent.com/RedisGrafana/grafana-plugin-stats/master/images/grafana-plugins.png)
