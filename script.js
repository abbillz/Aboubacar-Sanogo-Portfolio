// console.log("Hello World")
// var prompt = prompt ('ENTER FULL NAME')


if (10 > 9) {
  console.log('10 is greater than 9');
} else {
  console.log('This is false')
}
var age = prompt('AGE')

if (age < 18 && typeof age === "string") {
  alert('You are a Minor')
} else if (age >= 18 && age < 99){
  alert ('You are an adult')
}