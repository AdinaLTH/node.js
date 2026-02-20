// 공유
const { boardList, userName } = require("./board");
const { logger } = require("./console_class");
const { job } = require("./timer");

//logger.log(userName);
let result = boardList();

// for (const board of result) {
//   logger.log(`글번호: ${board.bno}, 글제목: ${board.title}`);
// }

logger.log(job);
