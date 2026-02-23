const express = require("express"); // 임포트
const app = express(); // 인스턴스 생성
const fs = require("fs");
const customerRoute = require("./routes/customer"); // import를 변수에 담아도 되고 12행 처럼 작성해도 됨
const compression = require("compression");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cors = require("cors");

// 정적파일 폴더(html, css, js)
app.use(express.static("public"));

// body parser 셋업
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json()); // body의 포맷이 json으로 넘어올 때
// app.use(compression()); // 기본은 모든 라우팅에 적용

// session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true => https, false => http
      maxAge: 60000,
    },
    //store: new fileStore(), // 추가
  }),
);

// cors 셋업
app.use(cors());

// 라우팅: 요청방식+URL(end point)에 대한 => 실행할 함수(핸들러)
app.get("/", (req, res) => {
  // fs.readFile 메소드(비동기) / fs.readFileSync 메소드(동기)
  const data = fs.readFileSync("index.html", "utf-8");
  res.status(200).send(data);
});

// 외부 라우팅정보
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  res.send("session에 저장");
});

app.get("/logout", (req, res) => {
  req.session.destroy(); // 세션 삭제
  res.send("로그아웃");
});

app.get("/my_info", (req, res) => {
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

// express 에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
