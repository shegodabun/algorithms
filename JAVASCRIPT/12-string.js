const fullName = "Michelle Onyenso";
// .toLowerCase() turns all the characters in a string to lowercase
console.log(fullName.toLowerCase());

//toUpperCase()turns all the charcters in a string to UPPERCASE
console.log(fullName.toUpperCase());

//in strings the characters and spaces are counted to define the console log number e.g(m n a m e=9)
let sentence = "My name is ";
//.concat() allows us to combine two or more variables together
let fullSentence = sentence.contact(fullName);
console.log(fullSentence);

//. length tells us the number of characters in string
console.log(sentence.length);

//.split() turns a string to an array
console.log(sentence.split(""));
console.log(sentence.split(""));

//example of an array
const students_name = ["Ahmed", "Mubarak", "Salma", "John"];
console.log(student_name);

//method chaining allow you to chain different methods together
const updated_student_names = students_names.join(" ").toUpperCase().split(" ");
console.log(updated_student_names);
