// при нажатии на кнопку у нас пропадет панель с куками
let cookie_wrapper = document.querySelector(".cookie_wrapper");
let cookie_wrapper__button  = document.querySelector(".cookie_wrapper__button");
cookie_wrapper__button.onclick = () => {
    cookie_wrapper.style.display = "none";
}