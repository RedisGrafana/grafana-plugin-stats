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
 * Save plugin details
 *
 * @async
 * @param {any} plugin Plugin
 */
async function savePlugin(plugin) {
  const downloadKey = `download:${plugin.slug}`;
  const diffKey = `diff:${plugin.slug}`;

  /**
   * Get the latest value
   */
  const value = await redis
    .send_command("TS.GET", downloadKey)
    .catch((err) => console.log(err));

  /**
   * Add Time-series download sample with plugin and version labels
   */
  await redis
    .send_command(
      "TS.ADD",
      downloadKey,
      "*",
      plugin.downloads,
      "LABELS",
      "value",
      "download",
      "type",
      plugin.typeCode,
      "plugin",
      plugin.slug,
      "version",
      plugin.version
    )
    .catch((err) => console.log(err));

  /**
   * Previous value not found
   */
  if (!value || !value.length || !Number(value[1])) {
    return;
  }

  /**
   * Add Time-series diff sample with plugin and version labels
   */
  await redis
    .send_command(
      "TS.ADD",
      diffKey,
      "*",
      Number(plugin.downloads) - Number(value[1]),
      "LABELS",
      "value",
      "diff",
      "type",
      plugin.typeCode,
      "plugin",
      plugin.slug,
      "version",
      plugin.version
    )
    .catch((err) => console.log(err));
}

/**
 * Get all plugins
 *
 * @async
 */
async function main() {
  /**
   * Get All plugins
   *
   * @see https://grafana.com/api/plugins
   */
  const response = await axios.get(`https://grafana.com/api/plugins`);

  /**
   * Response
   */
  const data = response.data;
  if (!data) {
    console.log("Where is the data?");
    return;
  }

  /**
   * Save data
   */
  await Promise.all(data.items.map(async (plugin) => await savePlugin(plugin)));

  /**
   * Close Redis connection
   */
  await redis.quit();
}

/**
 * Start
 */
main();
