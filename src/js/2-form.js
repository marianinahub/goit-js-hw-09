const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";  
let timeoutId = null;

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, 500);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    for (let key in formData) {
        formData[key] = "";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);    
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        for (let key in parsedData) {
            formData[key] = parsedData[key];
            form.elements[key].value = parsedData[key];
        }
    }
});
