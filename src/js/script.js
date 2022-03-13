document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu__list'),   // класс со всеми элементами обычно это UL
    menuItem = document.querySelectorAll('.nav-menu__item'),    // это списки li
    hamburger = document.querySelector('.hamburger');
    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('nav-menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('nav-menu__list_active');
        });
    });
    const counter = document.querySelector(".appointment__number");
        // counter.innerHTML = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        if ( c < target ) {
            counter.innerText = c + 11;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 3600) {
            updateCounter();
        }
    });
    // кнопки

    const btn = document.querySelectorAll('.tab__btn'),
    contentImg = document.querySelectorAll('.gallery__img'),
    tabs = document.querySelector('.tab__inner');
    // скрываем весь контент на сайте
    function hideTabContent() {
        contentImg.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('active');
        });
        // удаляем класс активности у кнопок
        btn.forEach( item => {
            item.classList.remove('tab__active');
        });
    }
    function showTabContent(i = 0) {
        contentImg[i].classList.add('active');
        contentImg[i].classList.remove('hide');
        btn[i].classList.add('tab__active');
    }

    hideTabContent();
    showTabContent();

    tabs.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tab__btn')) {
            btn.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});
