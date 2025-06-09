const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://lsofygtvdyob3gnjki2vcl3axy0octlp.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();