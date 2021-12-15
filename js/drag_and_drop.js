const cart = [];

const CartItem = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

const allowDrop = (ev) => {
    ev.preventDefault();
}

const dragArticle = (ev) => {
    console.log('dragArticle method executed');
    ev.dataTransfer.setData("id", ev.target.id);
    document.getElementById("cart-container").className = "cart-focused col-sm-4";
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

const refreshCart = () => {
    let cartHtmlElement = document.getElementById("cart-items");

    while (cartHtmlElement.firstChild) {
        cartHtmlElement.removeChild(cartHtmlElement.firstChild);
    }

    let totalElements = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        let articleNameElement = document.createElement("div");
        articleNameElement.className = "col-sm-4";
        articleNameElement.textContent = item.name;

        let amountElement = document.createElement("div");
        amountElement.className = "col-sm-2";
        amountElement.textContent = "x" + item.quantity;

        let priceElement = document.createElement("div");
        priceElement.className = "col-sm-3";
        priceElement.textContent = item.price.toFixed(2) + "€";

        let totalElementPrice = document.createElement("div");
        totalElementPrice.className = "col-sm-3";
        totalElementPrice.textContent = (item.price * item.quantity).toFixed(2) + "€";

        totalElements += item.quantity;
        totalPrice += item.price * item.quantity;

        let cartElement = document.createElement("div");
        cartElement.className = "row";
        cartElement.appendChild(articleNameElement);
        cartElement.appendChild(priceElement);
        cartElement.appendChild(amountElement);
        cartElement.appendChild(totalElementPrice);

        cartHtmlElement.appendChild(cartElement);
    });

    document.getElementById("total-elements").textContent = totalElements.toString();
    document.getElementById("total-price").textContent = totalPrice.toFixed(2) + "€";

    document.getElementById("cart-container").className = "cart-unfocused col-sm-4";
}
