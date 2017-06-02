var x = document.getElementById("number1")
var y = document.getElementById("number2")
document.write(text="</br>");
console.log(x,y)
console.log(document.getElementById("1"));

document.getElementById("plus").addEventListener("click", function() {
  document.write(+x.value + +y.value);
});

document.getElementById("times").addEventListener("click", function() {
  document.write(+x.value * +y.value);
});

document.getElementById("divid").addEventListener("click", function() {
  document.write(+x.value / +y.value);
});

document.getElementById("minus").addEventListener("click", function() {
  document.write(+x.value - +y.value);
})
