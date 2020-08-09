/**
 * A robust, performance-focused and full-featured Redis client for Node.js.
 *
 * @see https://github.com/luin/ioredis
 */
const Redis = require("ioredis");

/**
 * Promise based HTTP client for the browser and node.js
 *
 * @see https://github.com/axios/axios
 */
const axios = require("axios");

/**
 * You can also specify connection options as a redis:// URL or rediss:// URL when using TLS encryption
 */
const redis = new Redis("redis://localhost:6379");

/**
 * Main
 *
 * @async
 * @param {string} plugin Plugin name
 */
async function main(plugin) {
  /**
   * Get Plugin's data
   *
   * @see https://grafana.com/api/plugins/redis-datasource/versions/latest
   */
  const response = await axios.get(
    `https://grafana.com/api/plugins/${plugin}/versions/latest`
  );

  /**
   * Response
   */
  const data = response.data;
  if (!data) {
    console.log("Where is the data?");
    return;
  }

  /**
   * Add Time-series sample with plugin and version labels
   */
  await redis.send_command(
    "TS.ADD",
    data.pluginSlug,
    "*",
    data.downloads,
    "LABELS",
    "plugin",
    data.pluginSlug,
    "version",
    data.version
  );

  /**
   * Close Redis connection
   */
  await redis.quit();
}

/**
 * Start
 */
main("redis-datasource");
