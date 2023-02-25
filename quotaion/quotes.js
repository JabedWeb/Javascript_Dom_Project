

const loadQuoe =() => {
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>{
        const quotes =document.getElementById('quote');
        quotes.innerText=data.quote;
    })
}


loadQuoe();