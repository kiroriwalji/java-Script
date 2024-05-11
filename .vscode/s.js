var bulb = document.querySelector("#bulb")
var btn = document.querySelector("#btn")
btn.addEventListener("click",function(){

  bulb.style.backgroundcolor="yellow"
  console.log('cliocked')

})
// let flag =0;
//     btn.addEventListener("click", function(){
//         if(flag ==0){
//             bulb.style.backgroundcolor = "yellow"
//             console.log('cliocked')
//             flag = 1
//         }else{
//             bulb.style.backgroundcolor = "transparent"
//             console.log('Again clieckedf')
//             flag =0
//         }
//     })
