const num = []
const a = parseInt(prompt("Enter a number (0 to stop)"));

while (a !== 0){
 const a = parseInt(prompt("Enter a number (0 to stop)"));
    num.push(a);
    if(a === 0){
        break;
    }
}

num.sort((a,b) => a-b);
console.log(num);