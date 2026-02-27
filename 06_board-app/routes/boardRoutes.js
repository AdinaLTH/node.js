const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth");

// 조회(GET요청)
router.get("/", ctrl.list); // http://localhost:3000/api/board
router.get("/:id", ctrl.detail);

// CUD
// ctrl.create
router.post("/", mid.verifyToken, ctrl.create);
router.delete("/", mid.verifyToken, ctrl.remove);

module.exports = router;
