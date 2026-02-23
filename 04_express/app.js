const express = require("express"); // 임포트
const app = express(); // 인스턴스 생성
const fs = require("fs");
const customerRoute = require("./routes/customer"); // import를 변수에 담아도 되고 12행 처럼 작성해도 됨

// 정적파일 폴더(html, css, js)
app.use(express.static("public"));
// body parser 셋업
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json()); // body의 포맷이 json으로 넘어올 때

// 라우팅: 요청방식+URL(end point)에 대한 => 실행할 함수(핸들러)
app.get("/", (req, res) => {
  // fs.readFile 메소드(비동기) / fs.readFileSync 메소드(동기)
  const data = fs.readFileSync("index.html", "utf-8");
  res.status(200).send(data);
});

// GET요청(parameter로 처리)
// app.get("/login/:uid/:passwd", (req, res) => {
//   console.log(req.params);
//   res.send("login page");
// });

// 외부 라우팅정보
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

// express 에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
