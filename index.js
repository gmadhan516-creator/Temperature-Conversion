let input = document.getElementById('input');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let Ans = document.getElementById('Ans');
let temp;
function convert(){
if(radio1.checked){
    temp = Number(input.value)
      temp = (temp * 1.8) + 32;
      Ans.textContent = temp.toFixed(1) + "F"; 
} else if(radio2.checked){
    temp = Number(input.value);
    temp = (temp - 32) * 5/9;
    Ans.textContent = temp.toFixed(1) + "C"
} else{
    Ans.textContent = "Select a unit";
}
}