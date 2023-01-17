// Добавляем прослушку на всем окне
window.addEventListener('click', function(event) {

    // Обозначил что будет переменная для счетчика(потому что дальше она будет еще и в блочной видимости)

    let counter;

    // Чтобы не было ошибки при клике в область НЕ кнопок
    //Проверяем клик строго по кнопкам Плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // closest находит ближайшего родителя с классом ('')(находим обертку счетчика)
        const counterWrapper = event.target.closest('.counter-wrapper');

        //Находим в этом родители атрибут в скобках через поиск querySelector (находим обертку счетчика)
        counter = counterWrapper.querySelector('[data-counter]');

    }


    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if (event.target.dataset.action === 'minus') {

            //Проверяем чтобы счетчик был больше 1
        if ( parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
         //изменяем текст между > < (html) уменьшаем на 1 (parseInt возвращает нам целое число))

            //Проверка а товар который находится в корзине и если нажимаем еще раз на - когда 1 то удаляется
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){

            //Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            //Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            // Запускаем пересчет общей стоимости в корзине
            calcCartPrice()
        }

    }

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Запускаем пересчет общей стоимости в корзине
        calcCartPrice();
    }
});
