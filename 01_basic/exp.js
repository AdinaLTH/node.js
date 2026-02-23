// exp.js
// 문자열 특정패턴 찾기
console.log("Hello, World".replace(/l/g, "L"));
console.log(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("test@email.co.kr"),
);
