document.getElementById('year').textContent = new Date().getFullYear();

const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch(
      "https://lsofygtvdyob3gnjki2vcl3axy0octlp.lambda-url.us-east-1.on.aws/"
    );

    let data = await response.json();

    counter.innerHTML = data;
  } catch (error) {
    console.error("Counter failed:", error);

    counter.innerHTML = "Unavailable";
  }
}

updateCounter();