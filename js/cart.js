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
        cartElement.draggable = true;
        cartElement.ondragstart = dragCartArticle;
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
