import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('.input-delay');
const fulfilled = form.querySelector('.radio-fulfilled');
const rejected = form.querySelector('.radio-rejected');
const submit = form.querySelector('.btn-submit');


form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = delayInput.value;
    const isFulfilled = fulfilled.checked;
    const isRejected = rejected.checked;

    form.reset();

    new Promise((resolve, reject) => {
        console.log('Promise in process...');
        
        setTimeout(() => {
            if (isFulfilled) {
                resolve(delay);
            } else if (isRejected) {
                reject(delay);
            }
        }, delay);
    })
        .then(delay => {
            iziToast.show({
                title: '<svg class="brick" width="24" height="24"><use href="../img/sprite.svg#icon-check-mark"></use></svg><p class="title-error">OK</p>',
                message: `Fulfilled promise in ${delay}ms`,
                backgroundColor: '#59a10d',
                timeout: 4000,
                class: 'message-fulfilled',
                position: 'topRight',
                messageColor: 'white'
            });
            return `Проміс завершився успішно через ${delay} мс`;
        })
        .then(message => {
            console.log('💬 Повідомлення з другого then:', message);
        })
        .catch(delay => {
            iziToast.show({
                title: '<svg class="brick" width="24" height="24"><use href="../img/sprite.svg#icon-check-mark"></use></svg><p class="title-error">Error</p>',
                message: `Rejected promise in ${delay}ms`,
                backgroundColor: '#ef4040',
                timeout: 4000,
                class: 'message-rejected',
                position: 'topRight',
                messageColor: 'white'
            });
        })
});



