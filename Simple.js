
/*1. (5 points) Start with an array called inputtable. The array should have numbers between
1 and 10. */
var inputtable=[1,2,3,4,5,6,7,8,9,10]
console.log("1) Numbers = "+inputtable);


/*2. (30 points) Use inputtable from step 1 to create the following: -
a. Set of multiples of 5 between 1 and 51. Name it fiveTable*/
inputtable.push(11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51);
console.log("2) (a) fiveTable :")
function multiples(x, y) {                      
    if(inputtable[y]==null){
        return 0;
    }
    else if(inputtable[y]%x==0){                /*taking mod for multiples*/
        y++;
        console.log(y);
        multiples(x,y);
    }
    else {
        y++;
        multiples(x,y);
    }return ("*");                             /*printing * due to recursion and as an aesthetic*/
    
}
console.log(multiples(5,0));


/*b. Set of multiples of 13 between 1 and 131. Name it thirteenTable*/
var inputtable=[];
var a=0;
var b=1;
function array(p,q){                        /*building an array to a desired number of elements*/
   if(p<q){
        inputtable[a]=b;
        a++;
        b++;
        p++;
        array(p,q);
    }
    else{return 0;
    }   return ("*");
}
console.log(array(1,132));                  /*giving 131 elements as array starts from 0*/
console.log("(b) thirteenTable :");
function multiples2(x, y) {
    if(y==131){
        return 0;
    }
    else if(inputtable[y]%x==0){
        y++;
        console.log(y);
        multiples2(x,y);
    }
    else {
        y++;
        multiples2(x,y);
    }return ("*");
    
}
console.log(multiples2(13,0));


/*c. Set of squares of the numbers in inputtable. Name it squaresTable */
var inputtable=[];
var a=0;
var b=1;
function array7(p,q){                           /*same as earlier solution*/
   if(p<q){
        inputtable[a]=b;
        a++;
        b++;
        p++;
        array7(p,q);
    }
    else{return 0;
    }   return("*");
}
console.log(array7(1,132));         
console.log("(c) Set of squares :");
var ss=0;
var ww=0;
function abs(aa){
   var xx=inputtable[aa];               /*taking set of squares by adding initial no,previous square and new number*/
   if(ss<=131)
   {
       ss=ss+xx+ww;
       console.log(ss);
       ww==xx;
       xx++;
       console.log((abs(xx)));
   }else
   {
       return ("*");
   }
   return ("*"); }
   console.log(abs(0));
    
    
/*3. (10 points) Get the odd multiples of 5 between 1 and 100. 5, 15, …  */
var inputtable=[];
var a=0;
var b=1;
function array1(p,q){                       /**same as previous solution */
   if(p<q){
        inputtable[a]=b;
        a++;
        b++;
        p++;
        array1(p,q);
    }
    else{return 0;
    }   return ("*");
}
console.log(array1(1,101));
console.log("3) Odd Multiples of 5 :");
function multiples3(x, y) {                     /** function for finding odd multiples using mod and "and" operator*/
    if(inputtable[y]==null){
        return 0;
    }
    else if(inputtable[y]%x==0 && inputtable[y]%2!=0){
        y++;
        console.log(y);
        multiples3(x,y);
    }
    else {
        y++;
        multiples3(x,y);
    }
    return ("*");
}
console.log(multiples3(5,0));


/*4. (20 points) Get the sum of even multiples of 7 between 1 and 100. */
var inputtable=[];
var a=0;
var b=1;
function array2(p,q){                               /**same as previous solution */
   if(p<q){
        inputtable[a]=b;
        a++;
        b++;
        p++;
        array2(p,q);
    }
    else{return 0;
    }   return ("*");
}
console.log(array2(1,101));
console.log("4) Sum of Even Multiples of 7 :");
var sum=0;
function multiples4(x, y) {                         /** function for finding sum of even multiples using mod and "and" operator*/
    if(y==100){
        return 0;
    }
    else if(inputtable[y]%x==0 && inputtable[y]%2==0){
        y++;
        sum=sum+y;
        multiples4(x,y);
    }
    else {
        y++;
        multiples4(x,y);
    } return ("*");
}
console.log(multiples4(7,0));
console.log(sum);


/*5. (15 points) Use currying to rewrite the function below: -
function cylinder_volume(r, h){
var volume = 0.0;
volume = 3.14 * r * r * h;
return volume;
}
a. Use r = 5 and h = 10 to call your curried function.
b. Reuse the function from part ‘a’ but use h = 17
c. Reuse the function from part ‘a’ but use h = 11
 */
