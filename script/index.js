import { mock } from "./mock.js"

const modalWindow = document.querySelector(".modal__wrapper")
const modalOpenButton = document.querySelector(".modal__open-button")
const servicesBox = document.querySelector(".services__container")

modalOpenButton.addEventListener("click", function () {
  modalWindow.classList.add("open__modal")
})

modalWindow.addEventListener("click", function (event) {
  if (event.target === modalWindow || event.target.closest(".modal__close-button")) {
    modalWindow.classList.remove("open__modal")
  }
})

mock.forEach((element) => {
  const serviceWrapper = document.createElement("article")
  serviceWrapper.classList.add("service__wrapper")

  const serviceTitle = document.createElement("h2")
  serviceTitle.classList.add("service__title")
  serviceTitle.textContent = element.title
  serviceWrapper.append(serviceTitle)

  const serviceSubtitle = document.createElement("p")
  serviceSubtitle.classList.add("service__subtitle")
  serviceSubtitle.textContent = element.subtitle
  serviceWrapper.append(serviceSubtitle)

  servicesBox.append(serviceWrapper)
})
