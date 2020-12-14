/*
//32.Activating strict mode
'use strict' ; //secure code (to avoid error)

let hasDriversLicense = false;
const passTest =true;

if (passTest) hasDriversLicense =true; 
if(hasDriversLicense) console.log('i can drive :D')
//const interface ='audio';
//const private = 534 ; 
//const if = 'ddf';  이런거 안됨 선택자는 변수가 될 수 없음!

//33.함수
function logger () {
    console.log('My name is Juwon');
}
//calling / runnning /invoke function
logger();
logger();
logger();

function fruitProcessor(apples , oranges){
    const juice = 'Juice with ' + apples + ' apples and ' + oranges +' oranges.';
    return juice; 
    
}

 const applesJuice = fruitProcessor(5 , 0);
console.log(applesJuice);//console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


//34.declaration,Expression

// dunction declaration
const age1 = calcAge1(1991);//expression과의 차이 변수정의가 선행해도 상관X

function calcAge1(birthYear){
    return 2037 - birthYear;
}
console.log(age1); 

//Fuction expression = value!!!!!!!!!!!!!!!!
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1,age2); 


//35.Function Arrow
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const calcage3 = birthYear => 2037 - birthYear; //we don't need to assign return
const age3 = calcage3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear , firsname) => { // Arrow는 한 함수에 return을 해야하는게 2개 있을때
    const age = 2037 - birthYear;
    const retirement = 65 - age ; 
    return firsname + 'retires in ' + retirement + 'years';
   //return retirement;
}

console.log(yearsUntilRetirement(1991 , 'Juwon'));
console.log(yearsUntilRetirement(1980 , 'Bob')); 

//36.calling one function other
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples , oranges){
    const  applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = 'Juice with ' + applePieces+ ' applesPices and ' + orangePieces +' orangesPieces.';
    return juice;    
}
console.log(fruitProcessor(2,3));*/
const calcAge = function(birthYear){ //간단한 변수로 바꿔도 상관 X
    return 2037 -birthYear;
}

const yearsUntilRetirement = function(birthYear , firstname)  { // Arrow는 한 함수에 return을 해야하는게 2개 있을때
    const age = calcAge(birthYear);
    const retirement = 65 - age ; 
    if(retirement > 0 ){
        console.log(firstname + 'retires in ' + retirement + 'years');
        return retirement;// console같은 명령어는 return의 앞에 있어야 효력이 있음
        
    }else{
        console.log(firstname+'has already retired');
        return -1 ; // 
       
    }
   // return firsname + 'retires in ' + retirement + 'years';
   //return retirement;
}
console.log(yearsUntilRetirement(1991,'Juwon'));
console.log(yearsUntilRetirement(1950,'Mike'));