class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();

    }
    _fetchProducts() {
        this.goods = [
            { id: 1, img: 'img/notebook.jpg', title: 'Notebook', price: 2000 },
            { id: 2, img: 'img/mouse.jpg', title: 'Mouse', price: 20 },
            { id: 3, img: 'img/keyboard.jpg', title: 'Keyboard', price: 200 },
            { id: 4, img: 'img/gamepad.jpg', title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        let count = 0;
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render();
            count += product.price;
        }
        console.log(`Общая стоимость товаров составляет ${count}`);
    }
}

class CartProduct {
    render() { }
}

class Cart {
    addGoods() {

    }
    removeGoods() {

    }
    varyGoods() {

    }
    render() {

    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item">
            <div class = "product-item_img">
            <img src = ${this.img}>
            </div>
            <div class="product-item_text">
                <h3>${this.title}</h3>
                <p>${this.price + '₽'}</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}
let list = new ProductList();





// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (feature) =>
//   

// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item)).join('');
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList;
// };

// renderPage(products);



// //*Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
// //Array#toString() работает: значения null и undefined превращаются в пустые строки, а массив объединяется с помощью ",". Что бы убрать запятые нужно использовать join.



