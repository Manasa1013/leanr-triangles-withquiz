let output = document.querySelector("output");

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
                result.innerHTML = `<h1>Enter angles greater than 0</h1>`
            }
        }
let btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    triangleValidity();
    let reset = document.createElement('button')
    document.body.appendChild(reset)
    reset.innerHTML= `Reset`
    reset.addEventListener('click',()=>{
        document.querySelector("#angle-one").value = ""
        document.querySelector("#angle-two").value = ""
        document.querySelector("#angle-three").value = ""
        output.innerHTML = ""
    })
},false)