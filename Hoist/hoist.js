//Q1: Given Code
console.log(hello);
var hello = 'world';
// After Hoisting
// var hello;
// console.log(hello);  // logs undefined
// hello = 'world';

// Q2: Given Code
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// After Hoisting
// var needle;
// function test() {
//     var needle 
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); // test is called , logs magnet

// Q3: Given Code
var brendan ='super cool';
function print(){
    brendan ='only okay';
    console.log(brendan);
}
console.log(brendan);
// After Hoisting
// var brendan;
// function print(){
//     brendan ='only okay';
//     console.log(brendan);
// }
// brendan ='super cool'
// console.log(brendan); // logs super cool

// Q4: Given Code
var food ='chicken';
console.log(food);
eat();
function eat(){
    food ='half-chicken';
    console.log(food);
    var food ='gone';
}
// After Hoisting
// var food;
// function eat(){
//     var food;
//     food ='half-chicken';
//     console.log(food);
//     food ='gone';
// }
// food ='chicken';
// console.log(food); // logs chicken
// eat(); // eat is called, logs half-chicken

// Q5: Given Code
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// After Hoisting
// var mean;
// mean(); // TypeError: mean is not a function
// console.log(food);  
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food); 
//     food = "fish";
//     console.log(food);
// }
// console.log(food); 

// Q6: Given Code
console.log(genre);
var genre = "disco";
rewind();
function rewind(){
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// After Hoisting
// var genre;
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs undefined
// genre = "disco";
// rewind(); // rewind is called, logs rock , r&b
// console.log(genre);  // logs disco

// Q7: Given code
dojo = "san jose";
console.log(dojo);
learn();
function learn(){
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// After Hoisting
// function learn(){
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // logs san jose
// learn(); // learn is called , logs seattle, burbank
// console.log(dojo); // logs san jose

// Q8: Given Code
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// After Hoisting
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";  // reassignment to const variable
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); // TypeError: Assignment to constant variable.

