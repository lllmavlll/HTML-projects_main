//------------------Java script Array Function-------------------------//

//----------------------.toString-------------------//

let array = [1, 12, 23, 34, 45, 56, 67, 78, 890];

a = array.toString();
document.write("<br/> toString:   " + a); //*****array is now string

//---------------------- .join --------------------//

b = array.join(" and ");
document.write("<br/>join:  " + b);

//---------------------- .pop --------------------//

array.pop();
document.write("<br/>pop:   " + array);

c = array.pop(2); //*********pops 2nd element from the last
document.write("<br/>Pop:   " + c);

//---------------------- .push --------------------//

let arr = [1, 12, 23, 34, 45, 56, 67, 78, 890];
arr.push(32); //*******adds 32 to the existing array */
document.write("<br/>Push:   " + arr);

//---------------------- .shift --------------------//

e = arr.shift(); //*******removes first elment  and returns it*/
document.write("<br/>Shift:   " + e);

//---------------------- .unshift --------------------//

arr.unshift(454); //*************adds an element at begining */
document.write("<br/>Unshift:   " + arr);

//---------------------- .concat --------------------//

let ani = ["dog", "cat", "camel", "sheep", "kanagroo", "buck"];
f = ani.concat(arr); //*************adds up two arrays */
document.write("<br/>Concat:   " + f);

//---------------------- .entries --------------------//

g = ani.entries();
document.write("<br/>" + g);

//---------------------- .length --------------------//

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
document.write("<br/>" + fruits);

//---------------------- .splice --------------------//

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
document.write("<br/> Splice:  " + fruits1);

//---------------------- .slice --------------------//

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.slice(1);
document.write("<br/> Slice:  " + fruits2);

//---------------------- .slice --------------------//
const food = ["cookie", "browine", "chips", "burger"];
food.reverse();
document.write("<br/> reversed:  " + food);
