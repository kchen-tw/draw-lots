// 宣告一個名字為 run 的函式
var run = function() {
    console.log('按到了喔 2');
}

// 設定 div.btn-one 當發生 click 事件時，執行 run 的函式
$('div.btn-one').on('click', run)