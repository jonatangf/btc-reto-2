const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData("id", ev.target.id);
    document.getElementById("cart-container").className = "cart-focused col-sm-4";
}

const dropOnCart = (ev) => {
    console.log("drop has been called");
    ev.preventDefault();
    let elementId = ev.dataTransfer.getData("id");
    let element = document.getElementById(elementId);
    let parentElement = element.parentElement

    let elementPrice = parentElement.getElementsByClassName("showcase-item-price").item(0).textContent;
    let elementName = parentElement.getElementsByClassName("showcase-item-name").item(0).textContent;

    let articleNameElement = document.createElement("div");
    articleNameElement.className = "col-sm-8";
    articleNameElement.textContent = elementName;

    let priceElement = document.createElement("div");
    priceElement.className = "col-sm-2";
    priceElement.textContent = elementPrice;

    let priceCurrency = document.createElement("div");
    priceCurrency.className = "col-sm-2";
    priceCurrency.textContent = "€";

    let cartElement = document.createElement("div");
    cartElement.className = "row";
    cartElement.appendChild(articleNameElement);
    cartElement.appendChild(priceElement);
    cartElement.appendChild(priceCurrency);

    let total_elements = parseInt(document.getElementById("total-elements").textContent) + 1;
    document.getElementById("total-elements").textContent = total_elements.toString();

    document.getElementById("total-price").textContent = (parseFloat(document.getElementById("total-price").textContent) + parseFloat(elementPrice)).toFixed(2);

    document.getElementById("cart").appendChild(cartElement);
    document.getElementById("cart-container").className = "cart-unfocused col-sm-4";
}
