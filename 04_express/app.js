const express = require("express"); // 임포트
const app = express(); // 인스턴스 생성

// 라우팅: 요청방식+URL(end point)에 대한 => 실행할 함수(핸들러)
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  res.status(200).send("서버실행...");
});

// http요청방식 + end point => CRUD 처리(REST 방식)
app.get("/customer", (req, res) => {
  res.send("Get방식 요청");
});

app.post("/customer", (req, res) => {
  res.send("Post방식 요청");
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
