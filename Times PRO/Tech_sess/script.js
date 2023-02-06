// function display() {
//   alert("button is clicked!");
//   document.getElementById("container").innerHTML = "<H1>clicked!</H1>";
//   document.getElementById("container").style.backgroundColor = "grey";
// }
// let i = 0;
// for (i = 0; i < 5; i++) {
//   document.write("<br> loop is: " + i);
//   if (i == 2) break;
// }
// i = 0;
// while (i < 5) {
//   document.write("<br><b>i  is: " + i + "</b>");
//   i++;
// }
// while (i < 5) {
//   document.write("<br><b> While again is: " + i);
//   i++;
// }
// do {
//   document.write("<br> inside while");
//   i++;
// } while (i < 5);
class vehicles {
  constructor(wheel, color, doors, speed, name) {
    this.wheel = wheel;
    this.color = color;
    this.doors = doors;
    this.speed = speed;
    this.name = name;
  }
  display() {
    document.write(
      "<br>wheels is: " +
        this.wheel +
        "<br>color is: " +
        this.color +
        "<br>doors is: " +
        this.doors +
        "<br>speed is: " +
        this.speed +
        "<br>name is: " +
        this.name
    );
  } //member function
}
let bike = new vehicles(2, "blue ", "none ", "60kmph ", "honda ");
bike.display();
let car = new vehicles(4, "yellow", "2", "160kmph", "Corvett");
car.display();
class jeep extends vehicles {
  constructor(speed) {
    super();
    this.speed = speed;
  }
  display() {
    super.display();
    document.write(
      "<br>speed is :" + this.speed
      // +"<br>wheels is: " +
      //     this.wheel +
      //     "<br>color is: " +
      //     this.color +
      //     "<br>doors is: " +
      //     this.doors +
      //     "<br>speed is: " +
      //     this.speed +
      //     "<br>name is: " +
      //     this.name
    );
  }
}
// let thar = new jeep("200kmph");
// thar.display();
try {
  let bmw = new jeep("150kmph", "red");
  bmw.disp();
} catch (error) {
  document.write(error);
}
let thar = new jeep("120kmp");
thar.display();

var person = { name: "Mahesh KN", age: 12, nation: "India" }; //jason
console.log(person);
console.log(person.name);
document.write("<br>" + person.age);
document.write(JSON.stringify(person));

//----------------------global variable-----------------//
let g = 0;
function inc() {
  g += 2;
  console.log("g is : " + g);
  let f = 1;
  f++;
  console.log("value of f : " + f);
}
inc();
inc();
g++; //f++;
console.log("updated vallu: " + g);
// console.log("updated vallu: "+f);

//------------Class assignment-----------------//

class desktop {
  constructor(brand) {
    this.brand = brand;
  }
  display() {
    document.write("<br> Brand is: " + this.brand);
  }
}
let device = new desktop("lenovo", "red");
device.display();

class laptop extends desktop {
  constructor(color) {
    super();
    this.color = "pink";
  }
  display() {
    super.display();
    document.write("<br> color is: " + this.color + "<br>");
  }
}
//... continue later!

let two_arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    // document.write(two_arr[i][j] + " ");
    if (i + j < 3) document.write(1 + " ");
    else document.write(0 + " ");
  }
  document.write("<br> ");
}

//---------------- sync Async------------//

function count() {
  document.write("<br>page not found");
}
setTimeout(count, 3000); // call back

// setInterval(count, 4000);
let new_promise = new Promise(function (resolve, reject) {
  for (let i = 0; i < 5; i++) console.log(i);
  if (i == 5) resolve(document.write("success"));
  else reject(document.write("rejected"));
});
new_promise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("inside finally block");
  });

let apikey = "641d8a6132c2f05d70e36e04bdf9f063";
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Mumbai" +
    "&appid=" +
    apikey
)
  .then((response) => console.log(response))
  .then((q) => console.log(q));
