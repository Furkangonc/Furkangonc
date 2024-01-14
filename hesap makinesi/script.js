const işlem=document.querySelector(".işlem")
const sonuc=document.querySelector(".sonuc")    


const buttons=document.querySelector(".buttons")


let işemOper=""
let sonucOper=""
let operation=""







const calculet=()=>{
    let calculation=0;
    const snc=Number(sonucOper)
    const işl=Number(işlemOper)
    switch (operation) {
        case "+":
            calculation=snc+işl            
            break;
        case "-":
            calculation=snc-işl            
            break;
        case "*":
            calculation=snc*işl            
            break;
        case "/":
            calculation=snc/işl            
            break;

        default:
            return;
    }

sonucOper=calculation
işemOper=""
operation=""



}