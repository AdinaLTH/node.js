// 컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  res.json(rows); // 화면에 출력될 결과
};

// 상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

// 등록(create)
const create = async (req, res) => {
  const { title, content, writer_id } = req.body;
  console.log(req.body);
  try {
    const [rows] = await boardService.create({ title, content, writer_id });
    console.log(rows);
    res.json({ retCode: "OK" });
  } catch (err) {
    console.log(err);
    res.json({ retCode: "NG" });
  }
};

module.exports = { list, detail, create };
