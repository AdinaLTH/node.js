const data = `[{"id":1,"first_name":"Iona","last_name":"Considine","email":"iconsidine0@opensource.org","gender":"Female","salary":7466},
{"id":2,"first_name":"Manny","last_name":"Caff","email":"mcaff1@google.ru","gender":"Male","salary":7645},
{"id":3,"first_name":"Milli","last_name":"Matson","email":"mmatson2@salon.com","gender":"Female","salary":3817},
{"id":4,"first_name":"Krystle","last_name":"Instrell","email":"kinstrell3@ibm.com","gender":"Female","salary":5552},
{"id":5,"first_name":"Bud","last_name":"Vasyunichev","email":"bvasyunichev4@auda.org.au","gender":"Male","salary":11686},
{"id":6,"first_name":"Blondy","last_name":"Lattin","email":"blattin5@quantcast.com","gender":"Female","salary":5222},
{"id":7,"first_name":"Eulalie","last_name":"Clausewitz","email":"eclausewitz6@squarespace.com","gender":"Female","salary":7463},
{"id":8,"first_name":"D'arcy","last_name":"Wabe","email":"dwabe7@bizjournals.com","gender":"Male","salary":11064},
{"id":9,"first_name":"Marie","last_name":"Saffell","email":"msaffell8@nih.gov","gender":"Female","salary":11262},
{"id":10,"first_name":"Bamby","last_name":"Grigolashvill","email":"bgrigolashvill9@nhs.uk","gender":"Female","salary":11051},
{"id":11,"first_name":"Ida","last_name":"Skittrell","email":"iskittrella@plala.or.jp","gender":"Female","salary":12265},
{"id":12,"first_name":"Nedi","last_name":"Lethlay","email":"nlethlayb@technorati.com","gender":"Female","salary":9342},
{"id":13,"first_name":"Maxim","last_name":"Barniss","email":"mbarnissc@cloudflare.com","gender":"Male","salary":5020},
{"id":14,"first_name":"Harlan","last_name":"Cubbon","email":"hcubbond@stanford.edu","gender":"Male","salary":6636},
{"id":15,"first_name":"Ryon","last_name":"Croisier","email":"rcroisiere@usa.gov","gender":"Male","salary":5684},
{"id":16,"first_name":"Sigismondo","last_name":"McNabb","email":"smcnabbf@google.pl","gender":"Male","salary":7732},
{"id":17,"first_name":"Kerwinn","last_name":"McClinton","email":"kmcclintong@comsenz.com","gender":"Male","salary":9416},
{"id":18,"first_name":"Edouard","last_name":"Hartwell","email":"ehartwellh@tmall.com","gender":"Male","salary":7126},
{"id":19,"first_name":"Son","last_name":"Pirson","email":"spirsoni@google.co.jp","gender":"Male","salary":14663},
{"id":20,"first_name":"Brittne","last_name":"Worman","email":"bwormanj@clickbank.net","gender":"Female","salary":9245}]`;

// JSON문자열 -> Object
const ary = JSON.parse(data);
// console.log(ary);
// Object -> JSON문자열
const json = JSON.stringify(ary);
// console.log(json);

// sort()
// console.log(["Hello", "Hi", "Good", "World"].sort());
// console.log([10, 35, 21, 121, 11].sort());
// console.log([10, 35, 13, 21, 121, 11].sort((a, b) => a - b));
// console.log([10, 35, 13, 21, 121, 11].sort((a, b) => b - a));
// console.log(
//   [10, 35, 13, 21, 121, 11].sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else {
//       return 1;
//     }
//   }),
// );
// console.log(
//   [10, 35, 13, 21, 121, 11].sort((a, b) => {
//     if (a < b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }),
// );

// id 순으로 정렬함수
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;

// salary 오름차순정렬
const order_by_salary = (obj1, obj2) => obj1.salary - obj2.salary;

// first_name 오름차순정렬
// const order_by_first_name = (obj1, obj2) => obj1.first_name - obj2.first_name;
const order_by_first_name = (obj1, obj2) =>
  obj1.first_name < obj2.first_name ? -1 : 1;

let result = ary.sort(order_by_first_name);
// console.log(result);

// if ("hello" > "nice") {
//   console.log("hello");
// } else {
//   console.log("nice");
// }

function getMember() {
  return ["user01", "user02", "user03"];
}

// module.exports = { ary };
