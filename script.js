console.log("Prince work on javascript") // inbuilt function to output value or message to console
const user_id=10001 // constant
let name="Prince"  // can change and work in block
var marks = 100    //can change but issue in block scope and functional scope
city = "Mathura"
let position; // value will be undefined
console.log(name)
console.log(user_id)
console.log(marks)
console.log(city)
console.log(position);
console.table([user_id,name,marks,city,position])

/* semicolon is optional in javascript,but must keep in mind code must be easily readable*/

"use strict" // treat all js code as newer version  (mostly new syntax is already used automatically)..

// javasript is dynamically type language because we dont need to intialise datatype of that variable 
// js is case sensitive language!

/* DATATYPES :- premitive(call by value( work on copy of data))

NUMBER = DIGITS AND DECIMALS
STRING = " CHARACTER OR WORD"
BigInt= very large number which exceeds numbers limit
UNDEFINED = NOT DEFINED YET
NULL = STAND ALONE VALUE
BOOLEAN = TRUE OR FALSE
SYMBOL = UNIQUNESS
*/
const sym= Symbol('123') // S must be in capital word
const sym2=Symbol('123')
console.log(sym==sym2); // false because used symbol and its unique

let login=2328728472974927556564434345n// to convert it into BigInt
console.log(login);
console.log(typeof login);
console.log(typeof marks);// will show the type of that variable 
console.log(typeof "string")
// NOTE : TYPEOF Null is object but TYPEOF undefined is undefined

// type conversion : converting one data type to another
let value="69"
let intvalue= Number(value) // datatype first character must be in capital letter
console.log(typeof intvalue);
console.log(typeof value);

// example 2 type conversion
let inp="34abc"
let num=Number(inp)
console.log(typeof inp)
console.log(typeof num) // type will be number as converted
console.log(inp)
console.log(num) // value will be NaN (Not a Number) for non convertable value
// in case of undefined it gives NaN and in null it gives 0

// example 3 type conversion 
let isloggedin= ""
let ex3=Boolean(isloggedin)
console.log(ex3); // false 
// 1=true ,0 =false
// "" =false , " " =true

/* arithmetic operation :
+, - ,* , /, %(remainder), **(power) */

// concatination : syntax 1 (ttraditional)
let a="hello";
let b = "prince";
console.log(a+b);
//syntax 2 : modern approach
console.log(`hello my name is ${b.toUpperCase()} and wanna say ${a} to you `); 
//in this modern syntax ` is used except of '' which is located before 1 in keyboard
// we use this modern approach because we can use various inbuilt function in this syntax...
// coversion queries
console.log("2" + 3); //23
console.log(3 + "2"); //32
console.log(2+2+"4")  //44 (first added then concatinated)
console.log("2"+2+4); //224 (all work is performed as string)
console.log( +true)//1 (coverted to number)
console.log(+ "");// 0 (converted to number)
// prefix and postfix increment operator(++,--) 

// comparisons : <,>,<=,>=,==,!=
//we should not compare two different datatypes.... (it may result in non expected results)
console.log(null ==0);// false 
console.log(null >0); //false
console.log(null>=0); // true 
// because comparision operator(>=,<=) work differently and all convert null into 0  but == dont convert it
// undefined will always result in false 

/* DATA TYPE (NON -PREMITIVE) CALL BY Reference
Array ,Objects ,Function */

let arr=['prince','jain'];//array
console.log(arr[0]);

let myObj=
{
    name: "prince",
    rollNo:2242100029,
}

const myFunction =function() {
    console.log("first function ")
}
// all reference datatype have its type = object
console.log(typeof arr); // object
console.log(typeof myFunction); // object function
console.log(typeof myObj); // object

// memory concept in js: stack(used in primitive) and heap(non-primitive)
let x="prince"
let y=x;
y="prince jain"
console.log(x,y);// y is now prince jain but x is still prince because stack in used 
// data in y is transfered by copying data of x not by directly giving its reference

let ex1=
{
    name:"prince",
    age :18,
}
let ex2=ex1;
ex2.age=19
console.log(ex1.age);//19
console.log(ex2.age);//19
// now age is changed in both because both at refrenced from a similar storage heap
// and change is directly occured in memory
// string
let p ="prince"
const str=new String("jain") // another syntax of creating a string in javascript
console.log(p[4]);
console.log(p.length);
console.log(str.toUpperCase());// inbuilt functions of string
console.log(str);// here original string is not changed by upper case function bcs copy of the data is sent(primitive and stack)
// output is [String: 'jain] mentioned that type is string 
console.log(str.charAt(3));// return value at given index i.e n
console.log(str.indexOf('n')); // return index of given value i.e 3

