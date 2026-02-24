const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp@gmail.com",
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

module.exports = { send };
