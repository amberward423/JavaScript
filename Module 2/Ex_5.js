const num = []
const a = parseInt(prompt("Enter a number (0 to stop)"));

while (a !== num[a]){
 const a = parseInt(prompt("Enter a number (0 to stop)"));
    num.push(a);
    if(a === num[a]){
        break;
    }
}

num.sort((a,b) => a-b);
console.log(num);
