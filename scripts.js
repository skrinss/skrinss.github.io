// Тема
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const icon = toggle.querySelector('.theme-icon');

const getTheme = () => html.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const update = () => { icon.textContent = getTheme() === 'dark' ? '☀️' : '🌙'; };

html.setAttribute('data-theme', localStorage.theme || '');
update();

toggle.onclick = () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.theme = next;
    update();
};

// Вращение круга
const outer = document.getElementById('circleOuter');
const inner = document.getElementById('circleInner');
const container = document.getElementById('circle');

let lastTime = performance.now(), rotation = 0, hover = false;

requestAnimationFrame(function animate(now) {
    const delta = Math.min(50, now - lastTime);
    rotation = (rotation + ((hover ? 250 : 100) * delta) / 1000) % 360;
    
    outer.style.transform = `rotate(${rotation}deg)`;
    inner.style.transform = `rotate(${-rotation}deg)`;
    
    lastTime = now;
    requestAnimationFrame(animate);
});

container.onmouseenter = () => hover = true;
container.onmouseleave = () => hover = false;

// Печать текста
const h2 = document.getElementById('print');
const words = ['Надёжный бэкенд ', 'Адаптивный фронтенд ', '2D-игры '];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    h2.innerHTML = `${currentWord.substring(0, charIndex)} |`;
    
    if (!isDeleting && ++charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && --charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 0);
    } else {
        setTimeout(typeEffect, isDeleting ? 200 : 100);
    }
}

typeEffect();

// Магнитные ссылки 
document.querySelectorAll('.magnetic_link').forEach(link => {
    let x = 0, y = 0, targetX = 0, targetY = 0;
    
    link.addEventListener('mousemove', ({ clientX, clientY }) => {
        const { left, top, width, height } = link.getBoundingClientRect();
        targetX = (clientX - left - width / 2) * 0.4;
        targetY = (clientY - top - height / 2) * 0.4;
    });
    
    (function smoothMove() {
        x += (targetX - x) * 0.05;
        y += (targetY - y) * 0.05;
        link.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(smoothMove);
    })();
    
    link.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });
});

// Меню
const menu = document.querySelector('.dynamic_menu');

document.getElementById('menuOpen').addEventListener('click', () => document.body.classList.add('open_menu'));
document.getElementById('menuClose')?.addEventListener('click', () => document.body.classList.remove('open_menu'));
document.querySelector('.menu_overlay').addEventListener('click', () => document.body.classList.remove('open_menu'));
menu.addEventListener('click', (e) => e.stopPropagation());

// Функция анимации числа
const animateNumber = (element, target, duration = 1000) => {
    const startTime = performance.now();
    
    requestAnimationFrame(function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = `${Math.floor(progress * target)}+`;
        
        if (progress < 1) requestAnimationFrame(update);
    });
};

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const statsBlock = document.querySelector('.stats');
    const targets = [3, 5, 7, 4];
    
    const numbers = [...statsBlock.querySelectorAll('.stats_number')]
        .filter(div => div.textContent !== '∞');
    
    new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) numbers.forEach((el, i) => animateNumber(el, targets[i]));
    }, { threshold: 0.3 }).observe(statsBlock);
});

// Параллакс эффект при движении мыши

document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.parallax-layer');
    if (!layers.length) return;

    let centerX = innerWidth / 2, centerY = innerHeight / 2;

    document.addEventListener('mousemove', ({ clientX, clientY }) => {
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;
        layers.forEach(layer => {
            layer.style.transform = `translate(${offsetX * -(layer.dataset.speed || 0.02)}px, ${offsetY * -(layer.dataset.speed || 0.02)}px)`;
        });
    });

    addEventListener('resize', () => {
        centerX = innerWidth / 2;
        centerY = innerHeight / 2;
    });
});

// Появление снизу

const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, intersectionRatio: p }) => {
        target.style.opacity = p;
        target.style.transform = `translateY(${(1 - p) * -30}px)`;
    });
}, { threshold: [...Array(101).keys()].map(i => i / 100) });

document.querySelectorAll('.fade_down').forEach(el => observer.observe(el));

// Повление слева

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting: v }) => {
        target.style.opacity = v ? '1' : '0';
        target.style.transform = `translateX(${v ? 0 : -30}px)`;
        target.style.transition = 'all 0.3s ease';
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade_left').forEach(el => observerLeft.observe(el));

// Масштабирование изображения

const observerImage = new IntersectionObserver((entries) => {
    entries.forEach(({ target, intersectionRatio: p }) => {
        target.style.transform = `scale(${1.2 - p * 0.2})`;
    });
}, { threshold: [...Array(101).keys()].map(i => i / 100) });

document.querySelectorAll('.image_picture').forEach(el => observerImage.observe(el));

// Год в футере

document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Владислав Веб-разработчик`;