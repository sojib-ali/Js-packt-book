// const end_date = "Sept 1 2022";
// function countdown(){
//     const total = Date.parse(end_date)-new Date();
//     const days = Math.floor(total/(1000 *60*60*24));
//     const hrs = Math.floor((total/(1000*60*60))%24);
//     const mins = Math.floor((total/1000/60)%60);
//     const secs = Math.floor((total/1000)%60);
//     return {
//         days,hrs,mins,secs
//     };
// }
// function update(){
//     const temp = countdown();
//     let output="";
//     for(const property in temp){
//         output+=(`${property}: ${temp[property]} `);
//     }
//     console.log(output);
//     setTimeout(update,1000);
// }
// update();

const d= "sept 1 2022";
const total = Date.parse(d)-new Date();
console.log(total);