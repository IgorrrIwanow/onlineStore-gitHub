class ProductList {
    constructor() {
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.sum = this._sumPrices();
    }
    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50
            },
        ];
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
        this.title = product.title;
        this.id = product.id;
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

    }

    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {

    }
}

class ShopItem {
    constructor() {

    }

    render() {
        
    }

}

let list = new ProductList();