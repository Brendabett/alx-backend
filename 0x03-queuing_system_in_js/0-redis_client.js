import redis from redis;
const client = redis.createClient();

client
  .on(error, (error) => {
    console.log();
  })
  .on(connect, () => {
    console.log(Redis client connected to the server);
  });
