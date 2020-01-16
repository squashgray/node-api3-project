const express = require("express");
const postsRouter = require("./posts/postRouter");
const usersRouter = require("./users/userRouter");
const server = express();
server.use(express.json(), logger); // uses logger on everything

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/api/users", usersRouter); // cares only about requests beginning with /api/users
server.use("/api/posts", postsRouter); // cares only about requests beginning with /api/posts

//custom middleware

function logger(req, res, next) {
  const newDate = new Date(Date.now());
  console.log(
    `${req.method} to ${
      req.originalUrl
    } at ${newDate.toDateString()}, ${newDate.toTimeString()}`
  );
  next();
}

(module.exports = server), { logger };
