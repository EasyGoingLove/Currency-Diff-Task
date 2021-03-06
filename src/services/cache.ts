const cache = async (baseUrl:string,currentCurrency:string) => {
  
  // Try to get data from the cache, but fall back to fetching it live.
  async function getData() {
    const cacheVersion = 1;
    const cacheName = `currency-${cacheVersion}`;
      const url = `${baseUrl}/${currentCurrency}.json`;
      let cachedData = await getCachedData(cacheName, url);

      if (cachedData) {
        console.log("Retrieved cached data");
        return cachedData;
      }

      console.log("Fetching fresh data");

      const cacheStorage = await caches.open(cacheName);
      await cacheStorage.add(url);
      cachedData = await getCachedData(cacheName, url);
      await deleteOldCaches(cacheName);

      return cachedData;
    
  }

  // Get data from the cache.
  async function getCachedData(cacheName: string, url: RequestInfo) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return await cachedResponse.json();
  }

  // Delete any old caches to respect user's disk space.
  async function deleteOldCaches(currentCache: string) {
    const keys = await caches.keys();

    for (const key of keys) {
      const isOurCache = "myapp-" === key.substr(0, 6);

      if (currentCache === key || !isOurCache) {
        continue;
      }

      caches.delete(key);
    }
  }

  try {
    const data = await getData();
    console.log({ data });
  } catch (error) {
    console.error({ error });
  }
};

export default cache;
