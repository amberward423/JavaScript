const dog = [];

for (let i= 0; i <6; i++) {
    const name= prompt("Enter the name of each dog:");
    dog.push(name)
    console.log(dog);}

const ul = document.getElementById('dog-list');
for(let i= 0; i< dog.length; i++) {
    const li =document.createElement('li')
    li.textContent = dog[i];
    ul.appendChild(li);
}
dog.sort()

