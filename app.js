let angleOne = document.querySelector("#angle-one")
let angleTwo = document.querySelector("#angle-two")
let angleThree = document.querySelector("#angle-three")
let output = document.querySelector("output");

let result = document.createElement('div')
document.body.appendChild(result)
//afterwards try with arrays to store inputs' data 
function triangleValidity(){
    let angleOneValue = angleOne.value;
    let angleTwoValue = angleTwo.value;
    let angleThreeValue = angleThree.value;
    angleOneValue = parseInt(angleOneValue,10)
    angleTwoValue = parseInt(angleTwoValue,10)
    angleThreeValue = parseInt(angleThreeValue,10)
    let sum = angleOneValue + angleTwoValue + angleThreeValue
   output.innerHTML = sum;
   if(sum === 180){
        result.innerHTML = `<h1>It's a triangle</h1>`
   }
   else {
       if(sum !== 180){
           result.innerHTML = `<h1>It's not a triangle</h1>`
       }
   }
}

let btn = document.querySelector("#btn")
btn.addEventListener("click",triangleValidity,false)