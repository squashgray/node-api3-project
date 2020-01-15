const server = require("./server"); // imports server from api

server.listen(5000, () => {
  console.log("\n*** Server Running on http://localhost:5000 ***\n"); // sets port to 5000
});
