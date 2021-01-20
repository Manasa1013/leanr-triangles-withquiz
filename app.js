let output = document.querySelector("#output-first");
let reset = document.querySelector("#reset")
let result = document.createElement('div')

document.body.appendChild(result)
//afterwards try with arrays to store inputs' data :it's done
function triangleValidity(){
    let angles = [0,0,0]
    angles[0] = parseInt(document.querySelector("#angle-one").value , 10)
    angles[1] = parseInt(document.querySelector("#angle-two").value , 10)
    angles[2] = parseInt(document.querySelector("#angle-three").value , 10)

    console.log(angles);
    let countPositiveAngles = 0
    angles.forEach(item => {
        if(item>0 && item <180){
            countPositiveAngles = countPositiveAngles+1;
        }})
            if(countPositiveAngles === 3){
                const reducer = (accumulator,currentValue ) => accumulator+currentValue;
            let sum = angles.reduce(reducer)
            console.log("sum through Maps"+ sum);
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
            
            
            else{
                result.innerHTML = `<h1>Enter angles greater than 0 and less than 180</h1>`
            }
        }
let btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    triangleValidity();
    reset.style.visibility = "visible"
    reset.addEventListener('click',()=>{
        document.querySelector("#angle-one").value = ""
        document.querySelector("#angle-two").value = ""
        document.querySelector("#angle-three").value = ""
        output.innerHTML = ""
    })
},false)

let btnSecond = document.querySelector("#btn-second")
let resetSecond = document.querySelector("#reset-second")
let resultSecond = document.createElement('div')
document.body.appendChild(resultSecond)
function triangleRandomValues(){
    let quesAngleOne = document.querySelector("#ques-angle-one")
    let quesAngleTwo = document.querySelector("#ques-angle-two")
    let quesAngleThree = document.querySelector("#ques-angle-three")
    let anglesSecond = [0,0,0]
    quesAngleOne.value = getRandomInt(1,150)
    quesAngleTwo.value = getRandomInt(0,150-quesAngleOne.value)
    
    // anglesSecond = [quesAngleOne.value,quesAngleTwo.value,quesAngleThree.value]
}

btnSecond.addEventListener('click',triangleRandomValues,false)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }