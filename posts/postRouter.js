const express = require("express");
const db = require("./postDb");

const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  db.get()
    .then(posts => {
      console.log(posts);
      res.status(200).json({ message: "it worked" });
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
  const { text } = req.body;
  const newText = { text };

  db.update(req.params.id, newText)
    .then(edit => {
      res.status(200).json(edit);
    })
    .catch(error => {
      console.log(error);
    });
});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;
