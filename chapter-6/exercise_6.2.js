const prompt = require("prompt-sync")({ sigint: true });
const adj=["super", "wonderful", "bad", "angry", "careful"];
function my_fun(){
    const question = prompt("what is your name?");
    const name_adj=Math.floor(Math.random()*adj.length);
    console.log(`${adj[name_adj]} ${question}`);
}
my_fun();
