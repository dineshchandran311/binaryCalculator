const res = document.getElementById('res');
const clear = document.getElementById('btnClr');
const evaluate = document.getElementById('btnEql');

function disp(value){
    res.innerHTML+=value;
}

clear.addEventListener('click',() => {
    res.innerHTML = "";
})

evaluate.addEventListener('click',() =>{
    var expr = res.innerHTML;
    var nums = /(\d+)/g;
    expr = expr.replace(nums, function(match) {
        return parseInt(match, 2);
    })
    res.innerHTML = Math.floor(eval(expr)).toString(2);
})