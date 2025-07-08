//string data type
let my_tech_school = "Gomycode";
//what makes it string is the double quote around it

let course = "software development";

//number data type
let total_score = 500;
let highest_score = 7;
///dont come with quotes

//float number data type:come with decimal points
let account_balance = 3700.45;
let height = 187.89;

//boolean data type:are either or true or false
let is_instructor_online = false;
let class_started = true;

//null data type
let guest_arrival_time = null;
let future_career = null;

// undefined data type
let product_name;
let cart_items;

//array data type: for similar data or item types
const student_one_score = 100;
const student_two_score = 80;
const student_three_score = 10;
const student_four_score = 90;
//instead:
const students_score = [100, 20, 90, 80];

console.log(students_score);
console.log(students_score[4]);
console.log(students_score[2]);

//when you have items value and you want to make use of their index value. e.g for student score 100 it will be 0 then 20 will be 1
//90 will be 2 80 will be 3 index

//to see the console on your website: right click then click inspect then console on your browser

//object data type: is used to describe real world object in your code

let student_one = {
  name: "Zel Wess",
  email: "zelly@gmail.com",
  track: "software developer bootcamp",
  progress: "46%",
  age: 45,
};

console.log(student_one.name);

let student_two = {
  name: "Michelle elle",
  email: "mich@gmail.com",
  track: "software developer bootcamp",
  progress: "76%",
  age: 25,
  location: {
    //nested data plenty data for one input
    country: "nigeria",
    state: "lagos",
    city: "ikeja",
  },
};
console.log(student_two.location.country);
