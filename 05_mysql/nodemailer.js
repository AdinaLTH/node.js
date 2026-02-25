const nodemailer = require("nodemailer");
// require("dotenv").config();

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "smtptest1717@gmail.com",
    pass: "dmvz xnwa vgpu ienp",
  },
});

const send = async (data) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
  });
};

// send({
//   from: "smtptest1717@gmail.com",
//   to: "smtptest1717@gmail.com",
//   subject: "파일첨부테스트",
//   html: "<p>파일첨부연습</p>",
//   attachments: [
//     {
//       filename: "con2.png", // 파일명
//       path: __dirname + "/uploads/" + "con2.png", // 실제파일
//     },
//   ],
// });

// console.log("main send...");
module.exports = { send };