console.log("5) Currying function:")                /** given function*/
function cylinder_volume(r, h){                 
var volume = 0.0;
volume = 3.14 * r * r * h;
return volume;
}                                                   
function currying(func) {                           /*Ref: https://javascript.info/currying-partials*/
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}
let volume=currying(cylinder_volume);
console.log(volume(5,10));                          /** normal input*/
console.log(volume(5,(17)));                        /** partial input using currying*/
console.log(volume((5),(11)));                      /** currying input of both parameters*/


/*6. (15 points) Use the following code to take advantage of closures to wrap content with
HTML tags, specifically show an HTML table consisting of a table row that has at least
one table cell/element. You can use the console to output your results.
makeTag = function(beginTag, endTag){
return function(textcontent){
return beginTag +textcontent +endTag;
}
}
 */

console.log("6) Making an HTML table :")
var makeTag = function(beginTag, endTag){           /**given function*/
return function(textcontent){
return beginTag +textcontent +endTag;
    }
}                                                   /**table of character rankings in warcraft*/
makeTag("<sn>", "</sn>")("Warcraft");
var title = makeTag("<title>", "</title>")("Character") + makeTag("<title>", "</title>")
("Class") + makeTag("<title>", "</title>")("Level");
var first =  makeTag("<rank>", "</rank>")("Illidian") + makeTag("<rank>", "</rank>")
("Warrior") + makeTag("<rank>", "</rank>")("100");
var second =  makeTag("<rank>", "</rank>")("Arthus") + makeTag("<rank>", "</rank>")
("Paladin") + makeTag("<rank>", "</rank>")("99");
var third =  makeTag("<rank>", "</rank>")("Sylvanas") + makeTag("<rank>", "</rank>")
("Archer") + makeTag("<rank>", "</rank>")("98");
var top = makeTag("<standings>", "</standings>")(title);
var mid = makeTag("<standings>", "</standings>")(first);
var mid2 = makeTag("<standings>", "</standings>")(second);
var bot = makeTag("<standings>", "</standings>")(third);

console.log(makeTag("<table>", "</table>")(top + mid + mid2 + bot));


/*8. (Extra credit: 10 points) Do the ‘generic’ version of questions 3 and 4, meaning the target
multiple must not be hard coded; hint: we studied closures and currying. This means you
should be able to use the same code to handle multiple scenarios, for example: first odd
multiples of 11 and then even multiples of 3 (still in the range 1 to 100). Your code
should allow the grader to combine a chosen multiple along with the choice of odd / even
without writing any code */

var inputtable=[];
var a=0;
var b=1;
function array3(p,q){                                   /**array for taking 100 elements*/
   if(p<q){
        inputtable[a]=b;
        a++;
        b++;
        p++;
        array3(p,q);
    }
    else{return 0;
    } return ("*");
}
console.log(array3(1,101));
var num = window.prompt("Multiples of the number : ")     /**taking desired number*/
var choice=window.prompt("1. All, 2. Even, 3. Odd")        /**choices for making selection*/
console.log("8) List of numbers from selection :")
function nothardcode(){
if(choice==3){function multiples(x, y) {
    if(inputtable[y]==null){                                /**odd multiples*/
        return 0;
    }
    else if(inputtable[y]%x==0&&inputtable[y]%2!=0){
        y++;
        console.log(y);
        multiples(x,y);
    }
    else {
        y++;
        multiples(x,y);
    }
    return ("*");
}
console.log(multiples(num,0));
}
else if(choice==2){function multiples(x, y) {
    if(inputtable[y]==null){                              /**even multiples*/
        return 0;
    }
    else if(inputtable[y]%x==0&&inputtable[y]%2==0){
        y++;
        console.log(y);
        multiples(x,y);
    }
    else {
        y++;
        multiples(x,y);
    }
    return ("*");
}
console.log(multiples(num,0));
}
else{function multiples(x, y) {                         /**All multiples*/
    if(inputtable[y]==null){
        return 0;
    }
    else if(inputtable[y]%x==0){
        y++;
        console.log(y);
        multiples(x,y);
    }
    else {
        y++;
        multiples(x,y);
    }
    return ("*");
}
console.log(multiples(num,0));
}return ("*");
}
console.log(nothardcode());