// reduce(): 이전 순번의 결과를 다음 순번에 매개값으로 활용

result = [10, 15, 20, 25, 30].reduce((acc, ele, idx) => {
  // console.log(idx, "-> ", acc, ele);
  if (ele >= 20) {
    const li = document.createElement("li");
    li.innerText = ele;
    acc.appendChild(li);
    // acc.push(ele);
  }
  return acc; //acc > ele ? acc : ele;
}, document.querySelector("#list"));
console.log(result);

console.clear();
// Male인 사람들의 급여합계
result = ary.reduce((acc, ele) => {
  const { salary, gender } = ele;
  if (gender == "Male") {
    acc += salary;
  }
  return acc;
}, 0);

console.log(result);

console.clear();
// Female의 급여가 10000이하인 사람들의 {no, name, email, salary}
// 새로운 배열로 생성
const small_then_10000 = (ele) => {
  return ele.gender == "Female" && ele.salary <= 10000 ? true : false;
};

const order_by_no = (no1, no2) => (no1 - no2 ? -1 : 1);

result = ary.filter(small_then_10000).map((ele) => {
  const { id, first_name, last_name, email, salary } = ele;
  const obj = {
    no: id,
    name: first_name + "-" + last_name,
    email,
    salary,
  };
  return obj;
});
console.log(result);

const female_under_10000 = (acc, ele) => {
  const { id, first_name, last_name, email, gender, salary } = ele;
  if (gender == "Female" && salary <= 10000) {
    const obj = {
      no: id,
      name: first_name + "-" + last_name,
      email,
      salary,
    };
    acc.push(obj);
  }
  return acc;
};

result = ary.reduce(female_under_10000, []);
console.log(result);
