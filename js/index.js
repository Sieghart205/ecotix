document.addEventListener('DOMContentLoaded', ()=> {
    const sec2 = document.getElementById("sec-2");
    const stickyOffset = sec2.offsetTop;

    window.addEventListener('scroll', ()=>{
        if (window.scrollY >= stickyOffset-200) {
            sec2.classList.add('sticky');
        } else {
            sec2.classList.remove('sticky');
        }
    });
});


