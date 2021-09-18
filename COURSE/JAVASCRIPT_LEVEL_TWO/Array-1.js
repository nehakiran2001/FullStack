
//String Length
var myString="Javascript"
for (var i = 0; i <=myString.length; i++) {
console.log(myString[i]);
}

//letter in
var arr=['A','B','C']
for(letter in arr)
{
  alert(letter);
}

//Letter of
var arr=['A','B','C']
for(letter of arr)
{
  console.log(letter);
}

//Adding and Removing of elements
fruits=["APPLE","STRAWBERRY"]
{
  console.log(fruits[0]);
  console.log(fruits.push("ORANGE"));
  console.log(fruits.unshift("MANGO"));
  console.log(fruits.pop());
  console.log(fruits.shift());
}

//Access last element
fruits=["Apple","Strawberry","Kiwi"]
{
  console.log(fruits[length-1]);
}
