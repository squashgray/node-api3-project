const express = require("express");
const db = require("./userDb");

const router = express.Router();
router.use(express.json());

router.post("/", (req, res) => {
  const { name } = req.body;
  const newUser = { name };

  db.insert(newUser)
    .then(newuser => {
      res.status(201).json(newuser);
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/:id/posts", (req, res) => {
  const { text } = req.body;
  const user_id = req.params.id;
  db.findById(user_id).then(post => {
    if (!post[0]) {
      res.status(404).json("The post with the specified ID does not exist.");
    }
  });
});

router.get("/", (req, res) => {
  db.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getById(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/:id/posts", (req, res) => {
  const { id } = req.params;
  db.getUserPosts(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      console.log(error);
    });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(error => {
      console.log(error);
    });
});

router.put("/:id", (req, res) => {
  const { name } = req.body;
  const edit = { name };

  db.update(req.params.id, edit)
    .then(edit => {
      res.status(200).json(edit);
    })
    .catch(error => {
      console.log(error);
    });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
