const correctPassword = "BIRTHDAY{17h_12a_2024p_yula_py}"; // Замените на ваш пароль

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("message").textContent = "Успешный вход!";
        // Перенаправление на другую страницу
        window.location.href = "very_happy_birthday.html"; // Замените на нужный URL
    } else {
        document.getElementById("message").textContent = "Неверный пароль. Попробуйте снова.";
    }
});
