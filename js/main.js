const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor() {
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector('.products');
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
    _sumPrices() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        return sum;
    }
}

class ProductItem {
    constructor(product, img = '../img/computer.jpg') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <h3 class="product-item_title">${this.title}</h3>
                <img src="../img/computer.jpg" class="product-item_img" width="150" height="150"></img>
                 <p class="product-item_price">Цена товара: ${this.price} &#8381;</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket {
    constructor() {
        this.basketBtn = document.querySelector('.btn-cart');
        this.basketBlock = document.querySelector('.modal-btn');
        this.goodsInBasket = [];
        this._getGoods()
            .then(data => {
                this.goodsInBasket = data.contents;
                this.render();
                this.addGoods();
            });
        this.showBasket();
    }

    showBasket() {
        this.basketBtn.addEventListener('click', () => {
            if (this.basketBlock.classList.contains('modal-btn_visibility')) {
                this.basketBlock.classList.remove('modal-btn_visibility');
            } else {
                this.basketBlock.classList.add('modal-btn_visibility');
            }
        })
    }

    _getGoods() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => console.log(error))
    }
    addGoods() {
        
    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {
        for (let product of this.goodsInBasket) {
            let item = new ShopItem(product);
            this.basketBlock.insertAdjacentHTML('beforeend', item.render());
        }
    }
}

class ShopItem {
    constructor(product) {
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="product-in-basket">
                    <span class="product-in-basket_id">ID товара: ${this.id}</span>
                    <span class="product-in-basket_name">${this.title}</span>
                    <span class="product-in-basket_price">Цена товара: ${this.price}</span>
                    <span class="product-in-basket_quantity-text">Колличество: <span class="product-in-basket_quantity">${this.quantity}</span></span>
                </div>`
    }

}

let list = new ProductList();
let basket = new Basket();