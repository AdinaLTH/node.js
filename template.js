// "Hello", 'World', `Hong`
// Template Literals(`(백틱))은 연산식을 사용 가능, if나 for문 같은 '구문'은 X
const obj = {
  name: "Hong",
  age: 20,
  showInfo: function () {
    // 메소드
    return `이름: ${this.name}, 나이: ${this.age}`;
  },
};

console.log("이름은 " + obj.name + "이고, 나이는 " + obj.age);
console.log(
  `이름은 ${obj.name}이고, 나이는 ${obj.age}이고 ${obj.age >= 20 ? "성인" : "미성년"}입니다.`,
);

console.log(`obj의 정보: ${obj.showInfo()}`);

console.log(
  `남자들의 이름은 ${ary
    .filter((ele) => ele.gender == "Male")
    .map((ele) => ele.first_name)
    .join(",")}`,
);
