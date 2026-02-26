const router = require("express").Router();
const ctrl = require("../controllers/boardController");

// 조회(GET요청)
router.get("/", ctrl.list); // http://localhost:3000/api/board
router.get("/:id", ctrl.detail);

// CUD
// ctrl.create
router.post("/", ctrl.create);

module.exports = router;
