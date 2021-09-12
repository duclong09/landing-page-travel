window.onscroll = () => {
    if (window.pageYOffset > 50) {
      document.getElementById("top-header-id").classList.add("top-header--white-background");
    } else {
      document.getElementById("top-header-id").classList.remove("top-header--white-background");
    }
};