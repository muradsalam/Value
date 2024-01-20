let a = document.getElementById('num1');
let b = document.getElementById('num2');

function topla() {
    let netice = +a.value + +b.value;
    document.getElementById('ayaz').innerHTML = netice;
}
function cix() {
    let netice = +a.value - +b.value;
    document.getElementById('ayaz').innerHTML = netice;
}
function vur() {
    let netice = +a.value * +b.value;
    document.getElementById('ayaz').innerHTML = netice;
}
function bol() {
    let netice = +a.value / +b.value;
    document.getElementById('ayaz').innerHTML = netice;
}