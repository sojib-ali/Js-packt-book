const val = "thIs will be capiTalized for each word";
function wordsCaps(str){
    str=str.toLowerCase();
    const tempArr = [];
    let words = str.split(" ");
    words.forEach(word =>{
        let temp = word.slice(0,1).toUpperCase()+word.slice(1);
        tempArr.push(temp);
    });
    return tempArr.join(" ");
}console.log(wordsCaps(val));







/*let val="good moRning dhAkA";
val=val.toLocaleLowerCase();
console.log(val);
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((letter,index)=>{
    console.log(letter);
    val=val.replaceAll(letter,index);
});
console.log(val); */