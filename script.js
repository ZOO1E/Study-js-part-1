/*
let js = 'amazing';
if (js === 'amazing') alert('javascript is FUN!');

40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions 
let $function = 27;

let person = 'jonas';
let PI = 3.1415;
let myFirstjob = 'Programmer';
let myCurrentJob = 'Teacher' ;

let job1 ='programmer';
let job2 ='teacher';

console.log(myFirstjob);



let javascriprIsFun = true;
console.log(javascriprIsFun);

console.log(typeof true);
console.log(typeof javascriptisFun);
console.log(typeof 23);
console.log(typeof 'jonas');


javascriptIsFun ='YES!';
console.log(typeof true);

let year;
console.log(year);
console.log(typeof year);

year =1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
console.log(age);

const birthyear = 1991;
//birthyear =1990; -> immutable!!
console.log(birthyear);


var job ='programmer';
job ='teacher';
console.log(job);

lastname = 'Schmedman';
console.log(lastname);/* we must declare selections!

const firstname = 'jonas';
const job ='teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I m " + firstname + ',a ' +  (year - birthyear) + 'years old ' +  job +  '!' ; 
console.log(jonas);

const jonasnew =' ${firstname}, a ${year - birthyear} year old ${job} !';
console.log(jonasnew);// 이거 왜ㅐ 안됮?

console.log('just a regular string...');

console.log('String with \n\
multiple \n\
lines');
console.log('String 
multiple  // 이것도 안됨 ㅋㅋㅋㅋㅋㅋㅋㅋ
lines'); 

const age = 19;

if(age >= 18) {
console.log('Sarah can start driving license');
} else {
    const yearLeft = 18-age;
    console.log('Sarah is too young. Wait another ${yearLeft } years :');
}

const birthyear = 2020;
let century;
if(birthyear <=2000){
     century = 20;

}else {
     century = 21;
}

console.log(century);

//type conversion
const inputYear = '1991'; // string으로 인식
console.log(Number(inputYear),inputYear);//여전히  inputYear는 string이고 Number라는 함수로 convert한거임
console.log(Number(inputYear+18)); // 199118 -> 2009

console.log(Number('Jonas'));// NaN
console.log(typeof NaN); // number

console.log(String(23),23); // 23을 string으로 인식

//type coersion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' -'10' - 3); //minus triggers 
console.log('23' +'10' + 3);//23103
console.log('23' * '2'); //46
console.log('23' > '18');// string to number
let n = '1' + 1 ; // string로 인식
n = n -1; // number로 인식
console.log(n); //10 연산자에 따라서 string과 number가 달라짐!! 

//21.Truthy and Faisy Values
//5 falsy valuse:0 , '' ,undefined, null , NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //flase
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));

const money = 0; //0 is flase 
if (money){
     console.log("Don't spend it all ;)");
}
else {
          console.log('you should het a job')
     }
let height ; // undefined
if (height){
     console.log('Yay! Height is defined');
}else{
     console.log('Height is undefined!') 

     //22 equality
     const age = 18; // just equal 주로 이걸 씀
     console.log()
     if (age===18) console.log('you just became an adult(strixt)'); // comparision equal
          // == :loose equal (be able to do coerision)
          //===: strict equal (do not coerision)
          if (age===18) console.log('you just became an adult(loose)');

const favorite = prompt("what's your favorite number?");
console.log(favorite);
console.log(typeof favorite);


//24.Logical operators

const hasDriversLincense = true; // A
const hasGoodVision = true ; //B

console.log(hasDriversLincense && hasGoodVision );//and
console.log(hasDriversLincense || hasGoodVision );//or
console.log(!hasDriversLincense);

const shouldDrive = hasDriversLincense && hasGoodVision ;

if (shouldDrive){
     console.log('Sarah is able to drive')
}     else{
     console.log('someone else should drive..');
     }

     const isTired =false; //C
     console.log(hasDriversLincense || hasGoodVision || isTired);

     if ( hasDriversLincense && hasGoodVision && !isTired){
          console.log('Sarah is able to drive')
     }     else{
          console.log('someone else should drive..');
          }
          
          
          //25.the switch statement
          const day = 'saturday';

          switch(day){ // more useful that i think with Jonas 
               case 'monday': //day === 'monday'
               console.log('Plan weekday');
               console.log('Go to coding meet up');
               break;

               case 'tuesday':
               console.log('prepare theory wideos');
               break;

               case 'wednseday':
               case 'thursday':
               console.log('Write code example ')
               break;

               case 'friday' :
               case 'saturday':
               console.log('Rest time :D ');
               break;
          default:
               console.log('Not a valid day!')
          }
     
          //Above Ex change to if/else paragraph !
     if(day === 'wednseday' ||'thursday' ){
               console.log('Write code example ')
     }else if(day === 'monday' ){
          console.log('Plan weekday');
          console.log('Go to coding meet up');
     }else if(day === 'tuesday'){
          console.log('prepare theory wideos');
     }else if(day === 'friday' || 'saturday'){
          console.log('Rest time :D ');
     }else {
          console.log('Not a valid day!')
     } */

     //27.Statement and Expression
     3 + 4 
     1991
     true && false && !false //statement

     if (23 >10){
          const str ='23 is a bigger'
      }
// expression(const me =??) produce value , statement(if else and so on...) like a full sentence that translate our actions 



//28.The conditional operators
const age = 23;
age >= 18 ? console.log('i like to drink wine'):// if part
console.log('i like to drink water'); //else part

const drink = age >= 18 ? 'wine': 'water';
console.log(drink); //ternary(3 dimension)  more useful !! 

let drink2;
if (age >= 18){
     drink2 = 'wine;'
}else{
     drink2 ='water';
}
console.log(drink2);

//why useful? we can insert to log tag !!!!
console.log('i like to drink' + age >= 18 ? 'wine': 'water')