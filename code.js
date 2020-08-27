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
//у нас есть faq  quest на них клик, разворачивается ответ
// желательно плавные анимации
// и нужно создать стрелочку, которая смотрит вниз
// при закрытом вопроса, и поворачивается
let faq_quest = document.querySelectorAll(".faq_quest");
let faq_answer = document.querySelectorAll(".faq_answer");

for (let i = 0; i < faq_quest.length; i++) {
    let icon = document.createElement("i");
    icon.className = "fa fa-arrow-up";
    faq_quest[i].append(icon);
}
icons = document.querySelectorAll(".fa-arrow-up");

for (let i = 0; i < faq_quest.length; i++) {
    faq_quest[i].onclick = () =>{
        faq_answer[i].classList.toggle("visible_helper");
        icons[i].classList.toggle("transform_helper");
}
}



