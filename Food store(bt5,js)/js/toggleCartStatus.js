// Действия при полной или пустой корзине
//Для начала надо поместить функцию toggleCartStatus в места где добавляется товар и там где удаляется совсем
function toggleCartStatus() {

    // Добавляем корзину(пустой блок где шаблоны)
    const cartWrapper = document.querySelector('.cart-wrapper');
    // Находим из документа блок Корзина пуста
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    // Находим блок Оформить заказ
    const orderForm = document.querySelector('#order-form');


    // Если корзина пустая/есть товары то скрываем или показываем блоки убирая или добавляя класс none
    if(cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}
