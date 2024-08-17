document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const alertBox = document.getElementById('alertBox');
    const toggleFormButton = document.getElementById('toggleForm');
    const signupTitle = document.getElementById('signupTitle');
    const loginTitle = document.getElementById('loginTitle');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateSignupForm()) {
            signup();
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateLoginForm()) {
            login();
        }
    });

    toggleFormButton.addEventListener('click', function () {
        if (signupForm.style.display === 'none') {
            showSignupForm();
        } else {
            showLoginForm();
        }
    });

    function showSignupForm() {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        signupTitle.style.display = 'block';
        loginTitle.style.display = 'none';
        toggleFormButton.textContent = 'Already have an account? Login';
    }

    function showLoginForm() {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        signupTitle.style.display = 'none';
        loginTitle.style.display = 'block';
        toggleFormButton.textContent = 'Need an account? Sign Up';
    }

    function validateSignupForm() {
        const email = document.getElementById('email');
        const confirmEmail = document.getElementById('confirmemail');
        const password = document.getElementById('setpassword');
        const confirmPassword = document.getElementById('confpassword');

        let isValid = true;

        if (!email.value || !confirmEmail.value || !password.value || !confirmPassword.value) {
            showAlert('Please fill out all fields.');
            isValid = false;
        }

        if (email.value !== confirmEmail.value) {
            showAlert('Email addresses do not match.');
            addInvalidClass(email);
            addInvalidClass(confirmEmail);
            isValid = false;
        } else {
            removeInvalidClass(email);
            removeInvalidClass(confirmEmail);
        }

        if (password.value !== confirmPassword.value) {
            showAlert('Passwords do not match.');
            addInvalidClass(password);
            addInvalidClass(confirmPassword);
            isValid = false;
        } else {
            removeInvalidClass(password);
            removeInvalidClass(confirmPassword);
        }

        if (!isValidEmail(email.value)) {
            showAlert('Invalid email format.');
            addInvalidClass(email);
            isValid = false;
        } else {
            removeInvalidClass(email);
        }

        if (!isValidPassword(password.value)) {
            showAlert('Password must be at least 8 characters long and include at least one letter, one number, and one special character.');
            addInvalidClass(password);
            isValid = false;
        } else {
            removeInvalidClass(password);
        }

        return isValid;
    }

    function validateLoginForm() {
        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');

        let isValid = true;

        if (!email.value || !password.value) {
            showAlert('Please fill out all fields.');
            isValid = false;
        }

        if (!isValidEmail(email.value)) {
            showAlert('Invalid email format.');
            addInvalidClass(email);
            isValid = false;
        } else {
            removeInvalidClass(email);
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPassword(password) {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(password);
    }

    function showAlert(message) {
        alertBox.innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
    }

    function addInvalidClass(element) {
        element.classList.add('is-invalid');
    }

    function removeInvalidClass(element) {
        element.classList.remove('is-invalid');
    }

    function signup() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('setpassword').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                showAlert('Signed up successfully.', 'success');
                showLoginForm();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showAlert(errorMessage);
            });
    }

    function login() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Logged in successfully
                const user = userCredential.user;
                showAlert('Logged in successfully.', 'success');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                showAlert(errorMessage);
            });
    }

    showSignupForm();
});
