let btn = document.getElementById("btn")
let min = document.getElementById("min")
let display = document.getElementById("display")

let totalSec,totalMin,currSecond,inter;
btn.addEventListener("click",function(e){
    e.preventDefault();
    display.innerText="00:00";
    display.style.fontSize="7rem"
    totalSec=0
    totalMin=0
    currSecond=0
    if (inter) {
        clearInterval(inter);
    }
    totalSec = min.value*(60)
    
    inter = setInterval(()=>{
        totalMin = Math.floor(totalSec/60)
        currSecond = totalSec%60
        console.log(totalMin,totalSec,currSecond);
        display.innerText=`${totalMin} : ${currSecond}`
        totalSec--
        if (totalSec<0) {
            clearInterval(inter);
            display.innerText="00:00";
                }
    },1000);    
})  
