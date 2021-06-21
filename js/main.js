const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }


    // _fetchProducts() {
    //     this.goods = [
    //         { id: 1, img: 'img/notebook.jpg', title: 'Notebook', price: 2000 },
    //         { id: 2, img: 'img/mouse.jpg', title: 'Mouse', price: 20 },
    //         { id: 3, img: 'img/keyboard.jpg', title: 'Keyboard', price: 200 },
    //         { id: 4, img: 'img/gamepad.jpg', title: 'Gamepad', price: 50 },
    //     ];
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
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


class Cart {
    constructor(container = '.cart-item') {
        this.container = container;
        this.goods = [];
        this._clickCart();
        this._getCartItem()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem();
            block.insertAdjacentHTML("beforeend", productObj.render(product));
        }
    }

    _clickCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
}

class CartItem {
    render(product) {
        return `<div class="cart-item" data-id="${product.id_product}">
                    <div class="product-bio">
                        <img src="https://via.placeholder.com/150" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${product.product_name}</p>
                            <p class="product-quantity">Quantity: ${product.quantity}</p>
                            <p class="product-single-price">$${product.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">$${product.quantity * product.price}</p>
                        <button class="del-btn" data-id="${product.id_product}">&times;</button>
                    </div>
                </div>`
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = `https://via.placeholder.com/150`;
    }
    render() {
        return `<div class="product-item">
            <div class = "product-item_img">
            <img src = ${this.img}>
            </div>
            <div class="product-item_text">
                <h3>${this.title}</h3>
                <p>${this.price + ' ₽'}</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}
let list = new ProductList();
let cart = new Cart();




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
