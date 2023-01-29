const router = require("express").Router();

const { getAllArgo, addArgo } = require("../controllers/argo");

router.get("/", getAllArgo);
router.post("/", addArgo);

module.exports = router;
