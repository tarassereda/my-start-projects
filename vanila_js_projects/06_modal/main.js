const openModal = document.querySelector(".open_modal");
const clousedModal = document.querySelector(".modal_cloused");
const shadow = document.querySelector(".shadow");

openModal.addEventListener("click", () => {
  document.querySelector(".modal_opened").classList.add("modal_opened_active");
  document.querySelector(".shadow").classList.add("shadow_active");
});

clousedModal.addEventListener("click", () => {
  document
    .querySelector(".modal_opened_active")
    .classList.remove("modal_opened_active");
  document.querySelector(".shadow_active").classList.remove("shadow_active");
});
