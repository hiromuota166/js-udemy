//条件分岐と繰り返し処理とエラー処理

//if (条件式) {処理}
// let ok = false;
// let maybeOk = true;

// if (ok) {
//   console.log("ok");
// } else if (maybeOk) {
//   console.log("maybe ok...");
// } else {
//   console.log("no");
// }

//==  等価演算子。
//=== 厳密等価演算子。左右が同じならtrue
//!= 不等価演算子
//!== 厳密不等価演算子。左右が違うならtrue
// {/*ブロック文*/
// /*この中に文をかける*/
// /* 変数の定義等は先にしておく*/
// }
// if (ok)/*ここは文であればほぼなんでもいい*/;
// else ;

//三項分岐
//?がif文になってる
// ok = false;
// ok = ok ? "ok" : "no";
// console.log(ok);

// function vegetableColor(vegetable) {
//   switch (vegetable) {
//     case "tomato":{
//       console.log("tomato is red!");
//       console.log(message);
//       break;
//     }
//     case "pumpkin":{
//       console.log("pumpkin is orange!");
//       console.log(message);
//       break;
//     }
//     case "onion":{
//       console.log("onion is yum!");
//       console.log(message);
//       break;
//     }
//     default:{
//       console.log("not founded");
//       console.log(message);
//     }
//   }

  // if (vegetable === "tomato") {
  //   console.log("tomato is red!");
  // } else if (vegetable === "pumpkin") {
  //   console.log("pumpkin is orange!");
  // } else if (vegetable === "onion") {
  //   console.log("onion is white!");
  // }

// vegetableColor("apple")
// vegetableColor("onion")

// while文

// let count = 0
// while (count < 10) {
//   console.log(count);
//   count += 1;
// }

// let tomatoCount = 0;
// do {
//   console.log("do-while",tomatoCount);
//   tomatoCount += 1;
// } while (tomatoCount < 10);

// console.log(a,b,c);
// for (
//   let pumpkinCount = 0,i=0;
//   pumkinCount < 10;
//   pumpkinCount += 1, i += 1
// ) {
//   console.log(pumpkinCount);
// }

const fruits = ["apple","banana","grape","orange","mango"];
// for (let i = 0; i < 5; i += 1) {
//   console.log(fruits[i]);
// }


//for of文
for (const fruit of coffee) {
  // console.log(fruit);
}

const coffee = {
  name: "Caffe Latte",
  size: 350,
  isHot: true,
};

//for in文
for (const key in coffee) {
  console.log(key);
  console.log(coffee.name);
};