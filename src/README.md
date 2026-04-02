"""
cache-redis-config: A Python package for working with Redis configurations.

Installation
------------

To install the package, run the following command:

    pip install cache-redis-config

Usage
-----

To use the package, import it and use the functions to configure your Redis instance.

```python
from cache_redis_config import RedisConfig

config = RedisConfig('localhost', 6379, db=0)
print(config.host)
print(config.port)
print(config.db)
```

Configuration
------------

The `RedisConfig` class takes the following parameters:

*   `host`: The hostname or IP address of the Redis server.
*   `port`: The port number of the Redis server.
*   `db`: The Redis database number.

The `RedisConfig` class provides the following properties:

*   `host`: Returns the hostname or IP address of the Redis server.
*   `port`: Returns the port number of the Redis server.
*   `db`: Returns the Redis database number.

History
--------

*   v1.0.0: Initial release.
"""

class RedisConfig:
    def __init__(self, host, port, db):
        self._host = host
        self._port = port
        self._db = db

    @property
    def host(self):
        return self._host

    @property
    def port(self):
        return self._port

    @property
    def db(self):
        return self._db