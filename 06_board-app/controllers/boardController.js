// 컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재 로그인 정보: ", req.session.user.login_id);
  res.json(rows); // 화면에 출력될 결과
};

// 상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  // 현재 로그인 정보(login_id, name)
  const { login_id, name, member_id } = req.session.user;
  res.json({ user: { login_id, name, member_id }, data: rows });
};

// 등록(create)
const create = async (req, res) => {
  const { title, content } = req.body;
  const writerId = req.user.member_id; // token 저장된 값
  try {
    await boardService.create({ title, content, writerId });
    res.json({ retCode: "OK" });
  } catch (err) {
    console.log(err);
    const msg = err ? err.sqlMessage : "알 수 없는 예외발생";
    res.json({ retCode: "NG", retMsg: msg });
  }
};

const remove = async (req, res) => {
  const { writerId } = req.params;
};

module.exports = { list, detail, create, remove };
