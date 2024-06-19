const formData = {
    email: "", message: "",

    setData(newEmail, newMessage) {
        this.email = newEmail;
        this.message = newMessage;
}}
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", handlerInput);
function handlerInput(event) {
    switch (event.target.name) {
        case "email":
            formData.email = event.target.value.trim();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
            break;
        case "message":
            formData.message = event.target.value.trim()
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
            break;
    }
}
function getValueOfLocalStorage() {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (localData !== null) {
        formData.setData(localData.email, localData.message)
        form.email.value = localData.email;
        form.message.value = localData.message;
        // formData.email = localData.email;
        // formData.message = localData.message;
       
        
    }
}
getValueOfLocalStorage();



form.addEventListener("submit", handlerSubmit)
function handlerSubmit(event) {
    event.preventDefault()
    if (
        formData.email === "" || formData.message === "") {
        alert( "Fill please all fields")
    }
    console.table(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.setData("", "");
    form.reset();
       
}