const str2=str.substring(0,2);// give substring of our string to another string (2 index will not included)
console.log(str2);//ja
const sr3=str.slice(-3,3) // same work and can use negative index 
console.log(sr3);// ai

let s="  king  is  ";
console.log(s);
console.log(s.trim());// just remove starting and ending whitespaces 
console.log(s.replace('king','Emperor'));// replace the word by another word we want 
console.log(s.includes('is'));// check that given argument is present or not in our string
const sample="he-is-the-good-coder"
console.log(sample.split('-',3));// split to another array 
// number 
const balance =new Number(100.12454)
const cost =23.355
console.log(balance.toFixed(2));// fix the value by cutting it to rounfoff value
console.log(cost.toFixed(1));
console.log(cost.toPrecision(2));// only given argument term will be precised..
//toFixed(n) provides n length after the decimal point; toPrecision(x) provides x total length.
// maths library : 
console.log(Math.random()); //  random value between 0 to 1
//mostly we use in websites are: 
//console.log(Math.floor(Math.random()*(max-min+1))+min)

// Dates 
let myDate =new Date() // typeof myDate is object
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
// inputting date
let demoDate =new Date(2024 ,1,03)
console.log(demoDate.toLocaleString());
// taking timestamps : means who comes first (can be used for comparison)
let myTimeStamp=Date.now()
console.log(myTimeStamp);
// if we want to check timestamp of that date
console.log(demoDate.getTime());
// to convert ms output time to second
console.log(Math.floor(Date.now()/1000));

/* ARRAY IN JS
Resizable, can have MIX DATATYPE , 0 based indexing
shallow copy(same reference point) and deep copy(not a same reference)
copy operation in array in js creates shallow copy(changes also made in original array bcs of same reference) */
let arry=[1,"prince",18]
console.log(arry[0]);
console.log(arry[1]);
console.log(arry[2]);
// syntax 2 : 
const myarr= new Array(1,2,3,4)
console.log(myarr[2]);
// array methods
myarr.push(5) // add element
console.log(myarr);
myarr.pop();// delete last element
console.log(myarr);
myarr.unshift(7) // add in the beginning of san array 
console.log(myarr); // 7,1,2,3,4
myarr.shift(); // remove first element of array, 7 is removed 
console.log(myarr);
myarr.shift()// 1 is removed
console.log(myarr);
console.log(myarr.includes(4));
console.log(myarr.indexOf(2));
const newarr= myarr.join(); // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newarr);
console.log(typeof newarr);

// SLICE and SPLICE
let exarr=[0,1,2,3,4,5]
console.log(exarr.slice(0,3));// 0,1,2 (returns a copy of a section of an array)
console.log(exarr);// original array [0,1,2,3,4,5] no change in original array
console.log(exarr.splice(0,4));// removes elements from an original array
console.log(exarr); // 4,5
//merging array
let ea=[1,2,3]
let eb=[4,5,6]
eb.push(ea)
console.log(eb);//here ea array is 4 element
console.log(eb[3][1]);
//by concat
let ec=["prince","jain"]
let ed= ec.concat(ea)// add two arrays and return new array,old array is not changeed
console.log(ed);
// merge by spread operator (...)
const pract=[1,2,3]
let pract2 =[4,5,6]
const pract3=[...pract,...pract2]// [1,2,3,4,5,6]
console.log(pract3);

const another_array=[1,2,[3,4],0,[5,6[7,8]],9]// arrays in array
const real_another_array=another_array.flat(Infinity) //returns a new array with all sub-array elements concatenated into it.
console.log(real_another_array);
console.log(Array.isArray("prince"));//false
console.log(Array.from("prince")); // covert it to array
console.log(Array.from({name : "prince"})); //empty array dont know ki kisko array bnana hai key ya element
let score1=1000
let score2=2000
let score3=3000
console.log(Array.of(score1,score2,score3));// create an array from multiple elements

