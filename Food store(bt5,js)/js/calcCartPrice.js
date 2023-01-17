// Подсчет общей стоимости
function calcCartPrice() {
    // Находим всю корзину в которой айтемы
    const cartWrapper = document.querySelector('.cart-wrapper');
    // Находим все айтемы корзины
    const cartItems = document.querySelectorAll('.cart-item');

    const priceTotalEl = document.querySelector('.total-price')

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
}
