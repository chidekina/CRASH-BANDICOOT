function abrirJogo() {
    let checkBox1 = document.querySelector('#crash1__selected');
    let checkBox2 = document.querySelector('#crash2__selected');
    let checkBox3 = document.querySelector('#crash3__selected');
    let show1 = document.querySelector('#crash1__selected__visibility')
    let menu1 = document.querySelector('#crash__menu1');
    let logo1 = document.querySelector('#crash__img1');
    let fadeIn1 = document.querySelector('.explode-animation1')
    let show2 = document.querySelector('#crash2__selected__visibility')
    let menu2 = document.querySelector('#crash__menu2');
    let logo2 = document.querySelector('#crash__img2');
    let fadeIn2 = document.querySelector('.explode-animation2')
    let show3 = document.querySelector('#crash3__selected__visibility')
    let menu3 = document.querySelector('#crash__menu3');
    let logo3 = document.querySelector('#crash__img3');
    let fadeIn3= document.querySelector('.explode-animation3')



    checkBox1.addEventListener("change", () => {
        if (checkBox1.checked) {
            show1.style.display = "block";
            menu1.style.display = "block";
            fadeIn1.style.animation = "fadeUp 0.2s linear 1 normal"
            menu1.style.animation = "appear 0.3s linear 1 normal";
            menu1.style.marginBottom = "60px";
            logo1.style.marginBottom = "100px";
            logo1.style.animation = "logo 1s infinite normal";
            show2.style.display = "none";
            logo2.style.animation = "none";
            logo2.style.marginBottom = "5rem";
            show3.style.display = "none";
            logo3.style.animation = "none";
            logo3.style.marginBottom = "5rem";
        } else {
            show1.style.display = "none"
            fadeIn1.style.animation = "none"
            menu1.style.animation = "none";
            logo1.style.marginBottom = "5rem";
            logo1.style.animation = "none";
        }
    })


    checkBox2.addEventListener("change", () => {
        if (checkBox2.checked) {
            show2.style.display = "block";
            menu2.style.display = "block";
            fadeIn2.style.animation = "fadeUp 0.2s linear 1 normal"
            menu2.style.animation = "appear 0.3s linear 1 normal";
            menu2.style.opacity = "1"
            menu2.style.marginBottom = "60px";
            logo2.style.marginBottom = "100px";
            logo2.style.animation = "logo 1s infinite normal";
            show1.style.display = "none";
            logo1.style.animation = "none";
            logo1.style.marginBottom = "5rem";
            show3.style.display = "none";
            logo3.style.animation = "none";
            logo3.style.marginBottom = "5rem";
        } else {
            show2.style.display = "none";
            fadeIn2.style.animation = "none";
            menu2.style.animation = "none";
            menu2.style.opacity = "0";
            menu2.style.marginBottom = "0";
            logo2.style.marginBottom = "5rem";
            logo2.style.animation = "none";
        }

    })

    checkBox3.addEventListener("change", () => {
        if (checkBox3.checked) {
            show3.style.display = "block";
            menu3.style.display = "block";
            fadeIn3.style.animation = "fadeUp 0.2s linear 1 normal"
            menu3.style.animation = "appear 0.3s linear 1 normal";
            menu3.style.opacity = "1"
            menu3.style.marginBottom = "60px";
            logo3.style.marginBottom = "100px";
            logo3.style.animation = "logo 1s infinite normal";
            show1.style.display = "none";
            logo1.style.animation = "none";
            logo1.style.marginBottom = "5rem";
            show2.style.display = "none";
            logo2.style.animation = "none";
            logo2.style.marginBottom = "5rem";
        } else {
            show3.style.display = "none";
            fadeIn3.style.animation = "none";
            menu3.style.animation = "none";
            menu3.style.opacity = "0";
            menu3.style.marginBottom = "0";
            logo3.style.marginBottom = "5rem";
            logo3.style.animation = "none";
        }
    })
}


