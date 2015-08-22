function set_or_clear(val) {
  document.getElementById("display").value=val;
}

function build_expression(val) {
  document.getElementById("display").value+=val;
}

function evaluate_expression() {
  var exp = eval(document.getElementById("display").value);
  // console.log(exp);  
  set_or_clear(exp); 
}