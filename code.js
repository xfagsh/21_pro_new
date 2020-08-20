// при нажатии на кнопку у нас пропадет панель с куками
let cookie_wrapper = document.querySelector(".cookie_wrapper");
let cookie_wrapper__button  = document.querySelector(".cookie_wrapper__button");

let promo__wrapper_btn = document.querySelector(".promo__wrapper_btn")
let wrapper_form = document.querySelector(".wrapper_form")
// let form = document.querySelector("form")
let cross = document.querySelector("i")

cookie_wrapper__button.onclick = () => {
    cookie_wrapper.style.display = "none";
}

promo__wrapper_btn.onclick = () =>{
    wrapper_form.style.display = "block";
}
cross.onclick = () =>{
    wrapper_form.classList.add("anim_gone");
    setTimeout(() => {
        wrapper_form.style.display = "none";
        wrapper_form.classList.remove("anim_gone");
    }, 1000);
}
