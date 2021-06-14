const products = [
    { id: 1, img: 'img/notebook.jpg', title: 'Notebook', price: 2000 },
    { id: 2, img: 'img/mouse.jpg', title: 'Mouse', price: 20 },
    { id: 3, img: 'img/keyboard.jpg', title: 'Keyboard', price: 200 },
    { id: 4, img: 'img/gamepad.jpg', title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (feature) =>
    `<div class="product-item">
            <div class = "product-item_img">
            <img src = ${feature.img}>
            </div>
            <div class="product-item_text">
                <h3>${feature.title}</h3>
                <p>${feature.price}</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);

//*Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
//Array#toString() работает: значения null и undefined превращаются в пустые строки, а массив объединяется с помощью ",". Что бы убрать запятые нужно использовать join.