const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `&copy<span class="highlight">${today.getFullYear()}</span>`;

lastmodified.innerHTML = `<span class="highlight">${(document.lastModified)}</span>`;