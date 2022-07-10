// To make effect on main elements when scrolling
let bodyElement = Array.from(document.getElementsByClassName('body-ele'));


document.onscroll = function () {
    bodyElement.forEach(ele => {
        if ((window.scrollY + window.innerHeight) >= (ele.offsetTop + (ele.clientHeight / 3)))
            ele.classList.remove("hidden");
        else
            ele.classList.add("hidden");
    })
};