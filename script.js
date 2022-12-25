const root = document.querySelector(':root')
const first = document.querySelector('.first')
const navbar = document.getElementById("navbar");
const gridObject = document.querySelectorAll(".gridObject");
const stickyNav = navbar.offsetTop;
const linkObject = {
    todo: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/12-Todo%20List/index.html",
    tip: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/11-Tip%20Calculator/index.html",
    calc: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/10-Calculator/index.html",
    shop: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/13-Shopping_Cart/index.html"
};

const observer = new IntersectionObserver(entries => {
    console.log(entries);
    if(!(entries[0].isIntersecting)){
        navbar.classList.toggle("sticky");
        root.style.setProperty("--animation-duration", "0s")
    }
},{
    rootMargin: (stickyNav + "px")
});

observer.observe(first)

gridObject.forEach(obj =>{
    obj.onclick = (e) =>{
        e.target.id == "" ? 
        window.open(`https://htmlpreview.github.io/?${linkObject[e.target.parentNode.id]}`) : 
        window.open(`https://htmlpreview.github.io/?${linkObject[e.target.id]}`);
    }
})