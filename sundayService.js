const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add('show')
         }

         if (entry.isIntersecting){
            entry.target.classList.add('show1')
         }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hidden1Elements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));
hidden1Elements.forEach((el) => observer.observe(el));