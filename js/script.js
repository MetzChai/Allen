if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('./sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }


const apiURL = "https://v2.jokeapi.dev/joke/Programming";

function fetchJoke() {
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then(data => {
      const jokeContainer = document.getElementById("joke");
      if (data.type === "single") {
        jokeContainer.textContent = data.joke;
      } else {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      }
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("joke").textContent = "Could not fetch a joke. Try again later.";
    });
}

fetchJoke();
document.getElementById("newJoke").addEventListener("click", fetchJoke);
