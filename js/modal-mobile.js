(() => {
    const refs = {
      openModalmobBtn: document.querySelector("[data-modalmob-open]"),
      closeModalmobBtn: document.querySelector("[data-modalmob-close]"),
      modalmob: document.querySelector("[data-modalmob]"),
    };
  
    refs.openModalmobBtn.addEventListener("click", toggleModal);
    refs.closeModalmobBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalmob.classList.toggle("is-hidden");
    }
  })();