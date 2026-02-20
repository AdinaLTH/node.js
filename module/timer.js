// timer.js
const { logger } = require("./console_class");

setTimeout(function () {
  console.log("1초후에 실행");
}, 1000);

const job = setInterval(() => {
  logger.log(`${new Date()}에 실행`);
}, 1000);

// 종료
setTimeout(() => {
  clearInterval(job);
}, 10000);

module.exports = {
  job,
};
