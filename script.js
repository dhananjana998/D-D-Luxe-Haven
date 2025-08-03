document.addEventListener('DOMContentLoaded', () => {
    // Toggle navbar menu
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');
    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
    };

    // Toggle search
    let searchForm = document.querySelector('.search-form');
    let searchBtn = document.querySelector('#search-btn');
    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
    };

    // Toggle cart items container
    let cartItem = document.querySelector('.cart-items-container');
    let cartBtn = document.querySelector('#cart-btn');
    cartBtn.onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
    };

    // Toggle signup modal
    let signupModal = document.querySelector('#signup-modal');
    let signupBtn = document.querySelector('#signup-btn');
    let signupClose = document.querySelector('#signup-close');
    signupBtn.onclick = () => {
        signupModal.style.display = 'flex';
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
        signinModal.style.display = 'none';
    };
    signupClose.onclick = () => {
        signupModal.style.display = 'none';
    };

    // Toggle signin modal
    let signinModal = document.querySelector('#signin-modal');
    let signinBtn = document.querySelector('#signin-btn');
    let signinClose = document.querySelector('#signin-close');
    signinBtn.onclick = () => {
        signinModal.style.display = 'flex';
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
        signupModal.style.display = 'none';
    };
    signinClose.onclick = () => {
        signinModal.style.display = 'none';
    };

    // Switch between modals
    let switchToSignin = document.querySelector('#switch-to-signin');
    let switchToSignup = document.querySelector('#switch-to-signup');
    switchToSignin.onclick = (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        signinModal.style.display = 'flex';
    };
    switchToSignup.onclick = (e) => {
        e.preventDefault();
        signinModal.style.display = 'none';
        signupModal.style.display = 'flex';
    };

    // Handle form submissions (basic example, extend with backend logic)
    let signupForm = document.querySelector('#signup-form');
    let signinForm = document.querySelector('#signin-form');

    signupForm.onsubmit = (e) => {
        e.preventDefault();
        alert('Sign Up form submitted! (Add backend logic here)');
        signupModal.style.display = 'none';
        signupForm.reset();
    };

    signinForm.onsubmit = (e) => {
        e.preventDefault();
        alert('Sign In form submitted! (Add backend logic here)');
        signinModal.style.display = 'none';
        signinForm.reset();
    };

    // Close modals when clicking outside
    window.onclick = (e) => {
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
        if (e.target === signinModal) {
            signinModal.style.display = 'none';
        }
    };

    // Close all active elements on scroll
    window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
    };
});
