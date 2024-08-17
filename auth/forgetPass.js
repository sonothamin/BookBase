document.addEventListener('DOMContentLoaded', function () {
    const alertBox = document.getElementById('alertBox');
    const forgotPasswordButton = document.getElementById('btn-forgot-password');
    const emailInput = document.getElementById('loginEmail');
    const timerMessage = document.getElementById('timerMessage');
    let canRequestReset = true;
    const timeoutDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
    let timerInterval;

    function handlePasswordReset() {
        const email = emailInput.value;

        if (!email) {
            showAlert('Please enter your email address to reset your password.');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Invalid email format.');
            return;
        }

        if (!canRequestReset) {
            showAlert('Please wait 2 minutes before requesting another reset link.');
            return;
        }

        showAlert('Sending request...', 'info');

        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                showAlert('Password reset email sent. Please check your inbox.', 'success');
                canRequestReset = false;
                startTimer();
            })
            .catch((error) => {
                showAlert('Error: ' + error.message);
            });
    }

    function startTimer() {
        let remainingTime = timeoutDuration / 1000; // in seconds

        timerInterval = setInterval(() => {
            remainingTime--;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            timerMessage.textContent = `You can request a new reset link after: ${formattedTime}`;

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                canRequestReset = true;
                timerMessage.textContent = '';
                showAlert('You can now request a new reset link.', 'success');
            }
        }, 1000);
    }

    function showAlert(message, type = 'danger') {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                ${message}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>`;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    forgotPasswordButton.addEventListener('click', handlePasswordReset);

    emailInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handlePasswordReset();
        }
    });
});
