const ul = document.getElementById("target")

const list1 = ['First', 'Second', 'Third']

for(let i of list1){
    let li = document.createElement('li')
    li.innerText = i + " item"
    if (i === "Second"){
        li.className = 'my-item';
    }
    ul.appendChild(li)

}


