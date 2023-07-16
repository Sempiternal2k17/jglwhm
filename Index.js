
    // ==================================NavBar JS===================================

const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

    // ==================================SlideShow JS===================================

    var timeOut = 6000;
    var slideIndex = 0;
    var autoOn = true;
    
    autoSlides();
    
    function autoSlides() {
        timeOut = timeOut - 20;
    
        if (autoOn == true && timeOut < 0) {
            showSlides();
        }
        setTimeout(autoSlides, 20);
    }
    
    function prevSlide() {
    
        timeOut = 6000;
    
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex--;
    
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        if (slideIndex == 0) {
            slideIndex = 4
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    function showSlides() {
    
        timeOut = 6000;
    
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
    
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    