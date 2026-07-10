(function () {
  'use strict';

  function showToast(title, msg) {
    const toast = document.getElementById('loginToast');
    if (!toast) return;

    const titleEl = document.getElementById('toastTitle');
    const msgEl = document.getElementById('toastMsg');
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = msg;

    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    if (togglePassword && passwordInput) {
      togglePassword.addEventListener('click', () => {
        const show = passwordInput.type === 'password';
        passwordInput.type = show ? 'text' : 'password';
        togglePassword.querySelector('i').className = show ? 'bi bi-eye-slash' : 'bi bi-eye';
        togglePassword.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
      });
    }

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email');
      const password = document.getElementById('password');
      if (!email?.value.trim() || !password?.value) {
        showToast('Missing details', 'Please enter your email and password.');
        return;
      }

      if (!email.validity.valid) {
        showToast('Invalid email', 'Please enter a valid email address.');
        return;
      }

      showToast('Signed in!', 'Welcome back to Zee Afrika.');
    });
  });
})();
