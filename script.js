const slides = document.querySelector('.slides'); // Получаем элемент слайдов
const images = document.querySelectorAll('.slides img'); // Получаем все изображения
const prevButton = document.querySelector('.prev'); // Кнопка "Назад"
const nextButton = document.querySelector('.next'); // Кнопка "Вперед"
const counter = document.querySelector('.counter'); // Счетчик изображений

let currentIndex = 0; // Текущий индекс изображения

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 600}px)`; // Сдвигаем слайды
    counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`; // Обновляем счетчик
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Переход к предыдущему изображению
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Переход к следующему изображению
    updateSlider();
});

updateSlider(); // Инициализация слайдера
