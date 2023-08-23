document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    const formData = new FormData(loginForm);
    const formObject = {};

    formData.forEach((value, name) => {
  formObject[name] = value;
});
    if (!formObject.email || !formObject.password) {
      alert("Please fill in all fields.");
    } else {
      console.log(formObject);
      loginForm.reset();
    }
  });
});
