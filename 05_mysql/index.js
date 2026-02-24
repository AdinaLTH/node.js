const mysql = require("mysql");
const sql = require("./sql");

// connection pool
const pool = mysql.createPool({
  connectionLimit: process.env.MYSQL_LIMIT,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// query 함수
const query = async (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(
      sql[alias], // 실행할 sql 구문
      values, // query parameter
      (error, results) => {
        // callback 함수
        if (error) {
          console.log(error);
          reject({ error });
        } else {
          resolve(results);
        }
      },
    );
  });
};

// 조회
// async function exe() {
//   const result = await query("customerList", [1]);
//   console.log(result);
// }

// 추가
// async function exe() {
//   const result = await query("customerInsert", [
//     "박우신",
//     "park@email.com",
//     "010-1234-1234",
//   ]);
//   console.log(result);
// }
// exe();
module.exports = { query };