/* objects in js
// singleton : apni trh ka ek hi object 
object literlas means no singleton
constructor makes singleton (Object.create)
// object literals(no singleton) ==                             */
const USer1 =
{
    name: "prince",
    age: 18,
    "status": "single" ,// to access this key we can use syntax 2 only
    isLoggedIn: true ,
    intern: "baoiam",
}
//access 
// syntax 1 :
console.log(USer1.age);
// syntax 2 :
console.log(USer1["age"]);
console.log(USer1["status"]);
// to use symbol in object we need to use square bracesin its var/key name
const mySym= Symbol("uniqueness")
const user2=
{
    name:  "puneet",
    age: 20,
    [mySym]: "uniqueness", //[]braces are impt to act as symbol
    area: "kosi",
}
console.log(typeof user2.mySym);// undefined bcs act as symbol
console.log(typeof user2[mySym]);// string
// overwritting elements in a object 
user2.age=21;
console.log(user2.age);
Object.freeze(user2);// now we cant change value of our object this wont give error while changing but dont even change the oiginal value
user2.age=22;
console.log(user2.age);// 21 here age is not changes even no error is given .
console.log(user2);
/*user2.greeting= function ()
{
    console.log(`hello user ${this.name}`);
}
console.log(user2.greeting());
console.log(user2.greeting);
*/
// creating object by constuctor (creating a singleton)
const tinderUSer = new Object()
tinderUSer.id=212121;
tinderUSer.name="xyz";
tinderUSer.add="India";
console.log(tinderUSer);
//nesting in objects : 
let nes=
{
    email:"xyx@google.com",
    name:
    {
        username:
        {
            firstname:"prince",
            lastname:"jain",
        }
    }
}
console.log(nes);
console.log(nes.name.username);
//merging objects
const ab={
    name:"prince",
    course:"bca.h",
}
const ac={
    no:9286091444,
    personality:"Frank",
}
const ad=Object.assign({},ab,ac)//empty array istaken to combine more values
console.log(ad);
// syntax 2:- spread operator
const ae={...ab,...ac}
console.log(ae);
// araay of objects (mostly when we fetch from databases)
const imprarry=[
{
    name:"prince",
},
{
    name:"raghav",
},
{
    name:"piyush"
}
]
//here is how we will fetch this data:
console.log(imprarry[1].name);
// fetching keys and value of object
console.log(ab);
console.log(Object.keys(ab));
console.log(Object.values(ab));
console.log(Object.entries(ab));// first will be key and second will be its value in every array
// note :  we can leave block of value in any element in object
console.log(ab.hasOwnProperty('name'));
// object destructuring
const dest={
    course:"JS Hindi",
    courseInstructor:"Prince Jain"
}
const {courseInstructor: teacher}=dest;
// in this is line we are simply using another syntax of fetching sub element of a object 
// now we cn fetch it directly by using teacher
console.log(teacher);
console.log(dest.courseInstructor);// this is how we will fetch by syntax 1
// API (APPLICATION PROGRAMMING INTERFACE)
// JSON(JAVA SCRIPT OBJECT NOTATION) format of json is
/* {
    "name":"prince",
    "course": "bca",
    "isLoggeIn": false ,// no " " in false bcs of dofferent data type
} */
//sometimes we recieves json in array of objects except simple objects.

// functions in js
function firstOne() // function name
{
    console.log("hey this is my first function");      // function definition
}
console.log(firstOne);// without paranthesis refernce only
firstOne();// function call (parenthesis for execution)

function addTwoNum(n1,n2) // inputted value in function name are parameters
{
    console.log(`sum is ${n1+n2}`);
}
addTwoNum(2,3)//arguments while inputiing value while calling function
// type 2
function mult(num1,num2)
{
    let answer=num1*num2;
    return answer;
    /* or we can directly write 
    return num1*num2;      */
    console.log("ant text"); // this msg will never be printed as its after return statement
}
const result2=mult(2,3)
console.log(result2);
addTwoNum()// NaN if not value passed in number
// note it can give output undefined too if its string
function logging(person = "unknown")// here we have given unknown as default value
{
    return`${person} just looged in`;
}
console.log(logging("prince")); //prince just looged in
console.log(logging());//unknown just looged in
console.log(logging(""));// just looged in

