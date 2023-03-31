const modalWindow = document.querySelector(".modal__wrapper")
const modalCloseButton = document.querySelector(".modal__close-button")
const modalOpenButton = document.querySelector(".modal__open-button")

modalCloseButton.addEventListener("click", function () {
  modalWindow.classList.remove("open__modal")
})

modalOpenButton.addEventListener("click", function () {
  modalWindow.classList.add("open__modal")
})