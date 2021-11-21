FROM redislabs/redisearch:latest as redisearch
FROM redislabs/redisgraph:latest as redisgraph
FROM redislabs/rejson:latest as rejson
FROM redislabs/redisgears:edge

ENV LD_LIBRARY_PATH=/usr/lib/redis/modules

ARG MODULES=/var/opt/redislabs/lib/modules
ARG RG=${MODULES}/redisgears.so
ARG REDIS="redis-server --loadmodule ${RG} Plugin /var/opt/redislabs/modules/rg/plugin/gears_python.so"

ARG DEPS="gcc g++ build-essential python3-pip"

# Set up a build environment
WORKDIR /data
RUN set -ex;\
    deps="$DEPS";\
    apt-get update;\
    apt-get install -y --no-install-recommends $deps;

# Copy Modules
COPY --from=redisearch ${LD_LIBRARY_PATH}/redisearch.so ${LD_LIBRARY_PATH}/
COPY --from=redisgraph ${LD_LIBRARY_PATH}/redisgraph.so ${LD_LIBRARY_PATH}/
COPY --from=rejson ${LD_LIBRARY_PATH}/*.so ${LD_LIBRARY_PATH}/

# Start Redis and verify
RUN nohup bash -c "${REDIS}&" && sleep 4 && redis-cli RG.PYEXECUTE "GearsBuilder().run()" && redis-cli save

ENTRYPOINT ["redis-server"]
CMD ["--loadmodule", "/usr/lib/redis/modules/redisearch.so", \
    "--loadmodule", "/usr/lib/redis/modules/redisgraph.so", \
    "--loadmodule", "/usr/lib/redis/modules/rejson.so", \
    "--loadmodule", "/var/opt/redislabs/lib/modules/redisgears.so", \
    "Plugin", "/var/opt/redislabs/modules/rg/plugin/gears_python.so"]