function cart(...product)// rest operator(depend on usecase when to say rest operator and when to say spread operator)
{
    return product;
}
console.log(cart(100,150,200));
// passing objects in function
const oobj={
    name:"xyz",
    age:00,
}
function handleObject(anyObject)
{
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(oobj)
handleObject({
    name:"prince",
    age:19,
})
/* scoping 
{}*/
if (true) 
    {
        let o =10; // block scope
        const m=20;
        var g=30;
    }
    //console.log(o); //error(o is not defined)
    //console.log(m);// error (m is not defined)
    console.log(g)// 30 (As can be fetched globally) // global scope

 // DOM(DOCUMENT OBJECT MODEL)
 console.log(addOne(5));// answer will be 6 we can use normal function before it ..
 function addOne (n)
 {
    return n+1;
 }
 //console.log(r(2));//  Cannot access 'r' before initialization
 const r=function(n)
 {
    return n*2
 }
// this keyword : refers current context
const worker=
{
    name : "rahul",
    desig : "finance incharge",

    welcomeMSg: function()
    {
        console.log(`${this.name},welcome to my website`);
    }
}
worker.welcomeMSg()
worker.name="prince"
worker.welcomeMSg()
// window object was used in browser in history
function chai()
{
    name="code"
    console.log(this.name);
}
chai()// undefined bcs this will work in object only for context\
// ARROW FUNCTION :  Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable.
const code=() =>{
    let username= "prince"
    console.log(this.username);// undefined
}
//basic arrow function
const jod=(n1,n2)=>
    {
        return n1+n2
    }
console.log(jod(3,4));//7
// implicit return : used for only one line statement (not use of curly braces). no return keyword used 
const guna =(n1,n2)=> n1*n2;// we can also wrap it up in parentesis (n1*n2) but not in curly braces 
console.log(guna(2,3));//6
console.log(typeof(guna));//function
console.log(typeof(jod));//function
console.log(typeof(code));//function
// explicit return :when we use return keyword

//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSSIONS):function that runs the moment it is invoked or called in the JavaScript event loop
// names iife
(function swagat(){
    console.log(`its IIFE in JS`);
})();  // first () will imclude function definition and second() will be at exection
// used to avoid global scope pollution
//  we must use semicolon after iife to tell compiler to end that invoke function

// using arrow function in it : unnames iife or simple iife
(()=>console.log("jai ho"))();
// passing parameter
((n1,n2)=>{
    console.log(`sum is ${n1+n2}`)
})(2,3)

/* HOW JAVA SCRIPT WORKS : how our file will be executed
1. EXECUTION CONTEXT : Global exection context: always created, and referred a variable 'this' ,each environment like : browser ,nodejs have 
different global EC,  browser have window object as global EC i.e in browser 'this' contains window object and  it creates a global objectmfor Node.js
Function execution context : Execution context in JavaScript is the environment in which JavaScript code is executed,
each time a function is called, a new execution context is created
 
Every js code is executed in 2 phase :
1. Memory CREATION PHASE : Only memory allocated (no operation performed)
2. EXECUTION PHASE : 
// lets take an example to understand all this stuff:
let val1= 10
let val2 =5
fucntion addNum(num1 ,num2)
{
    let total= num1+num2
    return total
}
let result1=addNum(val1,val2)
let rersult2=addNum(10,2)
// lets see how it works
1. GLOBAL EXECUTION -> this
2. Memory creation phase : first cycle :
    val1=undefined
    val2=undefined
    function= definition
    result1=undefined
    result2=undefined
// cycle 2
3. Execution phase
    val1=10
    val2=5
    addNum-> This will Create a new executional context which includes:
                1. New Variable Environment 
                2. Exection Thread
// both memory phase and execution phase will be created for that execution context of that function :
1. memory creation phase:
val1=undefined
val2=undefined
total=undefined
2. Execution phase :
num1=10
num2=5
total=15 (after calculation)
// NOW that total will be returned to our first step i.e GLOBAL EXECUTION CONTEXT
// after returning 15 our ececutional context of function will be deleted
=> result 1 will get value 15 in execution phase of our cycle 2
then again this process will be executed with same same executional context for addOne function which will be created again for resu1t2
and answer of total will be sent to global execution context and then initialised to result2!!
*/
/*Difference between == and ===
Double equals (==) will try to convert the values to the same data type and then try to compare them. 
But triple equals (===) strictly compares the value and the datatype*/
//if else syntax :
if(2=="2")
{
console.log("exected");// executed 
}
else{
     console.log("not executed");
}
if(2==="2")
    {
    console.log("exected");
    }
    else{
         console.log("not executed"); // not executed
    }
// syntax 2: 
if(true) console.log("checking");
// syntax 3: not use of curly braces
if(true) console.log("check1"),
console.log("check 2");    
// note : must use curly braces for better readability of code
/* we well know about:
<,<=,.,.==,===,!=
 &&,||

 switch when we have to check various conditions:
 syntax: 
switch(condition)
 {
    case 1 :
        console.log("message 1")
        break;
    case 2 :
        console.log("message 2")
        break;
    default :
        console.log("default message")
        break
 }
// break will stop execution of next case and dont even check next cases but without break all cases will be executed except default*/

// Falsy value:- false ,0,-0,"",undefined,null ,NaN
//all other values are true values ,even "0"," ", 'false' ,function(){}, [] will be considered as truly value

let userEmail="" // empt string considered as falsy value
if(userEmail)
    {
        console.log("Got user Email");
    }
else{
    console.log("not got any mail");
}
// example 2:
userEmail=[] //this will considered as truly value
if(userEmail)
    {
        console.log("Got user Email");
    }
else{
    console.log("not got any mail");
}
// checking array is empty or not :
/* if(Array.length===0)
    {
        console.log(`array is empty`);
    }
*/
// checking object is empty or not
const emptObj={}
if(Object.keys(emptObj).length===0)
    {
        console.log(`object is empty`);
    }
else{
    console.log("object have values");
}

/* NULLISH COALESCING OPERATOR(??) : operator is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

/* Terniary operator :
condition ? true : false       */
let price=24;
price<40? console.log("price is lower") : console.log("price is higher");
price=50;
price<40? console.log("price is lower") : console.log("price is higher");

// ITERATIONS : loops
/* for loop : syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}   */
// note: ctrl + d is used to select various duplicate at a time 
// nested loops same index
for (let i = 0; i < 5; i++) {
    console.log(`value of i is ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`valu of j is ${j}`);
    }
}
// we can run this loop for better understanding of nested loops working 
const ar1=["rahul","prince","pappu"];
console.log(ar1);
// fetching by loops
for (let i = 0; i < ar1.length; i++) {
    console.log(`elemnt at index ${i} is ${ar1[i]}`);
}
// break and continue
for (let i = 0; i <= 10; i++) {
    if(i==5)
        {
            break;
        }
    console.log(i);
}
for (let i = 0; i <= 10; i++) {
    if(i==5)
        {
            continue;
        }
    console.log(i);
}
/* while loop : syntax
initialization
while(condition)
{
    body.....
    modification (++,--)
}   */
 
let warr=["jai", "ho","ok"]
let val=0;
while(val<warr.length)
{
    console.log(`values are ${warr[val]}`);
    val++;
}
// do while loop : first work then check condition(always executed one time)
let score=11
do{
    console.log(`score is ${score}`);
    score++;
} while(score <10); // 11 still executed one time because it is do while loop

// FOR OF loop
// in array
let newa=[1,2,3,4]
for (const val of newa) {
    console.log(val);
}
// in string 
const greeting = "Hello duniya"
for (const greet of greeting) {
    console.log(greet);
}
/*map 
Map : an object hold key value pair , remembers order of the key ,unique values always */
const map= new Map();
map.set("in","India")
map.set("pak","Pakistan")
console.log(map);
for (const [key] of map)// if we will not use [] in key then it will print the whole array
{
    console.log(key);
}
// but for of cant be used in object 
// for in loop in object 
const o={
    cpp:"c++",
    js:"java script",
}
for (const key in o) {
    console.log(`key is ${key} and its value is ${o[key]}`); // focus on how we acessed values of key
}
let ar=["py","ar","cpp"]

for (const key in ar) {
    console.log(key); // 0,1,2,will be output
} 
// forin loop provides keys only when we accessed it ...
// for value we have to write ar[key].
// for in cant be used in map **

// for each :-
//ForEach calls the callbackfn function one time for each element in the array. // call back fn has no name 
const coding =["js","c","c++","py"]
coding.forEach(function(item){
    console.log(item);
} )
// by arrow function
coding.forEach( (val)=> {
    console.log(val);
})
// passing prely created function
function printme (item)
{
    console.log(item);
}
coding.forEach(printme)// pass the reference only
// more parameters of for each
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// most important operation :
// fetching various objects in an array [ {} , {} , {}]
const imp=[
    {
        name:"prince",
        location: "kosi",
    },
    { 
        name:"prince2",
        location: "kosi",
    },
    {
         name:"prince3",
        location: "kosi",
    }
]
imp.forEach((item)=> {
    console.log(item.name);// item is reffering to each object and . will allow to acces its key  
})
// we can not return any value in for each loop

// filter
const work =[1,2,3,4,5,6,7,8,9,10]
/* method 1 :
//const work2= work.filter((num)=>num>4)
// method 2 :
const work2=work.filter((num)=>
{
    return num>4 // used return because using scope if no scopr we can write it directly
})
console.log(work2);
// same work by for each    */
const work2=[]
work.forEach((items)=> {
    if(items>4)
        {
            work2.push(items)
        }
})
console.log(work2);
// chainning : using more methods at a same time
let newwork= work.map((items)=> items*10).map((num)=> num+1).filter((item)=> item>40)
console.log(newwork);

