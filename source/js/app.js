jarallax(document.querySelectorAll('.parralax'), {
    speed: 0.4
})
const navButtonMenu = document.getElementById("navButtonMenu").onclick = (e)=>{
    let button;
    if(e.target.nodeName === "SPAN"){
        button = e.target.parentElement;
    }
    else{
        button = e.target;
    }
    button.classList.toggle("bg-neutral-700");
    button.children[0].classList.toggle("absolute");
    button.children[0].classList.toggle("rotate-45");
    button.children[0].classList.toggle("top-10");
    button.children[2].classList.toggle("absolute");
    button.children[2].classList.toggle("rotate-[135deg]");
    button.children[2].classList.toggle("top-10");
    button.children[1].classList.toggle("hidden");
    document.getElementById("navMenuList").classList.toggle("hidden")
    document.getElementById("navMenuList").classList.toggle("flex")
};

