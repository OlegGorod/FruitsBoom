const headerSecond = document.getElementById('header__second');
const searchBtn = document.querySelector('.header__second-searchBtn');
const cancelBtn = document.querySelector(".header__second-cancelBtn");
const searchBox = document.querySelector(".header__second-searchBox");
const searchInput = document.querySelector('.header__second-searchInput');
const content = document.querySelector('.catalog__content');

const filterColor = (servstyle) => {
    if (servstyle == 'Fruit trays') {
        return 'color: $main-color; border-color: $main-color';
    } if (servstyle == 'Fruit basket') {
        return 'color: #7BB000; border-color: #7BB000';
    } if (servstyle == 'Fruit sushi') {
        return 'color: #403E44; border-color: #403E44';
    }
}

const filterPrice = (price) => {
    return price ? `
    <img src="icons/Swap.png" alt="arrow">
    <div> <span>$ </span>${price.toFixed(2)}</div>
    ` : '';
}

cards.forEach(item => {
    const { servstyle, image, title, price, alternativePrice, alt } = item;
    const card = document.createElement('div');
    card.classList.add('catalog__item');
    card.innerHTML = `
                    <div class="catalog__item-servstyle">
                        <div class="catalog__item-name" style="${filterColor(servstyle)}">${servstyle}</div>
                    </div>
                    <div class="catalog__item-picture">
                        <img src=${image} alt=${alt}>
                    </div>
                    <div class="catalog__item-title">${title}</div>
                    <div class="catalog__item-price">
                       <div> <span>$ </span>${price.toFixed(2)}</div>
                       ${filterPrice(alternativePrice)}
                       
                    </div>
                    <div class="catalog__item-footer">
                        <button class="button button__catalog">
                            Buy
                        </button>
                        <div class="catalog__item-info">
                            <img src="icons/icon-more-info.png" alt="arrow">
                            <a href="#" class="catalog__item-infolink">More info</a>
                        </div>
                    </div>
    `;
    content.appendChild(card);
})

document.addEventListener('scroll', () => {
    const YOffset = document.documentElement.scrollTop;
    if (YOffset >= 52) {
        headerSecond.classList.add('sticky');
    } else {
        headerSecond.classList.remove('sticky');
    }
})

searchBtn.onclick = () => {
    searchBox.classList.add("active");
}

cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.value = '';
}
