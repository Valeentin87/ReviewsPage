// тестовые данные с отзывами о продуктах





// реализуем функцию нажатия на кнопку "Добавить отзыв"
const errorInfo = document.createElement('p');
errorInfo.className = 'errorInfoP'
const sucsessAdd = document.createElement('p');
function addReview () {
    // проверка на непустоту названия товара и отзыва о нем
    const productName = document.querySelector('.product_name');
    const productReview = document.querySelector('.product_comment');
    const parentDiv = productReview.parentNode;
    if ((productName.value === '') || (productReview.value === '')) {
        console.log('Заполнены не все поля о товаре');
        
    
        errorInfo.textContent = 'Заполнены не все поля о товаре';
        errorInfo.style.color = 'red';
        parentDiv.insertBefore(errorInfo, productName);
        return;
    }
    if (localStorage.getItem(productName.value.trim())) {
        console.log(productName.value.trim());
        let valueReviewList = JSON.parse(localStorage.getItem(productName.value.trim()));

        console.log(valueReviewList);
        valueReviewList.push(productReview.value.trim());
        console.log(valueReviewList);

        const reviewListToStr = JSON.stringify(valueReviewList);

        localStorage.setItem(productName.value.trim(), reviewListToStr);
    }
    else {
        localStorage.setItem(productName.value.trim(), JSON.stringify(new Array(productReview.value.trim())))
    }
    
    sucsessAdd.style.color = 'green';
    sucsessAdd.textContent = 'Отзыв на товар добавлен';
    parentDiv.insertBefore(sucsessAdd, productName);
};

const addReviewBtn = document.querySelector('.add_review');
addReviewBtn.addEventListener('click', addReview);

function deleteErrorAndSucsessInfo () {
    errorInfo.remove();
    sucsessAdd.remove();
}

document.querySelector('.product_name').addEventListener('click', deleteErrorAndSucsessInfo);
document.querySelector('.product_comment').addEventListener('click', deleteErrorAndSucsessInfo);