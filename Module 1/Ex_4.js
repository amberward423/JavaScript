name= prompt("Enter your name: ")
function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+ 1)) + min;
}
let n = getRandomInt(1,4);



if (n === 4){
    document.write(name+ ", you are a Gryffindor")
} else if (n === 3) {
    document.write(name+ ", you are a Slytherin")
}
 else if (n === 2){
     document.write(name+ ", you are a Hufflepuff")
}
     else if (n === 1){

         document.write(name+ ", you are a Ravenclaw")
     }

