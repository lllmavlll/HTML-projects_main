// var age = prompt("enter your age");
// if (age >= 18) {
//   document.write("you're an adult");
// } else {
//   document.write("you're a teen");
// }

// *******FUNCTION********
// function Display_age() {
//   var age = prompt("enter your age");
//   if (age <= 18) {
//     document.write("you're an teen");
//   }
//   if (age >= 100) {
//     document.write("you're  probably Dead");
//   }
//   if ((age >= 18, age < 100)) {
//     document.write("you're an adult");
//   }
// }

// Display_age();
function add(a, b) {
  return a + b;
}
document.write("addition is " + add(" mahesh", " KN"));

let names = ["name1", "name2", "name3", "name4"];
console.log(names);
console.log(names[3]);
let nums = ["agarwal", "sharma", 90, 100, 1000];
console.log(names.concat(nums));
console.log(names);
nums.fill(10, 1, 3);
// document.write("<br/>" + nums);
for (let i = 0; i < nums.length; i++) {
  document.write("<br/>the element: " + i + " is " + nums[i]);
}
nums.forEach(function Display(e) {
  document.write("<br/>" + e);
});
var output = (a, b) => {
  return a + b;
};
document.write("<br/>value is: " + output(4, 5));

// function add(a, b) {
//   return a + b;
// }
nums.filter((f) => {
  document.write("<br/>" + f);
});
nums.map((n) => {
  return 2 * n;
});
document.write("<br/>" + nums);

var arr = [12, 23, 34, 45, 56];

document.write("<br/>Shift method " + arr.shift());
arr.push(900);
document.write("<br/>after push  " + arr);
document.write("<br/>after pop  " + arr.pop());
