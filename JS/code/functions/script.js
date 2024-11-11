/* functions -- reusability,modularity - we divide the whole code into multiple snippets which we can use again and again --these are called functions */
/* function  is called " first class citizen" in JS */
/* simple function */
/* function function_name (param1, param2....)
{
    //function definition
} 
    function_name(argum1,argum2) // function call

*/
/* simple function*/
function display ()
{
    console.log("hi to functions")
}
display();
/* a function can return values*/
function display2 ()
{
    return "hi to functions"
}
let k= display2()
console.log(k)
/* a function can take values as parameters */
function sum (a,b)
{
    console.log(a+b)
}
sum(5,5); //
sum("raj", 4)

/* js can work with any no.of parameters in functions */
sum(5) //it calls sum and assigns a =5 and b=undefined ==>5+undeined=NaN
/* we can also works with default parameters*/
function sum3(a,b=5)
{
console.log(a+b)
}
sum3(3)
/* create a function to return taxiFare which accepts no_of_kilometers and price per kilometer as parameters. In case of price per kilometer absence, default charge is ₹40 */
function myFunction(a, b=40) {
	// Function returns the product of a and b
	return a * b
}
let x = myFunction(4)
console.log("₹" + x)
/* we can manage no.of parameters by rest operator */
/* rest operator is used to accept values in the form of array as they are rest of values
rest operator is denoted by three dots and always rest operator should be the last parameter*/
/* spread operator is used to spread the values. it is also denoted by three dots */
function sum5 (a,...p)
{
    let arr=[2,5,...p,6,7]//[2,5,"shekhar","geetha","seetha"]
    console.log(p,arr)
 
}
sum5("raj", "shekhar", "geetha", "seetha")
/* a function also be considered as variable */
function myFun ()
{
    console.log("simple function")
}
console.log(myFun)
// we can also write as function expression
let myFun2 = function ()
{
        console.log("simple function 2")
}
console.log(myFun2)
myFun2()


function collect (fruit1, fruit2, ...fruits)
{
    const newfruits = [...fruits, "banana"];
    console.log(newfruits)
}
collect("apple","mango","papaya","guava")















/* write a function sum which takes two numbers and returns their sum */
function sum2(a, b) {
	return a + b
}
let res = sum2(5, 6)
console.log(res)







