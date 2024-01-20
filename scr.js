let a = document.getElementById('num1');
let b = document.getElementById('num2');

function topla() {
    let netice = +a.value + +b.value;
    document.getElementById('ayaz').innerHTML = netice;
    document.getElementById('murad').innerHTML = netice.toFixed(2);
}
function cix() {
    let netice = +a.value - +b.value;
    document.getElementById('ayaz').innerHTML = netice;
    document.getElementById('murad').innerHTML = netice.toFixed(2);
}
function vur() {
    let netice = +a.value * +b.value;
    document.getElementById('ayaz').innerHTML = netice;
    document.getElementById('murad').innerHTML = netice.toFixed(2);
}
function bol() {
    let netice = +a.value / +b.value;
    document.getElementById('ayaz').innerHTML = netice;
    document.getElementById('murad').innerHTML = netice.toFixed(2);
}