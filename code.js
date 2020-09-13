// При нажатии на кнопку пропадает панель с куками
let cookie__wrapper = document.querySelector(".cookie__wrapper");
let cookie__wrapper__button = document.querySelector(".cookie__wrapper__button");

let promo__wrapper_btn = document.querySelector(".promo__wrapper_btn")
let wrapper_form = document.querySelector(".wrapper_form")
// let form= document.querySelector("form");
let cross = document.querySelector("i")


cookie__wrapper__button.onclick = () =>{
    cookie__wrapper.style.display = "none";
}

promo__wrapper_btn.onclick = () => {
    wrapper_form.style.display = "block";
}

cross.onclick = () => {
    wrapper_form.classList.add("anim_gone");
    setTimeout(() => {
        wrapper_form.style.display ="none";
        wrapper_form.classList.remove("anim_gone");
    }, 950);
    // wrapper_form.style.display = "none";
}


//у нас есть faq quest из них разворачивается ответ, желательно плавная анимация, нужно создтать стрелочку которая смотрит вниз при закрытом вопросе и при открытии разворачивается.

let faq_quest = document.querySelectorAll(".faq_quest");
let faq_answer = document.querySelectorAll(".faq_answer");

for (let i = 0; i < faq_quest.length; i++) {
let icon = document.createElement("i");
icon.className = "fa fa-arrow-up";
faq_quest[i].append(icon);
}
icons= document.querySelectorAll(".fa-arrow-up");

for (let i = 0; i < faq_quest.length; i++) {
    faq_quest[i].onclick = () => {
        faq_answer[i].classList.toggle("visible_helper");
        faq_answer[i].classList.toggle("animate__animated");
        // faq_answer[i].classList.toggle( "animate__fadeInDown");
        
        icons[i].classList.toggle("transform_helper");
    }
    
    
}

//  Анимация линий в картах увеличиваем на 30px
let line = document.querySelectorAll(".card__line");
for (let i = 0; i < line.length; i+=1) {
    console.log(i);
    line[i].onclick = function(){
        this.style.width="150px",
        this.style.height="10px"
        this.style.backgroundColor="var(--primary-color)"
        this.style.borderRadius="5px"
        line[i].classList.toggle("wobble");
    }
}



// Параграфы окрашиваем в красный 

let card_parags = document.querySelectorAll(".card__p");

// card_text.onclick = function() {
    // greet();
    // this.style.color="red"
    for (let i = 0; i < card_parags.length; i+=1) {
        console.log(i);
        card_parags[i].onclick= function(){
            this.style.color="red";
        }
    }
// }

function greet(){
    alert(this)
}

// let Petya = {
//     name: "Petya",
//     surname: "Petrov",
//     programming: function(){
//         alert("Я программирую!")
//     }
// }

// let autumn = ["Сентябрь","Октябрь", "Ноябрь"]
// console.table(Petya);
// console.table(autumn);

// let superPetya = Petya;
// superPetya.run = function(){
//     alert("Он очень быстро бегает");
// }
// superPetya.name = "SuperPetya";
// делаем часы

let watch = document.createElement("div");
watch.classList.add("watch");
document.querySelector(".header").append(watch);


   let time = new Date();

setInterval(() => {
    let time = new Date();
    watch.innerHTML = `${time.toLocaleTimeString()}`;
    }, 1000);

    document.getElementById('Today').valueAsDate = new Date(); 
