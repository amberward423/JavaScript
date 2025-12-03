const Form = document.querySelector("form")
Form.addEventListener('submit', async function(evt){

    evt.preventDefault()

    const search= document.querySelector("query");

    const submit = document.querySelector("search");
    const response = await fetch("https://api.tvmaze.com/search/shows");
    const jsonData = await reponse.json();
    console.log(jsonData);