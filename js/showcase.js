const Article = function (name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

const Shelf = function () {
    this.image = "img/shelf.png";
    this.articles = [];
}

const shelf1 = new Shelf();
shelf1.articles.push(new Article("Tomate", 0.44, "img/articles/tomato.png"));
shelf1.articles.push(new Article("Coca Cola", 0.98, "img/articles/coke.png"));
shelf1.articles.push(new Article("Manzana", 0.37, "img/articles/apple.png"));
shelf1.articles.push(new Article("Cebolla", 1.21, "img/articles/onion.png"));

const shelf2 = new Shelf();
shelf2.articles.push(new Article("Sandía", 1.45, "img/articles/watermelon.png"));
shelf2.articles.push(new Article("Agua", 0.8, "img/articles/water.png"));
shelf2.articles.push(new Article("Leche almendras", 1.45, "img/articles/almond_milk.png"));
shelf2.articles.push(new Article("Calabaza", 1.89, "img/articles/pumpkin.png"));

const shelf3 = new Shelf();
shelf3.articles.push(new Article("Tomate", 3.45, "img/articles/chocolate_syrope.png"));
shelf3.articles.push(new Article("Galletas", 1.21, "img/articles/cookies.png"));
shelf3.articles.push(new Article("Papilla zanahoria", 2.95, "img/articles/carrot_papilla.png"));
shelf3.articles.push(new Article("Lays", 1.15, "img/articles/lays.png"));

const showcase = [shelf1, shelf2, shelf3];

const initializeShowcase = () => {
    let articleId = 1;
    let showcaseElement = document.getElementById("showcase");

    showcase.forEach(shelf => {
        const shelfRow = document.createElement("div");
        shelfRow.className = "row showcase-row";

        shelf.articles.forEach(article => {
            console.log(article);

            const articleDiv = document.createElement("div");
            articleDiv.className = "col-sm-3 showcase-item";

            let calculatedArticleId = "a" + articleId++;

            articleDiv.innerHTML = "<img id=\"" + calculatedArticleId + "\" src=\"" + article.image + "\" " +
                "class=\"row mx-auto showcase-item-image\" draggable=\"true\" onDragStart=\"dragArticle(event)\" alt=\"\">";

            const articlePrice = document.createElement("div");
            articlePrice.className = "showcase-item-price";
            articlePrice.innerText = article.price + "€";

            const articleName = document.createElement("div");
            articleName.className = "showcase-item-name";
            articleName.hidden = true;
            articleName.innerText = article.name;

            articleDiv.prepend(articlePrice);
            articleDiv.appendChild(articleName);

            shelfRow.appendChild(articleDiv);
        });

        showcaseElement.appendChild(shelfRow);

        let shelfElement = document.createElement("div");
        shelfElement.className = "row item";

        let shelfImage = document.createElement("img");
        shelfImage.src = shelf.image;
        shelfImage.className = "col-12";
        shelfElement.appendChild(shelfImage);

        showcaseElement.appendChild(shelfElement);
    });

    let buyButton = document.getElementById("buy-button");

    buyButton.addEventListener("click", () => {
        alert("This feature is not implemented yet, it will be ready in a future release. Stay tuned!");
    });
}

initializeShowcase();
