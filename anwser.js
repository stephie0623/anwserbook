 function Appear() {
     //获取随机数
     var luckyNum = Math.round(Math.random() * 4);
     //alert(luckyNum);
     if (luckyNum == 0) {
         window.location.href = "./sol/sol1.html";
     } else if (luckyNum == 1) {
         window.location.href = "./sol/sol2.html";
     } else if (luckyNum == 2) {
         window.location.href = "./sol/sol3.html";
     } else if (luckyNum == 3) {
         window.location.href = "./sol/sol4.html";
     }
 }