const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://lsofygtvdyob3gnjki2vcl3axy0octlp.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}

updateCounter();


  const text = "Hello, my name is Anthony";
  const typingTarget = document.getElementById("typing-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  window.onload = typeWriter;