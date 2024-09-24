const mainContainer = document.querySelector('.container')
let productKey;
let productListReviews;



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
                
            })
            console.log(this.parentNode);
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

