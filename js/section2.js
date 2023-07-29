// let : 変数　const : 定数

let count = 0;
count = 30;
let newCount = 0;
const daysInWeek = 7; //定数
let result = 5;
result = result + 1;
result += 1;
result++;//1足す前
++result;//1足した後

//データの型(type)
//number
let number = 10;
number = -4;
number = 32.42; //float
number = 'string' //number以外も入る
//string
let string = 'Hello';
const userName = 'Hiromu';
string = 'Hello' + userName + '!';
string = `Hello ${userName}!`//同上

const userInput = "10";
let calcResult;
calcResult = Number(userInput) + 10;
calcResult = parseInt(userInput) + 10;
calcResult = parseFloat(userInput) + 10;
calcResult = +userInput + 10;
const tenNumber = 10;
calcResult = "10" + String(tenNumber);

let boolean = true;
boolean = false;
//配列
let array = ["apple","banana","grape"];
array = [1,2,3];
array = [1,"apple",true,array];
array = ["apple","banana","grape"];
console.log(array[0]);

const coffee = {
  //key: value,
  name: "Chocolate Mocha",//nameプロパティ
  size: 350,//sizeプロパティ
  isHot: true,//isHotプロパティ
  nutritions: {
    calories: 430,
    sugars: 53,
    caffeine: 100,
  },
};
coffee.barista ="Ota"//newProperty