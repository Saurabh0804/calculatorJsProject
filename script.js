const digits = document.getElementsByClassName("digit");
const operators = document.getElementsByClassName("operator");
const display = document.getElementById("text");




const digitArr = Array.from(digits);
const operatorArr = Array.from(operators);


let str="";
digitArr.map((item)=>{
    item.addEventListener("click",(e)=>{
        let value = item.innerText;
        str+= value;
        display.innerHTML += value;
        //console.log(str);
    })
})

operatorArr.map((item)=>{
     item.addEventListener("click",(e)=>{
        let value = item.innerText;
        // 
        if(value === 'C'){
            str="";
            display.innerHTML ="";
        }
        else if(value === "="){
            //console.log(str);
            let res = eval(str);
            str = res;
            //console.log(eval(str))
            display.innerHTML = res;
        }
        else{
            str+= value;
            display.innerHTML += value;
        }
     })
})

