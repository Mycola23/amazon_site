export function createStars(stars) {
    let starsHtml = ``;
    const num = Math.floor(stars);

    if (stars - num === 0) {
        starsHtml = createStarsHtml(num, starsHtml, 0);
    } else if (stars - num > 0) {
        const lastStarWidth = stars - num;
        //console.log(lastStarWidth);
        starsHtml = createStarsHtml(num + 1, starsHtml, lastStarWidth);
    }
    return starsHtml;
}
function createStarsHtml(starQuantity, starsHtml, lastStarWidth) {
    for (let i = 0; i < starQuantity; i++) {
        if (lastStarWidth !== 0) {
            if (i === starQuantity - 1) {
                // no sence because i can`t get data-attribute from html to css
                starsHtml += `<li class = "stars__star last-star data-with = "${Math.round(lastStarWidth * 100) / 100}"><img src = "img/icons/star22.svg" alt = "star"></li>`;
            } else {
                starsHtml += `<li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li>`;
            }
        } else {
            starsHtml += `<li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li>`;
        }
    }
    return starsHtml;
}
