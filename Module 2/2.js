const participant = [];
const a = parseInt(prompt("Enter the number of participants "))

for (let i= 0; i <a; i++) {
    const name= prompt("Enter the name of each participant:");
    participant.push(name)
    console.log(participant);}

const ol = document.getElementById('p-list');
for(let i= 0; i< participant.length; i++) {
    const li =document.createElement('li')
    li.textContent = participant[i];
    ol.appendChild(li);
    participant.sort();
}