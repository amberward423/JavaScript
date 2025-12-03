const numbers = [];

for (let a= 0; a < 5; a++) {
    const input = prompt("Enter five numbers. Number " + (a+1) + ":");
    numbers.push(input);
}


for(let a= numbers.length-1; a >= 0; a--)  {
    console.log(numbers[a]);
}

