let mobMenu = document.querySelector(".header-mobile-menu")
//open modal
function openModal(modal) {
    let activeModal = document.querySelector(".modal.open")
    if (!activeModal && !mobMenu.classList.contains("menu--active") ) {
        disableScroll()
    }
    if (activeModal) {
      activeModal.classList.remove("open")
    }
    modal.classList.add("open")
  }
//close modal
function closeModal(modal) {
    modal.classList.remove("open")
    setTimeout(() => {
      if (!mobMenu.classList.contains("menu--active")) {
        enableScroll()
      }
    }, 400);
}
