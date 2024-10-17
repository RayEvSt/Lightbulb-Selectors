
let bulb1 = document.querySelector('#lightbulb1');
let bulb2 = document.querySelector('#lightbulb2');
let bulb3 = document.querySelector('#lightbulb3');

let h3subtitle = document.querySelector('.subtitle');

let count = 0

bulb1.addEventListener('click', function() {    
    count+=1
    let COUNT = count.toString();
    if (count == 1){
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " time";
    } else {
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " times";
    }
    bulb1.classList.toggle("active");
})

bulb2.addEventListener('click', function() {    
    count+=1
    let COUNT = count.toString();
    if (count == 1){
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " time";
    } else {
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " times";
    }
    bulb2.classList.toggle("active");
})

bulb3.addEventListener('click', function() {    
    count+=1
    let COUNT = count.toString();
    if (count == 1){
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " time";
    } else {
        h3subtitle.innerHTML= "You've clicked the lights " + COUNT + " times";
    }
    bulb3.classList.toggle("active");
})

