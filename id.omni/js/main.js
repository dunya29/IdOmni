//enablescroll
function enableScroll() {
    if (document.querySelectorAll('.fixed-block')) {
      document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = '0px')
    }
    document.body.style.paddingRight = '0px'
    document.querySelector('.footer').style.right = '0px'
    document.body.classList.remove("noscroll")
  }
  //disable scroll
  function disableScroll() {
    let paddingValue = window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
    if (document.querySelectorAll('.fixed-block')) {
      document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = paddingValue)
    }
    document.body.style.paddingRight = paddingValue
    document.querySelector('.footer').style.right = paddingValue
    document.body.classList.add("noscroll");
  }
  //open modal
  function openModal(modal) {
    let activeModal = document.querySelector(".modal.open")
    if (!activeModal ) {
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
      enableScroll()
    }, 400);
  }
  // Header hide
  const header = document.querySelector('.header__content');
  if (header) {
    let lastScroll = 0;
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide');
    const menuMobile = document.querySelector('.header-mobile-menu');
    window.addEventListener('scroll', () => {
      if (menuMobile && !menuMobile.classList.contains('menu--active')) {
          if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > 10) {
            //scroll down
            header.classList.add('hide');
          } else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            header.classList.remove('hide');
          }
      } else {
        header.classList.remove('hide');
      }
      lastScroll = scrollPosition();
    });
  }
  
  // Select
  const select = document.querySelector('.default');
  const defaultSelect = () => {
    const choices = new Choices(select, {
      searchEnabled: false,
      shouldSort: false
    });
  };
  if (select) {
    defaultSelect();
  }
  
  // Input file
  const inputs = document.querySelectorAll('.input__file');
  if (inputs) {
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
      input.addEventListener('change', function (e) {
        let countFiles = '';
        console.log(this.files);
        if (this.files && this.files.length >= 1) countFiles = this.files.length;
        if (countFiles)
          // label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
          label.querySelector('.input__file-button-text').innerText = this.files[0].name;else label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });
  }
  
  //password
  const itemFormPass = document.querySelectorAll(".item-form--password")
  if (itemFormPass) {
    itemFormPass.forEach(item => {
      item.querySelector("input").addEventListener("input", () => {
        if (item.querySelector("input").value.length > 0) {
          item.classList.add("show-eyeBtn")
        } else {
          item.querySelector("input").type = "password"
          item.classList.remove("show-eyeBtn","show-password")
        }
      })
      item.querySelector(".item-form__eye").addEventListener("click", () => {
        item.classList.toggle("show-password")
        if (item.classList.contains("show-password")) {
          item.querySelector("input").type = "text"
        } else {
          item.querySelector("input").type = "password"
        }
      })
    })
  }
  