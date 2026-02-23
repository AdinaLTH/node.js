// ary.js
console.clear();

// 급여가 10000보다 적은 사람들
const less_then_10000 = (ele, idx) => {
  if (ele.salary < 10000) {
    return true;
  }
  return false;
};

// 여성 중 급여가 8000 이상인 사람
const more_than_8000 = (ele) =>
  ele.gender == "Female" && ele.salary >= 8000 ? true : false;

// filter(): 조건을 만족하는 요소
result = ary
  .filter(more_than_8000) //
  .map((ele, idx, array) => {
    // map(): A -> A'(매핑)
    // id/first_name/last_name/email/gender/salary
    // no/name/gender/salary

    // 객체구조분해
    const { id, first_name, last_name, gender, email, salary } = ele;

    const obj = {
      no: id,
      name: first_name + "-" + last_name,
      gender,
      salary,
    };
    return obj;
  })
  .sort();

console.log(result);
