const { ary } = require("./data");

// Male인 목록
// {Male: [{},{},{},{}...{}]}
console.clear();
const male_member_only = (acc, ele) => {
  if (ele.gender == "Male") {
    acc.Male.push(ele);
  }
  return acc;
};

let result = ary.reduce(male_member_only, { Male: [] });
console.log(result);

console.clear();
const group_by_gender = (acc, ele) => {
  // ele.gender = "Male"/"Female"
  // acc["Male"] == acc.Male, acc["Female"] = acc.Female
  if (acc[ele.gender] == undefined) {
    acc[ele.gender] = []; // 초기값
  }
  acc[ele.gender].push(ele.first_name);
  return acc;
};

result = ary.reduce(group_by_gender, {});

console.log(result);
