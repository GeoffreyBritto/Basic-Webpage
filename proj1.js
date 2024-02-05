var element = document.getElementById('event');
var content = document.getElementById('save-btn');
var increment1 = document.getElementById('btn-increment')
var save1 = document.getElementById('btn-save')
var count = 0;
console.log(content);
console.log(increment1);
console.log(save1);

increment1.addEventListener("click", increment)
save1.addEventListener("click", save)


function increment(){
    count = count+1;
    element.textContent = count;
}


function save(){
    let countStr = count + " - ";
    content.textContent += countStr;
    element.textContent = 0;
    count = 0;
}

