//条件分岐と繰り返し処理とエラー処理

//if (条件式) {処理}
let ok = false;
let maybeOk = true;

if (ok) {
  console.log("ok");
} else if (maybeOk) {
  console.log("maybe ok...");
} else {
  console.log("no");
}

//==  等価演算子。
//=== 厳密等価演算子。左右が同じならtrue
//!= 不等価演算子
//!== 厳密不等価演算子。左右が違うならtrue
{/*ブロック文*/
/*この中に文をかける*/
/* 変数の定義等は先にしておく*/
}
if (ok)/*ここは文であればほぼなんでもいい*/;
else ;

//三項分岐
//?がif文になってる
ok = false;
ok = ok ? "ok" : "no";
console.log(ok);

function vegetableColor(vegetable) {
  switch (vegetable) {
    case "tomato":
      console.log("tomato is red!");
      break;
    case "pumpkin":
      console.log("pumpkin is orange!");
      break;
    case "onion":
      console.log("onion is orange!");
  }

  // if (vegetable === "tomato") {
  //   console.log("tomato is red!");
  // } else if (vegetable === "pumpkin") {
  //   console.log("pumpkin is orange!");
  // } else if (vegetable === "onion") {
  //   console.log("onion is white!");
  // }
}
vegetableColor("tomato")