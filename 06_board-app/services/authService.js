const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authModel = require("../models/memberModel");

// 회원가입(signUp)
async function signUp(loginId, name, password, role) {
  const hashed = await bcrypt.hash(password, 10); // 암호화
  console.log(loginId, name, hashed, role);

  return authModel.createMember(loginId, name, hashed, role);
}

// 로그인
async function login(loginId, password) {
  const [rows] = await authModel.findMemberById(loginId);
  // 조회된 결과 없으면 실패
  if (rows.length == 0) {
    return null;
  }
  // 평문:password 비교 > row[0].password
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  // 비밀번호 불일치
  if (!match) {
    return null;
  }
  // token 발행 -> 암호화 -> 반환
  const token = jwt.sign(
    {
      member_id: user.member_id,
      login_id: user.login_id,
      role: user.role,
    },
    "secret-token",
    { expiresIn: "1h" },
  );
  console.log(token);
  // 정상
  return token; // token
}

module.exports = { signUp, login };
