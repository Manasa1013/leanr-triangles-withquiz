let ipBill = document.querySelector("#ip-bill");
let billAMt = ipBill.value;
let btn = document.querySelector("#btn")
if(billAMt>0){
    let br = document.createElement("br")
    document.body.insertBefore(br,btn)
    let ipCash = document.createElement("input")
    document.body.insertBefore(ipCash,br)
    
    
    ipCash.placeholder = "Enter money given"
    ipCash.style.backgroundColor = "orange"
}
function changeCal(){

    
}

btn.addEventListener("click",changeCal,false)