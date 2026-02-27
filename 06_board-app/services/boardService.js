// 업무
const boardModel = require("../models/boardModel");

// 서비스 - 모델 => 1:1매칭(복잡하지 않음)
// 글목록조회 업무
async function getList() {
  return boardModel.getList();
}

// 단건조회 업무
async function getDetail(id) {
  return boardModel.getById(id);
}

// 등록(create)
async function create({ title, content, writerId }) {
  return boardModel.insert({ title, content, writerId });
}

async function remove(board_id, user) {
  const [rows] = await boardModel.getById(board_id);
  console.log(rows);
  const board = rows[0];
  console.log(board);

  if (board.writer_id != user.member_id) {
    return "NO_AUTH";
  }

  return boardModel.remove(board_id);
}

module.exports = { getList, getDetail, create, remove };
