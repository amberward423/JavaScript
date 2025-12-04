const JokeForm= document.querySelector('#JokeForm');
JokeForm.addEventListener('submit', async function (evt) {

    evt.preventDefault();

    const query = document.querySelector("#keyword").value
    console.log(query)

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        const jsonData = await response.json();
        console.log(jsonData['result'][0]['value']);
        let num = 0
        for (let i of jsonData['result']) {
            let art = document.createElement('article');
            let p = document.createElement('p');
            p.innerText = jsonData['result'][num]['value'];
            document.querySelector('body').append(art);
            art.appendChild(p);
            num++;

        }}
        catch(error){
        console.log(error.message);
    }});







