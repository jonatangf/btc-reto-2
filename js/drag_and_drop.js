const allowDrop = (ev) => {
    ev.preventDefault();
}

const dragArticle = (ev) => {
    ev.dataTransfer.setData("id", ev.target.id);
    document.getElementById("cart-container").className = "cart-focused col-sm-4";
}

const dropArticleOnCart = (ev) => {
    console.log("drop has been called");
    ev.preventDefault();
    let elementId = ev.dataTransfer.getData("id");
    let element = document.getElementById(elementId);
    let parentElement = element.parentElement

    let elementPrice = parentElement.getElementsByClassName("showcase-item-price").item(0).textContent
        .replaceAll(",", ".");
    let elementName = parentElement.getElementsByClassName("showcase-item-name").item(0).textContent;

    let articleNameElement = document.createElement("div");
    articleNameElement.className = "col-sm-6";
    articleNameElement.textContent = elementName;

    let amountElement = document.createElement("div");
    amountElement.className = "col-sm-2";
    amountElement.textContent = "x1";

    let priceElement = document.createElement("div");
    priceElement.className = "col-sm-2";
    priceElement.textContent = elementPrice;

    let totalElementPrice = document.createElement("div");
    totalElementPrice.className = "col-sm-2";
    totalElementPrice.textContent = elementPrice;

    let cartElement = document.createElement("div");
    cartElement.className = "row";
    cartElement.appendChild(articleNameElement);
    cartElement.appendChild(amountElement);
    cartElement.appendChild(priceElement);
    cartElement.appendChild(totalElementPrice);

    let total_elements = parseInt(document.getElementById("total-elements").textContent) + 1;
    document.getElementById("total-elements").textContent = total_elements.toString();

    let currentTotalPrice = parseFloat(document.getElementById("total-price").textContent);
    let parsedElementPrice = parseFloat(elementPrice);
    currentTotalPrice = currentTotalPrice + parsedElementPrice;
    document.getElementById("total-price").textContent = currentTotalPrice.toFixed(2);

    document.getElementById("cart").appendChild(cartElement);
    document.getElementById("cart-container").className = "cart-unfocused col-sm-4";
}
