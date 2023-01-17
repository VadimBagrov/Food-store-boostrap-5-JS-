// Подсчет общей стоимости
function calcCartPriceAndDelivery() {
    // Находим всю корзину в которой айтемы
    const cartWrapper = document.querySelector('.cart-wrapper');
    // Находим все айтемы корзины
    const cartItems = document.querySelectorAll('.cart-item');
    // Находим общию цену
    const priceTotalEl = document.querySelector('.total-price');
    // Находим текст доставки
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    // Переменная общей стоимости
    let totalPrice = 0;

    // Перебираем каждый элемент корзины с помощью (forEach)
    cartItems.forEach(function(item) {

        // Делаем доп.поиск чтобы найти кол-во и стоимость
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        // Текущая цена одного товара(кол-во на стоимость)
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        // Общая стоимость
        totalPrice += currentPrice;
    })

    // Отображаем цену на странице
    priceTotalEl.innerText = totalPrice;

    // Скрываем / Показываем блок с стоимостью доставки
    if ( totalPrice > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none');
    }

    //Указываем стоимость доставки
    if( totalPrice >= 600 ) {
        deliveryCost.classList.add('free');
        deliveryCost.innerHTML = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽'
    }
}
