const mainContainer = document.querySelector('.container')
let productKey;
let productListReviews;

let deleteParagraph;
let deleteHeadProduct;

localStorage.removeItem('Моооко');

function delReviewFromStorage (product, review) {
    for (let product_item = 0; product_item < localStorage.length; product_item++) {
    productKey = localStorage.key(product_item);
    if (productKey === product) {
        console.log('найдено совпадение ключей')
        let listReviews = JSON.parse(localStorage.getItem(productKey));
        (listReviews.indexOf(review) == -1) ? console.log('что то пошло не так') : delete listReviews[listReviews.indexOf(review)];
        console.log('отзыв удален!');
        if (listReviews.length) {
        listReviews = JSON.stringify(listReviews);
        localStorage.setItem(productKey, listReviews);
        }
        else {
            localStorage.removeItem(productKey);
            console("все oтзывы по товару удалены");
        }
    }
    }
    
};
    




function addDivBlockofProduct (productName, listReviews) {
    let productContainer = document.createElement('div');
    productContainer.className = 'product_container';
    let productHead = document.createElement('h3');
    productHead.style.color = "orange"
    productHead.textContent = productName;
    productContainer.appendChild(productHead);
    let divReview = document.createElement('div');
    let reviewParagraph;

    Array.from(listReviews).forEach(function (review) {
        
        divReview.className = 'div_review'
        reviewParagraph = document.createElement('p');
        reviewParagraph.style.color = 'green'
        reviewParagraph.textContent = review;

        reviewParagraph.addEventListener('click', function () {
            const buttonDel = document.createElement('button');
            buttonDel.textContent = 'Удалить отзыв';
            console.log('кнопка удаления создана');
            buttonDel.addEventListener('click', function() {
                deleteHeadProduct = (this.parentElement).parentElement.firstChild.textContent.trim();
                console.log((this.parentElement).parentElement.firstChild.textContent);
                delReviewFromStorage(deleteHeadProduct, deleteParagraph);
                this.previousElementSibling.remove();
                this.remove();
                
                
            })
            deleteParagraph = this.textContent.trim();
            console.log(this.textContent);
            this.insertAdjacentElement('afterend', buttonDel);           
            }
        );
        divReview.appendChild(reviewParagraph);
    });
    productContainer.appendChild(divReview);
    return productContainer;
}

for (let product_item = 0; product_item < localStorage.length; product_item++) {
    productKey = localStorage.key(product_item);
    productListReviews = JSON.parse(localStorage.getItem(productKey));
    console.log(`${productKey} : ${productListReviews}`);
    mainContainer.appendChild(addDivBlockofProduct(productKey, productListReviews));    
}

