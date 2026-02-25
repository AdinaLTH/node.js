const cron = require("node-cron");
const { logger } = require("./winston");
require("dotenv").config();
const nodemailer = require("./nodemailer");
const { text } = require("express");
// 주기적으로 실행

cron.schedule("0 50 12 * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: "smtptest1717@gmail.com",
    to: "smtptest1717@gmail.com",
    subject: "스케줄러 테스트",
    text: "스케줄러 연습",
  });
  logger.info("메일 발송");
});
