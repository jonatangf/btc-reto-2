const cart = [];

const CartItem = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

const allowDrop = (ev) => {
    ev.preventDefault();
}

const dragShowcaseArticle = (ev) => {
    console.log('dragShowcaseArticle method executed on: ', ev);
    ev.dataTransfer.setData("id", ev.target.id);
    document.getElementById("cart-container").className = "cart-focused col-sm-4";
}

const dragCartArticle = (ev) => {
    console.log('dragCartArticle method executed on: ', ev.target);
    ev.dataTransfer.setData("id", ev.target.id);
}

const dropArticleOnCart = (ev) => {
    console.log('dropArticleOnCart method executed and ev is: ' + JSON.stringify(ev));

    ev.preventDefault();
    let elementId = ev.dataTransfer.getData("id");
    let element = document.getElementById(elementId);
    let parentElement = element.parentElement;

    let elementPrice = parentElement.getElementsByClassName("showcase-item-price").item(0).textContent
        .replaceAll(",", ".");
    let elementName = parentElement.getElementsByClassName("showcase-item-name").item(0).textContent;

    let cartItems = cart.filter(item => item.name === elementName);

    if (cartItems.length === 0) {
        cart.push(new CartItem(elementName, parseFloat(elementPrice), 1));
    } else {
        let cartItem = cartItems[0];
        cartItem.quantity++;
    }

    refreshCart();
}

document.getElementById("clear-cart").onclick = (event) => {
    while(cart.length > 0) cart.pop();
    refreshCart();
}
