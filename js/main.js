const products = [{
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
    }
];

const renderProduct = (item) =>
    `<div class="product-item">
        <h3 class="product-item_title">${item.title}</h3>
        <img src="../img/computer.jpg" class="product-item_img" width="150" height="150"></img>
        <p class="product-item_price">Цена товара: ${item.price} &#8381;</p>
        <button class="buy-btn">Купить</button>
    </div>`;

const renderPage = list => {
    const productList = list.map(item => renderProduct(item));
    document.querySelector('.products').innerHTML = productList.join('');
};

renderPage(products);