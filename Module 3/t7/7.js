let img = document.getElementById('target');

let p = document.getElementById('trigger');

p.addEventListener('mouseover', () => {
    img.src= "img/picA.jpg"
})

p.addEventListener('mouseout', () => {
    img.src= "img/picB.jpg"
})
