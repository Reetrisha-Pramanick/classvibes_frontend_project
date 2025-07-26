const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Sign-in form validation
document.querySelector('.sign-in form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all login fields.");
        return;
    }

    window.location.href = "mood.html";
});

// Sign-up form validation
document.querySelector('.sign-up form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all sign-up fields.");
        return;
    }

    window.location.href = "mood.html";
});
