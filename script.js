document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.createElement("p");
    greeting.textContent = "Have a great day!";
    document.querySelector("main section").appendChild(greeting);
  });
