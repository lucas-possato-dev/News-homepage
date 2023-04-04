const menuModal = document.querySelector(".menu #navMobile");
const button = document.querySelector(".menu .openButton");
const fechar = document.querySelector(".menu-modal-close button");
const prevenir = document.querySelectorAll("a");


function preventLinks() {
  prevenir.forEach((a) => {
    a.addEventListener("click", event => {
      event.preventDefault();
    })
  })
}

function handleClick() {
  menuModal.classList.add("active");
  const links = menuModal.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", e => {
      e.preventDefault();
    });
  })
}

function handleClose() {
  menuModal.classList.remove("active");
}

preventLinks();

button.addEventListener("click", handleClick);
fechar.addEventListener("click", handleClose);
