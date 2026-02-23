// customer 와 관련된 라우팅 정보
const router = require("express").Router();
const compression = require("compression");
const path = require("path");

// http요청방식 + end point => CRUD 처리(REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname, "./con1.png"));
    console.log("응답처리중...");
    res.json({ retCode: "Success", retMsg: "Server Status 200" });
  },
);

// compression() 미들웨어 적용 http://localhost:3000/customer/download
router.get("/download", compression(), (req, res) => {
  //res.send("compression() 모듈이 적용됐습니다");
  res.download(path.join(__dirname, "..", "con6.png"));
});

router.post("/add", (req, res) => {
  res.send("Post방식 요청");
});

// GET요청(parameter로 처리) => req.params 처리가능
// POST요청(body에 데이터 해석) => req.body 해석
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page");
});

router.get("/error", (req, res) => {
  throw new Error("에러발생");
});

module.exports = router; // 익스포트
