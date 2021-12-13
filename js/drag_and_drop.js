function allowDrop(ev) {
    console.log("allowDrop has been called");
    ev.preventDefault();
}

function drag(ev) {
    console.log("drag has been called");
    console.log(JSON.stringify(ev));
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropOnCart(ev) {
    console.log("drop has been called");
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    console.log('The event is: ' + JSON.stringify(ev));

    let articleNameElement = document.createElement("div");
    articleNameElement.className = "col-sm-8";
    articleNameElement.textContent = "Article name";

    let priceElement = document.createElement("div");
    priceElement.className = "col-sm-4";
    priceElement.textContent = "Price";

    let cartElement = document.createElement("div");
    cartElement.className = "row";
    cartElement.appendChild(articleNameElement);
    cartElement.appendChild(priceElement);

    document.getElementById("cart").appendChild(cartElement);
}
