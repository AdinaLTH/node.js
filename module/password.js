// password.js
const crypto = require("crypto");

const pw = crypto.createHash("sha512").update("test1234").digest("base64");
// console.log(pw);

// salt 생성(달라지는 시드값)
async function createPassword() {
  const salt = await new Promise(async (resolve, reject) => {
    crypto.randomBytes(64, async (err, buf) => {
      if (err) {
        console.log("error=>", err);
        reject(err);
      }
      // console.log(buf.toString("base64"));
      resolve(buf.toString("base64")); // salt변수에 저장
    });
  });
  // console.log(`salt=> ${salt}`);

  // 암호화된 비밀번호
  crypto.pbkdf2(
    "test1234", // 1)암호화 평문
    salt, // 2) salt 값, 만약 salt 값이 같으면 계속 똑같은 값이 나옴
    100000, // 3) 10만번 반복 해시
    64, // 4) 길이
    "sha512", // 5) 해시함수
    (err, data) => {
      // 6) callback 함수
      if (err) {
        console.log(err);
        return;
      }
      console.log(data.toString("base64"));
    },
  );
}

createPassword();
