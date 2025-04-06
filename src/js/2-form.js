const form = document.querySelector('.feedback-form');


const formData = {
    email: "",
    message: ""
}

const storedData = localStorage.getItem("feedback-form-state");

if (storedData) {
    try {
        const formDataParse = JSON.parse(storedData);
        form.elements.email.value = formDataParse.email;
        form.elements.message.value = formDataParse.message;
        formData.email = formDataParse.email;
        formData.message = formDataParse.message;
    } catch (error) {
        console.error(`Error parsing localStorage data: ${error.name} - ${error.message}`);
    }
}


form.addEventListener('input', event => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email && message) {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    } else {
        alert('Fill please all fields');
    }
})