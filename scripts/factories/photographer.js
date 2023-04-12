function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement("a");
        link.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo of ${name}`);
        img.setAttribute("aria-label", `Photo of ${name}`);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement("h3");
        h3.textContent = city + ", " + country;
        const TagLine = document.createElement("p");
        TagLine.textContent = tagline;
        TagLine.classList.add("tagline");
        const Price = document.createElement("p");
        Price.textContent = price + "€/jour";
        Price.classList.add("price");
        link.appendChild(img);
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(TagLine);
        article.appendChild(Price);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}