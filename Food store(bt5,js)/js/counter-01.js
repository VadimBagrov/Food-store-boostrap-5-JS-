// Находит первый попавшийски элемент в html который соотвесутет этому Data тегу (Находим элементы на странице)
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


// Отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener('click', function(){

    //Проверяем чтобы счетчик был больше 1
    if ( parseInt(counter.innerText) > 1 ) {
        counter.innerText = --counter.innerText;
    } //изменяем текст между > < (html) уменьшаем на 1 (parseInt возвращает нам целое число))

});


// Отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText; //изменяем текст между > < (html)(увеличиваем на 1)
});
